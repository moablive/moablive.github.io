<script setup lang="ts">
import { ref } from "vue";
import { useScrollSpy } from "@/composables/useScrollSpy";
import ThemeToggle from "./ThemeToggle.vue";
import LangSwitch from "./LangSwitch.vue";

const links = [
    { href: "#sobre", key: "navAbout" },
    { href: "#formacao", key: "navEducation" },
    { href: "#certificados", key: "navCertificates" },
    { href: "#trajetoria", key: "navExperience" },
    { href: "#tecnologias", key: "navTech" },
    { href: "#portfolio", key: "navPortfolio" },
    { href: "#github-stats", key: "navGithub" },
    { href: "#contato", key: "navContact" },
];

const CURRICULO =
    "https://www.dropbox.com/scl/fi/ok2rqledpi9b2sdqqrboc/Curr-culo-2025.pdf?rlkey=4k4wybc0vq2ef35g7xbz475ut&st=403i9og5&dl=0";

const { ativo } = useScrollSpy(links.map((l) => l.href.slice(1)));
const menuAberto = ref(false);
</script>

<template>
    <header class="fixed inset-x-0 top-0 z-40">
        <nav class="glass mx-auto mt-3 flex h-[3.25rem] max-w-[1180px] items-center gap-2 rounded-full px-3 sm:px-4">
            <a href="#sobre" class="shrink-0 px-2 text-[15px] font-extrabold tracking-tight text-ink">
                <span class="text-gradient">GB</span><span class="ml-1.5 hidden sm:inline">Guilherme Bonato</span>
            </a>

            <div class="flex-1"></div>

            <ul class="hidden items-center gap-0.5 xl:flex">
                <li v-for="link in links" :key="link.href">
                    <a
                        :href="link.href"
                        class="rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors"
                        :class="
                            ativo === link.href.slice(1)
                                ? 'bg-brand/12 text-brand'
                                : 'text-ink-2 hover:bg-ink/5 hover:text-ink'
                        "
                        :aria-current="ativo === link.href.slice(1) ? 'location' : undefined"
                        >{{ $t(link.key) }}</a
                    >
                </li>
            </ul>

            <div class="ml-1 flex items-center gap-2">
                <LangSwitch />
                <ThemeToggle />

                <a
                    :href="CURRICULO"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hidden items-center gap-2 rounded-full bg-linear-100 from-brand to-brand-2 px-4 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex"
                >
                    <i class="fas fa-file-pdf" aria-hidden="true"></i>{{ $t("downloadPDF") }}
                </a>

                <button
                    type="button"
                    class="glass grid h-10 w-10 place-items-center rounded-full text-ink-2 xl:hidden"
                    :aria-expanded="menuAberto"
                    aria-controls="menu-mobile"
                    :aria-label="$t('navToggle')"
                    @click="menuAberto = !menuAberto"
                >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                        <path v-if="!menuAberto" d="M3 6h14M3 10h14M3 14h14" />
                        <path v-else d="M5 5l10 10M15 5L5 15" />
                    </svg>
                </button>
            </div>
        </nav>

        <div v-show="menuAberto" id="menu-mobile" class="glass mx-3 mt-2 rounded-3xl p-2 xl:hidden">
            <a
                v-for="link in links"
                :key="link.href"
                :href="link.href"
                class="block rounded-2xl px-4 py-3 text-sm font-medium transition-colors"
                :class="ativo === link.href.slice(1) ? 'bg-brand/12 text-brand' : 'text-ink-2 hover:bg-ink/5'"
                @click="menuAberto = false"
                >{{ $t(link.key) }}</a
            >
            <a
                :href="CURRICULO"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 block rounded-2xl bg-linear-100 from-brand to-brand-2 px-4 py-3 text-center text-sm font-semibold text-white sm:hidden"
                >{{ $t("downloadPDF") }}</a
            >
        </div>
    </header>
</template>
