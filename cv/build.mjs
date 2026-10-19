/**
 * Gera o currículo em PDF (pt-BR e en) a partir de cv/conteudo.mjs:
 *
 *   npm run cv            → public/cv/Guilherme_Bonato_CV-BR.pdf e -US.pdf
 *   npm run cv -- --html  → só os HTML em cv/.saida/, para ajustar o layout no navegador
 *
 * Imprime com o Chromium/Chrome da máquina (CHROMIUM=/caminho para escolher). Não roda no
 * CI: os PDFs vão versionados em public/cv/ e o botão "Baixar PDF" aponta para eles.
 * Fontes e ícones vêm da internet (Google Fonts e cdnjs), como no site.
 */
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { curriculos } from "./conteudo.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
const SAIDA_HTML = join(AQUI, ".saida");
const SAIDA_PDF = join(AQUI, "..", "public", "cv");
const SO_HTML = process.argv.includes("--html");

const CSS = readFileSync(join(AQUI, "estilo.css"), "utf8");
const FOTO = pathToFileURL(join(AQUI, "foto.jpg")).href;

const secao = (titulo, extra = "") =>
    `<h2 class="secao"><span class="marca"></span>${titulo}${extra ? ` <small>— ${extra}</small>` : ""}</h2>`;

const cargo = (c) => `
    <article class="cargo${c.atual ? " atual" : ""}">
        <header>
            <h3>${c.titulo}</h3>
            <span class="periodo">${c.periodo}</span>
        </header>
        <p class="empresa"><b>${c.empresa}</b> · ${c.detalhe}</p>
        <ul>${c.itens.map((i) => `<li>${i}</li>`).join("")}</ul>
        <p class="stack"><b>STACK</b> ${c.stack}</p>
    </article>`;

function pagina1(c) {
    const ate = c.cargos.findIndex((x) => x.quebra) + 1;
    return `
    <section class="pagina">
        <header class="topo">
            <img class="foto" src="${FOTO}" alt="" />
            <div>
                <h1>Guilherme Bonato</h1>
                <p class="cargo-titulo">${c.titulo}</p>
                <p class="resumo">${c.resumo}</p>
            </div>
        </header>
        <div class="contato">
            <span><i class="fas fa-phone"></i>${c.contato.telefone}</span>
            <span><i class="fas fa-envelope"></i>${c.contato.email}</span>
            <span><i class="fas fa-location-dot"></i>${c.local}</span>
            <span><i class="fas fa-globe"></i>${c.contato.site}</span>
            <span><i class="fab fa-linkedin"></i>${c.contato.linkedin}</span>
            <span><i class="fab fa-github"></i>${c.contato.github}</span>
        </div>
        <div class="corpo">
            <aside>
                ${secao(c.rotulos.stack)}
                ${c.stack.map(([t, v]) => `<div class="grupo"><h4>${t}</h4><p>${v}</p></div>`).join("")}
            </aside>
            <main>
                <div class="numeros">
                    ${c.numeros.map(([n, t]) => `<div><strong>${n}</strong><span>${t}</span></div>`).join("")}
                </div>
                ${secao(c.rotulos.experiencia)}
                ${c.cargos.slice(0, ate).map(cargo).join("")}
                ${secao(c.rotulos.diferenciais)}
                <ul class="diferenciais">${c.diferenciais.map((d) => `<li>${d}</li>`).join("")}</ul>
            </main>
        </div>
    </section>`;
}

function pagina2(c) {
    const ate = c.cargos.findIndex((x) => x.quebra) + 1;
    return `
    <section class="pagina">
        <div class="corpo sem-topo">
            <aside>
                ${secao(c.rotulos.formacao)}
                <ol class="linha">
                    ${c.formacao
                        .map(
                            (f) => `<li class="${f.andamento ? "andamento" : ""}">
                        <h4>${f.curso}</h4>
                        ${f.andamento ? `<span class="selo">${c.rotulos.emAndamento}</span>` : ""}
                        <p>${f.inst}</p>
                        ${f.periodo ? `<p class="data">${f.periodo}</p>` : ""}
                    </li>`,
                        )
                        .join("")}
                </ol>
                ${secao(c.rotulos.certificacoes)}
                <ul class="certs">${c.certificacoes.map(([n, d]) => `<li><b>${n}</b><span>${d}</span></li>`).join("")}</ul>
                ${secao(c.rotulos.idiomas)}
                ${c.idiomas.map((i) => `<p class="idioma">${i}</p>`).join("")}
            </aside>
            <main>
                ${secao(c.rotulos.experiencia, c.rotulos.continuacao)}
                ${c.cargos.slice(ate).map(cargo).join("")}
            </main>
        </div>
    </section>`;
}

function pagina3(c) {
    const n = c.negocio;
    return `
    <section class="pagina">
        <div class="cheia">
            ${secao(c.rotulos.negocio)}
            <div class="negocio">
                <span class="faixa">${c.rotulos.paralelo}</span>
                ${cargo({ ...n, atual: true })}
            </div>
            ${secao(c.rotulos.projetos)}
            <div class="projetos">
                ${c.projetos
                    .map(
                        (p) => `<article class="${p.destaque ? "destaque" : ""}">
                    <p class="tipo">${p.tipo}</p>
                    <h3>${p.nome}</h3>
                    <p>${p.texto}</p>
                    <p class="stack">${p.stack}</p>
                </article>`,
                    )
                    .join("")}
            </div>
        </div>
        <footer>
            <span>Guilherme Bonato — ${c.titulo}</span>
            <span>${c.contato.email} · ${c.contato.telefone} · ${c.contato.site}</span>
        </footer>
    </section>`;
}

const html = (c) => `<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8" />
<title>Guilherme Bonato — CV</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />
<style>${CSS}</style>
</head>
<body>${pagina1(c)}${pagina2(c)}${pagina3(c)}</body>
</html>`;

function chromium() {
    const candidatos = [process.env.CHROMIUM, "chromium", "chromium-browser", "google-chrome-stable", "google-chrome"].filter(Boolean);
    for (const c of candidatos) if (spawnSync(c, ["--version"]).status === 0) return c;
    throw new Error("Chromium/Chrome não encontrado (defina CHROMIUM=/caminho).");
}

mkdirSync(SAIDA_HTML, { recursive: true });
mkdirSync(SAIDA_PDF, { recursive: true });
const bin = SO_HTML ? null : chromium();

for (const c of curriculos) {
    const arqHtml = join(SAIDA_HTML, c.arquivo.replace(/\.pdf$/, ".html"));
    writeFileSync(arqHtml, html(c));
    if (SO_HTML) {
        console.log(`→ ${arqHtml}`);
        continue;
    }
    const pdf = join(SAIDA_PDF, c.arquivo);
    const r = spawnSync(
        bin,
        [
            "--headless=new",
            "--no-sandbox",
            "--disable-gpu",
            "--no-pdf-header-footer",
            "--virtual-time-budget=8000",
            `--print-to-pdf=${pdf}`,
            pathToFileURL(arqHtml).href,
        ],
        { stdio: "pipe" },
    );
    if (r.status !== 0 || !existsSync(pdf)) {
        console.error(r.stderr?.toString());
        throw new Error(`falhou ao imprimir ${c.arquivo}`);
    }
    console.log(`→ ${pdf}`);
}
