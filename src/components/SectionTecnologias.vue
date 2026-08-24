<script setup lang="ts">
import { gruposTech } from "@/data/tecnologias";
</script>

<template>
    <section id="tecnologias" class="py-5 bg-white">
        <div class="container text-center">
            <h2 class="section-heading mb-5 fw-bold">{{ $t("techTitle") }}</h2>

            <template v-for="(grupo, i) in gruposTech" :key="grupo.id">
                <hr v-if="i > 0" class="w-50 mx-auto my-4 text-muted opacity-25" />
                <div :class="i === gruposTech.length - 1 ? 'mb-3' : 'mb-4'">
                    <h3 class="h5 fw-bold text-muted mb-3" v-html="$t(grupo.tituloKey)"></h3>
                    <div class="d-flex justify-content-center flex-wrap gap-2">
                        <img :src="grupo.icones" :alt="grupo.alt" class="tech-badge img-fluid" loading="lazy" />
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>
