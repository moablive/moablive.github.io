<script setup lang="ts">
import { certificados } from "@/data/certificados";
import SecaoTitulo from "./SecaoTitulo.vue";
</script>

<template>
    <section id="certificados" class="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <SecaoTitulo numero="02" :titulo="$t('certTitle')" />

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article
                v-for="cert in certificados"
                :key="cert.id"
                class="hard lift-sm relative flex flex-col overflow-hidden bg-paper-2 p-6 transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
                <i
                    class="fas pointer-events-none absolute -right-4 -bottom-6 text-[7rem] text-ink/[0.06]"
                    :class="cert.marcaDagua"
                    aria-hidden="true"
                ></i>

                <div class="relative">
                    <h3 class="font-display text-lg leading-tight tracking-[-0.02em]">{{ $t(cert.tituloKey) }}</h3>
                    <p class="mt-3 flex items-center gap-2 font-mono text-[13px] font-bold text-accent">
                        <i class="fas" :class="cert.instituicaoIcone" aria-hidden="true"></i>{{ cert.instituicao }}
                    </p>
                    <p class="label-mono mt-5 text-ink-soft" v-html="$t(cert.dataKey)"></p>
                    <p v-if="cert.credencial" class="label-mono mt-1.5 text-ink-soft/70">ID: {{ cert.credencial }}</p>
                </div>

                <a
                    :href="cert.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hard-2 relative mt-6 block bg-sun px-4 py-2.5 text-center font-mono text-xs font-bold transition-transform hover:-translate-y-0.5"
                    v-html="$t(cert.ctaKey)"
                ></a>
            </article>
        </div>
    </section>
</template>
