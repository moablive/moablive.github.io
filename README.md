# moablive.github.io

Portfólio pessoal de **Guilherme Bonato** — Engenheiro de Software Sênior e Arquiteto de Soluções.

🔗 **https://moablive.github.io**

## Stack

Vue 3 + TypeScript + Vite, prerenderizado com [vite-ssg](https://github.com/antfu/vite-ssg),
estilizado com Tailwind CSS 4. Font Awesome 6 e Google Fonts via CDN.

O sistema visual mora em `src/assets/style.css`: um bloco `@theme` com cores, fontes e sombras,
o bloco `.dark` que redefine as mesmas variáveis para o tema escuro, e seis utilitários próprios
(`glass`, `solid-card`, `text-gradient`, `ring-gradient`, `label-mono`, `lift-hover`) que compõem
toda a interface.

**Modo claro/escuro** com persistência em `localStorage` e respeito ao `prefers-color-scheme` na
primeira visita. Um script inline no `<head>` aplica a classe `.dark` **antes da primeira pintura** —
sem ele, quem prefere escuro veria um lampejo branco a cada carregamento.

**Sem Bootstrap.** Modais, menu colapsável e scrollspy são componentes e composables próprios
(`BaseModal.vue`, `useModal.ts`, `useScrollSpy.ts`), o que tirou 232 KB de CSS e o bundle JS do
Bootstrap do carregamento — o CSS do Tailwind gerado tem 24 KB.

O prerender é o ponto central da escolha: `npm run build` gera um `index.html` **com todo o
conteúdo dentro**, não um `<div id="app">` vazio. Buscadores, leitores de tela e o preview de link
do LinkedIn/WhatsApp veem a página completa sem executar JavaScript; o Vue só hidrata por cima para
dar interatividade. É a vantagem de componentes sem o custo de SEO de um SPA.

Página única, sem `vue-router` — logo, nenhuma rota fantasma para o GitHub Pages resolver.

## Estrutura

```
.
├── index.html                  # template do Vite (head, meta, JSON-LD, CDNs)
├── src/
│   ├── main.ts                 # ViteSSG em modo single-page
│   ├── App.vue                 # monta as seções e os modais
│   ├── data/                   # ── o conteúdo do site vive aqui ──
│   │   ├── types.ts
│   │   ├── projetos.ts         #   11 projetos + definição dos filtros
│   │   ├── formacao.ts         #   4 formações
│   │   ├── certificados.ts     #   7 certificados
│   │   ├── trajetoria.ts       #   6 cargos, cada um com o conteúdo do seu modal
│   │   └── tecnologias.ts      #   grupos de stack + links de contato
│   ├── i18n/
│   │   ├── index.ts            #   configuração do vue-i18n
│   │   ├── pt-BR.ts            #   166 chaves
│   │   └── en-US.ts            #   166 chaves
│   ├── composables/
│   │   ├── useLocale.ts        #   idioma + <html lang>, title e meta description
│   │   ├── useVisitCounter.ts  #   contador com fallback e timeout
│   │   └── useLabel.ts         #   resolve texto literal vs. chave de tradução
│   ├── components/             # 16 componentes (.vue)
│   └── assets/style.css        # estilos próprios
├── public/                     # copiado para dist/ sem processamento
│   ├── 404.html                #   página estática, não depende do bundle
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .nojekyll
└── .github/workflows/deploy.yml
```

## Onde mexer no quê

| Quero… | Onde |
| --- | --- |
| Adicionar um projeto ao portfólio | um objeto em `src/data/projetos.ts` |
| Adicionar certificado ou formação | `src/data/certificados.ts` / `formacao.ts` |
| Adicionar um cargo (com modal) | `src/data/trajetoria.ts` — o modal sai do mesmo objeto |
| Reordenar as seções | ordem das tags no `<template>` de `src/App.vue` |
| Mexer no menu | array `links` em `src/components/AppNavbar.vue` |
| Traduzir um texto novo | `src/i18n/pt-BR.ts` **e** `en-US.ts` (o build cobra os dois) |
| Liberar um nome próprio no verificador | `scripts/i18n-allowlist.json` |
| Mudar cores/fontes do sistema | bloco `@theme` em `src/assets/style.css` |
| Ajustar só o tema escuro | bloco `.dark` em `src/assets/style.css` |
| Criar um utilitário novo | `@utility` em `src/assets/style.css` |
| Mudar `<title>`/meta iniciais | `index.html` (é o que o crawler lê primeiro) |

Nenhum card é escrito em HTML: os componentes iteram sobre os arrays de `src/data/`. Um projeto
novo são ~10 linhas de objeto, não um bloco de markup copiado.

## Desenvolvimento

```bash
npm install
npm run dev       # http://localhost:5173, com hot reload
npm run check:i18n # verifica a cobertura de tradução
npm run build     # check:i18n + vue-tsc + prerender -> dist/
npm run preview   # serve o dist/ em http://localhost:8080
```

O `build` roda `check:i18n` e `vue-tsc --noEmit` antes de compilar: falha de tradução ou erro de
tipo derruba o build — e portanto o deploy — em vez de publicar página quebrada.

## Funcionalidades

- **Bilíngue (PT-BR / EN-US)** — vue-i18n, com **cobertura total**: além do texto visível, trocam
  de idioma o `<title>`, a meta description, as tags `og:`/`twitter:` (o preview de link do
  LinkedIn), os `alt` das imagens e os `aria-label`. O prerender sai sempre em pt-BR (é o que o
  buscador indexa); o cliente aplica o idioma salvo ou o do navegador depois da hidratação, para
  não gerar mismatch.

  **Nada de texto solto no código.** `npm run check:i18n` (que o build roda automaticamente) falha se:
  os dois idiomas divergirem em chaves; um componente usar chave inexistente; sobrar chave sem uso;
  ou aparecer literal visível que não seja nome próprio. A lista de nomes próprios permitidos
  (empresas, tecnologias, instituições) fica em `scripts/i18n-allowlist.json` — se o verificador
  reclamar de um termo legítimo, declare-o lá; qualquer outra coisa vira chave em `src/i18n/`.
- **Filtro do portfólio** — `computed` sobre o array de projetos.
- **Menu com scrollspy** — Bootstrap, reinicializado no `onMounted` do `App.vue`.
- **Contador de visitas** — integra a API [portfolio-track-visit](https://github.com/moablive/portfolio-track-visit).
  `POST /api/track-visit` registra e devolve o total; se falhar, cai para `GET /api/statistics`.
  Timeout de 8s. Roda só no cliente — durante o prerender não há `fetch`.

## Deploy

Push na `main` dispara `.github/workflows/deploy.yml`, que compila e publica.
Em **Settings → Pages**, a origem é **GitHub Actions** (não "deploy from a branch").

A pasta `dist/` é gerada no CI e **não** é versionada.
