# moablive.github.io

Portfólio pessoal de **Guilherme Bonato** — Engenheiro de Software Sênior e Arquiteto de Soluções.

🔗 **https://moablive.github.io**

## Stack

Vue 3 + TypeScript + Vite 6, prerenderizado com [vite-ssg](https://github.com/antfu/vite-ssg),
estilizado com Tailwind CSS 4 e traduzido com vue-i18n 11. Font Awesome 6 e Google Fonts via CDN.
Nenhuma outra dependência de runtime.

O sistema visual mora em `src/assets/style.css`: um bloco `@theme` com cores, fontes e sombras,
o bloco `.dark` que redefine as mesmas variáveis para o tema escuro, e seis utilitários próprios
(`glass`, `solid-card`, `text-gradient`, `ring-gradient`, `label-mono`, `lift-hover`) que compõem
toda a interface.

**Modo claro/escuro** com persistência em `localStorage` e respeito ao `prefers-color-scheme` na
primeira visita. Um script inline no `<head>` aplica a classe `.dark` **antes da primeira pintura** —
sem ele, quem prefere escuro veria um lampejo branco a cada carregamento. O `useTheme` só espelha
o que aquele script já decidiu e cuida da troca manual.

**Sem Bootstrap.** Modais, menu colapsável e scrollspy são componentes e composables próprios
(`BaseModal.vue`, `useModal.ts`, `useScrollSpy.ts`), o que tirou 232 KB de CSS e o bundle JS do
Bootstrap do carregamento. O que sai do build hoje: **32,7 KB de CSS** (6,9 KB comprimido) e
**242 KB de JS** (80,6 KB comprimido).

O prerender é o ponto central da escolha: `npm run build` gera um `index.html` de 126 KB **com todo
o conteúdo dentro**, não um `<div id="app">` vazio. Buscadores, leitores de tela e o preview de link
do LinkedIn/WhatsApp veem a página completa sem executar JavaScript; o Vue só hidrata por cima para
dar interatividade. É a vantagem de componentes sem o custo de SEO de um SPA.

Página única, sem `vue-router` — logo, nenhuma rota fantasma para o GitHub Pages resolver.

## Estrutura

```
.
├── index.html                  # template do Vite (head, meta, JSON-LD, CDNs, tema pré-pintura)
├── src/
│   ├── main.ts                 # ViteSSG em modo single-page
│   ├── App.vue                 # monta as seções, os modais e os controles flutuantes
│   ├── data/                   # ── o conteúdo do site vive aqui ──
│   │   ├── types.ts
│   │   ├── projetos.ts         #   12 projetos + os 4 filtros do portfólio
│   │   ├── formacao.ts         #   4 formações
│   │   ├── certificados.ts     #   7 certificados
│   │   ├── trajetoria.ts       #   5 cargos + 1 empreitada, cada um com o conteúdo do seu modal
│   │   └── tecnologias.ts      #   grupos de stack + links de contato
│   ├── i18n/
│   │   ├── index.ts            #   configuração do vue-i18n
│   │   ├── pt-BR.ts            #   241 chaves
│   │   └── en-US.ts            #   241 chaves
│   ├── composables/
│   │   ├── useTheme.ts         #   claro/escuro + <meta name="theme-color">
│   │   ├── useLocale.ts        #   idioma + <html lang>, title, meta description e tags og:
│   │   ├── useModal.ts         #   um modal aberto por vez, trava de rolagem e volta de foco
│   │   ├── useScrollSpy.ts     #   IntersectionObserver marca a seção visível no menu
│   │   ├── useVisitCounter.ts  #   contador com fallback e timeout
│   │   └── useLabel.ts         #   resolve texto literal vs. chave de tradução
│   ├── components/             # 23 componentes (.vue)
│   │   ├── AppNavbar / AppFooter / SecaoTitulo
│   │   ├── ControlesFlutuantes ─ LangSwitch + ThemeToggle
│   │   ├── Section*.vue        #   uma por seção da página
│   │   ├── CargoCard.vue
│   │   └── BaseModal.vue ─ CargoModal, ProjetoArqModal, ModalLoginHub, ModalTrackStack
│   └── assets/
│       ├── style.css           #   @theme, .dark e os utilitários próprios
│       └── astral-wave-logo.png
├── public/                     # copiado para dist/ sem processamento
│   ├── 404.html                #   página estática, não depende do bundle
│   ├── astral-wave.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .nojekyll
├── scripts/
│   ├── check-i18n.mjs          # verificador de tradução, roda antes do build
│   └── i18n-allowlist.json     # nomes próprios liberados para aparecer literalmente
└── .github/workflows/deploy.yml
```

### As seções, na ordem

`sobre` · `formacao` (01) · `certificados` (02) · `trajetoria` (03) · `empreitadas` (04) ·
`tecnologias` (05) · `login-hub-feature` · `portfolio` (06) · `github-stats` (07) · `contato` (08) ·
`visitas` (09)

O menu lista nove delas — o destaque do LoginHUB e o contador de visitas não entram na navegação,
mas continuam na página.

## Onde mexer no quê

| Quero… | Onde |
| --- | --- |
| Adicionar um projeto ao portfólio | um objeto em `src/data/projetos.ts` |
| Documentar a arquitetura de um projeto | campo `arq` + `modalId` no mesmo objeto — o modal se monta sozinho |
| Adicionar certificado ou formação | `src/data/certificados.ts` / `formacao.ts` |
| Adicionar um cargo ou uma empreitada (com modal) | `src/data/trajetoria.ts` — o modal sai do mesmo objeto |
| Reordenar as seções | ordem das tags no `<template>` de `src/App.vue` |
| Mexer no menu | array `links` em `src/components/AppNavbar.vue` |
| Trocar o link do currículo | mapa `CURRICULOS` em `src/components/AppNavbar.vue` (um PDF por idioma) |
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
npm run dev        # http://localhost:5173, com hot reload
npm run check:i18n # verifica a cobertura de tradução
npm run build      # check:i18n + vue-tsc + prerender -> dist/
npm run preview    # serve o dist/ em http://localhost:8080
```

O `build` roda `check:i18n` e `vue-tsc --noEmit` antes de compilar: falha de tradução ou erro de
tipo derruba o build — e portanto o deploy — em vez de publicar página quebrada.

## Funcionalidades

- **Bilíngue (PT-BR / EN-US)** — vue-i18n, com **cobertura total**: além do texto visível, trocam
  de idioma o `<title>`, a meta description, as tags `og:`/`twitter:` (o preview de link do
  LinkedIn), os `alt` das imagens, os `aria-label` e **o PDF do currículo** — o botão baixa a versão
  BR ou US conforme o idioma da página. O prerender sai sempre em pt-BR (é o que o buscador indexa);
  o cliente aplica o idioma salvo ou o do navegador depois da hidratação, para não gerar mismatch.

  **Nada de texto solto no código.** `npm run check:i18n` (que o build roda automaticamente) falha se:
  os dois idiomas divergirem em chaves; um componente usar chave inexistente; sobrar chave sem uso;
  ou aparecer literal visível que não seja nome próprio. A lista de nomes próprios permitidos
  (empresas, tecnologias, instituições) fica em `scripts/i18n-allowlist.json` — se o verificador
  reclamar de um termo legítimo, declare-o lá; qualquer outra coisa vira chave em `src/i18n/`.
- **Controles flutuantes** — idioma e tema moram juntos num balão fixo no canto inferior direito
  (`ControlesFlutuantes.vue`), fora da navbar. Ficam em `z-30`: acima da página, abaixo dos modais.
- **Modais próprios** — um aberto por vez (`useModal`), ESC fecha de qualquer lugar, o foco volta
  para o elemento que abriu e o `body` ganha `overflow: hidden` enquanto está aberto. O conteúdo
  usa `v-show`, não `v-if`, para o prerender entregá-lo aos buscadores mesmo fechado.
  Todo projeto do portfólio com campo `arq` ganha um botão **Arquitetura** que abre o mesmo tipo de
  modal usado no destaque do LoginHUB e no rastreador de visitas.
- **Filtro do portfólio** — `computed` sobre o array de projetos, com quatro filtros
  (todos, back-end, front-end & full-stack, Python & tools).
- **Menu com scrollspy** — `IntersectionObserver` próprio (`useScrollSpy.ts`), com a faixa de
  observação no terço superior da janela: a seção marcada é a que está sendo lida, não a que
  acabou de entrar na tela.
- **Contador de visitas** — integra a API [portfolio-track-visit](https://github.com/moablive/portfolio-track-visit).
  `POST /api/track-visit` registra e devolve o total; se falhar, cai para `GET /api/statistics`.
  Timeout de 8s. Roda só no cliente — durante o prerender não há `fetch`.

## Armadilhas conhecidas

Duas coisas já quebraram em silêncio aqui e valem o aviso:

- **`backdrop-filter` e o minificador.** O `@utility glass` declara **só** a propriedade sem
  prefixo. Quando as duas versões (`backdrop-filter` e `-webkit-backdrop-filter`) eram escritas
  juntas, o Lightning CSS juntava as duas e publicava apenas a com prefixo — que Chrome, Edge e
  Firefox não reconhecem. O blur sumia fora do WebKit e o vidro virava um retângulo 72%
  transparente; no celular, menu e modais ficavam ilegíveis por cima do texto da página.
  Declarando apenas `backdrop-filter`, o próprio Lightning CSS gera o par completo.
- **Entidades HTML nas chaves de tradução.** Chave consumida por `v-html` pode ter `&amp;`; chave
  interpolada com `{{ $t(...) }}` **não pode** — o Vue escapa de novo e o leitor vê `&amp;` na tela.
  Nessas, use o caractere literal.

## Deploy

Push na `main` dispara `.github/workflows/deploy.yml`, que compila e publica.
Em **Settings → Pages**, a origem é **GitHub Actions** (não "deploy from a branch").

A pasta `dist/` é gerada no CI e **não** é versionada.
