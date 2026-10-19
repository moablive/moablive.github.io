<script setup lang="ts">
import { useModal } from "@/composables/useModal";

const { abrir } = useModal();
const GITHUB_URL = "https://github.com/moablive/LifeBusinessSuit";

/** Os apps da suíte, com o nome padronizado do repositório (`LBS_*`).
    `prod` ausente = serviço sem frontend público, só o repositório.

    O LBS_NotifyAPP saiu em 19/09/2026: a central de notificação foi
    descontinuada e o repositório, apagado. Cada app da suíte passou a entregar
    Web Push por conta própria, então o link aqui viraria um 404.

    Cada app é um PWA instalável; `icone` é o ícone 192px do manifest de produção,
    reduzido para 96px em public/lbs/. O LoginHUB vem primeiro: é o login
    central da suíte, e o repositório dele não segue o padrão `LBS_*`. */
const APPS: Array<{ id: string; nome: string; icone: string; prod?: string; repo?: string; arq?: string }> = [
    { id: "loginhub", nome: "LoginHUB", icone: "/lbs/loginhub.svg", prod: "https://loginhub.astralwavelabel.com/login", repo: "LoginHUB", arq: "modalLoginHub" },
    { id: "money", nome: "LBS_MoneyAPP", icone: "/lbs/money.png", prod: "https://money.astralwavelabel.com" },
    { id: "todo", nome: "LBS_TodoAPP", icone: "/lbs/todo.png", prod: "https://todo.astralwavelabel.com" },
    { id: "notes", nome: "LBS_NotesAPP", icone: "/lbs/notes.png", prod: "https://notes.astralwavelabel.com" },
];

const repoDe = (app: (typeof APPS)[number]) => `https://github.com/moablive/${app.repo ?? app.nome}`;
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
                    <h2 class="flex items-center gap-4 text-[clamp(1.75rem,4.5vw,2.75rem)] leading-tight font-extrabold tracking-[-0.03em]">
                        <!-- Brasão corporativo da suíte; o título ao lado já é o texto acessível. -->
                        <img
                            src="/lbs/lbs.svg"
                            alt=""
                            class="h-[1.6em] w-[1.6em] shrink-0 rounded-[22%] shadow-lg ring-1 ring-white/30"
                            width="64"
                            height="64"
                        />
                        {{ $t("lbsTitle") }}
                    </h2>
                    <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-white/85">{{ $t("lbsSubtitle") }}</p>

                    <p class="label-mono mt-6 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
                        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-[#68a063]" aria-hidden="true"></span>
                        {{ $t("lbsEnvLabel") }}
                    </p>
                    <p class="label-mono mt-3 ml-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
                        <i class="fas fa-mobile-alt" aria-hidden="true"></i>
                        {{ $t("lbsPwaLabel") }}
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
                    <!-- Um app por linha: em duas colunas o nome `LBS_*APP` nao
                         cabe ao lado do botao de repositorio e era truncado. -->
                    <div class="mt-2 flex flex-col gap-3">
                        <div
                            v-for="app in APPS"
                            :key="app.id"
                            class="flex items-center rounded-full border border-white/40 overflow-hidden transition-colors hover:border-white/60"
                        >
                            <a
                                v-if="app.prod"
                                :href="app.prod"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex-1 flex items-center gap-3 py-2 pr-4 pl-2 text-xs font-semibold text-white transition-colors hover:bg-white/12 border-r border-white/20 whitespace-nowrap"
                            >
                                <img :src="app.icone" alt="" class="h-8 w-8 shrink-0 rounded-[22%] bg-white/10 object-cover" width="32" height="32" loading="lazy" />
                                <span class="flex-1">{{ app.nome }}</span>
                                <i class="fas fa-external-link-alt text-white/60" aria-hidden="true"></i>
                            </a>
                            <!-- Sem frontend público: o nome vira rótulo, e só o repositório é link. -->
                            <span
                                v-else
                                class="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white/80 border-r border-white/20 whitespace-nowrap"
                            >
                                <i class="fas fa-server" aria-hidden="true"></i> {{ app.nome }}
                            </span>
                            <!-- O LoginHUB tem modal de arquitetura próprio (era o destaque
                                 separado acima desta seção até 19/10/2026). -->
                            <button
                                v-if="app.arq"
                                type="button"
                                :title="$t('lbsBtnArchTitle')"
                                class="flex items-center justify-center px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/12 border-r border-white/20 shrink-0"
                                @click="abrir(app.arq, $event)"
                            >
                                <i class="fas fa-network-wired" aria-hidden="true"></i>
                            </button>
                            <a
                                :href="repoDe(app)"
                                target="_blank"
                                rel="noopener noreferrer"
                                :title="$t('lbsBtnGithubTitle')"
                                class="flex items-center justify-center px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/12 shrink-0"
                            >
                                <i class="fab fa-github me-1.5" aria-hidden="true"></i> {{ $t('lbsBtnGithubShort') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
