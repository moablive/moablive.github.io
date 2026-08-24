# moablive.github.io

Portfólio pessoal de **Guilherme Bonato** — Engenheiro de Software Sênior e Arquiteto de Soluções.

🔗 **https://moablive.github.io**

## Stack

Site estático, sem build step. HTML5 + CSS3 + JavaScript (ES2020), com Bootstrap 5.3 e Font Awesome 6 via CDN.

## Estrutura

```
.
├── index.html          # página única (todas as seções)
├── assets/
│   ├── css/style.css   # estilos próprios; Bootstrap vem do CDN
│   └── js/main.js      # i18n, filtro do portfólio, contador de visitas
├── .nojekyll           # desliga o processamento Jekyll do GitHub Pages
├── robots.txt
└── sitemap.xml
```

## Funcionalidades

- **Bilíngue (PT-BR / EN-US)** — troca em tempo real pelo botão flutuante 🌐. O idioma inicial vem
  do `localStorage`; na primeira visita, do idioma do navegador. A escolha persiste entre sessões.
- **Filtro de portfólio** — um único grid de cards com `data-cat`; os botões apenas alternam a classe
  `.is-hidden`. Sem JavaScript, todos os projetos continuam visíveis.
- **Contador de visitas** — integra a API [portfolio-track-visit](https://github.com/moablive/portfolio-track-visit).
  `POST /api/track-visit` registra a visita e devolve o total; se falhar, cai para `GET /api/statistics`
  para ao menos exibir o número. Ambas as rotas têm timeout de 8s.

## Desenvolvimento

Não há dependências nem build. Para rodar localmente:

```bash
python3 -m http.server 8080
# abre http://localhost:8080
```

Abrir o `index.html` direto pelo `file://` também funciona, mas a chamada à API de visitas
é bloqueada por CORS nesse modo — use o servidor local.

## Deploy

Automático: qualquer push na branch `main` publica o site (GitHub Pages, deploy pela branch, raiz `/`).
