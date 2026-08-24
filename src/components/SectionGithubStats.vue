<script setup lang="ts">
const cartoes = [
    {
        id: "langs",
        src: "https://github-readme-stats-git-master-rickstaa.vercel.app/api/top-langs/?username=moablive&layout=compact&theme=light&hide_progress=true&border_radius=8&langs_count=8&cache_seconds=86400",
        alt: "Linguagens mais usadas no GitHub por moablive",
    },
    {
        id: "stats",
        src: "https://github-stats-alpha.vercel.app/api?username=moablive&show_icons=true&theme=light&border_radius=8&include_all_commits=true&count_private=true&cache_seconds=86400",
        alt: "Estatísticas do GitHub de moablive",
    },
];
</script>

<template>
    <section id="github-stats" class="stats-section py-5">
        <div class="container text-center">
            <h2 class="section-heading mb-5">{{ $t("statsTitle") }}</h2>
            <div class="row justify-content-center align-items-center g-4">
                <div class="col-lg-6 github-stats" v-for="cartao in cartoes" :key="cartao.id">
                    <img :src="cartao.src" :alt="cartao.alt" class="img-fluid shadow-sm rounded" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
</template>
