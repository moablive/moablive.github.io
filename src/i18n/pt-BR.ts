// Gerado a partir do dicionário da versão anterior do site.
// Strings com marcação HTML são renderizadas com v-html nos componentes.
export default {
    lhMono: "apps/api e apps/ui compartilham schema, serviços e cliente HTTP.",
    lhSec: "Autenticação híbrida (JWT + master keys) e hash bcrypt.",
    lhPg: "Drizzle ORM sobre PostgreSQL, com transações manuais onde a integridade é crítica.",
    lhDocker: "Orquestração de containers com proxy reverso e SSL.",
    lhStack: "Monorepo, do banco ao painel",
    lhP2: "Gerencia autenticação multi-tenant, permissões e segurança via tokens JWT e master keys — a espinha dorsal do ecossistema de aplicações.",
    lhP1: "Um <strong>Identity Provider (IdP)</strong> centralizado, organizado como monorepo: a API em Express e o painel SPA em React convivem no mesmo repositório, compartilhando esquema, serviços e cliente HTTP por pacotes internos.",
    projMoneyApp: "PWA de controle financeiro pessoal. Dashboard em dark mode com transações, contas, assinaturas, investimentos e empréstimos — mais um bot de Telegram.",
    projLoginHub: "Identity Provider multi-tenant em monorepo: API Express e SPA React no mesmo repositório, com Drizzle ORM sobre PostgreSQL, JWT e master keys.",
    projAstralWave:
        "Marketplace e selo de música eletrônica da minha empresa. Back-end poliglota (.NET Core, Node.js e Go) atrás da Cloudflare como gateway, com checkout em Pix, confirmação por webhook e entrega automatizada dos arquivos WAV.",
    projPortfolio:
        "Este portfólio. SPA em Vue 3 e TypeScript, prerenderizada com vite-ssg para o conteúdo chegar pronto aos buscadores. Tailwind CSS 4 com tema claro e escuro por tokens, i18n PT/EN validado por um verificador no build e deploy contínuo no GitHub Pages via GitHub Actions.",
    btnArch: "Arquitetura",
    tagOwnCompany: "Empresa própria",
    visitsTitle: "Contador de visitas",
    visitSuffix: "vezes esta página foi visitada",
    visitLoading: "Consultando o contador...",
    themeToDark: "Ativar modo escuro",
    themeToLight: "Ativar modo claro",
    heroKicker: "Engenheiro de Software Sênior — desde 2016",
    heroTitle: "Arquiteto de soluções",
    heroLead: ".NET, Node e Python. Clean Architecture, DDD e segurança de borda. Sistemas que aguentam o segundo ano de produção.",
    heroCta: "Ver projetos ↓",
    statYears: "Anos",
    statCompanies: "Empresas",
    statProjects: "Projetos",
    altPhoto: "Foto de Guilherme Bonato",
    altMainStack: "Stack principal: .NET, Node.js, TypeScript, Vue, Python, PostgreSQL, Docker",
    altTopLangs: "Linguagens mais usadas no GitHub por moablive",
    altGithubStats: "Estatísticas do GitHub de moablive",
    altLinkedin: "LinkedIn de Guilherme Bonato",
    altEmail: "E-mail de Guilherme Bonato",
    altGithub: "GitHub de moablive",
    location: "Porto Alegre, RS — Brasil",
    envLabel: "Ambiente:",
    roleCcsFull: "Tech Lead",
    roleSafewebFull: "Full Stack Engineer",
    roleSeniorFull: "Senior Software Engineer",
    titleHome: "Guilherme Bonato — Engenheiro de Software Sênior",
    descHome:
        "Portfólio de Guilherme Bonato, Engenheiro de Software Sênior e Arquiteto de Soluções. Especialista em .NET, Node.js, Python, Clean Architecture e DDD.",
    title404: "Página não encontrada — Guilherme Bonato",
    desc404: "A página que você procurou não existe.",
    err404Title: "Página não encontrada",
    err404Text: "O endereço que você acessou não existe ou foi movido.",
    err404Back: "<i class='fas fa-arrow-left me-2' aria-hidden='true'></i>Voltar para o início",
    skipLink: "Pular para o conteúdo",

    // Navbar
    downloadPDF: "Baixar PDF",
    navToggle: "Abrir menu de navegação",
    langLabel: "Idioma",
    navAbout: "Sobre",
    navEducation: "Formação",
    navCertificates: "Certificados",
    navExperience: "Trajetória",
    navVentures: "Empreitadas",
    navTech: "Tecnologias",
    navPortfolio: "Portfólio",
    navGithub: "GitHub",
    navContact: "Contato",

    // Sobre
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
    ventureTitle: "Empreitadas Próprias",
    ventureSubtitle: "Projetos e empresas que toquei por conta própria, em paralelo às posições em empresas",
    expBadgeCcs: "Out de 2016 – Jun de 2021",
    expDuration1:
        "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>4 anos e 9 meses",
    expBadgeSw: "Jan de 2022 – Nov de 2023",
    expDuration2:
        "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>1 ano e 11 meses",
    expBadgeSka: "Dez de 2023 – Mai de 2025",
    expDuration3:
        "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>1 ano e 5 meses",
    expBadgeFri: "Jun de 2025 – Jul de 2025",
    expDurationFri:
        "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>2 meses (Layoff)",
    expBadgeGoto: "Fev 2026 – Ago 2026",
    expDurationGoto:
        "<i class='fas fa-hourglass-half text-secondary me-1' aria-hidden='true'></i>6 meses",
    expCurrentBadge: "<i class='fas fa-star me-1 text-warning' aria-hidden='true'></i>Jan 2022 – Atual",
    expCurrent: "<i class='fas fa-bolt me-1' aria-hidden='true'></i>Em andamento — empresa própria",
    roleAwl: "CEO & Arquiteto de Soluções",
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

    // Portfólio
    portfolioTitle: "Portfólio",
    portfolioFilterAria: "Filtrar projetos por categoria",
    filterAll: "Todos",
    filterBackend: "Back-End",
    filterFrontend: "Front-End &amp; Full-Stack",
    filterPython: "Python &amp; Tools",
    portfolioEmpty: "Nenhum projeto nesta categoria.",
    projAmbev:
        "Sistema de vendas com .NET 8, Clean Architecture, DDD e CQRS. PostgreSQL (write), MongoDB (read) e Kafka.",
    projTracker:
        "API de rastreamento de visitas com Node.js, Express, TypeScript e PostgreSQL. Contador atômico e thread-safe.",
    projEf6: "Template base para APIs RESTful utilizando .NET Core.",
    projAngularHub: "Aplicação full-stack completa para gerenciamento de produtos e usuários.",
    projVueCasa: "Dashboard interativo desenvolvido com Vue.js, TypeScript e Vite.",
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
    visitFootnote: "Processado via Cloudflare &amp; PostgreSQL",
    visitOffline: "Estatísticas temporariamente offline",

    // Modais - genéricos
    close: "Fechar",
    modalActivities: "Principais Atividades &amp; Impactos:",
    modalChallenges: "Principais Desafios &amp; Conquistas:",
    modalSolutions: "Soluções e Infraestrutura Implementadas:",
    modalTech: "Tecnologias Utilizadas:",
    modalArchPoints: "Como foi construído:",

    // Modais de arquitetura dos projetos
    arqPortDesc:
        "Portfólio estático, sem servidor de aplicação: o Vite gera o bundle e o vite-ssg prerenderiza a página, então o HTML já chega pronto ao navegador e aos buscadores.",
    arqPortB1: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Prerender:</strong> vite-ssg roda a SPA no build e grava o HTML final; os modais ficam no DOM com <em>v-show</em> em vez de <em>v-if</em>, para o conteúdo ser indexado mesmo fechado.",
    arqPortB2: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Tema por tokens:</strong> Tailwind CSS 4 com as cores em custom properties, redefinidas na classe <em>.dark</em> — trocar de tema não recarrega folha de estilo nenhuma.",
    arqPortB3: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>i18n verificado no build:</strong> um script compara PT e EN, acusa chave órfã e texto literal esquecido no componente; erro derruba o deploy antes de publicar.",
    arqAwlDesc:
        "Plataforma da Astral Wave: marketplace e selo, com a Cloudflare na frente de tudo e um back-end dividido por afinidade de carga.",
    arqAwlB1: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Borda como gateway:</strong> DNS e tráfego na Cloudflare, com WAF e CDN respondendo antes da origem — baixa latência global e mitigação de DDoS fora da aplicação.",
    arqAwlB2: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Back-end poliglota:</strong> .NET Core no processamento crítico e nas regras de domínio, Node.js nas APIs leves de I/O e Go nos serviços de alta concorrência.",
    arqAwlB3: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Pagamento e entrega:</strong> checkout em Pix, com webhook confirmando o pedido e disparando a liberação automática dos arquivos WAV.",
    arqMoneyDesc:
        "PWA de finanças pessoais: SPA em Vue conversando com uma API Express, com um bot de Telegram como segunda porta de entrada.",
    arqMoneyB1: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Front instalável:</strong> PWA em Vue e TypeScript, com Vite no build e Tailwind na interface — dashboard pensado para uso diário no celular.",
    arqMoneyB2: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>API e dados:</strong> Express sobre PostgreSQL cobrindo transações, contas, assinaturas, investimentos e empréstimos.",
    arqMoneyB3: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Bot de Telegram:</strong> lançamentos rápidos por mensagem, batendo na mesma API do app; tudo containerizado com Docker.",
    arqAmbevDesc:
        "Sistema de vendas em .NET 8 com CQRS: a escrita e a leitura usam bancos diferentes, sincronizados por eventos no Kafka.",
    arqAmbevB1: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Clean Architecture e DDD:</strong> domínio isolado de infraestrutura, com as regras de negócio livres de dependência de framework ou banco.",
    arqAmbevB2: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>CQRS com bancos separados:</strong> PostgreSQL no lado de escrita, MongoDB no de leitura — cada um modelado para o seu acesso.",
    arqAmbevB3: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Kafka:</strong> os eventos de venda propagam a mudança do lado de escrita para o de leitura, mantendo a consistência eventual.",
    arqEf6Desc:
        "Template base para APIs RESTful em .NET Core: o esqueleto que se repete a cada projeto novo, já montado.",
    arqEf6B1: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Camadas prontas:</strong> separação entre controllers, serviços e acesso a dados, para o projeto novo começar com a estrutura de pastas resolvida.",
    arqEf6B2: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Entity Framework:</strong> mapeamento e migrações configurados sobre SQL, com o contexto isolado da camada de negócio.",
    arqEf6B3: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Ponto de partida:</strong> serve como esqueleto de CRUD RESTful — clonar, renomear e trocar as entidades.",
    arqAnhDesc:
        "Full-stack de gerenciamento de produtos e usuários: SPA Angular consumindo uma API Express, com MySQL atrás.",
    arqAnhB1: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Front em Angular:</strong> SPA com TypeScript e Bootstrap, com as telas de produto e usuário organizadas por módulo.",
    arqAnhB2: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>API em Express:</strong> rotas REST em Node.js e TypeScript, com a camada de acesso ao MySQL separada dos handlers.",
    arqAnhB3: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>CRUD completo:</strong> cadastro, edição, listagem e remoção nas duas entidades, com validação nas duas pontas.",
    arqCarnesDesc:
        "Dashboard interativo para uma casa de carnes: front em Vue com Vite, servido por uma API Express sobre MySQL.",
    arqCarnesB1: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Front em Vue e Vite:</strong> SPA em TypeScript, com o build rápido do Vite e componentes por área do dashboard.",
    arqCarnesB2: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>API em Express:</strong> Node.js e TypeScript expondo os dados que alimentam os painéis.",
    arqCarnesB3: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>MySQL:</strong> modelagem relacional dos produtos e movimentos que o dashboard consolida.",
    arqNotionDesc:
        "Coleção de ícones para o Notion publicada como página estática: sem build, sem dependência, só arquivos servidos.",
    arqNotionB1: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Estático puro:</strong> HTML, CSS e JavaScript sem framework nem etapa de build — abre direto no navegador.",
    arqNotionB2: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Bootstrap:</strong> grid e componentes cuidando do layout responsivo da galeria.",
    arqNotionB3: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Uso no Notion:</strong> cada ícone tem URL própria, para colar direto no campo de ícone da página.",
    arqPyCrudDesc:
        "CRUD de produtos em desktop: interface PyQt5 falando direto com o MySQL, sem camada web no meio.",
    arqPyCrudB1: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Interface PyQt5:</strong> janelas e formulários montados em Qt, com a validação junto do widget.",
    arqPyCrudB2: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Acesso ao MySQL:</strong> as quatro operações do CRUD em consultas parametrizadas, sem ORM.",
    arqPyCrudB3: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Aplicação local:</strong> roda na máquina do usuário e conecta ao banco pela rede — sem servidor de aplicação.",
    arqPyImgDesc:
        "Conversor de imagens com upscale para 4K: ferramenta de desktop em Tkinter, pensada para lote.",
    arqPyImgB1: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Interface Tkinter:</strong> biblioteca da própria biblioteca padrão do Python, sem dependência gráfica externa.",
    arqPyImgB2: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Conversão e upscale:</strong> troca de formato e redimensionamento até 4K, preservando a proporção original.",
    arqPyImgB3: "<i class='fas fa-check-circle text-brand me-2' aria-hidden='true'></i><strong>Processamento em lote:</strong> a fila aceita vários arquivos de uma vez, com o progresso visível na janela.",
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
        "Atuação estratégica em segurança da informação, alocado em projeto crítico de modernização e damage control na infraestrutura da <strong>NSTECH</strong>.",
    gotoB1: "<i class='fas fa-shield-alt text-danger me-2' aria-hidden='true'></i><strong>Resposta a incidentes:</strong> atuação técnica imediata após ataque hacker, mitigando brechas críticas (como <em>SQL Injection</em>).",
    gotoB2: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i><strong>Cultura DevSecOps:</strong> implementação de auditorias ativas de código e introdução da filosofia <em>Secure by Design</em>.",
    gotoB3: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i><strong>Modernização arquitetural:</strong> transição de um sistema legado altamente acoplado (monolito) para um ecossistema distribuído de <strong>microsserviços em .NET</strong>.",
    gotoB4: "<i class='fas fa-check-circle text-primary me-2' aria-hidden='true'></i><strong>Integridade de dados:</strong> reestruturação da segurança nas pontas da aplicação para garantir blindagem corporativa.",

    // Modal Astral Wave
    awlDate: "Jan 2022 – Atualmente",
    awlDesc:
        "Fundei e lidero a Astral Wave, marketplace e selo brasileiro de música eletrônica, respondendo pelo negócio e pela engenharia. Defino a estratégia de produto e desenho a arquitetura <em>edge-first</em> por trás dela: DJs compram WAV com qualidade de pista, pagam via Pix e baixam na hora, enquanto os artistas recebem repasse direto e transparente.",
    awlB1: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Estratégia de borda e segurança (Cloudflare):</strong> gestão de tráfego e DNS com a Cloudflare como gateway principal, com WAF avançado e CDN para baixa latência global e mitigação de DDoS.",
    awlB2: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Pagamentos e entrega digital:</strong> checkout nativo em Pix, com confirmação de pedido por webhook e entrega automatizada do WAV — sem cartão internacional nem conversão de moeda.",
    awlB3: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Back-end e microsserviços:</strong> arquitetura poliglota desenhada por eficiência — .NET Core no processamento crítico e nas regras de domínio (DDD), Node.js em APIs leves de I/O e Go nos microsserviços de alta concorrência.",
    awlB4: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Ecossistema front-end:</strong> SPAs em React para os painéis administrativos complexos e Vue.js nas interfaces progressivas, com foco estrito em Core Web Vitals.",
    awlB5: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Infraestrutura e containerização:</strong> padronização de dev e produção com Docker, garantindo imutabilidade e consistência, e orquestração pensada para deploys rápidos e escala horizontal.",
    awlB6: "<i class='fas fa-check-circle text-success me-2' aria-hidden='true'></i><strong>Engenharia de software e dados:</strong> modelagem relacional (SQL) voltada a performance e Clean Architecture aplicada com rigor, desacoplando domínio de infraestrutura.",
    awlBtnSite: "<i class='fas fa-arrow-up-right-from-square me-2' aria-hidden='true'></i> Acessar o site",
    awlBtnLinkedin: "<i class='fab fa-linkedin me-2' aria-hidden='true'></i> LinkedIn da empresa",

    // Modal LoginHub
    lhWhat: "O que é este projeto?",
    lhSecTitle: "Segurança",
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
    } as const;
