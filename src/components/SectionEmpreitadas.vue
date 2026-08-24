<script setup lang="ts">
import { empreitadas } from "@/data/trajetoria";
import SecaoTitulo from "./SecaoTitulo.vue";
import CargoCard from "./CargoCard.vue";
</script>

<template>
    <section id="empreitadas" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="04" :titulo="$t('ventureTitle')" />
        <p class="-mt-6 mb-10 text-sm text-ink-3">{{ $t("ventureSubtitle") }}</p>

        <!-- Sem o trilho da timeline: são projetos próprios, não uma sequência de empregos. -->
        <ul class="flex flex-col gap-4">
            <li v-for="cargo in empreitadas" :key="cargo.id">
                <CargoCard :cargo="cargo" />
            </li>
        </ul>
    </section>
</template>
