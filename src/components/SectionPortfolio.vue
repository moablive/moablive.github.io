<script setup lang="ts">
import { computed, ref } from "vue";
import { projetos, filtros } from "@/data/projetos";
import { useLabel } from "@/composables/useLabel";
import SecaoTitulo from "./SecaoTitulo.vue";

const { lab } = useLabel();
const filtroAtivo = ref<string>("all");

const visiveis = computed(() =>
    filtroAtivo.value === "all"
        ? projetos
        : projetos.filter((p) => (p.cats as readonly string[]).includes(filtroAtivo.value)),
);
</script>

<template>
    <section id="portfolio" class="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <SecaoTitulo numero="05" :titulo="$t('portfolioTitle')">
            <template #acoes>
                <div class="flex flex-wrap gap-2" role="group" :aria-label="$t('portfolioFilterAria')">
                    <button
                        v-for="filtro in filtros"
                        :key="filtro.id"
                        type="button"
                        class="hard-2 px-3 py-2 font-mono text-[11px] font-bold tracking-wider uppercase transition-transform hover:-translate-y-0.5"
                        :class="filtroAtivo === filtro.id ? 'bg-ink text-sun' : 'bg-paper-2'"
                        :aria-pressed="filtroAtivo === filtro.id"
                        @click="filtroAtivo = filtro.id"
                        v-html="$t(filtro.labelKey)"
                    ></button>
                </div>
            </template>
        </SecaoTitulo>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
            <article
                v-for="(projeto, i) in visiveis"
                :key="projeto.id"
                class="hard flex flex-col transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_var(--color-ink)]"
                :class="i === 0 ? 'bg-ink text-paper' : 'bg-paper-2'"
            >
                <div
                    class="flex items-center justify-between border-b-[3px] border-ink px-5 py-4"
                    :class="i === 0 ? 'border-sun bg-ink' : 'bg-paper'"
                >
                    <img :src="projeto.logo" :alt="projeto.logoAlt" class="h-8 w-8" loading="lazy" />
                    <span class="label-mono" :class="i === 0 ? 'text-sun' : 'text-ink-soft'">
                        {{ String(i + 1).padStart(2, "0") }}
                    </span>
                </div>

                <div class="flex flex-1 flex-col p-5">
                    <h3 class="font-display text-lg leading-tight tracking-[-0.02em]">{{ lab(projeto.titulo) }}</h3>
                    <p class="mt-3 text-sm leading-relaxed" :class="i === 0 ? 'text-paper/80' : 'text-ink-soft'">
                        {{ $t(projeto.descKey) }}
                    </p>

                    <img :src="projeto.stack" :alt="projeto.stackAlt" class="mt-5 max-w-full" loading="lazy" />

                    <div class="mt-auto pt-5">
                        <a
                            :href="projeto.href"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="hard-2 block px-4 py-2.5 text-center font-mono text-xs font-bold transition-transform hover:-translate-y-0.5"
                            :class="i === 0 ? 'border-sun bg-sun text-ink' : 'bg-paper'"
                        >
                            <span v-if="projeto.ctaKey" v-html="$t(projeto.ctaKey)"></span>
                            <span v-else><i class="fab fa-github mr-2" aria-hidden="true"></i>GitHub</span>
                        </a>
                    </div>
                </div>
            </article>
        </div>

        <p v-if="!visiveis.length" class="label-mono mt-8 text-center text-ink-soft">{{ $t("portfolioEmpty") }}</p>
    </section>
</template>
