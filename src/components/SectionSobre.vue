<script setup lang="ts">
const TYPING_SVG =
    "https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=22&duration=3000&pause=1000&color=0d6efd&width=500&lines=Software+Engineer+%26+Architect;Especialista+em+.NET%2C+Node+e+Python;SOLID+%7C+DDD+%7C+TDD+%7C+Clean+Code;Always+Learning+%F0%9F%9A%80";

// O bloco "developer.ts" é decorativo: markup fixo, sem dados por trás.
const terminal = [
    { indent: 0, html: '<span class="tok-kw">const</span> <span class="tok-var">moablive</span> = {' },
    { indent: 1, html: '<span class="tok-prop">mastery</span>: {' },
    { indent: 2, html: '<span class="tok-prop">language</span>: <span class="tok-str">"TypeScript 💎"</span>,' },
    {
        indent: 2,
        html: '<span class="tok-prop">frontend</span>: [<span class="tok-str">"React ⚛️"</span>, <span class="tok-str">"Angular 🅰️"</span>, <span class="tok-str">"Vue.js 💚"</span>]',
    },
    { indent: 1, html: "}," },
    {
        indent: 1,
        html: '<span class="tok-prop">stack</span>: [<span class="tok-str">".NET"</span>, <span class="tok-str">"Python"</span>, <span class="tok-str">"Node.js"</span>],',
    },
    { indent: 1, html: '<span class="tok-prop">focus</span>: [' },
    { indent: 2, html: '<span class="tok-str">"Frontend Architecture"</span>,' },
    { indent: 2, html: '<span class="tok-str">"Clean Architecture"</span>,' },
    { indent: 2, html: '<span class="tok-str">"Microservices"</span>,' },
    { indent: 2, html: '<span class="tok-str">"Performance"</span>' },
    { indent: 1, html: "]," },
    { indent: 1, html: '<span class="tok-prop">mindset</span>: <span class="tok-str">"Always learning and improving 🚀"</span>' },
    { indent: 0, html: '};<span class="cursor-blink" aria-hidden="true">_</span>' },
];
</script>

<template>
    <section id="sobre" class="py-5 bg-gradient-custom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                    <div class="mb-4 d-inline-block position-relative profile-wrapper">
                        <img
                            src="https://github.com/moablive.png"
                            :alt="$t('altPhoto')"
                            class="rounded-circle shadow-lg border border-4 border-white profile-img"
                            width="180"
                            height="180"
                            fetchpriority="high"
                        />
                    </div>

                    <h1 class="display-5 fw-bold mb-2 text-dark">{{ $t("aboutGreeting") }}</h1>

                    <div class="mb-3 typing-svg-wrapper">
                        <img
                            :src="TYPING_SVG"
                            :alt="$t('altTyping')"
                            class="img-fluid"
                            width="500"
                            height="40"
                        />
                    </div>

                    <p class="lead mb-4 text-secondary" v-html="$t('aboutExperience')"></p>

                    <div class="mb-4 w-100 d-flex justify-content-center justify-content-lg-start">
                        <img
                            src="https://skillicons.dev/icons?i=dotnet,nodejs,py,postgres,redis,kafka,docker"
                            :alt="$t('altMainStack')"
                            class="img-fluid"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card bg-dark text-white shadow-lg border-0 hacker-card">
                        <div
                            class="card-header bg-secondary bg-opacity-25 border-0 d-flex align-items-center py-2 relative-z"
                        >
                            <div class="d-flex gap-2 me-3" aria-hidden="true">
                                <span class="terminal-dot bg-danger"></span>
                                <span class="terminal-dot bg-warning"></span>
                                <span class="terminal-dot bg-success"></span>
                            </div>
                            <small class="text-white-50 font-monospace">developer.ts</small>
                        </div>
                        <div class="card-body p-4 font-monospace hacker-card-body">
                            <div v-for="(linha, i) in terminal" :key="i" :class="`terminal-indent-${linha.indent}`">
                                <span v-html="linha.html"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
