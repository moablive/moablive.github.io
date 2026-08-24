<script setup lang="ts">
import { cargos } from "@/data/trajetoria";
import { useLabel } from "@/composables/useLabel";
import { useModal } from "@/composables/useModal";
import SecaoTitulo from "./SecaoTitulo.vue";

const { lab } = useLabel();
const { abrir } = useModal();
</script>

<template>
    <section id="trajetoria" class="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <SecaoTitulo numero="03" :titulo="$t('expTitle')" />
        <p class="label-mono -mt-3 mb-8 text-ink-soft">{{ $t("expSubtitle") }}</p>

        <div class="flex flex-col gap-4">
            <button
                v-for="cargo in cargos"
                :key="cargo.id"
                type="button"
                class="hard grid w-full grid-cols-1 items-center gap-5 p-6 text-left transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_var(--color-ink)] md:grid-cols-[9rem_1fr_auto]"
                :class="cargo.atual ? 'bg-sun' : 'bg-paper-2'"
                @click="abrir(cargo.modalId, $event)"
            >
                <span class="font-display text-2xl leading-none tracking-[-0.03em]" v-html="lab(cargo.periodo)"></span>

                <span>
                    <span class="block text-lg font-bold tracking-tight">{{ lab(cargo.cargo) }}</span>
                    <span class="label-mono mt-1.5 block text-ink-soft">{{ cargo.empresa }}</span>
                    <span class="label-mono mt-1 block text-ink-soft/70" v-html="$t(cargo.duracaoKey)"></span>
                </span>

                <span class="flex flex-wrap gap-2 md:justify-end">
                    <span
                        v-for="(tag, i) in cargo.tags"
                        :key="i"
                        class="hard-2 px-2.5 py-1 font-mono text-[11px] font-bold"
                        :class="cargo.atual ? 'bg-ink text-sun' : 'bg-paper'"
                        >{{ lab(tag) }}</span
                    >
                </span>
            </button>
        </div>
    </section>
</template>
