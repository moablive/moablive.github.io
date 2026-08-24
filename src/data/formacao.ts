import type { Formacao } from "./types";

const DBX = "https://www.dropbox.com/scl/fi";

export const formacoes: Formacao[] = [
    {
        id: "unipds",
        sigla: "PDS",
        cursoKey: "eduCourse0",
        instituicao: "UNIPDS",
        siteInstituicao: "https://unipds.com.br/",
        periodoKey: "eduExpected",
        concluido: false,
        credencialAriaKey: "btnVisitInstAria",
    },
    {
        id: "xpe",
        sigla: "XPE",
        cursoKey: "eduCourse1",
        instituicao: "XP Educação (XPE)",
        siteInstituicao: "https://www.xpeducacao.com.br/",
        periodoKey: "eduExpected",
        concluido: false,
        credencialAriaKey: "btnVisitInstAria",
    },
    {
        id: "pucrs",
        sigla: "PUC",
        cursoKey: "eduCourse2",
        instituicao: "Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)",
        siteInstituicao: "https://portal.pucrs.br/",
        periodoKey: "eduDate1",
        concluido: true,
        credencial: `${DBX}/mcp1ijkizj6hzgfuxh3zg/p-s-gradua-o-em-Desenvolvimento-Full-Stack.pdf?rlkey=ukplg9rosjbm8ilm7j926focs&st=kro372xu&dl=0`,
        credencialAriaKey: "btnViewCredPucAria",
    },
    {
        id: "lasalle",
        sigla: "La Salle",
        cursoKey: "eduCourse3",
        instituicao: "Universidade La Salle",
        siteInstituicao: "https://www.unilasalle.edu.br/canoas",
        periodoKey: "eduDate2",
        concluido: true,
        credencial: `${DBX}/qq3tjq4nv3g6k9y8gze2u/Bacharelado-Ci-ncia-da-Computa-o.pdf?rlkey=5q47mn6tnrj1do7a0t0yj54w4&st=2y2xn363&dl=0`,
        credencialAriaKey: "btnViewCredLasalleAria",
    },
];
