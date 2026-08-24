<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { tema, alternar } = useTheme();
</script>

<template>
    <button
        type="button"
        class="glass grid h-10 w-10 place-items-center rounded-full text-ink-2 transition-colors hover:text-brand"
        :aria-label="$t(tema === 'dark' ? 'themeToLight' : 'themeToDark')"
        :aria-pressed="tema === 'dark'"
        @click="alternar"
    >
        <svg v-if="tema === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" />
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20.5 14.2A8.6 8.6 0 0 1 9.8 3.5a8.6 8.6 0 1 0 10.7 10.7z" />
        </svg>
    </button>
</template>
