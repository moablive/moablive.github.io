<script setup lang="ts">
import { onMounted, ref } from "vue";

// Valor fixo no prerender e corrigido no cliente: evita mismatch de hidratação
// na virada de ano, quando o HTML publicado ficaria com o ano anterior.
const ano = ref(2026);
onMounted(() => (ano.value = new Date().getFullYear()));
</script>

<template>
    <footer class="footer text-center py-3 bg-dark text-white">
        <div class="container">
            <p class="mb-0">&copy; {{ ano }} Guilherme Bonato. {{ $t("footerRights") }}</p>
        </div>
    </footer>
</template>
