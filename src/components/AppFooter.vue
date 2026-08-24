<script setup lang="ts">
import { onMounted, ref } from "vue";

// Fixo no prerender e corrigido no cliente: evita mismatch na virada de ano.
const ano = ref(2026);
onMounted(() => (ano.value = new Date().getFullYear()));
</script>

<template>
    <footer class="mt-8 border-t-[3px] border-ink bg-ink">
        <div
            class="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6"
        >
            <p class="font-display text-lg tracking-[-0.02em] text-paper">GUILHERME BONATO</p>
            <p class="label-mono text-paper/60">&copy; {{ ano }} · {{ $t("footerRights") }}</p>
        </div>
    </footer>
</template>
