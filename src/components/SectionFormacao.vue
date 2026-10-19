<script setup lang="ts">
import { formacoes } from "@/data/formacao";
import SecaoTitulo from "./SecaoTitulo.vue";
</script>

<template>
    <section id="formacao" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="01" :titulo="$t('educationTitle')" />

        <!-- Linha do tempo: no celular, trilho à esquerda; do md para cima, trilho no
             centro com os cards alternando de lado. O marco no trilho é o ano de conclusão. -->
        <ol
            class="relative flex flex-col gap-10 before:absolute before:top-0 before:bottom-0 before:left-[27px] before:w-0.5 before:bg-linear-to-b before:from-fill before:via-brand-2/60 before:to-hairline md:gap-6 md:before:left-1/2 md:before:-translate-x-1/2"
            :aria-label="$t('eduTimelineAria')"
        >
            <li
                v-for="(item, i) in formacoes"
                :key="item.id"
                class="relative pl-20 md:grid md:grid-cols-2 md:gap-16 md:pl-0 md:[&:not(:first-child)]:-mt-24"
            >
                <!-- Marco do ano, em cima do trilho. -->
                <span
                    class="absolute top-0 left-0 z-10 grid h-14 w-14 place-items-center rounded-full border-4 border-canvas text-[13px] font-extrabold tracking-[-0.02em] text-white shadow-[var(--shadow-soft)] md:left-1/2 md:-translate-x-1/2"
                    :class="i === 0 ? 'bg-linear-100 from-fill to-fill-2' : 'bg-linear-100 from-fill/80 to-brand-2/80'"
                    >{{ item.ano }}</span
                >

                <article
                    class="glass lift-hover relative flex flex-col rounded-3xl p-6"
                    :class="i % 2 === 0 ? 'md:col-start-1 md:mr-2 md:text-right' : 'md:col-start-2 md:ml-2'"
                >
                    <div class="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2" :class="i % 2 === 0 && 'md:flex-row-reverse'">
                        <span
                            class="grid h-11 min-w-11 shrink-0 place-items-center rounded-2xl bg-linear-100 from-fill to-fill-2 px-2 text-[11px] font-extrabold text-white"
                            >{{ item.sigla }}</span
                        >
                        <span class="label-mono text-ink-3">{{ $t(item.nivelKey) }}</span>
                        <span
                            class="label-mono rounded-full px-3 py-1.5 whitespace-nowrap"
                            :class="[
                                item.concluido ? 'bg-brand-2/12 text-brand-2' : 'bg-brand-3/12 text-brand-3',
                                i % 2 === 0 ? 'md:mr-auto' : 'ml-auto',
                            ]"
                            v-html="$t(item.concluido ? 'eduStatusDone' : 'eduStatusOngoing')"
                        ></span>
                    </div>

                    <h3 class="text-lg leading-snug font-bold tracking-[-0.02em]">{{ $t(item.cursoKey) }}</h3>
                    <a
                        :href="item.siteInstituicao"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-1.5 text-sm text-ink-2 hover:text-brand"
                        >{{ item.instituicao }}</a
                    >

                    <p class="label-mono mt-4 text-ink-3" v-html="$t(item.periodoKey)"></p>
                    <p v-if="item.notaKey" class="mt-2 text-sm font-semibold text-brand-2">{{ $t(item.notaKey) }}</p>

                    <a
                        :href="item.credencial ?? item.siteInstituicao"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-5 inline-flex items-center justify-center gap-2 self-start rounded-full border border-hairline px-4 py-2 text-[13px] font-semibold transition-colors hover:border-brand hover:text-brand"
                        :class="i % 2 === 0 && 'md:self-end'"
                        :aria-label="$t(item.credencialAriaKey)"
                    >
                        <i class="fas" :class="item.credencial ? 'fa-medal' : 'fa-external-link-alt'" aria-hidden="true"></i>
                        {{ $t(item.credencial ? "btnViewCredential" : "btnVisitInst") }}
                    </a>
                </article>
            </li>
        </ol>
    </section>
</template>
