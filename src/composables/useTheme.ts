import { onMounted, ref } from "vue";

export type Tema = "light" | "dark";
const STORAGE_KEY = "tema";

/**
 * O tema é aplicado antes da pintura por um script inline no index.html —
 * senão quem prefere escuro vê um lampejo branco a cada carga. Aqui só
 * espelhamos o que já está no <html> e cuidamos da troca manual.
 */
const tema = ref<Tema>("light");

function aplicar(valor: Tema) {
    document.documentElement.classList.toggle("dark", valor === "dark");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", valor === "dark" ? "#0a0b12" : "#f6f7fb");
}

export function useTheme() {
    onMounted(() => {
        tema.value = document.documentElement.classList.contains("dark") ? "dark" : "light";
    });

    function alternar() {
        tema.value = tema.value === "dark" ? "light" : "dark";
        aplicar(tema.value);
        try {
            localStorage.setItem(STORAGE_KEY, tema.value);
        } catch {
            /* modo privado: vale só para esta sessão */
        }
    }

    return { tema, alternar };
}
