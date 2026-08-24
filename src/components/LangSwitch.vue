<script setup lang="ts">
import { SUPPORTED_LOCALES, type Locale } from "@/i18n";
import { useLocale } from "@/composables/useLocale";

const { locale, setLocale } = useLocale();
</script>

<template>
    <!-- Balão fixo: acompanha a rolagem e fica abaixo dos modais (z-30 < z-50). -->
    <div class="fixed right-4 bottom-4 z-30 sm:right-6 sm:bottom-6">
        <div class="glass flex items-center rounded-full p-1 shadow-soft" role="group" :aria-label="$t('langLabel')">
            <button
                v-for="code in SUPPORTED_LOCALES"
                :key="code"
                type="button"
                class="rounded-full px-3 py-2 font-mono text-[12px] font-medium transition-colors"
                :class="locale === code ? 'bg-brand text-white' : 'text-ink-3 hover:text-ink'"
                :aria-pressed="locale === code"
                :lang="code"
                @click="setLocale(code as Locale)"
            >
                {{ code === "pt-BR" ? "PT" : "EN" }}
            </button>
        </div>
    </div>
</template>
