<script setup lang="ts">
const GITHUB_URL = "https://github.com/moablive/LifeBusinessSuit";
const GITHUB_MONEY = "https://github.com/moablive/MoneyAPP";
const GITHUB_TODO = "https://github.com/moablive/TodoAPP";
const GITHUB_NOTES = "https://github.com/moablive/NotesAPP";
const GITHUB_TTS = "https://github.com/moablive/LBSTTSAPP";

const PROD_MONEY = "https://money.astralwavelabel.com";
const PROD_TODO = "https://todo.astralwavelabel.com";
const PROD_NOTES = "https://notes.astralwavelabel.com";
const PROD_TTS = "https://lbstts.astralwavelabel.com";
</script>

<template>
    <section id="lbs-feature" class="mx-auto max-w-[1180px] px-5 py-20">
        <div class="relative overflow-hidden rounded-[2rem] bg-linear-135 from-emerald-600 to-emerald-900 px-6 py-12 text-white sm:px-12 sm:py-16">
            <!-- Brilho decorativo, atrás do conteúdo. -->
            <div
                class="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
                aria-hidden="true"
            ></div>

            <div class="relative grid gap-8 lg:grid-cols-12 lg:items-center">
                <div class="lg:col-span-7">
                    <p class="label-mono mb-4 text-white/75">{{ $t("lbsFeatureTitle") }}</p>
                    <h2 class="text-[clamp(1.75rem,4.5vw,2.75rem)] leading-tight font-extrabold tracking-[-0.03em]">
                        {{ $t("lbsTitle") }}
                    </h2>
                    <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-white/85">{{ $t("lbsSubtitle") }}</p>

                    <p class="label-mono mt-6 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
                        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-[#68a063]" aria-hidden="true"></span>
                        {{ $t("lbsEnvLabel") }}
                    </p>
                    
                    <div class="mt-6 flex flex-wrap items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=vue&theme=dark" alt="Vue" class="h-10" loading="lazy" title="Vue.js" />
                        <img src="https://skillicons.dev/icons?i=nodejs&theme=dark" alt="Node.js" class="h-10" loading="lazy" title="Node.js" />
                        <img src="https://skillicons.dev/icons?i=ts&theme=dark" alt="TypeScript" class="h-10" loading="lazy" title="TypeScript" />
                        <img src="https://skillicons.dev/icons?i=cloudflare&theme=dark" alt="Cloudflare" class="h-10" loading="lazy" title="Cloudflare" />
                        <img src="https://skillicons.dev/icons?i=docker&theme=dark" alt="Docker" class="h-10" loading="lazy" title="Docker" />
                    </div>
                </div>

                <div class="flex flex-col gap-3 lg:col-span-5">
                    <a
                        :href="GITHUB_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-emerald-900 transition-transform hover:-translate-y-0.5"
                    >
                        {{ $t('lbsBtnGithub') }}
                    </a>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                        <div class="flex items-center rounded-full border border-white/40 overflow-hidden transition-colors hover:border-white/60">
                            <a :href="PROD_MONEY" target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/12 border-r border-white/20">
                                <i class="fas fa-external-link-alt" aria-hidden="true"></i> MoneyAPP
                            </a>
                            <a :href="GITHUB_MONEY" target="_blank" rel="noopener noreferrer" :title="$t('lbsBtnGithubTitle')" class="flex items-center justify-center px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/12 shrink-0">
                                <i class="fab fa-github me-1.5" aria-hidden="true"></i> {{ $t('lbsBtnGithubShort') }}
                            </a>
                        </div>
                        <div class="flex items-center rounded-full border border-white/40 overflow-hidden transition-colors hover:border-white/60">
                            <a :href="PROD_TODO" target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/12 border-r border-white/20">
                                <i class="fas fa-external-link-alt" aria-hidden="true"></i> TodoAPP
                            </a>
                            <a :href="GITHUB_TODO" target="_blank" rel="noopener noreferrer" :title="$t('lbsBtnGithubTitle')" class="flex items-center justify-center px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/12 shrink-0">
                                <i class="fab fa-github me-1.5" aria-hidden="true"></i> {{ $t('lbsBtnGithubShort') }}
                            </a>
                        </div>
                        <div class="flex items-center rounded-full border border-white/40 overflow-hidden transition-colors hover:border-white/60">
                            <a :href="PROD_NOTES" target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/12 border-r border-white/20">
                                <i class="fas fa-external-link-alt" aria-hidden="true"></i> NotesAPP
                            </a>
                            <a :href="GITHUB_NOTES" target="_blank" rel="noopener noreferrer" :title="$t('lbsBtnGithubTitle')" class="flex items-center justify-center px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/12 shrink-0">
                                <i class="fab fa-github me-1.5" aria-hidden="true"></i> {{ $t('lbsBtnGithubShort') }}
                            </a>
                        </div>
                        <div class="flex items-center rounded-full border border-white/40 overflow-hidden transition-colors hover:border-white/60">
                            <a :href="PROD_TTS" target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/12 border-r border-white/20">
                                <i class="fas fa-external-link-alt" aria-hidden="true"></i> LBSTTSAPP
                            </a>
                            <a :href="GITHUB_TTS" target="_blank" rel="noopener noreferrer" :title="$t('lbsBtnGithubTitle')" class="flex items-center justify-center px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/12 shrink-0">
                                <i class="fab fa-github me-1.5" aria-hidden="true"></i> {{ $t('lbsBtnGithubShort') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
