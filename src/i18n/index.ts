import { createI18n } from "vue-i18n";
import ptBR from "./pt-BR";
import enUS from "./en-US";

export const DEFAULT_LOCALE = "pt-BR";
export const SUPPORTED_LOCALES = ["pt-BR", "en-US"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

/**
 * O prerender sempre roda em pt-BR — assim o HTML publicado tem conteúdo real
 * para os buscadores. A troca para en-US acontece no cliente, depois da
 * hidratação, para não gerar mismatch.
 */
export const i18n = createI18n({
    legacy: false,
    locale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    messages: { "pt-BR": ptBR, "en-US": enUS },
    // As mensagens contêm marcação (<strong>, <i>) por design e são
    // renderizadas com v-html. Os textos são nossos, não vêm de input.
    warnHtmlMessage: false,
});
