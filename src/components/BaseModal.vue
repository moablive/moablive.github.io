<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import { useModal } from "@/composables/useModal";

const props = defineProps<{
    id: string;
    titulo: string;
    icone?: string;
    /** Cor da faixa do cabeçalho. */
    tom?: "ink" | "accent" | "sun";
}>();

const { modalAtivo, fechar } = useModal();
const caixa = ref<HTMLElement | null>(null);

// O conteúdo fica sempre no HTML (só escondido) para o prerender entregá-lo
// aos buscadores — era o comportamento do modal do Bootstrap e vale manter.
watch(
    () => modalAtivo.value === props.id,
    async (aberto) => {
        if (!aberto) return;
        await nextTick();
        caixa.value?.focus();
    },
);

function aoTeclar(event: KeyboardEvent) {
    if (event.key === "Escape") fechar();
}

const TONS = {
    ink: "bg-ink text-paper",
    accent: "bg-accent text-white",
    sun: "bg-sun text-ink",
} as const;
</script>

<template>
    <div
        :id="id"
        v-show="modalAtivo === id"
        class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/70 p-4 sm:p-8"
        role="presentation"
        @click.self="fechar"
        @keydown="aoTeclar"
    >
        <div
            ref="caixa"
            class="hard lift my-auto w-full max-w-3xl bg-paper-2"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="`${id}-titulo`"
            tabindex="-1"
        >
            <div class="flex items-start justify-between gap-4 border-b-[3px] border-ink px-6 py-4" :class="TONS[tom ?? 'ink']">
                <h2 :id="`${id}-titulo`" class="font-display text-lg leading-tight tracking-tight sm:text-xl">
                    <i v-if="icone" class="fas mr-3" :class="icone" aria-hidden="true"></i>{{ titulo }}
                </h2>
                <button
                    type="button"
                    class="hard-2 shrink-0 bg-paper-2 px-3 py-1 font-mono text-xs text-ink transition-transform hover:-translate-y-0.5"
                    :aria-label="$t('close')"
                    @click="fechar"
                >
                    ✕
                </button>
            </div>

            <div class="px-6 py-7 sm:px-9 sm:py-9">
                <slot />
            </div>
        </div>
    </div>
</template>
