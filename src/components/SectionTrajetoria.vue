<script setup lang="ts">
import { cargos } from "@/data/trajetoria";
import SecaoTitulo from "./SecaoTitulo.vue";
import CargoCard from "./CargoCard.vue";
</script>

<template>
    <section id="trajetoria" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="03" :titulo="$t('expTitle')" />
        <p class="-mt-6 mb-10 text-sm text-ink-3">{{ $t("expSubtitle") }}</p>

        <!-- Linha do tempo: trilho vertical com marcadores. -->
        <ol class="relative flex flex-col gap-4 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-hairline sm:before:left-[9px]">
            <li v-for="cargo in cargos" :key="cargo.id" class="relative pl-8 sm:pl-10">
                <span
                    class="absolute top-7 left-0 h-4 w-4 rounded-full border-2 border-canvas"
                    :class="cargo.atual ? 'bg-linear-100 from-fill to-fill-2' : 'bg-ink-3/40'"
                    aria-hidden="true"
                ></span>

                <CargoCard :cargo="cargo" />
            </li>
        </ol>
    </section>
</template>
