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
    <section id="portfolio" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="05" :titulo="$t('portfolioTitle')">
            <template #acoes>
                <div class="glass flex flex-wrap gap-1 rounded-full p-1" role="group" :aria-label="$t('portfolioFilterAria')">
                    <button
                        v-for="filtro in filtros"
                        :key="filtro.id"
                        type="button"
                        class="rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors"
                        :class="
                            filtroAtivo === filtro.id
                                ? 'bg-linear-100 from-brand to-brand-2 text-white'
                                : 'text-ink-2 hover:text-ink'
                        "
                        :aria-pressed="filtroAtivo === filtro.id"
                        @click="filtroAtivo = filtro.id"
                        v-html="$t(filtro.labelKey)"
                    ></button>
                </div>
            </template>
        </SecaoTitulo>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
            <article
                v-for="projeto in visiveis"
                :key="projeto.id"
                class="glass lift-hover flex flex-col overflow-hidden rounded-3xl"
            >
                <div class="flex items-center gap-3 border-b border-hairline px-5 py-4">
                    <img :src="projeto.logo" :alt="projeto.logoAlt" class="h-8 w-8" loading="lazy" />
                    <h3 class="text-[15px] leading-snug font-bold tracking-[-0.02em]">{{ lab(projeto.titulo) }}</h3>
                </div>

                <div class="flex flex-1 flex-col p-5">
                    <p class="text-sm leading-relaxed text-ink-2">{{ $t(projeto.descKey) }}</p>
                    <img :src="projeto.stack" :alt="projeto.stackAlt" class="mt-5 max-w-full" loading="lazy" />

                    <div class="mt-auto pt-5">
                        <a
                            :href="projeto.href"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="block rounded-full border border-hairline px-4 py-2.5 text-center text-[13px] font-semibold transition-colors hover:border-brand hover:text-brand"
                        >
                            <span v-if="projeto.ctaKey" v-html="$t(projeto.ctaKey)"></span>
                            <span v-else><i class="fab fa-github mr-2" aria-hidden="true"></i>GitHub</span>
                        </a>
                    </div>
                </div>
            </article>
        </div>

        <p v-if="!visiveis.length" class="mt-10 text-center text-sm text-ink-3">{{ $t("portfolioEmpty") }}</p>
    </section>
</template>
