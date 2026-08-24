<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "@/composables/useTheme";
import SecaoTitulo from "./SecaoTitulo.vue";

const { tema } = useTheme();

// Os cartões são imagens geradas por serviço externo: o tema precisa ir na URL.
const cartoes = computed(() => {
    const escuro = tema.value === "dark";
    const fundo = escuro ? "12141D" : "FFFFFF";
    const texto = escuro ? "E8EAF2" : "12141C";
    return [
        {
            id: "langs",
            src: `https://github-readme-stats-git-master-rickstaa.vercel.app/api/top-langs/?username=moablive&layout=compact&hide_border=true&hide_title=true&hide_progress=true&langs_count=8&bg_color=${fundo}&text_color=${texto}&cache_seconds=86400`,
            altKey: "altTopLangs",
        },
        {
            id: "stats",
            src: `https://github-stats-alpha.vercel.app/api?username=moablive&show_icons=true&theme=${escuro ? "dark" : "light"}&include_all_commits=true&count_private=true&cache_seconds=86400`,
            altKey: "altGithubStats",
        },
    ];
});
</script>

<template>
    <section id="github-stats" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="06" :titulo="$t('statsTitle')" />

        <div class="grid gap-5 md:grid-cols-2">
            <div v-for="cartao in cartoes" :key="cartao.id" class="glass flex items-center justify-center rounded-3xl p-6">
                <img :src="cartao.src" :alt="$t(cartao.altKey)" class="max-w-full" loading="lazy" />
            </div>
        </div>
    </section>
</template>
