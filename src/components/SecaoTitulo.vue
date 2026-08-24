<script setup lang="ts">
// Cabeçalho comum a todas as seções: número + título pesado + régua.
defineProps<{ numero: string; titulo: string }>();
</script>

<template>
    <div class="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        <span class="hard-2 bg-ink px-3 py-1 font-mono text-xs font-bold text-sun">{{ numero }}</span>
        <h2 class="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-none tracking-[-0.03em] uppercase">
            {{ titulo }}
        </h2>
        <div class="h-[3px] flex-1 bg-ink"></div>
        <slot name="acoes" />
    </div>
</template>
