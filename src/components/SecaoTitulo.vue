<script setup lang="ts">
defineProps<{ etiqueta: string; titulo: string }>();
</script>

<template>
    <div class="mb-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
        <div>
            <p class="label-mono mb-3 flex items-center gap-2 text-brand">
                <span class="h-px w-6 bg-linear-100 from-brand to-brand-2" aria-hidden="true"></span>{{ etiqueta }}
            </p>
            <h2 class="text-3xl font-extrabold tracking-[-0.03em] text-balance sm:text-4xl">{{ titulo }}</h2>
        </div>
        <slot name="acoes" />
    </div>
</template>
