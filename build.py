#!/usr/bin/env python3
"""
Gerador do site estático.

O site é uma página de rolagem única, mas cada seção, cada modal e cada parte
do "esqueleto" (head, menu, rodapé) mora em um arquivo próprio dentro de src/.
Este script apenas costura essas partes e escreve o HTML final na raiz do
repositório — que é o que o GitHub Pages serve.

    python3 build.py

Depois de editar qualquer coisa em src/, rode o build e faça commit tanto de
src/ quanto dos arquivos gerados.
"""

import pathlib
import sys

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
BASE_URL = "https://moablive.github.io"

# Ordem em que as seções aparecem na página. Reordenar aqui reordena o site.
SECTIONS = [
    "sobre",
    "formacao",
    "certificados",
    "trajetoria",
    "tecnologias",
    "destaque",
    "portfolio",
    "github-stats",
    "contato",
    "visitas",
]

# Modais ficam no fim do <body>, fora do <main>.
MODALS = [
    "ccs",
    "safeweb",
    "ska",
    "frigelar",
    "gotobiz",
    "astral-wave",
    "loginhub",
    "track-stack",
]

# Menu: (âncora, chave i18n, rótulo em PT). A âncora precisa bater com o id da seção.
NAV = [
    ("#sobre", "navAbout", "Sobre"),
    ("#formacao", "navEducation", "Formação"),
    ("#certificados", "navCertificates", "Certificados"),
    ("#trajetoria", "navExperience", "Trajetória"),
    ("#tecnologias", "navTech", "Tecnologias"),
    ("#portfolio", "navPortfolio", "Portfólio"),
    ("#github-stats", "navGithub", "GitHub Stats"),
    ("#contato", "navContact", "Contato"),
]

# O Bootstrap marca sozinho o item do menu conforme a seção visível.
SCROLLSPY = (
    ' data-bs-spy="scroll" data-bs-target="#navbarNav"'
    ' data-bs-root-margin="0px 0px -45%" data-bs-smooth-scroll="true" tabindex="-1"'
)

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

HOME_TITLE = "Guilherme Bonato — Engenheiro de Software Sênior"
HOME_DESC = (
    "Portfólio de Guilherme Bonato, Engenheiro de Software Sênior e Arquiteto de Soluções. "
    "Especialista em .NET, Node.js, Python, Clean Architecture e DDD."
)


def read(relative_path):
    return (SRC / relative_path).read_text(encoding="utf-8")


def build_head(title_key, title, desc_key, desc, canonical, jsonld="", body_attrs=""):
    return (
        read("partials/head.html")
        .replace("{{TITLE_KEY}}", title_key)
        .replace("{{TITLE_TEXT}}", title)
        .replace("{{DESC_KEY}}", desc_key)
        .replace("{{DESC_TEXT}}", desc)
        .replace("{{CANONICAL}}", canonical)
        .replace("{{JSONLD}}", jsonld)
        .replace("{{BODY_ATTRS}}", body_attrs)
    )


def build_nav():
    items = []
    for href, key, label in NAV:
        items.append(
            f'                        <li class="nav-item">\n'
            f'                            <a class="nav-link" href="{href}" data-i18n="{key}">{label}</a>\n'
            f"                        </li>"
        )
    return read("partials/nav.html").replace("{{NAV_ITEMS}}", "\n".join(items))


def build_index():
    parts = [
        build_head("titleHome", HOME_TITLE, "descHome", HOME_DESC, BASE_URL + "/", JSONLD, SCROLLSPY),
        build_nav(),
        '\n        <main id="conteudo">',
    ]
    for name in SECTIONS:
        parts.append(read(f"sections/{name}.html").rstrip())
    parts.append("        </main>\n")
    for name in MODALS:
        parts.append(read(f"modals/{name}.html").rstrip() + "\n")
    parts.append(read("partials/fab.html").rstrip() + "\n")
    parts.append(read("partials/footer.html").rstrip() + "\n")
    parts.append(read("partials/scripts.html").rstrip() + "\n")

    out = ROOT / "index.html"
    out.write_text("\n".join(parts), encoding="utf-8")
    return out


def build_404():
    """O Pages serve /404.html automaticamente em qualquer rota inexistente."""
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
    parts = [
        build_head(
            "title404",
            "Página não encontrada — Guilherme Bonato",
            "desc404",
            "A página que você procurou não existe.",
            BASE_URL + "/404.html",
        ),
        build_nav(),
        body,
        read("partials/fab.html").rstrip() + "\n",
        read("partials/footer.html").rstrip() + "\n",
        read("partials/scripts.html").rstrip() + "\n",
    ]
    out = ROOT / "404.html"
    out.write_text("\n".join(parts), encoding="utf-8")
    return out


def build_sitemap():
    (ROOT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        "    <url>\n"
        f"        <loc>{BASE_URL}/</loc>\n"
        "        <lastmod>2026-08-24</lastmod>\n"
        "        <changefreq>monthly</changefreq>\n"
        "        <priority>1.0</priority>\n"
        "    </url>\n"
        "</urlset>\n",
        encoding="utf-8",
    )


def check_anchors(html):
    """Todo item do menu precisa apontar para um id que existe na página."""
    import re

    ids = set(re.findall(r'<section id="([^"]+)"', html))
    missing = [href for href, _, _ in NAV if href.startswith("#") and href[1:] not in ids]
    if missing:
        print(f"AVISO: âncoras do menu sem seção correspondente: {missing}", file=sys.stderr)
        return False
    return True


def main():
    index = build_index()
    build_404()
    build_sitemap()

    html = index.read_text(encoding="utf-8")
    ok = check_anchors(html)

    print(f"index.html   {index.stat().st_size / 1024:6.1f} KB "
          f"({len(SECTIONS)} seções, {len(MODALS)} modais, {len(html.splitlines())} linhas)")
    print(f"404.html     {(ROOT / '404.html').stat().st_size / 1024:6.1f} KB")
    print("sitemap.xml")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
