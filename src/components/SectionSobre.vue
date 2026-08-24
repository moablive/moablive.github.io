<script setup lang="ts">
const terminal = [
    { i: 0, html: '<span class="tok-kw">const</span> <span class="tok-var">moablive</span> = {' },
    { i: 1, html: '<span class="tok-prop">stack</span>: [<span class="tok-str">".NET"</span>, <span class="tok-str">"Node.js"</span>],' },
    { i: 1, html: '<span class="tok-prop">frontend</span>: [<span class="tok-str">"Vue.js"</span>, <span class="tok-str">"React"</span>, <span class="tok-str">"Angular"</span>],' },
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
    <section id="sobre" class="mx-auto max-w-[1180px] px-5 pt-12 pb-20 sm:pt-16">
        <div class="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-7">
                <p class="label-mono mb-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1.5 text-ink-2">
                    <span class="h-1.5 w-1.5 rounded-full bg-brand-2" aria-hidden="true"></span>{{ $t("heroKicker") }}
                </p>

                <h1 class="text-[clamp(2.5rem,6.5vw,4.25rem)] leading-[1.02] font-extrabold tracking-[-0.04em] text-balance">
                    Guilherme Bonato
                </h1>
                <p class="mt-3 text-[clamp(1.25rem,3vw,2rem)] leading-tight font-extrabold tracking-[-0.03em]">
                    <span class="text-gradient">{{ $t("heroTitle") }}</span>
                </p>

                <p class="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-2 sm:text-base">{{ $t("heroLead") }}</p>

                <div class="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#portfolio"
                        class="rounded-full bg-linear-100 from-fill to-fill-2 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >{{ $t("heroCta") }}</a
                    >
                    <a
                        href="#contato"
                        class="glass rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:text-brand"
                        >{{ $t("navContact") }}</a
                    >
                </div>

                <dl class="mt-10 grid grid-cols-3 gap-3">
                    <div v-for="n in numeros" :key="n.id" class="glass rounded-2xl px-4 py-4">
                        <dt class="label-mono text-ink-3">{{ $t(n.labelKey) }}</dt>
                        <dd class="mt-1.5 text-3xl font-extrabold tracking-[-0.03em]">{{ n.valor }}</dd>
                    </div>
                </dl>
            </div>

            <div class="lg:col-span-5">
                <div class="relative">
                    <img
                        src="https://github.com/moablive.png"
                        :alt="$t('altPhoto')"
                        class="glass mx-auto block w-40 rounded-full p-1.5 sm:w-48"
                        width="192"
                        height="192"
                        fetchpriority="high"
                    />

                    <div class="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1017] shadow-[var(--shadow-soft)]">
                        <div class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                            <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true"></span>
                            <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true"></span>
                            <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true"></span>
                            <span class="label-mono ml-2 text-white/40">developer.ts</span>
                        </div>
                        <div class="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.85] text-[#d6deeb]">
                            <div v-for="(linha, k) in terminal" :key="k" :style="{ paddingLeft: `${linha.i * 1.25}rem` }">
                                <span v-html="linha.html"></span>
                            </div>
                        </div>
                    </div>

                    <div class="glass mt-4 flex items-center justify-center rounded-2xl px-4 py-4">
                        <img
                            src="https://skillicons.dev/icons?i=dotnet,nodejs,ts,vue,py,postgres,docker"
                            :alt="$t('altMainStack')"
                            class="max-w-full"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>

        <p class="mt-12 max-w-3xl text-[15px] leading-relaxed text-ink-2" v-html="$t('aboutExperience')"></p>
    </section>
</template>
