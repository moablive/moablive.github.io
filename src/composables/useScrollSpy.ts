import { onBeforeUnmount, onMounted, ref } from "vue";

/**
 * Substitui o scrollspy do Bootstrap com IntersectionObserver: marca no menu a
 * seção visível. A faixa de observação fica no terço superior da janela, para
 * a seção "ativa" ser a que o leitor está lendo, não a que acabou de entrar.
 */
export function useScrollSpy(ids: string[]) {
    const ativo = ref<string>("");
    let observador: IntersectionObserver | null = null;

    onMounted(() => {
        const visiveis = new Set<string>();

        observador = new IntersectionObserver(
            (entradas) => {
                for (const entrada of entradas) {
                    if (entrada.isIntersecting) visiveis.add(entrada.target.id);
                    else visiveis.delete(entrada.target.id);
                }
                // Entre as seções na faixa, a primeira na ordem da página vence.
                ativo.value = ids.find((id) => visiveis.has(id)) ?? ativo.value;
            },
            { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
        );

        for (const id of ids) {
            const elemento = document.getElementById(id);
            if (elemento) observador.observe(elemento);
        }
    });

    onBeforeUnmount(() => observador?.disconnect());

    return { ativo };
}
