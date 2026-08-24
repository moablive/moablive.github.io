<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import { useModal } from "@/composables/useModal";

const props = defineProps<{ id: string; titulo: string; icone?: string }>();

const { modalAtivo, fechar } = useModal();
const caixa = ref<HTMLElement | null>(null);

// O conteúdo fica sempre no HTML (v-show, não v-if) para o prerender entregá-lo
// aos buscadores.
watch(
    () => modalAtivo.value === props.id,
    async (aberto) => {
        if (!aberto) return;
        await nextTick();
        caixa.value?.focus();
    },
);
</script>

<template>
    <div
        :id="id"
        v-show="modalAtivo === id"
        class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/50 p-4 backdrop-blur-sm sm:p-8"
        role="presentation"
        @click.self="fechar"
    >
        <div
            ref="caixa"
            class="glass my-auto w-full max-w-3xl rounded-[1.75rem]"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="`${id}-titulo`"
            tabindex="-1"
        >
            <div class="flex items-start justify-between gap-4 border-b border-hairline px-6 py-5 sm:px-8">
                <h2 :id="`${id}-titulo`" class="flex items-center gap-3 text-base leading-snug font-bold tracking-[-0.02em] sm:text-lg">
                    <span
                        v-if="icone"
                        class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-linear-100 from-fill to-fill-2 text-sm text-white"
                    >
                        <i class="fas" :class="icone" aria-hidden="true"></i>
                    </span>
                    {{ titulo }}
                </h2>
                <button
                    type="button"
                    class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline text-ink-2 transition-colors hover:border-brand hover:text-brand"
                    :aria-label="$t('close')"
                    @click="fechar"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                        <path d="M4 4l8 8M12 4l-8 8" />
                    </svg>
                </button>
            </div>

            <div class="px-6 py-7 sm:px-8 sm:py-8">
                <slot />
            </div>
        </div>
    </div>
</template>
