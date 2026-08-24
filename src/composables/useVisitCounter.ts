import { ref } from "vue";

const API_BASE = "https://portfolio-track-visit.astralwavelabel.com/api";
const TIMEOUT_MS = 8000;

/**
 * Estado no módulo, de propósito: o número aparece em dois lugares (faixa de
 * números e seção do rastreador) e não pode registrar duas visitas por carga.
 */
const total = ref<number | null>(null);
const carregando = ref(true);
const erro = ref(false);
let iniciado = false;

async function fetchJson(url: string, options: RequestInit = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status} em ${url}`);
        return await response.json();
    } finally {
        clearTimeout(timer);
    }
}

/**
 * Registra a visita e devolve o total. Se o POST falhar (rede, 5xx, timeout),
 * cai para o GET só-leitura — assim o número ainda aparece. Só reporta erro se
 * as duas rotas falharem. Roda uma única vez, e apenas no cliente.
 */
export function useVisitCounter() {
    if (!iniciado && typeof window !== "undefined") {
        iniciado = true;
        void (async () => {
            try {
                const data = await fetchJson(`${API_BASE}/track-visit`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                });
                total.value = data.total_geral_visitas ?? 0;
            } catch (postError) {
                console.warn("[visitas] POST falhou, tentando somente leitura:", postError);
                try {
                    const data = await fetchJson(`${API_BASE}/statistics`);
                    total.value = data.total_geral_visitas ?? 0;
                } catch (getError) {
                    erro.value = true;
                    console.error("[visitas] API indisponível:", getError);
                }
            } finally {
                carregando.value = false;
            }
        })();
    }

    return { total, carregando, erro };
}
