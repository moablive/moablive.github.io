import { computed, ref } from "vue";

/**
 * Substitui o modal do Bootstrap. Um único modal aberto por vez, identificado
 * por id — o mesmo contrato que o data-bs-target tinha, sem a dependência.
 *
 * O estado vive no módulo porque o prerender roda uma vez só e começa fechado;
 * não há vazamento entre requisições como haveria num servidor de verdade.
 */
const modalAtivo = ref<string | null>(null);
/** Elemento que abriu o modal, para devolver o foco ao fechar. */
let gatilho: HTMLElement | null = null;

export function useModal() {
    function abrir(id: string, event?: Event) {
        gatilho = (event?.currentTarget as HTMLElement) ?? null;
        modalAtivo.value = id;
        document.body.classList.add("modal-aberto");
    }

    function fechar() {
        modalAtivo.value = null;
        document.body.classList.remove("modal-aberto");
        gatilho?.focus();
        gatilho = null;
    }

    const estaAberto = (id: string) => computed(() => modalAtivo.value === id);

    return { modalAtivo, abrir, fechar, estaAberto };
}
