<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useVisitCounter } from "@/composables/useVisitCounter";
import { useModal } from "@/composables/useModal";
import SecaoTitulo from "./SecaoTitulo.vue";

const { total, carregando, erro } = useVisitCounter();
const { locale } = useI18n();
const { abrir } = useModal();

const formatado = computed(() => (total.value === null ? "—" : total.value.toLocaleString(locale.value as string)));
</script>

<template>
    <section id="visitas" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="08" :titulo="$t('visitsTitle')" />

        <div class="glass rounded-[2rem] p-6 sm:p-10">
            <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div class="lg:col-span-7">
                    <!-- Carregando: mantém a altura do número para o bloco não pular. -->
                    <p v-if="carregando" class="flex items-center gap-3 text-ink-3">
                        <span
                            class="h-5 w-5 animate-spin rounded-full border-2 border-hairline border-t-brand"
                            aria-hidden="true"
                        ></span>
                        <span class="text-sm">{{ $t("visitLoading") }}</span>
                    </p>

                    <p v-else-if="erro" class="flex items-center gap-3 text-ink-3">
                        <i class="fas fa-triangle-exclamation text-brand-3" aria-hidden="true"></i>
                        <span class="text-sm">{{ $t("visitOffline") }}</span>
                    </p>

                    <p v-else class="flex flex-wrap items-baseline gap-x-4 gap-y-2" aria-live="polite">
                        <span class="text-gradient text-[clamp(3rem,9vw,5rem)] leading-none font-extrabold tracking-[-0.04em]">
                            {{ formatado }}
                        </span>
                        <span class="text-base font-semibold text-ink-2">{{ $t("visitSuffix") }}</span>
                    </p>

                    <p class="label-mono mt-6 flex items-center gap-2 text-ink-3" v-html="$t('visitFootnote')"></p>
                </div>

                <div class="lg:col-span-5">
                    <div class="rounded-2xl border border-hairline p-5">
                        <p class="text-sm leading-relaxed text-ink-2">{{ $t("trackDesc") }}</p>
                        <button
                            type="button"
                            class="mt-5 w-full rounded-full bg-linear-100 from-brand to-brand-2 px-5 py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                            @click="abrir('modalTechStack', $event)"
                            v-html="$t('visitStackBtn')"
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
