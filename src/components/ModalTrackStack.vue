<script setup lang="ts">
import BaseModal from "./BaseModal.vue";

const itens = ["trackPg", "trackNode", "trackDocker", "trackCf"];
</script>

<template>
    <BaseModal id="modalTechStack" titulo="portfolio-track-visit" icone="fa-chart-line">
        <h3 class="text-lg font-bold tracking-[-0.02em]">{{ $t("trackTitle") }}</h3>
        <p class="mt-3 text-[15px] leading-relaxed text-ink-2">{{ $t("trackDesc") }}</p>

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
                class="rounded-2xl border border-hairline px-4 py-3 text-sm leading-relaxed text-ink-2"
                v-html="$t(key)"
            ></li>
        </ul>

        <a
            href="https://github.com/moablive/portfolio-track-visit"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 block rounded-full bg-linear-100 from-fill to-fill-2 px-5 py-3 text-center text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            v-html="$t('trackBtnRepo')"
        ></a>
    </BaseModal>
</template>
