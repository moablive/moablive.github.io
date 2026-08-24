import { useI18n } from "vue-i18n";
import type { Label } from "../data/types";

/**
 * Resolve um Label: string literal passa direto, { i18n } vira tradução.
 * Nomes de tecnologia ("C#", "Docker") não mudam entre idiomas; só o que é
 * texto corrido carrega chave.
 */
export function useLabel() {
    const { t } = useI18n();
    const lab = (value: Label): string => (typeof value === "string" ? value : t(value.i18n));
    return { lab };
}
