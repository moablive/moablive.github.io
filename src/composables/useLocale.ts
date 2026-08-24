import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "../i18n";

const STORAGE_KEY = "lang";

function readStored(): Locale | null {
    try {
        const value = localStorage.getItem(STORAGE_KEY);
        return SUPPORTED_LOCALES.includes(value as Locale) ? (value as Locale) : null;
    } catch {
        return null; // modo privado / storage bloqueado
    }
}

function detectFromBrowser(): Locale {
    return navigator.language?.toLowerCase().startsWith("en") ? "en-US" : DEFAULT_LOCALE;
}

/** Sincroniza o idioma com <html lang>, <title> e a meta description. */
export function useLocale() {
    const { locale, t } = useI18n();

    function setLocale(next: Locale) {
        locale.value = next;
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            /* segue sem persistir */
        }
    }

    function syncDocument(current: string) {
        const titulo = t("titleHome");
        const descricao = t("descHome");

        document.documentElement.setAttribute("lang", current);
        document.title = titulo;

        // Inclui og: e twitter: — sem isto o preview de link continuava em
        // português mesmo com a página em inglês.
        const metas: Array<[string, string]> = [
            ['meta[name="description"]', descricao],
            ['meta[property="og:title"]', titulo],
            ['meta[property="og:description"]', descricao],
            ['meta[property="og:locale"]', current.replace("-", "_")],
            ['meta[name="twitter:title"]', titulo],
            ['meta[name="twitter:description"]', descricao],
        ];
        for (const [seletor, valor] of metas) {
            document.querySelector(seletor)?.setAttribute("content", valor);
        }
    }

    onMounted(() => {
        const initial = readStored() ?? detectFromBrowser();
        if (initial !== locale.value) locale.value = initial;
        syncDocument(locale.value);
    });

    watch(locale, (current) => syncDocument(current as string));

    return { locale, setLocale };
}
