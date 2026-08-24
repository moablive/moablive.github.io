<script setup lang="ts">
import { gruposTech } from "@/data/tecnologias";
import SecaoTitulo from "./SecaoTitulo.vue";
</script>

<template>
    <section id="tecnologias" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="04" :titulo="$t('techTitle')" />

        <div class="grid gap-5 md:grid-cols-2">
            <article v-for="grupo in gruposTech" :key="grupo.id" class="glass lift-hover rounded-3xl p-6">
                <h3 class="label-mono mb-5 text-brand" v-html="$t(grupo.tituloKey)"></h3>
                <img :src="grupo.icones" :alt="grupo.alt" class="max-w-full" loading="lazy" />
            </article>
        </div>
    </section>
</template>
