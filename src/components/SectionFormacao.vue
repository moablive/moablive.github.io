<script setup lang="ts">
import { formacoes } from "@/data/formacao";
import SecaoTitulo from "./SecaoTitulo.vue";
</script>

<template>
    <section id="formacao" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="01" :titulo="$t('educationTitle')" />

        <div class="grid gap-5 md:grid-cols-2">
            <article v-for="item in formacoes" :key="item.id" class="glass lift-hover flex flex-col rounded-3xl p-6">
                <div class="mb-5 flex items-start justify-between gap-4">
                    <span
                        class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-100 from-brand to-brand-2 text-xs font-extrabold text-white"
                        >{{ item.sigla }}</span
                    >
                    <span
                        class="label-mono rounded-full px-3 py-1.5"
                        :class="item.concluido ? 'bg-brand-2/12 text-brand-2' : 'bg-brand-3/12 text-brand-3'"
                        v-html="$t(item.concluido ? 'eduStatusDone' : 'eduStatusOngoing')"
                    ></span>
                </div>

                <h3 class="text-lg leading-snug font-bold tracking-[-0.02em]">{{ $t(item.cursoKey) }}</h3>
                <a
                    :href="item.siteInstituicao"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-2 text-sm text-ink-2 hover:text-brand"
                    >{{ item.instituicao }}</a
                >

                <p class="label-mono mt-auto pt-6 text-ink-3" v-html="$t(item.periodoKey)"></p>

                <a
                    :href="item.credencial ?? item.siteInstituicao"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-hairline px-4 py-2.5 text-[13px] font-semibold transition-colors hover:border-brand hover:text-brand"
                    :aria-label="$t(item.credencialAriaKey)"
                >
                    <i class="fas" :class="item.credencial ? 'fa-medal' : 'fa-external-link-alt'" aria-hidden="true"></i>
                    {{ $t(item.credencial ? "btnViewCredential" : "btnVisitInst") }}
                </a>
            </article>
        </div>
    </section>
</template>
