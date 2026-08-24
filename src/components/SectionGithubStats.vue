<script setup lang="ts">
import SecaoTitulo from "./SecaoTitulo.vue";

const cartoes = [
    {
        id: "langs",
        src: "https://github-readme-stats-git-master-rickstaa.vercel.app/api/top-langs/?username=moablive&layout=compact&theme=graywhite&hide_border=true&hide_title=true&hide_progress=true&langs_count=8&bg_color=FFFFFF&cache_seconds=86400",
        altKey: "altTopLangs",
    },
    {
        id: "stats",
        src: "https://github-stats-alpha.vercel.app/api?username=moablive&show_icons=true&theme=light&include_all_commits=true&count_private=true&cache_seconds=86400",
        altKey: "altGithubStats",
    },
];
</script>

<template>
    <section id="github-stats" class="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <SecaoTitulo numero="06" :titulo="$t('statsTitle')" />

        <div class="grid gap-5 md:grid-cols-2">
            <div v-for="cartao in cartoes" :key="cartao.id" class="hard flex items-center justify-center bg-paper-2 p-6">
                <img :src="cartao.src" :alt="$t(cartao.altKey)" class="max-w-full" loading="lazy" />
            </div>
        </div>
    </section>
</template>
