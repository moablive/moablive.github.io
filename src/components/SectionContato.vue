<script setup lang="ts">
import { contatos } from "@/data/tecnologias";
import { useModal } from "@/composables/useModal";
import SecaoTitulo from "./SecaoTitulo.vue";

const { abrir } = useModal();
</script>

<template>
    <section id="contato" class="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <SecaoTitulo numero="07" :titulo="$t('contactTitle')" />

        <div class="hard lift bg-sun px-6 py-10 sm:px-10 sm:py-14">
            <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div class="lg:col-span-7">
                    <p class="font-display text-[clamp(1.25rem,3vw,2rem)] leading-tight tracking-[-0.02em]">
                        {{ $t("contactLead") }}
                    </p>
                    <p class="label-mono mt-5">
                        <i class="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>{{ $t("location") }}
                    </p>
                </div>

                <div class="flex flex-col gap-3 lg:col-span-5">
                    <a
                        v-for="contato in contatos"
                        :key="contato.id"
                        :href="contato.href"
                        :target="contato.href.startsWith('mailto:') ? undefined : '_blank'"
                        rel="noopener noreferrer"
                        class="hard-2 flex items-center justify-between bg-paper-2 px-5 py-3.5 font-mono text-sm font-bold transition-transform hover:-translate-y-0.5 hover:bg-ink hover:text-sun"
                    >
                        <span>{{ $t(contato.altKey) }}</span>
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- rastreador de visitas: o número em si já aparece na faixa do topo -->
        <div class="mt-5 flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-ink pt-5">
            <p class="label-mono text-ink-soft" v-html="$t('visitFootnote')"></p>
            <button
                type="button"
                class="hard-2 bg-paper-2 px-4 py-2.5 font-mono text-xs font-bold transition-transform hover:-translate-y-0.5"
                @click="abrir('modalTechStack', $event)"
                v-html="$t('visitStackBtn')"
            ></button>
        </div>
    </section>
</template>
