<script setup lang="ts">
import { SUPPORTED_LOCALES, type Locale } from "@/i18n";
import { useLocale } from "@/composables/useLocale";

const { locale, setLocale } = useLocale();
</script>

<template>
    <!-- Dois botões num só pílula, sem menu flutuante: um clique troca. -->
    <div class="glass flex items-center rounded-full p-0.5">
        <button
            v-for="code in SUPPORTED_LOCALES"
            :key="code"
            type="button"
            class="rounded-full px-2.5 py-1.5 font-mono text-[11px] font-medium transition-colors"
            :class="locale === code ? 'bg-brand text-white' : 'text-ink-3 hover:text-ink'"
            :aria-pressed="locale === code"
            :lang="code"
            @click="setLocale(code as Locale)"
        >
            {{ code === "pt-BR" ? "PT" : "EN" }}
        </button>
    </div>
</template>
