<script setup lang="ts">
import { ref } from "vue";
import { useScrollSpy } from "@/composables/useScrollSpy";

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
    <nav class="fixed inset-x-0 top-0 z-40 border-b-[3px] border-ink bg-paper">
        <div class="mx-auto flex h-[var(--spacing-nav)] max-w-[1400px] items-stretch gap-3 px-4 sm:px-6">
            <a
                href="#sobre"
                class="my-3 flex items-center bg-ink px-4 font-display text-sm tracking-tight text-paper hover:text-sun"
            >
                G. BONATO
            </a>

            <div class="flex-1"></div>

            <!-- menu grande -->
            <ul class="hidden items-stretch gap-1 xl:flex">
                <li v-for="link in links" :key="link.href" class="flex">
                    <a
                        :href="link.href"
                        class="label-mono flex items-center px-3 transition-colors"
                        :class="
                            ativo === link.href.slice(1)
                                ? 'bg-sun text-ink'
                                : 'text-ink-soft hover:bg-ink hover:text-paper'
                        "
                        :aria-current="ativo === link.href.slice(1) ? 'location' : undefined"
                        >{{ $t(link.key) }}</a
                    >
                </li>
            </ul>

            <a
                :href="CURRICULO"
                target="_blank"
                rel="noopener noreferrer"
                class="hard-2 my-3 ml-1 flex items-center gap-2 bg-accent px-4 font-mono text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
            >
                <i class="fas fa-file-pdf" aria-hidden="true"></i>
                <span class="hidden sm:inline">{{ $t("downloadPDF") }}</span>
            </a>

            <button
                type="button"
                class="hard-2 my-3 flex items-center px-3 xl:hidden"
                :aria-expanded="menuAberto"
                aria-controls="menu-mobile"
                :aria-label="$t('navToggle')"
                @click="menuAberto = !menuAberto"
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path v-if="!menuAberto" d="M2 5h16M2 10h16M2 15h16" />
                    <path v-else d="M4 4l12 12M16 4L4 16" />
                </svg>
            </button>
        </div>

        <!-- menu pequeno -->
        <ul v-show="menuAberto" id="menu-mobile" class="border-t-[3px] border-ink bg-paper-2 xl:hidden">
            <li v-for="link in links" :key="link.href" class="border-b-2 border-ink/10 last:border-b-0">
                <a
                    :href="link.href"
                    class="label-mono block px-5 py-4"
                    :class="ativo === link.href.slice(1) ? 'bg-sun' : ''"
                    @click="menuAberto = false"
                    >{{ $t(link.key) }}</a
                >
            </li>
        </ul>
    </nav>
</template>
