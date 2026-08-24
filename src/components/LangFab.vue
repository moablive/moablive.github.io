<script setup lang="ts">
import { SUPPORTED_LOCALES, type Locale } from "@/i18n";
import { useLocale } from "@/composables/useLocale";

const { locale, setLocale } = useLocale();
</script>

<template>
    <!-- Sem menu flutuante: dois botões sempre visíveis, um clique só. -->
    <div class="hard lift-sm fixed right-4 bottom-4 z-30 flex bg-paper-2 sm:right-6 sm:bottom-6">
        <button
            v-for="code in SUPPORTED_LOCALES"
            :key="code"
            type="button"
            class="px-4 py-3 font-mono text-xs font-bold transition-colors"
            :class="locale === code ? 'bg-ink text-sun' : 'hover:bg-sun'"
            :aria-pressed="locale === code"
            :lang="code"
            @click="setLocale(code as Locale)"
        >
            {{ code === "pt-BR" ? "PT" : "EN" }}
        </button>
    </div>
</template>
