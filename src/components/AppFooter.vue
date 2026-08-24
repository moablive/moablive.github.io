<script setup lang="ts">
import { onMounted, ref } from "vue";

const ano = ref(2026);
onMounted(() => (ano.value = new Date().getFullYear()));
</script>

<template>
    <footer class="mt-10 border-t border-hairline">
        <div class="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-5 py-10">
            <p class="text-sm font-bold tracking-[-0.02em]">
                <span class="text-gradient">GB</span> · Guilherme Bonato
            </p>
            <p class="label-mono text-ink-3">&copy; {{ ano }} · {{ $t("footerRights") }}</p>
        </div>
    </footer>
</template>
