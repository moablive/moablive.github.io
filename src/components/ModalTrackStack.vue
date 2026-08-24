<script setup lang="ts">
import BaseModal from "./BaseModal.vue";

const itens = ["trackPg", "trackNode", "trackDocker", "trackCf"];
</script>

<template>
    <BaseModal id="modalTechStack" titulo="portfolio-track-visit" icone="fa-github" tom="ink">
        <h3 class="font-display text-lg tracking-[-0.02em]">{{ $t("trackTitle") }}</h3>
        <p class="mt-3 text-[15px] leading-relaxed text-ink-soft">{{ $t("trackDesc") }}</p>

        <img
            src="https://skillicons.dev/icons?i=nodejs,ts,postgres,docker,cloudflare"
            alt="Node.js, TypeScript, PostgreSQL, Docker, Cloudflare"
            class="mt-6 max-w-full"
            loading="lazy"
        />

        <ul class="mt-6 flex flex-col gap-3">
            <li
                v-for="key in itens"
                :key="key"
                class="hard-2 bg-paper px-4 py-3 text-sm leading-relaxed"
                v-html="$t(key)"
            ></li>
        </ul>

        <a
            href="https://github.com/moablive/portfolio-track-visit"
            target="_blank"
            rel="noopener noreferrer"
            class="hard-2 mt-6 block bg-ink px-5 py-3 text-center font-mono text-xs font-bold text-paper transition-transform hover:-translate-y-0.5"
            v-html="$t('trackBtnRepo')"
        ></a>
    </BaseModal>
</template>
