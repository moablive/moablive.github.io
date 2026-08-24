<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n";
import { useLocale } from "@/composables/useLocale";

const { locale, setLocale } = useLocale();
const aberto = ref(false);
const raiz = ref<HTMLElement | null>(null);

function escolher(next: Locale) {
    setLocale(next);
    aberto.value = false;
}

function aoClicarFora(event: MouseEvent) {
    if (raiz.value && !raiz.value.contains(event.target as Node)) aberto.value = false;
}

function aoTeclar(event: KeyboardEvent) {
    if (event.key === "Escape") aberto.value = false;
}

onMounted(() => {
    document.addEventListener("click", aoClicarFora);
    document.addEventListener("keydown", aoTeclar);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", aoClicarFora);
    document.removeEventListener("keydown", aoTeclar);
});
</script>

<template>
    <div class="i18n-fab" ref="raiz" :class="{ open: aberto }">
        <button
            id="fabToggle"
            class="fab-toggle"
            aria-haspopup="true"
            :aria-expanded="aberto"
            aria-controls="fabMenu"
            :aria-label="$t('langToggle')"
            @click="aberto = !aberto"
        >
            <span aria-hidden="true">🌐</span>
        </button>

        <div id="fabMenu" class="fab-menu" role="menu">
            <button
                v-for="code in SUPPORTED_LOCALES"
                :key="code"
                class="fab-item"
                role="menuitem"
                :aria-pressed="locale === code"
                :lang="code"
                @click="escolher(code)"
            >
                {{ code === "pt-BR" ? "PT" : "EN" }}
            </button>
        </div>
    </div>
</template>
