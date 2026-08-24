# moablive.github.io

Portfólio pessoal de **Guilherme Bonato** — Engenheiro de Software Sênior e Arquiteto de Soluções.

🔗 **https://moablive.github.io**

## Como o projeto é organizado

O site é **uma página de rolagem única**, mas o código-fonte é fatiado: cada seção, cada modal e
cada parte do esqueleto vive em um arquivo próprio dentro de `src/`. O `build.py` costura tudo e
escreve o `index.html` na raiz, que é o que o GitHub Pages serve.

A vantagem: mexer na Trajetória significa abrir um arquivo de 200 linhas, não caçar a seção certa
dentro de um HTML de 2 mil linhas. E o menu, o rodapé e o `<head>` existem em **um lugar só**.

```
.
├── build.py                    # costura src/ -> index.html
├── src/
│   ├── partials/               # esqueleto compartilhado
│   │   ├── head.html           #   <head> + abertura do <body>
│   │   ├── nav.html            #   menu (os itens vêm da lista NAV do build.py)
│   │   ├── fab.html            #   botão flutuante de idioma
│   │   ├── footer.html
│   │   └── scripts.html        #   Bootstrap + main.js + fechamento
│   ├── sections/               # uma seção da página por arquivo
│   │   ├── sobre.html
│   │   ├── formacao.html
│   │   ├── certificados.html
│   │   ├── trajetoria.html
│   │   ├── tecnologias.html
│   │   ├── destaque.html       #   destaque de arquitetura (LoginHub)
│   │   ├── portfolio.html
│   │   ├── github-stats.html
│   │   ├── contato.html
│   │   └── visitas.html        #   contador de visitas
│   └── modals/                 # um modal por arquivo
│       ├── ccs.html  safeweb.html  ska.html  frigelar.html
│       ├── gotobiz.html  astral-wave.html
│       └── loginhub.html  track-stack.html
├── index.html                  # ── GERADO — não edite ──
├── 404.html                    # ── GERADO ──
├── sitemap.xml                 # ── GERADO ──
├── assets/
│   ├── css/style.css
│   └── js/main.js              # i18n, filtro do portfólio, contador de visitas
├── robots.txt
└── .nojekyll                   # desliga o processamento Jekyll do Pages
```

## Fluxo de trabalho

```bash
# 1. edite o arquivo da parte que você quer mudar, em src/
# 2. regenere
python3 build.py
# 3. commit de src/ E dos arquivos gerados
git add -A && git commit -m "..." && git push
```

⚠️ **Não edite `index.html`, `404.html` ou `sitemap.xml` diretamente** — eles são sobrescritos no
próximo build.

### Receitas comuns

| Quero… | Onde mexer |
| --- | --- |
| Mudar o texto de uma seção | `src/sections/<nome>.html` |
| Reordenar as seções | lista `SECTIONS` no `build.py` |
| Adicionar/remover item do menu | lista `NAV` no `build.py` |
| Adicionar uma seção nova | criar `src/sections/nova.html` + incluir em `SECTIONS` |
| Adicionar um modal | criar `src/modals/novo.html` + incluir em `MODALS` |
| Traduzir um texto novo | `TRANSLATIONS` em `assets/js/main.js` (as duas línguas) |
| Mudar cores/espaçamentos | `assets/css/style.css` |

O build avisa no terminal se algum item do menu apontar para uma seção que não existe.

## Funcionalidades

- **Bilíngue (PT-BR / EN-US)** — troca em tempo real pelo botão flutuante 🌐, incluindo `<title>`,
  meta description e atributos `aria-label`. O idioma inicial vem do `localStorage`; na primeira
  visita, do idioma do navegador.
- **Menu com scrollspy** — o Bootstrap marca sozinho o item correspondente à seção visível.
- **Filtro de portfólio** — um único grid com `data-cat`; os botões só alternam `.is-hidden`.
  Sem JavaScript, todos os 11 projetos continuam visíveis.
- **Contador de visitas** — integra a API [portfolio-track-visit](https://github.com/moablive/portfolio-track-visit).
  `POST /api/track-visit` registra e devolve o total; se falhar, cai para `GET /api/statistics`.
  Timeout de 8s em ambas.

## Stack

HTML5 + CSS3 + JavaScript (ES2020), Bootstrap 5.3 e Font Awesome 6 via CDN. Sem framework, sem
dependências em runtime, sem `node_modules`. O único "build" é um script Python de biblioteca padrão.

## Desenvolvimento local

```bash
python3 build.py && python3 -m http.server 8080
# abre http://localhost:8080
```

Use o servidor local, não `file://` — os caminhos dos assets são absolutos (`/assets/...`) e a
chamada à API de visitas é bloqueada por CORS no protocolo de arquivo.

## Deploy

Automático: qualquer push na branch `main` publica o site (GitHub Pages, deploy pela branch, raiz `/`).
