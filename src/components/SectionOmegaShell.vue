<script setup lang="ts">
const GITHUB_URL = "https://github.com/moablive/OmegaShell";

/** Destaque do OmegaShell (27/10/2026): o gerenciador multi-IA para múltiplos
    servidores. Mesmo formato do destaque da LBS, em roxo (a cor do app), com a
    tela de Sessões ao lado — print feito com dados de exemplo, sem nada do
    servidor real. Cada item da lista é uma chave de tradução. */
const RECURSOS = ["omegaF1", "omegaF2", "omegaF3", "omegaF4"] as const;
const STACK = [
    { i: "bash", t: "Bash" },
    { i: "linux", t: "Linux" },
    { i: "nodejs", t: "Node.js" },
    { i: "ts", t: "TypeScript" },
    { i: "vue", t: "Vue.js" },
    { i: "nginx", t: "nginx" },
    { i: "docker", t: "Docker" },
    { i: "cloudflare", t: "Cloudflare" },
];
</script>

<template>
    <section id="omegashell-feature" class="mx-auto max-w-[1180px] px-5 py-20">
        <div class="relative overflow-hidden rounded-[2rem] bg-linear-135 from-violet-600 to-indigo-950 px-6 py-12 text-white sm:px-12 sm:py-16">
            <!-- Brilho decorativo, atrás do conteúdo. -->
            <div
                class="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
                aria-hidden="true"
            ></div>

            <div class="relative grid gap-10 lg:grid-cols-12 lg:items-center">
                <div class="lg:col-span-6">
                    <p class="label-mono mb-4 text-white/75">{{ $t("omegaFeatureTitle") }}</p>
                    <h2 class="flex items-center gap-4 text-[clamp(1.75rem,4.5vw,2.75rem)] leading-tight font-extrabold tracking-[-0.03em]">
                        <!-- Ícone do app (o do PWA); o título ao lado já é o texto acessível. -->
                        <img
                            src="/omegashell/icone.png"
                            alt=""
                            class="h-[1.6em] w-[1.6em] shrink-0 rounded-[22%] shadow-lg ring-1 ring-white/30"
                            width="64"
                            height="64"
                        />
                        {{ $t("omegaTitle") }}
                    </h2>
                    <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-white/85">{{ $t("omegaSubtitle") }}</p>

                    <ul class="mt-6 flex flex-col gap-2.5 text-[14px] leading-relaxed text-white/90">
                        <li v-for="r in RECURSOS" :key="r" class="flex gap-3">
                            <i class="fas fa-check-circle mt-1 text-violet-200" aria-hidden="true"></i>
                            <span>{{ $t(r) }}</span>
                        </li>
                    </ul>

                    <p class="label-mono mt-6 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
                        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-[#69db7c]" aria-hidden="true"></span>
                        {{ $t("omegaEnvLabel") }}
                    </p>
                    <p class="label-mono mt-3 ml-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
                        <i class="fas fa-mobile-alt" aria-hidden="true"></i>
                        {{ $t("omegaPwaLabel") }}
                    </p>

                    <div class="mt-6 flex flex-wrap items-center gap-2">
                        <img
                            v-for="s in STACK"
                            :key="s.i"
                            :src="`https://skillicons.dev/icons?i=${s.i}&theme=dark`"
                            :alt="s.t"
                            :title="s.t"
                            class="h-10"
                            loading="lazy"
                        />
                    </div>

                    <a
                        :href="GITHUB_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-indigo-950 transition-transform hover:-translate-y-0.5"
                    >
                        <i class="fab fa-github" aria-hidden="true"></i> {{ $t("omegaBtnGithub") }}
                    </a>
                </div>

                <!-- Telas do app: a de Sessões e, por cima, o painel do ⌥ Tab. -->
                <div class="relative lg:col-span-6">
                    <img
                        src="/omegashell/sessoes.webp"
                        :alt="$t('omegaShotSessoes')"
                        class="w-full rounded-2xl shadow-2xl ring-1 ring-white/20"
                        width="1100"
                        height="688"
                        loading="lazy"
                    />
                    <img
                        src="/omegashell/optab.webp"
                        :alt="$t('omegaShotOptab')"
                        class="absolute -bottom-8 -left-6 hidden w-[38%] rounded-2xl shadow-2xl ring-1 ring-white/25 sm:block"
                        width="400"
                        height="592"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
