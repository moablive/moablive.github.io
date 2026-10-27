<script setup lang="ts">
import { useModal } from "@/composables/useModal";

const { abrir } = useModal();
const GITHUB_URL = "https://github.com/moablive/LoginHUB";
const PROD_URL = "https://loginhub.astralwavelabel.com/login";

/** Destaque do LoginHUB (27/10/2026): saiu da lista de apps da LBS — é um app
    próprio, o login central de tudo (a suíte, o OmegaShell, os clientes).
    Mesmo formato dos destaques da LBS e do OmegaShell, em azul. No lugar de um
    print, o fluxo de acesso em quatro passos e os apps que entram por ele. */
const RECURSOS = ["lhF1", "lhF2", "lhF3", "lhF4"] as const;
const FLUXO = [
    { icone: "fas fa-envelope-open-text", titulo: "lhFlow1", texto: "lhFlow1d" },
    { icone: "fas fa-magic", titulo: "lhFlow2", texto: "lhFlow2d" },
    { icone: "fas fa-shield-alt", titulo: "lhFlow3", texto: "lhFlow3d" },
    { icone: "fas fa-key", titulo: "lhFlow4", texto: "lhFlow4d" },
] as const;
const APPS = [
    { nome: "LBS_MoneyAPP", icone: "/lbs/money.png" },
    { nome: "LBS_TodoAPP", icone: "/lbs/todo.png" },
    { nome: "LBS_NotesAPP", icone: "/lbs/notes.png" },
    { nome: "OmegaShell", icone: "/omegashell/icone.png" },
];
const STACK = [
    { i: "ts", t: "TypeScript" },
    { i: "react", t: "React" },
    { i: "vite", t: "Vite" },
    { i: "tailwind", t: "Tailwind CSS" },
    { i: "express", t: "Express" },
    { i: "postgres", t: "PostgreSQL" },
    { i: "docker", t: "Docker" },
    { i: "cloudflare", t: "Cloudflare" },
];
</script>

<template>
    <section id="loginhub-feature" class="mx-auto max-w-[1180px] px-5 py-20">
        <div class="relative overflow-hidden rounded-[2rem] bg-linear-135 from-sky-600 to-blue-950 px-6 py-12 text-white sm:px-12 sm:py-16">
            <!-- Brilho decorativo, atrás do conteúdo. -->
            <div
                class="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
                aria-hidden="true"
            ></div>

            <div class="relative grid gap-10 lg:grid-cols-12 lg:items-center">
                <div class="lg:col-span-6">
                    <p class="label-mono mb-4 text-white/75">{{ $t("lhFeatureTitle") }}</p>
                    <h2 class="flex items-center gap-4 text-[clamp(1.75rem,4.5vw,2.75rem)] leading-tight font-extrabold tracking-[-0.03em]">
                        <!-- Ícone do app; o título ao lado já é o texto acessível. -->
                        <img
                            src="/lbs/loginhub.svg"
                            alt=""
                            class="h-[1.6em] w-[1.6em] shrink-0 rounded-[22%] bg-white/10 p-1.5 shadow-lg ring-1 ring-white/30"
                            width="64"
                            height="64"
                        />
                        {{ $t("lhTitle") }}
                    </h2>
                    <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-white/85">{{ $t("lhSubtitle") }}</p>

                    <ul class="mt-6 flex flex-col gap-2.5 text-[14px] leading-relaxed text-white/90">
                        <li v-for="r in RECURSOS" :key="r" class="flex gap-3">
                            <i class="fas fa-check-circle mt-1 text-sky-200" aria-hidden="true"></i>
                            <span>{{ $t(r) }}</span>
                        </li>
                    </ul>

                    <p class="label-mono mt-6 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
                        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-[#69db7c]" aria-hidden="true"></span>
                        {{ $t("lhEnvLabel") }}
                    </p>
                    <p class="label-mono mt-3 ml-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
                        <i class="fas fa-mobile-alt" aria-hidden="true"></i>
                        {{ $t("lhPwaLabel") }}
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

                    <div class="mt-8 flex flex-wrap gap-3">
                        <a
                            :href="GITHUB_URL"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-950 transition-transform hover:-translate-y-0.5"
                        >
                            <i class="fab fa-github" aria-hidden="true"></i> {{ $t("lhBtnGithubLong") }}
                        </a>
                        <a
                            :href="PROD_URL"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/12"
                        >
                            <i class="fas fa-external-link-alt" aria-hidden="true"></i> {{ $t("lhBtnAccessLong") }}
                        </a>
                        <button
                            type="button"
                            class="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/12"
                            @click="abrir('modalLoginHub', $event)"
                        >
                            <i class="fas fa-network-wired" aria-hidden="true"></i> {{ $t("lhBtnArch") }}
                        </button>
                    </div>
                </div>

                <!-- O fluxo de acesso, passo a passo, e os apps que entram por ele. -->
                <div class="lg:col-span-6">
                    <p class="label-mono mb-3 text-white/75">{{ $t("lhFlowTitle") }}</p>
                    <ol class="flex flex-col gap-3">
                        <li
                            v-for="(p, n) in FLUXO"
                            :key="p.titulo"
                            class="flex items-start gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm"
                        >
                            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                                <i :class="p.icone" aria-hidden="true"></i>
                            </span>
                            <span>
                                <span class="block text-[14px] font-semibold">{{ n + 1 }}. {{ $t(p.titulo) }}</span>
                                <span class="mt-1 block text-[13px] leading-relaxed text-white/75">{{ $t(p.texto) }}</span>
                            </span>
                        </li>
                    </ol>

                    <p class="label-mono mt-6 mb-3 text-white/75">{{ $t("lhAppsTitle") }}</p>
                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="app in APPS"
                            :key="app.nome"
                            class="inline-flex items-center gap-2 rounded-full bg-white/10 py-1.5 pr-4 pl-1.5 text-xs font-semibold ring-1 ring-white/20"
                        >
                            <img :src="app.icone" alt="" class="h-7 w-7 rounded-[22%] object-cover" width="28" height="28" loading="lazy" />
                            {{ app.nome }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
