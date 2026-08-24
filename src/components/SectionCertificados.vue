<script setup lang="ts">
import { certificados } from "@/data/certificados";
import SecaoTitulo from "./SecaoTitulo.vue";
</script>

<template>
    <section id="certificados" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="02" :titulo="$t('certTitle')" />

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article
                v-for="cert in certificados"
                :key="cert.id"
                class="glass lift-hover relative flex flex-col overflow-hidden rounded-3xl p-6"
            >
                <i
                    class="fas pointer-events-none absolute -right-3 -bottom-5 text-[6.5rem] text-brand/[0.07]"
                    :class="cert.marcaDagua"
                    aria-hidden="true"
                ></i>

                <div class="relative flex-1">
                    <h3 class="text-base leading-snug font-bold tracking-[-0.02em]">{{ $t(cert.tituloKey) }}</h3>
                    <p class="mt-2.5 flex items-center gap-2 text-[13px] font-semibold text-brand">
                        <i class="fas" :class="cert.instituicaoIcone" aria-hidden="true"></i>{{ cert.instituicao }}
                    </p>
                    <p class="label-mono mt-5 text-ink-3" v-html="$t(cert.dataKey)"></p>
                    <p v-if="cert.credencial" class="label-mono mt-1.5 text-ink-3/70">ID: {{ cert.credencial }}</p>
                </div>

                <a
                    :href="cert.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="relative mt-6 block rounded-full border border-hairline px-4 py-2.5 text-center text-[13px] font-semibold transition-colors hover:border-brand hover:text-brand"
                    v-html="$t(cert.ctaKey)"
                ></a>
            </article>
        </div>
    </section>
</template>
