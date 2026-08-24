<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "@/composables/useTheme";
import SecaoTitulo from "./SecaoTitulo.vue";

const { tema } = useTheme();

const BASE = "https://github-readme-stats-git-master-rickstaa.vercel.app/api";

/**
 * Os cartões são imagens geradas por serviço externo, então o tema precisa ir
 * na URL. O fundo vai transparente (00000000) de propósito: quem pinta o cartão
 * é o .glass em volta — com fundo sólido sobrava um retângulo branco no claro.
 */
const cartoes = computed(() => {
    const escuro = tema.value === "dark";
    const texto = escuro ? "A6ACBE" : "4A4F60";
    const marca = escuro ? "B79BFF" : "6A35DC";
    const comum = `username=moablive&hide_border=true&bg_color=00000000&text_color=${texto}&title_color=${marca}&icon_color=${marca}&cache_seconds=86400`;

    return [
        {
            id: "langs",
            src: `${BASE}/top-langs/?${comum}&layout=compact&hide_title=true&hide_progress=true&langs_count=8`,
            altKey: "altTopLangs",
        },
        {
            id: "stats",
            src: `${BASE}/?${comum}&show_icons=true&include_all_commits=true&count_private=true&hide_title=true&hide_rank=true`,
            altKey: "altGithubStats",
        },
    ];
});
</script>

<template>
    <section id="github-stats" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="07" :titulo="$t('statsTitle')" />

        <div class="grid gap-5 md:grid-cols-2">
            <div v-for="cartao in cartoes" :key="cartao.id" class="glass flex items-center justify-center rounded-3xl p-6">
                <img :src="cartao.src" :alt="$t(cartao.altKey)" class="max-w-full" loading="lazy" />
            </div>
        </div>
    </section>
</template>
