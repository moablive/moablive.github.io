<script setup lang="ts">
import { formacoes } from "@/data/formacao";
import SecaoTitulo from "./SecaoTitulo.vue";
</script>

<template>
    <section id="formacao" class="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <SecaoTitulo numero="01" :titulo="$t('educationTitle')" />

        <div class="grid gap-5 md:grid-cols-2">
            <article
                v-for="item in formacoes"
                :key="item.id"
                class="hard flex flex-col p-6"
                :class="item.concluido ? 'bg-paper-2' : 'bg-sun'"
            >
                <div class="mb-5 flex items-start justify-between gap-4">
                    <span class="hard-2 bg-ink px-3 py-2 font-display text-sm text-paper">{{ item.sigla }}</span>
                    <span
                        class="hard-2 px-3 py-1.5 font-mono text-[11px] font-bold"
                        :class="item.concluido ? 'bg-sun' : 'bg-paper-2'"
                        v-html="$t(item.concluido ? 'eduStatusDone' : 'eduStatusOngoing')"
                    ></span>
                </div>

                <h3 class="font-display text-xl leading-tight tracking-[-0.02em]">{{ $t(item.cursoKey) }}</h3>

                <a
                    :href="item.siteInstituicao"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-2 font-mono text-[13px] text-ink-soft underline decoration-2 underline-offset-4 hover:text-accent"
                    >{{ item.instituicao }}</a
                >

                <p class="label-mono mt-auto pt-6 text-ink-soft" v-html="$t(item.periodoKey)"></p>

                <a
                    :href="item.credencial ?? item.siteInstituicao"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hard-2 mt-4 inline-flex items-center justify-center gap-2 bg-paper-2 px-4 py-2.5 font-mono text-xs font-bold transition-transform hover:-translate-y-0.5"
                    :aria-label="$t(item.credencialAriaKey)"
                >
                    <i class="fas" :class="item.credencial ? 'fa-medal' : 'fa-external-link-alt'" aria-hidden="true"></i>
                    {{ $t(item.credencial ? "btnViewCredential" : "btnVisitInst") }}
                </a>
            </article>
        </div>
    </section>
</template>
