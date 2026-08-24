# moablive.github.io

Portfólio pessoal de **Guilherme Bonato** — Engenheiro de Software Sênior e Arquiteto de Soluções.

🔗 **https://moablive.github.io**

## Páginas

| URL | Conteúdo |
| --- | --- |
| `/` | Apresentação, destaque de arquitetura (LoginHub), contato e contador de visitas |
| `/formacao/` | Formação acadêmica e certificados de especialização |
| `/trajetoria/` | Timeline profissional com detalhamento de cada cargo em modal |
| `/tecnologias/` | Stack tecnológico completo |
| `/portfolio/` | Projetos, com filtro por categoria |
| `/github-stats/` | Estatísticas da conta GitHub |
| `/404.html` | Servida automaticamente pelo Pages em rotas inexistentes |

## Stack

Site estático. HTML5 + CSS3 + JavaScript (ES2020), com Bootstrap 5.3 e Font Awesome 6 via CDN.
Sem framework e sem dependências em runtime.

## Estrutura

```
.
├── build.py                # gerador: monta as páginas a partir de src/
├── src/
│   ├── partials/           # head, nav, fab, footer, scripts — fonte única
│   └── pages/              # cada seção e cada modal, em arquivo próprio
├── index.html              # ── gerados por build.py ──
├── formacao/index.html
├── trajetoria/index.html
├── tecnologias/index.html
├── portfolio/index.html
├── github-stats/index.html
├── 404.html
├── sitemap.xml
├── assets/
│   ├── css/style.css
│   └── js/main.js          # i18n, filtro do portfólio, contador de visitas
└── .nojekyll               # desliga o processamento Jekyll do GitHub Pages
```

## Como editar

O menu, o rodapé e o `<head>` existem em **um lugar só** (`src/partials/`). Os arquivos HTML na
raiz são gerados — editá-los diretamente faz o trabalho ser perdido no próximo build.

```bash
# 1. edite algo em src/
# 2. regenere as páginas
python3 build.py
# 3. commit de src/ E dos arquivos gerados
```

Para adicionar uma página nova, basta acrescentar uma entrada no dicionário `PAGES` do `build.py`
e um bloco em `src/pages/`. Para mexer no menu, edite a lista `NAV`.

## Funcionalidades

- **Bilíngue (PT-BR / EN-US)** — troca em tempo real pelo botão flutuante 🌐, incluindo `<title>`,
  meta description e atributos `aria-label`. O idioma inicial vem do `localStorage`; na primeira
  visita, do idioma do navegador. A escolha persiste entre páginas e sessões.
- **Filtro de portfólio** — um único grid com `data-cat`; os botões apenas alternam `.is-hidden`.
  Sem JavaScript, todos os projetos continuam visíveis.
- **Contador de visitas** — integra a API [portfolio-track-visit](https://github.com/moablive/portfolio-track-visit).
  `POST /api/track-visit` registra e devolve o total; se falhar, cai para `GET /api/statistics`.
  Timeout de 8s em ambas.

## Desenvolvimento local

```bash
python3 build.py && python3 -m http.server 8080
# abre http://localhost:8080
```

Use o servidor local, não `file://` — os caminhos dos assets são absolutos (`/assets/...`) e a
chamada à API de visitas é bloqueada por CORS no protocolo de arquivo.

## Deploy

Automático: qualquer push na branch `main` publica o site (GitHub Pages, deploy pela branch, raiz `/`).
