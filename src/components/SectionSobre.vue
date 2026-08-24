<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useVisitCounter } from "@/composables/useVisitCounter";

const { total, erro } = useVisitCounter();
const { locale } = useI18n();
const visitas = computed(() =>
    total.value === null ? "—" : total.value.toLocaleString(locale.value as string),
);
const TYPING_SVG =
    "https://readme-typing-svg.demolab.com?font=Archivo&weight=700&size=20&duration=3000&pause=1000&color=101010&width=460&lines=Software+Engineer+%26+Architect;.NET+%7C+Node+%7C+Python+%7C+Go;SOLID+%7C+DDD+%7C+TDD+%7C+Clean+Code";

// Bloco decorativo: o terminal do site antigo, agora como único painel escuro.
const terminal = [
    { i: 0, html: '<span class="tok-kw">const</span> <span class="tok-var">moablive</span> = {' },
    { i: 1, html: '<span class="tok-prop">stack</span>: [<span class="tok-str">".NET"</span>, <span class="tok-str">"Node.js"</span>, <span class="tok-str">"Go"</span>],' },
    { i: 1, html: '<span class="tok-prop">frontend</span>: [<span class="tok-str">"React"</span>, <span class="tok-str">"Vue"</span>, <span class="tok-str">"Angular"</span>],' },
    { i: 1, html: '<span class="tok-prop">focus</span>: [' },
    { i: 2, html: '<span class="tok-str">"Clean Architecture"</span>,' },
    { i: 2, html: '<span class="tok-str">"Microservices"</span>,' },
    { i: 2, html: '<span class="tok-str">"Edge Security"</span>' },
    { i: 1, html: "]," },
    { i: 1, html: '<span class="tok-prop">mindset</span>: <span class="tok-str">"Always learning"</span>' },
    { i: 0, html: '};<span class="cursor-blink" aria-hidden="true">_</span>' },
];

const numeros = [
    { id: "anos", valor: "10", labelKey: "statYears" },
    { id: "empresas", valor: "06", labelKey: "statCompanies" },
    { id: "projetos", valor: "11", labelKey: "statProjects" },
];
</script>

<template>
    <section id="sobre" class="mx-auto max-w-[1400px] px-4 pt-10 pb-16 sm:px-6">
        <!-- bloco de cor do hero -->
        <div class="hard lift bg-accent px-6 py-10 text-white sm:px-10 sm:py-14">
            <div class="grid gap-10 lg:grid-cols-12 lg:items-end">
                <div class="lg:col-span-8">
                    <p class="label-mono mb-6 text-white/85">{{ $t("heroKicker") }}</p>
                    <h1 class="font-display text-[clamp(2.25rem,7vw,5rem)] leading-[0.88] tracking-[-0.04em] uppercase">
                        Guilherme Bonato
                    </h1>
                    <p
                        class="hard-2 mt-5 inline-block border-white bg-ink px-4 py-2 font-display text-[clamp(1rem,2.5vw,1.5rem)] tracking-[-0.02em] text-sun uppercase"
                    >
                        {{ $t("heroTitle") }}
                    </p>
                </div>

                <div class="lg:col-span-4">
                    <p class="text-[15px] leading-relaxed font-medium">{{ $t("heroLead") }}</p>
                    <a
                        href="#portfolio"
                        class="hard mt-6 inline-block bg-ink px-5 py-3 font-mono text-xs tracking-widest text-white hover:bg-sun hover:text-ink"
                        >{{ $t("heroCta") }}</a
                    >
                </div>
            </div>
        </div>

        <!-- faixa de números -->
        <div class="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div v-for="n in numeros" :key="n.id" class="hard bg-paper-2 px-6 py-6">
                <div class="font-display text-5xl leading-none tracking-[-0.03em]">{{ n.valor }}</div>
                <div class="label-mono mt-3 text-ink-soft">{{ $t(n.labelKey) }}</div>
            </div>
            <div class="hard bg-sun px-6 py-6">
                <div class="font-display text-5xl leading-none tracking-[-0.03em]">{{ visitas }}</div>
                <div class="label-mono mt-3">{{ erro ? $t("visitOffline") : $t("statVisits") }}</div>
            </div>
        </div>

        <!-- retrato + terminal -->
        <div class="mt-6 grid gap-6 lg:grid-cols-12">
            <div class="hard bg-paper-2 p-6 lg:col-span-5">
                <img
                    src="https://github.com/moablive.png"
                    :alt="$t('altPhoto')"
                    class="hard-2 w-full"
                    width="400"
                    height="400"
                    fetchpriority="high"
                />
                <img :src="TYPING_SVG" :alt="$t('altTyping')" class="mt-5 w-full" width="460" height="36" />
                <p class="mt-5 text-[15px] leading-relaxed" v-html="$t('aboutExperience')"></p>
            </div>

            <div class="hard bg-ink lg:col-span-7">
                <div class="flex items-center gap-2 border-b-[3px] border-sun px-5 py-3">
                    <span class="h-3 w-3 bg-accent" aria-hidden="true"></span>
                    <span class="h-3 w-3 bg-sun" aria-hidden="true"></span>
                    <span class="h-3 w-3 bg-white" aria-hidden="true"></span>
                    <span class="label-mono ml-3 text-white/60">developer.ts</span>
                </div>
                <div class="overflow-x-auto px-6 py-7 font-mono text-[13px] leading-[1.9] text-white sm:text-sm">
                    <div v-for="(linha, k) in terminal" :key="k" :style="{ paddingLeft: `${linha.i * 1.5}rem` }">
                        <span v-html="linha.html"></span>
                    </div>
                </div>
                <div class="flex flex-wrap gap-2 border-t-[3px] border-sun px-6 py-5">
                    <img
                        src="https://skillicons.dev/icons?i=dotnet,nodejs,py,go,postgres,redis,kafka,docker"
                        :alt="$t('altMainStack')"
                        class="max-w-full"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
