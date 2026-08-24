#!/usr/bin/env node
/**
 * Verificador de tradução.
 *
 * Roda antes do build e falha se:
 *   1. os dois idiomas não tiverem exatamente as mesmas chaves;
 *   2. um componente usar uma chave que não existe no dicionário;
 *   3. o dicionário tiver chave que ninguém usa;
 *   4. sobrar texto visível escrito direto no código (o bug que motivou isto:
 *      ao clicar em EN, pedaços continuavam em português).
 *
 * A regra da checagem 4: todo literal que chega ao DOM só pode ser composto por
 * nomes próprios declarados em scripts/i18n-allowlist.json. Qualquer palavra
 * fora dessa lista é texto de interface e precisa virar chave.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname;
const src = (p) => join(RAIZ, p);
const erros = [];

/* ---------- coleta de arquivos ---------- */
function arquivos(dir, ext) {
    const saida = [];
    for (const item of readdirSync(join(RAIZ, dir), { withFileTypes: true })) {
        const caminho = join(dir, item.name);
        if (item.isDirectory()) saida.push(...arquivos(caminho, ext));
        else if (ext.some((e) => item.name.endsWith(e))) saida.push(caminho);
    }
    return saida;
}

/* ---------- 1 e 2: chaves ---------- */
function chavesDe(arquivo) {
    const texto = readFileSync(src(arquivo), "utf8");
    return new Set([...texto.matchAll(/^ {4}([A-Za-z0-9_]+):/gm)].map((m) => m[1]));
}

const pt = chavesDe("src/i18n/pt-BR.ts");
const en = chavesDe("src/i18n/en-US.ts");

for (const chave of pt) if (!en.has(chave)) erros.push(`chave "${chave}" existe em pt-BR mas falta em en-US`);
for (const chave of en) if (!pt.has(chave)) erros.push(`chave "${chave}" existe em en-US mas falta em pt-BR`);

const fontes = [...arquivos("src/components", [".vue"]), "src/App.vue", ...arquivos("src/data", [".ts"]), ...arquivos("src/composables", [".ts"])];
const usadas = new Set();
for (const arquivo of fontes) {
    const texto = readFileSync(src(arquivo), "utf8");
    // Qualquer literal que case exatamente com uma chave do dicionário conta
    // como uso. Cobre $t("x"), ternários dentro de $t(), { i18n: "x" },
    // campos *Key e arrays de chaves — sem precisar de um padrão por formato.
    for (const m of texto.matchAll(/["'`]([A-Za-z0-9_]+)["'`]/g)) {
        if (pt.has(m[1])) usadas.add(m[1]);
    }
}
// Chaves resolvidas em tempo de execução, sem literal no código:
["titleHome", "descHome", "title404", "desc404", "err404Title", "err404Text", "err404Back"].forEach((k) => usadas.add(k));

for (const chave of usadas) if (!pt.has(chave)) erros.push(`chave "${chave}" é usada no código mas não existe no dicionário`);
for (const chave of pt) if (!usadas.has(chave)) erros.push(`chave "${chave}" está no dicionário mas ninguém usa (remova ou use)`);

/* ---------- 3: literais visíveis ---------- */
const permitidos = new Set(
    JSON.parse(readFileSync(src("scripts/i18n-allowlist.json"), "utf8")).nomesProprios.map((t) => t.toLowerCase()),
);

/** Um literal passa se cada palavra dele for nome próprio, número ou pontuação. */
function soNomesProprios(texto) {
    const palavras = texto
        .replace(/&[a-z]+;/gi, " ")
        .split(/[\s.,:;!?()[\]{}/|—–\-+&"'#*·@_]+/)
        // Ignora o que não tem letra alguma: emoji, números, IDs opacos.
        .filter((p) => /\p{L}/u.test(p));
    return palavras.every((p) => permitidos.has(p.toLowerCase()));
}

function reportar(arquivo, onde, texto) {
    if (!soNomesProprios(texto)) erros.push(`${arquivo}: ${onde} não traduzido -> "${texto.slice(0, 60)}"`);
}

for (const arquivo of [...arquivos("src/components", [".vue"]), "src/App.vue"]) {
    const texto = readFileSync(src(arquivo), "utf8");
    const template = texto.split("<template>")[1] ?? "";

    // texto solto entre tags
    for (const m of template.matchAll(/>([^<>{}]+)</g)) {
        const t = m[1].replace(/\s+/g, " ").trim();
        if (t.length > 1 && !t.startsWith("!--")) reportar(arquivo, "texto", t);
    }
    // atributos estáticos que o usuário vê ou ouve
    for (const m of texto.matchAll(/(?<![:\w-])(alt|title|aria-label|placeholder)="([^"]+)"/g)) {
        reportar(arquivo, `atributo ${m[1]}`, m[2]);
    }
}

for (const arquivo of arquivos("src/data", [".ts"])) {
    const texto = readFileSync(src(arquivo), "utf8");
    for (const m of texto.matchAll(/\b(titulo|empresa|instituicao|sigla|texto|alt|logoAlt|stackAlt|label)\s*:\s*"([^"]+)"/g)) {
        reportar(arquivo, `campo ${m[1]}`, m[2]);
    }
}

/* ---------- resultado ---------- */
if (erros.length) {
    console.error(`\n❌ check-i18n: ${erros.length} problema(s)\n`);
    for (const erro of erros) console.error("   • " + erro);
    console.error("\nTexto de interface precisa virar chave em src/i18n/. Se for nome próprio,");
    console.error("declare-o em scripts/i18n-allowlist.json.\n");
    process.exit(1);
}

console.log(`✅ check-i18n: ${pt.size} chaves, pt-BR e en-US simétricos, nenhum texto solto.`);
