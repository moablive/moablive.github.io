/* =========================================================
   Portfólio · Guilherme Bonato
   Módulos: rodapé, filtro do portfólio, contador de visitas, i18n
   ========================================================= */
"use strict";

/* ---------------------------------------------------------
   Configuração
   --------------------------------------------------------- */
const API_BASE = "https://portfolio-track-visit.astralwavelabel.com/api";
const API_TIMEOUT_MS = 8000;
const DEFAULT_LANG = "pt-BR";
const SUPPORTED_LANGS = ["pt-BR", "en-US"];

/* ---------------------------------------------------------
   Rodapé
   --------------------------------------------------------- */
function initBasics() {
    const yearEl = document.getElementById("currentYear");
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }
}

/* ---------------------------------------------------------
   Filtro do portfólio
   Um único grid de cards com data-cat; sem JS todos aparecem.
   --------------------------------------------------------- */
function initPortfolioFilter() {
    const buttons = document.querySelectorAll(".btn-filter");
    const items = document.querySelectorAll("#portfolio-grid .portfolio-item");
    const emptyMsg = document.getElementById("portfolio-empty");
    if (!buttons.length || !items.length) return;

    function applyFilter(filter) {
        let visible = 0;

        items.forEach((item) => {
            const cats = (item.dataset.cat || "").split(/\s+/);
            const match = filter === "all" || cats.includes(filter);
            item.classList.toggle("is-hidden", !match);
            if (match) visible++;
        });

        buttons.forEach((btn) => {
            const active = btn.dataset.filter === filter;
            btn.classList.toggle("active", active);
            btn.setAttribute("aria-pressed", String(active));
        });

        if (emptyMsg) emptyMsg.classList.toggle("d-none", visible > 0);
    }

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => applyFilter(btn.dataset.filter || "all"));
    });
}

/* ---------------------------------------------------------
   Contador de visitas
   POST /track-visit registra e devolve o total. Se o POST falhar
   (rede, 5xx, timeout), tenta GET /statistics para ao menos exibir
   o número — só mostra "offline" se as duas rotas falharem.
   --------------------------------------------------------- */
