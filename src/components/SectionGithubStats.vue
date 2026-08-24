<script setup lang="ts">
const cartoes = [
    {
        id: "langs",
        src: "https://github-readme-stats-git-master-rickstaa.vercel.app/api/top-langs/?username=moablive&layout=compact&theme=light&hide_progress=true&border_radius=8&langs_count=8&cache_seconds=86400",
        altKey: "altTopLangs",
    },
    {
        id: "stats",
        src: "https://github-stats-alpha.vercel.app/api?username=moablive&show_icons=true&theme=light&border_radius=8&include_all_commits=true&count_private=true&cache_seconds=86400",
        altKey: "altGithubStats",
    },
];
</script>

<template>
    <section id="github-stats" class="stats-section py-5">
        <div class="container text-center">
            <h2 class="section-heading mb-5">{{ $t("statsTitle") }}</h2>
            <div class="row justify-content-center align-items-center g-4">
                <div class="col-lg-6 github-stats" v-for="cartao in cartoes" :key="cartao.id">
                    <img :src="cartao.src" :alt="$t(cartao.altKey)" class="img-fluid shadow-sm rounded" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
</template>
