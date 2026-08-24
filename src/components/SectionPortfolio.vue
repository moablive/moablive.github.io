<script setup lang="ts">
import { computed, ref } from "vue";
import { projetos, filtros } from "@/data/projetos";
import { useLabel } from "@/composables/useLabel";

const { lab } = useLabel();
const filtroAtivo = ref<string>("all");

const visiveis = computed(() =>
    filtroAtivo.value === "all"
        ? projetos
        : projetos.filter((p) => (p.cats as readonly string[]).includes(filtroAtivo.value)),
);
</script>

<template>
    <section id="portfolio" class="py-5 bg-light-custom">
        <div class="container">
            <h2 class="section-heading text-center mb-4">{{ $t("portfolioTitle") }}</h2>

            <div
                class="portfolio-filters d-flex justify-content-center flex-wrap gap-2 mb-5"
                role="group"
                :aria-label="$t('portfolioFilterAria')"
            >
                <button
                    v-for="filtro in filtros"
                    :key="filtro.id"
                    type="button"
                    class="btn btn-filter"
                    :class="{ active: filtroAtivo === filtro.id }"
                    :aria-pressed="filtroAtivo === filtro.id"
                    @click="filtroAtivo = filtro.id"
                    v-html="$t(filtro.labelKey)"
                ></button>
            </div>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="portfolio-grid" aria-live="polite">
                <div class="col portfolio-item" v-for="projeto in visiveis" :key="projeto.id">
                    <div class="card h-100">
                        <div class="portfolio-image-wrapper">
                            <img
                                :src="projeto.logo"
                                class="card-img-top portfolio-logo-main"
                                :alt="projeto.logoAlt"
                                loading="lazy"
                            />
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h3 class="card-title h5">{{ lab(projeto.titulo) }}</h3>
                            <p class="card-text">{{ $t(projeto.descKey) }}</p>
                            <div class="my-3">
                                <img :src="projeto.stack" :alt="projeto.stackAlt" loading="lazy" />
                            </div>
                            <div class="mt-auto">
                                <a
                                    :href="projeto.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="btn w-100"
                                    :class="`btn-${projeto.ctaVariante ?? 'primary'}`"
                                >
                                    <template v-if="projeto.ctaKey"><span v-html="$t(projeto.ctaKey)"></span></template>
                                    <template v-else>
                                        <i class="fab fa-github me-2" aria-hidden="true"></i>GitHub
                                    </template>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p class="text-center text-muted mt-4 mb-0" v-if="!visiveis.length">{{ $t("portfolioEmpty") }}</p>
        </div>
    </section>
</template>
