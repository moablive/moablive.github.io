#!/usr/bin/env python3
"""
Gerador do site estático.

O menu, o rodapé e o <head> vivem em src/partials/ e as seções em src/pages/.
Este script monta as páginas finais na raiz do repositório — que é o que o
GitHub Pages serve. Rode `python3 build.py` depois de editar qualquer fonte
e faça commit tanto de src/ quanto dos arquivos gerados.
"""

import pathlib
import shutil
import sys

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
BASE_URL = "https://moablive.github.io"

JSONLD = """
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Guilherme Bonato",
                "jobTitle": "Senior Software Engineer",
                "url": "https://moablive.github.io/",
                "image": "https://github.com/moablive.png",
                "email": "mailto:guilhermeferrazbonato@gmail.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Porto Alegre",
                    "addressRegion": "RS",
                    "addressCountry": "BR"
                },
                "sameAs": [
                    "https://github.com/moablive",
                    "https://www.linkedin.com/in/guilhermebonato/"
                ],
                "knowsAbout": [
                    ".NET", "Node.js", "Python", "TypeScript",
                    "Clean Architecture", "Domain-Driven Design", "Docker"
                ]
            }
        </script>"""

# Itens do menu: (href, chave i18n, rótulo PT, slug da página que marca como ativa)
NAV = [
    ("/", "navAbout", "Sobre", "home"),
    ("/formacao/", "navEducation", "Formação", "formacao"),
    ("/formacao/#certificados", "navCertificates", "Certificados", None),
    ("/trajetoria/", "navExperience", "Trajetória", "trajetoria"),
    ("/tecnologias/", "navTech", "Tecnologias", "tecnologias"),
    ("/portfolio/", "navPortfolio", "Portfólio", "portfolio"),
    ("/github-stats/", "navGithub", "GitHub Stats", "github-stats"),
    ("/#contato", "navContact", "Contato", None),
]

# Páginas: slug -> configuração. `out` vazio = raiz do site.
PAGES = {
    "home": {
        "out": "index.html",
        "title_key": "titleHome",
        "title_pt": "Guilherme Bonato — Engenheiro de Software Sênior",
        "desc_key": "descHome",
        "desc_pt": "Portfólio de Guilherme Bonato, Engenheiro de Software Sênior e Arquiteto de Soluções. Especialista em .NET, Node.js, Python, Clean Architecture e DDD.",
        "blocks": ["_sec_sobre", "_sec_destaque", "_sec_contato", "_sec_visitas"],
        "modals": ["_mod_loginhub", "_mod_trackstack"],
    },
    "formacao": {
        "out": "formacao/index.html",
        "title_key": "titleFormacao",
        "title_pt": "Formação e Certificados — Guilherme Bonato",
        "desc_key": "descFormacao",
        "desc_pt": "Formação acadêmica e certificados de especialização de Guilherme Bonato: PUCRS, Universidade La Salle, XP Educação e UNIPDS.",
        "blocks": ["_sec_formacao", "_sec_certificados"],
        "modals": [],
    },
    "trajetoria": {
        "out": "trajetoria/index.html",
        "title_key": "titleTrajetoria",
        "title_pt": "Trajetória Profissional — Guilherme Bonato",
        "desc_key": "descTrajetoria",
        "desc_pt": "Dez anos de trajetória: Tech Lead, Full Stack Engineer, Senior Software Engineer e Arquiteto de Soluções em CCS, Safeweb, SKA, Frigelar, GotoBiz e Astral Wave.",
        "blocks": ["_sec_trajetoria"],
        "modals": ["_mod_trajetoria"],
    },
    "tecnologias": {
        "out": "tecnologias/index.html",
        "title_key": "titleTecnologias",
        "title_pt": "Stack Tecnológico — Guilherme Bonato",
        "desc_key": "descTecnologias",
        "desc_pt": "Stack completo: .NET, Node.js, Python, TypeScript, React, Vue, Angular, Docker, Nginx, Cloudflare, PostgreSQL, Kafka e Redis.",
        "blocks": ["_sec_tecnologias"],
        "modals": [],
    },
    "portfolio": {
        "out": "portfolio/index.html",
        "title_key": "titlePortfolio",
        "title_pt": "Portfólio de Projetos — Guilherme Bonato",
        "desc_key": "descPortfolio",
        "desc_pt": "Projetos de Guilherme Bonato em .NET, Node.js, React, Vue e Python — de um Identity Provider multi-tenant a sistemas com Clean Architecture, DDD e CQRS.",
        "blocks": ["_sec_portfolio"],
        "modals": [],
    },
    "github-stats": {
        "out": "github-stats/index.html",
        "title_key": "titleStats",
        "title_pt": "Estatísticas do GitHub — Guilherme Bonato",
        "desc_key": "descStats",
        "desc_pt": "Linguagens mais usadas e estatísticas de contribuição da conta GitHub de Guilherme Bonato (@moablive).",
        "blocks": ["_sec_githubstats"],
        "modals": [],
    },
}


