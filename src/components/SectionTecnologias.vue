<script setup lang="ts">
import { gruposTech } from "@/data/tecnologias";
import SecaoTitulo from "./SecaoTitulo.vue";
</script>

<template>
    <section id="tecnologias" class="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <SecaoTitulo numero="04" :titulo="$t('techTitle')" />

        <div class="grid gap-5 md:grid-cols-2">
            <article
                v-for="(grupo, i) in gruposTech"
                :key="grupo.id"
                class="hard p-6"
                :class="i % 3 === 0 ? 'bg-ink text-paper' : 'bg-paper-2'"
            >
                <h3
                    class="label-mono mb-5"
                    :class="i % 3 === 0 ? 'text-sun' : 'text-ink-soft'"
                    v-html="$t(grupo.tituloKey)"
                ></h3>
                <img :src="grupo.icones" :alt="grupo.alt" class="max-w-full" loading="lazy" />
            </article>
        </div>
    </section>
</template>
