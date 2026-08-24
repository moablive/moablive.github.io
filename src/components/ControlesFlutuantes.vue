<script setup lang="ts">
import LangSwitch from "./LangSwitch.vue";
import ThemeToggle from "./ThemeToggle.vue";
</script>

<template>
    <!-- Idioma e tema juntos, fixos no canto e abaixo dos modais (z-30 < z-50). -->
    <div class="fixed right-4 bottom-4 z-30 flex items-center gap-2 sm:right-6 sm:bottom-6">
        <LangSwitch />
        <ThemeToggle />
    </div>
</template>
