import type { Cargo } from "./types";

/**
 * Cada cargo carrega junto o conteúdo do seu modal — antes eram 6 arquivos HTML
 * quase idênticos em src/modals/.
 *
 * A lista é dividida em duas: `cargos` são as posições em empresas e
 * `empreitadas`, os projetos próprios. Elas viram seções distintas na página.
 */
export const cargos: Cargo[] = [
    {
        id: "gotobiz",
        modalId: "modalGotoBiz",
        periodo: { i18n: "expBadgeGoto" },
        icone: "fa-user-shield",
        cargo: "Security Champion",
        empresa: "GotoBiz (NSTECH)",
        duracaoKey: "expDurationGoto",
        tags: [".NET", "Microservices", { i18n: "tagSecurity" }],
        modal: {
            tituloIcone: "fa-user-shield",
            dataKey: "gotoDate",
            descKey: "gotoDesc",
            listaTituloKey: "modalChallenges",
            itensKeys: ["gotoB1", "gotoB2", "gotoB3", "gotoB4"],
            techTituloKey: "modalTechConcepts",
            techs: [
                { texto: ".NET", variante: "bg-dark" },
                { texto: "Microservices", variante: "bg-dark" },
                { texto: "Cybersecurity", variante: "bg-danger shadow-sm" },
                { texto: "DevSecOps", variante: "bg-danger shadow-sm" },
                { texto: "C#", variante: "bg-primary" },
                { texto: "SQL Server", variante: "bg-secondary" },
            ],
        },
    },
    {
        id: "frigelar",
        modalId: "modalFrigelar",
        periodo: { i18n: "expBadgeFri" },
        icone: "fa-snowflake",
        cargo: "Senior Software Eng.",
        empresa: "Frigelar",
        duracaoKey: "expDurationFri",
        tags: ["React/Vue", "Kafka"],
        cargoCompleto: { i18n: "roleSeniorFull" },
        modal: {
            tituloIcone: "fa-snowflake",
            dataKey: "friDate",
            descKey: "friDesc",
            listaTituloKey: "modalActivities",
            itensKeys: ["friB1", "friB2", "friB3", "friB4"],
            techTituloKey: "modalTech",
            techs: [
                { texto: "React", variante: "bg-primary" },
                { texto: "Vue.js", variante: "bg-primary" },
                { texto: "Apache Kafka", variante: "bg-primary" },
                { texto: ".NET", variante: "bg-secondary" },
                { texto: { i18n: "tagMicroservices" }, variante: "bg-secondary" },
            ],
        },
    },
    {
        id: "ska",
        modalId: "modalSKA",
        periodo: { i18n: "expBadgeSka" },
        icone: "fa-cogs",
        cargo: "Senior Software Eng.",
        empresa: "SKA Automação",
        duracaoKey: "expDuration3",
        tags: ["C#", "SQL", "Web APIs"],
        cargoCompleto: { i18n: "roleSeniorFull" },
        modal: {
            tituloIcone: "fa-cogs",
            dataKey: "skaDate",
            descKey: "skaDesc",
            listaTituloKey: "modalActivities",
            itensKeys: ["skaB1", "skaB2", "skaB3", "skaB4"],
            techTituloKey: "modalTech",
            techs: [
                { texto: "C#", variante: "bg-primary" },
                { texto: ".NET", variante: "bg-primary" },
                { texto: "SQL", variante: "bg-primary" },
                { texto: "DDD", variante: "bg-secondary" },
                { texto: "SOLID", variante: "bg-secondary" },
                { texto: "Clean Architecture", variante: "bg-secondary" },
            ],
        },
    },
    {
        id: "safeweb",
        modalId: "modalSafeweb",
        periodo: { i18n: "expBadgeSw" },
        icone: "fa-shield-alt",
        cargo: "Full Stack Engineer",
        empresa: "Safeweb Segurança",
        duracaoKey: "expDuration2",
        tags: ["C#", "AngularJS", ".NET"],
        cargoCompleto: { i18n: "roleSafewebFull" },
        modal: {
            tituloIcone: "fa-shield-alt",
            dataKey: "swDate",
            descKey: "swDesc",
            listaTituloKey: "modalActivities",
            itensKeys: ["swB1", "swB2", "swB3", "swB4"],
            techTituloKey: "modalTech",
            techs: [
                { texto: "C#", variante: "bg-primary" },
                { texto: ".NET Core / Framework", variante: "bg-primary" },
                { texto: "AngularJS", variante: "bg-primary" },
                { texto: "SQL Server", variante: "bg-primary" },
                { texto: "Design Patterns", variante: "bg-secondary" },
            ],
        },
    },
    {
        id: "ccs",
        modalId: "modalCCS",
        periodo: { i18n: "expBadgeCcs" },
        icone: "fa-network-wired",
        cargo: "Tech Lead",
        empresa: "CCS Certificadora Sul",
        duracaoKey: "expDuration1",
        tags: ["HTML5", "SQL", { i18n: "tagNetworks" }],
        cargoCompleto: { i18n: "roleCcsFull" },
        modal: {
            tituloIcone: "fa-network-wired",
            dataKey: "ccsDate",
            descKey: "ccsDesc",
            listaTituloKey: "modalActivities",
            itensKeys: ["ccsB1", "ccsB2", "ccsB3", "ccsB4"],
            techTituloKey: "modalTech",
            techs: [
                { texto: "HTML5", variante: "bg-primary" },
                { texto: "CSS3", variante: "bg-primary" },
                { texto: "SQL", variante: "bg-primary" },
                { texto: { i18n: "tagInfra" }, variante: "bg-secondary" },
                { texto: { i18n: "tagTeams" }, variante: "bg-secondary" },
            ],
        },
    },
];

/** Empreitadas próprias, tocadas em paralelo aos empregos — não são CLT. */
export const empreitadas: Cargo[] = [
    {
        id: "astral-wave",
        modalId: "modalAstralWave",
        periodo: { i18n: "expCurrentBadge" },
        icone: "fa-wave-square",
        cargo: { i18n: "roleAwl" },
        empresa: "Astral Wave Label",
        duracaoKey: "expCurrent",
        tags: [{ i18n: "tagSideProject" }, "Go/Node", "Docker"],
        atual: true,
        paralelo: true,
        modal: {
            tituloIcone: "fa-wave-square",
            dataKey: "awlDate",
            descKey: "awlDesc",
            listaTituloKey: "modalSolutions",
            itensKeys: ["awlB1", "awlB2", "awlB3", "awlB4"],
            techTituloKey: "modalTech",
            destaque: "success",
            site: { href: "https://astralwavelabel.com", label: "astralwavelabel.com" },
            techs: [
                { texto: "Go", variante: "bg-dark" },
                { texto: "Node.js", variante: "bg-dark" },
                { texto: ".NET Core", variante: "bg-primary" },
                { texto: "Docker", variante: "bg-primary" },
                { texto: "Cloudflare", variante: "bg-secondary" },
                { texto: "React / Vue", variante: "bg-secondary" },
            ],
        },
    },
];

/** As duas listas juntas, para montar os modais de uma vez só. */
export const todosCargos: Cargo[] = [...empreitadas, ...cargos];