async function fetchJson(url, options = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

    try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} em ${url}`);
        }
        return await response.json();
    } finally {
        clearTimeout(timer);
    }
}

function renderVisitCount(total) {
    const el = document.getElementById("contador-visitas-texto");
    if (!el) return;

    const lang = document.documentElement.getAttribute("lang") || DEFAULT_LANG;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    const formatted = Number(total).toLocaleString(lang);

    el.innerHTML = `
        <strong class="text-primary visit-count">${formatted}</strong>
        <span>${dict.visitSuffix}</span>
        <br />
        <small class="text-muted visit-footnote">${dict.visitFootnote}</small>
    `;
}

function renderVisitError() {
    const el = document.getElementById("contador-visitas-texto");
    if (!el) return;

    const lang = document.documentElement.getAttribute("lang") || DEFAULT_LANG;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

    el.innerHTML = `
        <i class="fas fa-exclamation-circle text-warning" aria-hidden="true"></i>
        <br />
        <small class="text-muted">${dict.visitOffline}</small>
    `;
}

async function initVisitsTracking() {
    const el = document.getElementById("contador-visitas-texto");
    if (!el) return;

    const hideSpinner = () => {
        const spinner = document.getElementById("loading-spinner-visitas");
        if (spinner) spinner.remove();
    };

    try {
        const data = await fetchJson(`${API_BASE}/track-visit`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });
        hideSpinner();
        renderVisitCount(data.total_geral_visitas ?? 0);
    } catch (postError) {
        console.warn("[visitas] POST /track-visit falhou, tentando somente leitura:", postError);

        try {
            const data = await fetchJson(`${API_BASE}/statistics`);
            hideSpinner();
            renderVisitCount(data.total_geral_visitas ?? 0);
        } catch (getError) {
            hideSpinner();
            renderVisitError();
            console.error("[visitas] API indisponível:", getError);
        }
    }
}

/* ---------------------------------------------------------
   Dicionário de tradução
   --------------------------------------------------------- */
const TRANSLATIONS = {
    "pt-BR": {
        pageTitle: "Guilherme Bonato — Engenheiro de Software Sênior",
        metaDescription:
            "Portfólio de Guilherme Bonato, Engenheiro de Software Sênior e Arquiteto de Soluções. Especialista em .NET, Node.js, Python, Clean Architecture, DDD e infraestrutura em Docker/Cloudflare.",
        skipLink: "Pular para o conteúdo",

        // Navbar
        downloadPDF: "Baixar PDF",
        navToggle: "Abrir menu de navegação",
        navAbout: "Sobre",
        navEducation: "Formação",
        navCertificates: "Certificados",
        navExperience: "Trajetória",
        navTech: "Tecnologias",
        navPortfolio: "Portfólio",
        navGithub: "GitHub Stats",
        navContact: "Contato",

        // Sobre
        aboutGreeting: "Olá! Eu sou Guilherme Bonato",
        aboutExperience:
            "Engenheiro de Software Sênior com sólida experiência em <strong>desenvolvimento e arquitetura de soluções escaláveis</strong>. Especialista em criar sistemas robustos aplicando princípios de <strong>SOLID</strong>, <strong>DDD</strong> e <strong>TDD</strong>.",

        // Formação
        educationTitle: "Formação Acadêmica",
        eduCourse0: "Pós-Graduação em Engenharia de IA",
        eduCourse1: "Arquitetura de Software e Soluções com IA",
        eduCourse2: "Pós-Graduação em Desenvolvimento Full-Stack",
        eduCourse3: "Bacharelado em Ciência da Computação",
        eduStatusOngoing: "<i class='fas fa-spinner fa-spin me-1' aria-hidden='true'></i> Em andamento",
        eduStatusDone: "<i class='fas fa-check-circle me-1' aria-hidden='true'></i> Concluído",
        eduExpected:
            "<i class='far fa-calendar-alt me-2' aria-hidden='true'></i>Conclusão prevista: Dez/2026",
        eduDate1: "<i class='far fa-calendar-alt me-2' aria-hidden='true'></i>2022 – 2024",
        eduDate2: "<i class='far fa-calendar-alt me-2' aria-hidden='true'></i>2016 – 2021",
        btnVisitInst: "Visitar instituição",
        btnVisitInstAria: "Visitar site da instituição",
        btnViewCredential: "Ver credencial",
        btnViewCredPucAria: "Ver credencial da Pós-Graduação da PUCRS",
        btnViewCredLasalleAria: "Ver diploma do Bacharelado da Universidade La Salle",

        // Certificados
        certTitle: "Certificados de Especialização",
        certCourse1: "Bacharelado - Ciência da Computação",
        certCourse2: "Pós-Graduação - Dev. Full-Stack",
        certCourse3: "Web API com .NET 6 + EF Core + Docker",
        certCourse4: "Apache Kafka com .NET Core e Confluent",
        certCourse5: "Arquitetura Limpa e Hexagonal (TS)",
        certCourse6: "Programação C# Completo",
        certCourse7: "Dapper ORM com .NET",
        certDateAug23:
            "<i class='fas fa-calendar-check text-success me-2' aria-hidden='true'></i>Concluído: Ago/2023",
        certDateMay25:
            "<i class='fas fa-calendar-check text-success me-2' aria-hidden='true'></i>Concluído: Mai/2025",
        certDateOct23:
            "<i class='fas fa-calendar-check text-success me-2' aria-hidden='true'></i>Concluído: Out/2023",
        certDateJul23:
            "<i class='fas fa-calendar-check text-success me-2' aria-hidden='true'></i>Concluído: Jul/2023",
        btnViewDiploma: "<i class='fas fa-external-link-alt me-2' aria-hidden='true'></i>Ver Diploma",
        btnViewCert: "<i class='fas fa-external-link-alt me-2' aria-hidden='true'></i>Ver Certificado",
        btnViewCred: "<i class='fas fa-external-link-alt me-2' aria-hidden='true'></i>Ver Credencial",

        // Trajetória
        expTitle: "Trajetória Profissional",
        expSubtitle: "Clique nos cards para ver os detalhes técnicos e desafios de cada cargo",
        expDuration1:
            "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>4 anos e 9 meses",
        expDuration2:
            "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>1 ano e 11 meses",
        expDuration3:
            "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>1 ano e 5 meses",
        expDurationFri:
            "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>Jun – Jul (Layoff)",
        expBadgeGoto: "Fev 2026 – Ago 2026",
        expDurationGoto:
            "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>6 meses",
        expCurrentBadge: "<i class='fas fa-star me-1 text-warning' aria-hidden='true'></i>2025 – Atual",
        expCurrent: "<i class='fas fa-bolt me-1' aria-hidden='true'></i>Projetos digitais em andamento",
        roleAwl: "Arquiteto de Soluções",
        tagNetworks: "Redes",
        tagSecurity: "Segurança",
        tagInfra: "Redes e Infraestrutura",
        tagTeams: "Gestão de Equipes",
        tagMicroservices: "Microsserviços",

        // Tecnologias
        techTitle: "Stack Tecnológico &amp; Infraestrutura",
        techCore: "<i class='fas fa-code me-2' aria-hidden='true'></i>Core &amp; Back-End",
        techFront: "<i class='fas fa-laptop-code me-2' aria-hidden='true'></i>Front-End &amp; UI",
        techDevops: "<i class='fas fa-network-wired me-2' aria-hidden='true'></i>DevOps, Infra &amp; Cloud",
        techData: "<i class='fas fa-database me-2' aria-hidden='true'></i>Dados &amp; Versionamento",

        // Destaque
        featureTitle: "Destaque de Arquitetura",
        featureSubtitle: "Identity Provider (IdP) Enterprise Multi-tenant",
        featureBtnArch:
            "<i class='fas fa-network-wired me-2' aria-hidden='true'></i> Ver Arquitetura da Solução",
        featureBtnProd: "<i class='fas fa-rocket me-2' aria-hidden='true'></i> Acessar Produção",
        featureEnvOnline:
            "<span class='spinner-grow spinner-grow-sm me-2' aria-hidden='true'></span>Online via Cloudflare Tunnel",

        // Portfólio
        portfolioTitle: "Portfólio",
        portfolioFilterAria: "Filtrar projetos por categoria",
        filterAll: "Todos",
        filterBackend: "Back-End",
        filterFrontend: "Front-End &amp; Full-Stack",
        filterPython: "Python &amp; Tools",
        portfolioEmpty: "Nenhum projeto nesta categoria.",
        projLoginHubApi:
            "Backend IdP Enterprise. PostgreSQL (ACID), Docker, Nginx, segurança com JWT e Master Key.",
        projLoginHubUi:
            "Painel administrativo do IdP. React 19, Vite, glassmorphism e gestão de multi-tenants.",
        projAmbev:
            "Sistema de vendas com .NET 8, Clean Architecture, DDD e CQRS. PostgreSQL (write), MongoDB (read) e Kafka.",
        projTracker:
            "API de rastreamento de visitas com Node.js, Express, TypeScript e PostgreSQL. Contador atômico e thread-safe.",
        projEf6: "Template base para APIs RESTful utilizando .NET Core.",
        projAngularHub: "Aplicação full-stack completa para gerenciamento de produtos e usuários.",
        projVueCasa: "Dashboard interativo desenvolvido com Vue.js, TypeScript e Vite.",
        projSulTitle: "Gestor de Preços — Sul Alimentos",
        projSul:
            "Sistema corporativo de precificação e margens. Autenticação SSO, RBAC e métricas via Prometheus.",
        projNotion: "Integração e otimização do fluxo de trabalho com ícones no Notion.",
        projPyCrud: "CRUD de produtos desenvolvido com Python e PyQt5.",
        projPyImg: "Conversor de imagens com upscale para 4K.",
        btnViewProject: "<i class='fas fa-external-link-alt me-2' aria-hidden='true'></i>Ver Projeto",

        // Stats / contato
        statsTitle: "Estatísticas do GitHub",
        contactTitle: "Entre em Contato",
        contactLead:
            "Gostaria de discutir um projeto, oportunidade ou apenas dizer olá? Sinta-se à vontade para me contatar!",

        // Visitas
        visitStackBtn: "<i class='fab fa-github me-2' aria-hidden='true'></i> Ver Stack do Rastreador",
        visitLoading: "A processar visitas...",
        visitSuffix: "vezes esta página foi visitada.",
        visitFootnote: "Processado via Cloudflare &amp; PostgreSQL",
        visitOffline: "Estatísticas temporariamente offline",

        // Modais - genéricos
        close: "Fechar",
        modalActivities: "Principais Atividades &amp; Impactos:",
        modalChallenges: "Principais Desafios &amp; Conquistas:",
        modalSolutions: "Soluções e Infraestrutura Implementadas:",
        modalTech: "Tecnologias Utilizadas:",
        modalTechConcepts: "Tecnologias e Conceitos:",

        // Modal CCS
        ccsDate:
            "<i class='fas fa-calendar-alt me-2' aria-hidden='true'></i><strong>Out de 2016 – Jun de 2021</strong>",
        ccsDesc:
            "Atuação como ponte entre a visão de negócios e a execução técnica. Liderança no desenho e manutenção de infraestruturas de TI e sistemas de Certificação Digital, garantindo alta disponibilidade operacional.",
        ccsB1: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Gestão técnica e suporte operacional avançado (Nível 3).",
        ccsB2: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Configuração, implementação e segurança de redes corporativas.",
        ccsB3: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Desenvolvimento de aplicações e integrações web e mobile.",
        ccsB4: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Configuração de ambientes rigorosos para validação de certificados digitais.",

        // Modal Safeweb
        swDate:
            "<i class='fas fa-calendar-alt me-2' aria-hidden='true'></i><strong>Jan de 2022 – Nov de 2023</strong>",
        swDesc:
            "Desenvolvimento focado na segurança e resiliência de aplicações. Atuação no ciclo completo de desenvolvimento de software em um ambiente crítico, lidando com sistemas de alta disponibilidade.",
        swB1: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Engenharia e evolução de <strong>Web APIs robustas</strong> utilizando C# e o ecossistema .NET.",
        swB2: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Refatoração e sustentação de interfaces legadas e novas utilizando AngularJS.",
        swB3: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Integração de sistemas de autenticação, criptografia e segurança da informação.",
        swB4: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Modelagem de dados e otimização de consultas SQL para sistemas de alto volume.",

        // Modal SKA
        skaDate:
            "<i class='fas fa-calendar-alt me-2' aria-hidden='true'></i><strong>Dez de 2023 – Mai de 2025</strong>",
        skaDesc:
            "Atuação em nível sênior com foco na qualidade estrutural do código (backend). Responsável por elevar o padrão técnico da arquitetura de sistemas voltados para automação industrial.",
        skaB1: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Desenvolvimento de <strong>sistemas escaláveis</strong> e de alta performance em C# e .NET.",
        skaB2: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Aplicação rigorosa de padrões arquiteturais como <strong>Clean Architecture, DDD e TDD</strong>.",
        skaB3: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Code reviews focados na garantia dos princípios <strong>SOLID</strong>.",
        skaB4: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Integração de serviços assíncronos e processamento de dados industriais complexos via banco relacional.",

        // Modal Frigelar
        friDate:
            "<i class='fas fa-calendar-alt me-2' aria-hidden='true'></i><strong>Jun de 2025 – Jul de 2025</strong>",
        friDesc:
            "Posição de alto impacto técnico, liderando a implementação de novos serviços num cenário complexo de varejo e e-commerce corporativo, interrompida prematuramente devido a um layoff em massa.",
        friB1: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Desenvolvimento de arquiteturas orientadas a eventos (EDA) utilizando <strong>Apache Kafka</strong> para processamento assíncrono.",
        friB2: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Atuação <strong>full-stack</strong> desenvolvendo front-ends reativos e modernos em React e Vue.js.",
        friB3: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Construção de microsserviços escaláveis utilizando o ecossistema .NET.",
        friB4: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Sincronização de filas de mensageria para integração de estoques e logística.",

        // Modal GotoBiz
        gotoDate:
            "<i class='fas fa-calendar-alt me-2' aria-hidden='true'></i><strong>Fev de 2026 – Ago de 2026 (Híbrido)</strong>",
        gotoDesc:
            "Atuação estratégica em posição de liderança e segurança, alocado em projeto crítico de modernização e damage control na infraestrutura da <strong>NSTECH</strong>.",
        gotoB1: "<i class='fas fa-shield-alt text-danger me-2' aria-hidden='true'></i><strong>Resposta a incidentes:</strong> liderança técnica imediata após ataque hacker, mitigando brechas críticas (como <em>SQL Injection</em>).",
        gotoB2: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i><strong>Cultura DevSecOps:</strong> implementação de auditorias ativas de código e introdução da filosofia <em>Secure by Design</em>.",
        gotoB3: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i><strong>Modernização arquitetural:</strong> transição de um sistema legado altamente acoplado (monolito) para um ecossistema distribuído de <strong>microsserviços em .NET</strong>.",
        gotoB4: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i><strong>Integridade de dados:</strong> reestruturação da segurança nas pontas da aplicação para garantir blindagem corporativa.",

        // Modal Astral Wave
        awlDate: "2025 – Atualmente",
        awlDesc:
            "Liderança na definição técnica, visão estratégica e desenho arquitetural de todo o portfólio de produtos digitais da empresa. Foco em segurança de borda (edge security) e escalabilidade em nuvem.",
        awlB1: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Segurança &amp; cloud:</strong> implementação de Cloudflare (WAF/CDN) aliado a containers Docker.",
        awlB2: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Ecossistema back-end poliglota:</strong> microsserviços interoperáveis escritos em .NET Core, Node.js e Golang.",
        awlB3: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Front-end moderno:</strong> construção de interfaces complexas com React e Vue.js focadas na experiência do usuário.",
        awlB4: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Engenharia de software:</strong> aplicação contínua de Clean Architecture e design eficiente de banco de dados SQL.",

        // Modal LoginHub
        lhWhat: "O que é este projeto?",
        lhP1: "Um sistema de <strong>Identity Provider (IdP)</strong> centralizado. Gerencia autenticação multi-tenant (múltiplas empresas), permissões de usuários e segurança via tokens JWT e master keys.",
        lhP2: "Projetado para ser a espinha dorsal de segurança de todo o ecossistema de aplicações da empresa.",
        lhStack: "Stack de Infraestrutura &amp; Backend",
        lhDocker: "Orquestração de containers com proxy reverso e SSL.",
        lhCf: "Exposição segura sem abrir portas no firewall (Zero Trust).",
        lhPg: "Transações manuais (commit/rollback) para integridade crítica.",
        lhSecTitle: "Segurança",
        lhSec: "Autenticação híbrida (JWT + master keys) e hash bcrypt.",
        lhBtnAccess: "<i class='fas fa-external-link-alt me-2' aria-hidden='true'></i> Acessar Sistema",
        lhBtnRepo: "<i class='fab fa-github me-2' aria-hidden='true'></i> Repositório",

        // Modal rastreador
        trackTitle: "Arquitetura de Rastreamento Atômico",
        trackDesc:
            "API performática desenvolvida para mapear visitas utilizando um contador atômico no banco de dados.",
        trackPg: "<i class='fas fa-database text-primary me-2' aria-hidden='true'></i><strong>PostgreSQL:</strong> persistência de dados com integridade.",
        trackNode: "<i class='fas fa-server text-success me-2' aria-hidden='true'></i><strong>Node.js &amp; TS:</strong> backend robusto e tipado.",
        trackDocker: "<i class='fas fa-box text-info me-2' aria-hidden='true'></i><strong>Docker:</strong> orquestração e isolamento de serviços.",
        trackCf: "<i class='fas fa-cloud text-warning me-2' aria-hidden='true'></i><strong>Cloudflare:</strong> DNS, proxy e segurança de borda.",
        trackBtnRepo: "<i class='fab fa-github me-2' aria-hidden='true'></i> Explorar Repositório",

        // Rodapé / FAB
        footerRights: "Todos os direitos reservados.",
        langToggle: "Trocar idioma",
    },

    "en-US": {
        pageTitle: "Guilherme Bonato — Senior Software Engineer",
        metaDescription:
            "Portfolio of Guilherme Bonato, Senior Software Engineer and Solutions Architect. Specialist in .NET, Node.js, Python, Clean Architecture, DDD and Docker/Cloudflare infrastructure.",
        skipLink: "Skip to content",

        // Navbar
        downloadPDF: "Download Resume",
        navToggle: "Open navigation menu",
        navAbout: "About",
        navEducation: "Education",
        navCertificates: "Certifications",
        navExperience: "Experience",
        navTech: "Technologies",
        navPortfolio: "Portfolio",
        navGithub: "GitHub Stats",
        navContact: "Contact",

        // About
        aboutGreeting: "Hello! I'm Guilherme Bonato",
        aboutExperience:
            "Senior Software Engineer with solid experience in <strong>development and architecture of scalable solutions</strong>. Specialist in building robust systems applying <strong>SOLID</strong>, <strong>DDD</strong> and <strong>TDD</strong> principles.",

        // Education
        educationTitle: "Academic Background",
        eduCourse0: "Postgraduate in AI Engineering",
        eduCourse1: "Software Architecture and AI Solutions",
        eduCourse2: "Postgraduate in Full-Stack Development",
        eduCourse3: "Bachelor's in Computer Science",
        eduStatusOngoing: "<i class='fas fa-spinner fa-spin me-1' aria-hidden='true'></i> In progress",
        eduStatusDone: "<i class='fas fa-check-circle me-1' aria-hidden='true'></i> Completed",
        eduExpected:
            "<i class='far fa-calendar-alt me-2' aria-hidden='true'></i>Expected completion: Dec/2026",
        eduDate1: "<i class='far fa-calendar-alt me-2' aria-hidden='true'></i>2022 – 2024",
        eduDate2: "<i class='far fa-calendar-alt me-2' aria-hidden='true'></i>2016 – 2021",
        btnVisitInst: "Visit institution",
        btnVisitInstAria: "Visit the institution's website",
        btnViewCredential: "View credential",
        btnViewCredPucAria: "View PUCRS postgraduate credential",
        btnViewCredLasalleAria: "View Universidade La Salle bachelor's diploma",

        // Certificates
        certTitle: "Specialization Certificates",
        certCourse1: "Bachelor's - Computer Science",
        certCourse2: "Postgraduate - Full-Stack Dev",
        certCourse3: "Web API with .NET 6 + EF Core + Docker",
        certCourse4: "Apache Kafka with .NET Core & Confluent",
        certCourse5: "Clean & Hexagonal Architecture (TS)",
        certCourse6: "Complete C# Programming",
        certCourse7: "Dapper ORM with .NET",
        certDateAug23:
            "<i class='fas fa-calendar-check text-success me-2' aria-hidden='true'></i>Completed: Aug/2023",
        certDateMay25:
            "<i class='fas fa-calendar-check text-success me-2' aria-hidden='true'></i>Completed: May/2025",
        certDateOct23:
            "<i class='fas fa-calendar-check text-success me-2' aria-hidden='true'></i>Completed: Oct/2023",
        certDateJul23:
            "<i class='fas fa-calendar-check text-success me-2' aria-hidden='true'></i>Completed: Jul/2023",
        btnViewDiploma: "<i class='fas fa-external-link-alt me-2' aria-hidden='true'></i>View Diploma",
        btnViewCert: "<i class='fas fa-external-link-alt me-2' aria-hidden='true'></i>View Certificate",
        btnViewCred: "<i class='fas fa-external-link-alt me-2' aria-hidden='true'></i>View Credential",

        // Experience
        expTitle: "Professional Experience",
        expSubtitle: "Click the cards to see the technical details and challenges of each role",
        expDuration1:
            "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>4 years and 9 months",
        expDuration2:
            "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>1 year and 11 months",
        expDuration3:
            "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>1 year and 5 months",
        expDurationFri:
            "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>Jun – Jul (Layoff)",
        expBadgeGoto: "Feb 2026 – Aug 2026",
        expDurationGoto:
            "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>6 months",
        expCurrentBadge: "<i class='fas fa-star me-1 text-warning' aria-hidden='true'></i>2025 – Present",
        expCurrent: "<i class='fas fa-bolt me-1' aria-hidden='true'></i>Digital projects in progress",
        roleAwl: "Solutions Architect",
        tagNetworks: "Networking",
        tagSecurity: "Security",
        tagInfra: "Networking & Infrastructure",
        tagTeams: "Team Management",
        tagMicroservices: "Microservices",

        // Technologies
        techTitle: "Tech Stack &amp; Infrastructure",
        techCore: "<i class='fas fa-code me-2' aria-hidden='true'></i>Core &amp; Back-End",
        techFront: "<i class='fas fa-laptop-code me-2' aria-hidden='true'></i>Front-End &amp; UI",
        techDevops: "<i class='fas fa-network-wired me-2' aria-hidden='true'></i>DevOps, Infra &amp; Cloud",
        techData: "<i class='fas fa-database me-2' aria-hidden='true'></i>Data &amp; Version Control",

        // Feature
        featureTitle: "Architecture Highlight",
        featureSubtitle: "Enterprise Multi-tenant Identity Provider (IdP)",
        featureBtnArch:
            "<i class='fas fa-network-wired me-2' aria-hidden='true'></i> View Solution Architecture",
        featureBtnProd: "<i class='fas fa-rocket me-2' aria-hidden='true'></i> Open Production",
        featureEnvOnline:
            "<span class='spinner-grow spinner-grow-sm me-2' aria-hidden='true'></span>Online via Cloudflare Tunnel",

        // Portfolio
        portfolioTitle: "Portfolio",
        portfolioFilterAria: "Filter projects by category",
        filterAll: "All",
        filterBackend: "Back-End",
        filterFrontend: "Front-End &amp; Full-Stack",
        filterPython: "Python &amp; Tools",
        portfolioEmpty: "No projects in this category.",
        projLoginHubApi:
            "Enterprise IdP backend. PostgreSQL (ACID), Docker, Nginx, security with JWT and Master Key.",
        projLoginHubUi:
            "IdP admin panel. React 19, Vite, glassmorphism and multi-tenant management.",
        projAmbev:
            "Sales system with .NET 8, Clean Architecture, DDD and CQRS. PostgreSQL (write), MongoDB (read) and Kafka.",
        projTracker:
            "Visit tracking API with Node.js, Express, TypeScript and PostgreSQL. Atomic, thread-safe counter.",
        projEf6: "Base template for RESTful APIs using .NET Core.",
        projAngularHub: "Complete full-stack application for product and user management.",
        projVueCasa: "Interactive dashboard built with Vue.js, TypeScript and Vite.",
        projSulTitle: "Price Manager — Sul Alimentos",
        projSul:
            "Corporate pricing and margin system. SSO authentication, RBAC and Prometheus metrics.",
        projNotion: "Workflow integration and optimization with icons in Notion.",
        projPyCrud: "Product CRUD built with Python and PyQt5.",
        projPyImg: "Image converter with 4K upscaling.",
        btnViewProject: "<i class='fas fa-external-link-alt me-2' aria-hidden='true'></i>View Project",

        // Stats / contact
        statsTitle: "GitHub Statistics",
        contactTitle: "Get in Touch",
        contactLead:
            "Would you like to discuss a project, an opportunity, or just say hello? Feel free to reach out!",

        // Visits
        visitStackBtn: "<i class='fab fa-github me-2' aria-hidden='true'></i> View Tracker Stack",
        visitLoading: "Processing visits...",
        visitSuffix: "times this page has been visited.",
        visitFootnote: "Processed via Cloudflare &amp; PostgreSQL",
        visitOffline: "Statistics temporarily offline",

        // Modals - generic
        close: "Close",
        modalActivities: "Main Activities &amp; Impacts:",
        modalChallenges: "Main Challenges &amp; Achievements:",
        modalSolutions: "Solutions &amp; Infrastructure Implemented:",
        modalTech: "Technologies Used:",
        modalTechConcepts: "Technologies &amp; Concepts:",

        // Modal CCS
        ccsDate:
            "<i class='fas fa-calendar-alt me-2' aria-hidden='true'></i><strong>Oct 2016 – Jun 2021</strong>",
        ccsDesc:
            "Acted as a bridge between business vision and technical execution. Led the design and maintenance of IT infrastructures and Digital Certification systems, ensuring high operational availability.",
        ccsB1: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Technical management and advanced operational support (Tier 3).",
        ccsB2: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Configuration, implementation and security of corporate networks.",
        ccsB3: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Development of web and mobile applications and integrations.",
        ccsB4: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Configuration of strict environments for digital certificate validation.",

        // Modal Safeweb
        swDate:
            "<i class='fas fa-calendar-alt me-2' aria-hidden='true'></i><strong>Jan 2022 – Nov 2023</strong>",
        swDesc:
            "Development focused on application security and resilience. Worked across the full software development lifecycle in a critical environment, dealing with high-availability systems.",
        swB1: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Engineering and evolution of <strong>robust Web APIs</strong> using C# and the .NET ecosystem.",
        swB2: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Refactoring and maintenance of legacy and new interfaces using AngularJS.",
        swB3: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Integration of authentication, cryptography and information security systems.",
        swB4: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Data modeling and SQL query optimization for high-volume systems.",

        // Modal SKA
        skaDate:
            "<i class='fas fa-calendar-alt me-2' aria-hidden='true'></i><strong>Dec 2023 – May 2025</strong>",
        skaDesc:
            "Senior-level role focused on structural code quality (backend). Responsible for raising the technical standard of system architecture for industrial automation.",
        skaB1: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Development of <strong>scalable, high-performance systems</strong> in C# and .NET.",
        skaB2: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Strict application of architectural patterns such as <strong>Clean Architecture, DDD and TDD</strong>.",
        skaB3: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Code reviews focused on ensuring <strong>SOLID</strong> principles.",
        skaB4: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Integration of asynchronous services and complex industrial data processing via relational databases.",

        // Modal Frigelar
        friDate:
            "<i class='fas fa-calendar-alt me-2' aria-hidden='true'></i><strong>Jun 2025 – Jul 2025</strong>",
        friDesc:
            "High-impact technical position leading the implementation of new services in a complex corporate retail and e-commerce scenario, prematurely interrupted due to a mass layoff.",
        friB1: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Development of Event-Driven Architectures (EDA) using <strong>Apache Kafka</strong> for asynchronous processing.",
        friB2: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i><strong>Full-stack</strong> role building reactive and modern front-ends with React and Vue.js.",
        friB3: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Construction of scalable microservices using the .NET ecosystem.",
        friB4: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i>Message queue synchronization for inventory and logistics integration.",

        // Modal GotoBiz
        gotoDate:
            "<i class='fas fa-calendar-alt me-2' aria-hidden='true'></i><strong>Feb 2026 – Aug 2026 (Hybrid)</strong>",
        gotoDesc:
            "Strategic role in leadership and security, assigned to a critical modernization and damage control project in the <strong>NSTECH</strong> infrastructure.",
        gotoB1: "<i class='fas fa-shield-alt text-danger me-2' aria-hidden='true'></i><strong>Incident response:</strong> immediate technical leadership following a hacker attack, mitigating critical breaches (such as <em>SQL Injection</em>).",
        gotoB2: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i><strong>DevSecOps culture:</strong> implementation of active code audits and introduction of the <em>Secure by Design</em> philosophy.",
        gotoB3: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i><strong>Architectural modernization:</strong> transition of a highly coupled legacy system (monolith) to a distributed <strong>.NET microservices</strong> ecosystem.",
        gotoB4: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i><strong>Data integrity:</strong> restructuring edge security of the application to ensure complete corporate shielding.",

        // Modal Astral Wave
        awlDate: "2025 – Present",
        awlDesc:
            "Led the technical definition, strategic vision and architectural design of the company's entire digital product portfolio. Focus on edge security and cloud scalability.",
        awlB1: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Security &amp; cloud:</strong> implementation of Cloudflare (WAF/CDN) alongside Docker containers.",
        awlB2: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Polyglot back-end ecosystem:</strong> interoperable microservices written in .NET Core, Node.js and Golang.",
        awlB3: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Modern front-end:</strong> building complex interfaces with React and Vue.js focused on user experience.",
        awlB4: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Software engineering:</strong> continuous application of Clean Architecture and efficient SQL database design.",

        // Modal LoginHub
        lhWhat: "What is this project?",
        lhP1: "A centralized <strong>Identity Provider (IdP)</strong> system. It manages multi-tenant authentication (multiple companies), user permissions and security via JWT tokens and master keys.",
        lhP2: "Designed to be the security backbone for the company's entire application ecosystem.",
        lhStack: "Infrastructure &amp; Backend Stack",
        lhDocker: "Container orchestration with reverse proxy and SSL.",
        lhCf: "Secure exposure without opening firewall ports (Zero Trust).",
        lhPg: "Manual transactions (commit/rollback) for critical integrity.",
        lhSecTitle: "Security",
        lhSec: "Hybrid authentication (JWT + master keys) and bcrypt hashing.",
        lhBtnAccess: "<i class='fas fa-external-link-alt me-2' aria-hidden='true'></i> Open System",
        lhBtnRepo: "<i class='fab fa-github me-2' aria-hidden='true'></i> Repository",

        // Tracker modal
        trackTitle: "Atomic Tracking Architecture",
        trackDesc:
            "High-performance API built to map visits using an atomic counter in the database.",
        trackPg: "<i class='fas fa-database text-primary me-2' aria-hidden='true'></i><strong>PostgreSQL:</strong> data persistence with integrity.",
        trackNode: "<i class='fas fa-server text-success me-2' aria-hidden='true'></i><strong>Node.js &amp; TS:</strong> robust, typed backend.",
        trackDocker: "<i class='fas fa-box text-info me-2' aria-hidden='true'></i><strong>Docker:</strong> service orchestration and isolation.",
        trackCf: "<i class='fas fa-cloud text-warning me-2' aria-hidden='true'></i><strong>Cloudflare:</strong> DNS, proxy and edge security.",
        trackBtnRepo: "<i class='fab fa-github me-2' aria-hidden='true'></i> Explore Repository",

        // Footer / FAB
        footerRights: "All rights reserved.",
        langToggle: "Change language",
    },
};

/* ---------------------------------------------------------
   Aplicação das traduções
   data-i18n            -> innerHTML
   data-i18n-content    -> atributo content (meta tags)
   data-i18n-title      -> atributo title
   data-i18n-aria-label -> atributo aria-label
   --------------------------------------------------------- */
const ATTR_BINDINGS = [
    { selector: "[data-i18n-content]", datasetKey: "i18nContent", attribute: "content" },
    { selector: "[data-i18n-title]", datasetKey: "i18nTitle", attribute: "title" },
    { selector: "[data-i18n-aria-label]", datasetKey: "i18nAriaLabel", attribute: "aria-label" },
];

function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const value = dict[el.dataset.i18n];
        if (value !== undefined) el.innerHTML = value;
    });

    ATTR_BINDINGS.forEach(({ selector, datasetKey, attribute }) => {
        document.querySelectorAll(selector).forEach((el) => {
            const value = dict[el.dataset[datasetKey]];
            if (value !== undefined) el.setAttribute(attribute, stripTags(value));
        });
    });

    if (dict.pageTitle) document.title = dict.pageTitle;
}

/** Atributos como title/aria-label não renderizam HTML — remove as entidades e tags. */
function stripTags(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return (tmp.textContent || "").trim();
}

/* ---------------------------------------------------------
   FAB de idioma
   --------------------------------------------------------- */
function initLanguageFab() {
    const fab = document.querySelector(".i18n-fab");
    const toggle = document.getElementById("fabToggle");
    const menu = document.getElementById("fabMenu");
    const items = document.querySelectorAll(".fab-item");

    function setLanguage(lang) {
        const safeLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;

        try {
            localStorage.setItem("lang", safeLang);
        } catch (err) {
            /* modo privado / storage bloqueado — segue sem persistir */
        }

        document.documentElement.setAttribute("lang", safeLang);
        items.forEach((btn) => {
            btn.setAttribute("aria-pressed", String(btn.dataset.lang === safeLang));
        });

        applyTranslations(safeLang);
    }

    // Idioma salvo, senão o do navegador, senão pt-BR
    let saved = null;
    try {
        saved = localStorage.getItem("lang");
    } catch (err) {
        /* ignora */
    }
    const browserLang = (navigator.language || "").toLowerCase().startsWith("en") ? "en-US" : DEFAULT_LANG;
    setLanguage(saved || browserLang);

    if (!fab || !toggle || !menu) return;

    function closeMenu() {
        fab.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {
        const isOpen = fab.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (event) => {
        if (!fab.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });

    items.forEach((btn) => {
        btn.addEventListener("click", () => {
            setLanguage(btn.dataset.lang);
            closeMenu();
            toggle.focus();
        });
    });
}

/* ---------------------------------------------------------
   Bootstrap do DOM
   --------------------------------------------------------- */
function init() {
    initBasics();
    initLanguageFab();
    initPortfolioFilter();
    initVisitsTracking();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
