<script setup lang="ts">
import { contatos } from "@/data/tecnologias";
import SecaoTitulo from "./SecaoTitulo.vue";

const ICONES: Record<string, string> = {
    linkedin: "fab fa-linkedin-in",
    gmail: "fas fa-envelope",
    github: "fab fa-github",
};
</script>

<template>
    <section id="contato" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="07" :titulo="$t('contactTitle')" />

        <div class="glass rounded-[2rem] p-6 sm:p-10">
            <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div class="lg:col-span-6">
                    <p class="text-xl leading-snug font-bold tracking-[-0.02em] text-balance sm:text-2xl">
                        {{ $t("contactLead") }}
                    </p>
                    <p class="label-mono mt-5 flex items-center gap-2 text-ink-3">
                        <i class="fas fa-map-marker-alt text-brand" aria-hidden="true"></i>{{ $t("location") }}
                    </p>
                </div>

                <div class="grid gap-3 sm:grid-cols-3 lg:col-span-6">
                    <a
                        v-for="contato in contatos"
                        :key="contato.id"
                        :href="contato.href"
                        :target="contato.href.startsWith('mailto:') ? undefined : '_blank'"
                        rel="noopener noreferrer"
                        class="lift-hover flex flex-col items-center gap-3 rounded-2xl border border-hairline px-4 py-5 text-center transition-colors hover:border-brand"
                    >
                        <span class="grid h-11 w-11 place-items-center rounded-full bg-linear-100 from-brand to-brand-2 text-white">
                            <i :class="ICONES[contato.id]" aria-hidden="true"></i>
                        </span>
                        <span class="text-[13px] font-semibold">{{ $t(contato.altKey) }}</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
