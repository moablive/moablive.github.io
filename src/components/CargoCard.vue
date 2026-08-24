<script setup lang="ts">
import type { Cargo } from "@/data/types";
import { useLabel } from "@/composables/useLabel";
import { useModal } from "@/composables/useModal";

defineProps<{ cargo: Cargo }>();

const { lab } = useLabel();
const { abrir } = useModal();
</script>

<template>
    <!-- O .glass fica no container, não no botão: os atalhos precisam ficar fora
         dele, porque link aninhado em botão é inválido e quebra o teclado. -->
    <div class="glass lift-hover overflow-hidden rounded-3xl">
        <button
            type="button"
            class="grid w-full grid-cols-1 items-center gap-4 p-5 text-left sm:p-6 md:grid-cols-[8.5rem_1fr_auto]"
            @click="abrir(cargo.modalId, $event)"
        >
            <span class="label-mono text-brand" v-html="lab(cargo.periodo)"></span>

            <span>
                <span class="block text-base font-bold tracking-[-0.02em] sm:text-lg">{{ lab(cargo.cargo) }}</span>
                <span class="mt-1 block text-sm text-ink-2">{{ cargo.empresa }}</span>
                <span class="label-mono mt-1.5 block text-ink-3" v-html="$t(cargo.duracaoKey)"></span>
            </span>

            <span class="flex flex-wrap gap-2 md:justify-end">
                <span
                    v-for="(tag, i) in cargo.tags"
                    :key="i"
                    class="rounded-full px-2.5 py-1 font-mono text-[11px]"
                    :class="
                        cargo.paralelo && i === 0
                            ? 'bg-linear-100 from-fill to-fill-2 text-white'
                            : 'border border-hairline text-ink-2'
                    "
                    >{{ lab(tag) }}</span
                >
            </span>
        </button>

        <!-- Atalhos para os links do modal, sem precisar abri-lo. -->
        <div v-if="cargo.modal.links" class="flex flex-wrap gap-2 border-t border-hairline px-5 py-4 sm:px-6">
            <a
                v-for="link in cargo.modal.links"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full border border-hairline px-4 py-2 text-[12px] font-semibold text-ink-2 transition-colors hover:border-brand hover:text-brand"
                v-html="$t(link.i18n)"
            ></a>
        </div>
    </div>
</template>
