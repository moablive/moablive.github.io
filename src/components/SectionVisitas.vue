<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useVisitCounter } from "@/composables/useVisitCounter";

const { total, carregando, erro } = useVisitCounter();
const { locale } = useI18n();

const formatado = computed(() =>
    total.value === null ? "" : total.value.toLocaleString(locale.value as string),
);
</script>

<template>
    <section id="total-de-visitas" class="my-5">
        <div class="container text-center">
            <div class="mb-3">
                <button
                    type="button"
                    class="btn btn-outline-dark btn-sm rounded-pill shadow-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#modalTechStack"
                    v-html="$t('visitStackBtn')"
                ></button>
            </div>

            <div class="p-4 border rounded-4 bg-white shadow-sm mx-auto visits-card">
                <div id="contador-visitas-texto" class="fs-4 mb-0" aria-live="polite">
                    <template v-if="carregando">
                        <span class="spinner-border spinner-border-sm text-primary me-2" aria-hidden="true"></span>
                        <span class="text-muted fs-6">{{ $t("visitLoading") }}</span>
                    </template>

                    <template v-else-if="erro">
                        <i class="fas fa-exclamation-circle text-warning" aria-hidden="true"></i>
                        <br />
                        <small class="text-muted">{{ $t("visitOffline") }}</small>
                    </template>

                    <template v-else>
                        <strong class="text-primary visit-count">{{ formatado }}</strong>
                        <span class="ms-1">{{ $t("visitSuffix") }}</span>
                        <br />
                        <small class="text-muted visit-footnote" v-html="$t('visitFootnote')"></small>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