def read(path):
    return (SRC / path).read_text(encoding="utf-8")


def build_nav(active_slug):
    items = []
    for href, key, label, slug in NAV:
        current = ' aria-current="page"' if slug and slug == active_slug else ""
        active = " active" if slug and slug == active_slug else ""
        items.append(
            f'                        <li class="nav-item">\n'
            f'                            <a class="nav-link{active}" href="{href}"{current} data-i18n="{key}">{label}</a>\n'
            f"                        </li>"
        )
    return read("partials/nav.html").replace("{{NAV_ITEMS}}", "\n".join(items))


def build_page(slug, cfg):
    canonical = BASE_URL + "/" + cfg["out"].replace("index.html", "")

    head = (
        read("partials/head.html")
        .replace("{{TITLE_KEY}}", cfg["title_key"])
        .replace("{{TITLE_TEXT}}", cfg["title_pt"])
        .replace("{{DESC_KEY}}", cfg["desc_key"])
        .replace("{{DESC_TEXT}}", cfg["desc_pt"])
        .replace("{{CANONICAL}}", canonical)
        .replace("{{JSONLD}}", JSONLD if slug == "home" else "")
    )

    parts = [head, build_nav(slug), '\n        <main id="conteudo">']
    for name in cfg["blocks"]:
        parts.append(read(f"pages/{name}.html").rstrip())
    parts.append("        </main>\n")
    for name in cfg["modals"]:
        parts.append(read(f"pages/{name}.html").rstrip() + "\n")
    parts.append(read("partials/fab.html").rstrip() + "\n")
    parts.append(read("partials/footer.html").rstrip() + "\n")
    parts.append(read("partials/scripts.html").rstrip() + "\n")

    out = ROOT / cfg["out"]
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text("\n".join(parts), encoding="utf-8")
    return out


def build_404():
    """O Pages serve /404.html automaticamente para qualquer rota inexistente."""
    head = (
        read("partials/head.html")
        .replace("{{TITLE_KEY}}", "title404")
        .replace("{{TITLE_TEXT}}", "Página não encontrada — Guilherme Bonato")
        .replace("{{DESC_KEY}}", "desc404")
        .replace("{{DESC_TEXT}}", "A página que você procurou não existe.")
        .replace("{{CANONICAL}}", BASE_URL + "/404.html")
        .replace("{{JSONLD}}", "")
        .replace('<html lang="pt-BR">', '<html lang="pt-BR">\n    <!-- gerado por build.py -->')
    )
    body = """
        <main id="conteudo" class="d-flex align-items-center justify-content-center text-center error-page">
            <div class="container py-5">
                <p class="display-1 fw-bold text-primary mb-0">404</p>
                <h1 class="h3 fw-bold mb-3" data-i18n="err404Title">Página não encontrada</h1>
                <p class="text-muted mb-4" data-i18n="err404Text">
                    O endereço que você acessou não existe ou foi movido.
                </p>
                <a href="/" class="btn btn-primary rounded-pill px-4" data-i18n="err404Back">
                <i class="fas fa-arrow-left me-2" aria-hidden="true"></i>Voltar para o início
                </a>
            </div>
        </main>
"""
    parts = [head, build_nav(None), body, read("partials/fab.html").rstrip() + "\n",
             read("partials/footer.html").rstrip() + "\n", read("partials/scripts.html").rstrip() + "\n"]
    (ROOT / "404.html").write_text("\n".join(parts), encoding="utf-8")


def build_sitemap():
    urls = []
    for cfg in PAGES.values():
        loc = BASE_URL + "/" + cfg["out"].replace("index.html", "")
        priority = "1.0" if cfg["out"] == "index.html" else "0.8"
        urls.append(
            f"    <url>\n"
            f"        <loc>{loc}</loc>\n"
            f"        <lastmod>2026-08-24</lastmod>\n"
            f"        <changefreq>monthly</changefreq>\n"
            f"        <priority>{priority}</priority>\n"
            f"    </url>"
        )
    (ROOT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(urls)
        + "\n</urlset>\n",
        encoding="utf-8",
    )


def main():
    # Limpa as pastas geradas para não deixar página órfã após renomear um slug
    for cfg in PAGES.values():
        directory = cfg["out"].split("/")[0]
        if directory != "index.html" and (ROOT / directory).is_dir():
            shutil.rmtree(ROOT / directory)

    built = [build_page(slug, cfg) for slug, cfg in PAGES.items()]
    build_404()
    build_sitemap()

    print(f"{len(built)} páginas geradas:")
    for path in built:
        rel = path.relative_to(ROOT)
        print(f"  {str(rel):28} {path.stat().st_size / 1024:6.1f} KB")
    print("  404.html, sitemap.xml")
    return 0


if __name__ == "__main__":
    sys.exit(main())
