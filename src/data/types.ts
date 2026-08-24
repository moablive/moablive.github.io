/** Texto que pode ser literal (nomes de tecnologia) ou uma chave de tradução. */
export type Label = string | { i18n: string };

export interface Projeto {
    id: string;
    /** Título literal, ou chave quando precisa ser traduzido. */
    titulo: Label;
    descKey: string;
    /** Logo grande do card (simpleicons). */
    logo: string;
    logoAlt: string;
    /** Faixa de ícones de stack (skillicons). */
    stack: string;
    stackAlt: string;
    href: string;
    /** Chave do rótulo do botão; ausente = "GitHub". */
    ctaKey?: string;
    ctaVariante?: "primary" | "success";
    /** Categorias do filtro. */
    cats: Array<"backend" | "frontend" | "python">;
}

export interface Certificado {
    id: string;
    tituloKey: string;
    instituicao: string;
    instituicaoIcone: string;
    marcaDagua: string;
    dataKey: string;
    credencial?: string;
    href: string;
    ctaKey: string;
}

export interface Formacao {
    id: string;
    sigla: string;
    cursoKey: string;
    instituicao: string;
    siteInstituicao: string;
    periodoKey: string;
    concluido: boolean;
    /** Link do diploma; ausente = leva ao site da instituição. */
    credencial?: string;
    credencialAriaKey: string;
}

export interface Cargo {
    id: string;
    modalId: string;
    periodo: Label;
    icone: string;
    cargo: Label;
    empresa: string;
    duracaoKey: string;
    tags: Label[];
    atual?: boolean;
    /** Forma extensa do cargo, usada no título do modal ("Senior Software Eng." -> "...Engineer"). */
    cargoCompleto?: Label;
    modal: {
        tituloIcone: string;
        dataKey: string;
        descKey: string;
        listaTituloKey: string;
        itensKeys: string[];
        techTituloKey: string;
        techs: Array<{ texto: Label; variante: string }>;
        destaque?: "primary" | "success";
        /** Link extra no cabeçalho da data (só a Astral Wave usa). */
        site?: { href: string; label: string };
    };
}

export interface GrupoTech {
    id: string;
    tituloKey: string;
    icones: string;
    alt: string;
}
