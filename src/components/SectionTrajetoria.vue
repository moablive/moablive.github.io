<script setup lang="ts">
import { cargos } from "@/data/trajetoria";
import { useLabel } from "@/composables/useLabel";
import { useModal } from "@/composables/useModal";
import SecaoTitulo from "./SecaoTitulo.vue";

const { lab } = useLabel();
const { abrir } = useModal();
</script>

<template>
    <section id="trajetoria" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="03" :titulo="$t('expTitle')" />
        <p class="-mt-6 mb-10 text-sm text-ink-3">{{ $t("expSubtitle") }}</p>

        <!-- Linha do tempo: trilho vertical com marcadores. -->
        <ol class="relative flex flex-col gap-4 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-hairline sm:before:left-[9px]">
            <li v-for="cargo in cargos" :key="cargo.id" class="relative pl-8 sm:pl-10">
                <span
                    class="absolute top-7 left-0 h-4 w-4 rounded-full border-2 border-canvas"
                    :class="cargo.atual ? 'bg-linear-100 from-brand to-brand-2' : 'bg-ink-3/40'"
                    aria-hidden="true"
                ></span>

                <button
                    type="button"
                    class="glass lift-hover grid w-full grid-cols-1 items-center gap-4 rounded-3xl p-5 text-left sm:p-6 md:grid-cols-[8.5rem_1fr_auto]"
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
                            class="rounded-full border border-hairline px-2.5 py-1 font-mono text-[11px] text-ink-2"
                            >{{ lab(tag) }}</span
                        >
                    </span>
                </button>
            </li>
        </ol>
    </section>
</template>
