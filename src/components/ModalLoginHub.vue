<script setup lang="ts">
import BaseModal from "./BaseModal.vue";

const pilares = [
    { id: "docker", icone: "fab fa-docker", titulo: "Docker & Nginx", textoKey: "lhDocker" },
    { id: "cf", icone: "fas fa-cloud", titulo: "Cloudflare Tunnels", textoKey: "lhCf" },
    { id: "pg", icone: "fas fa-database", titulo: "PostgreSQL (ACID)", textoKey: "lhPg" },
    { id: "sec", icone: "fas fa-shield-alt", tituloKey: "lhSecTitle", textoKey: "lhSec" },
];
</script>

<template>
    <BaseModal id="modalLoginHub" titulo="AWLSRV LoginHub (IdP)" icone="fa-fingerprint">
        <h3 class="text-lg font-bold tracking-[-0.02em]">{{ $t("lhWhat") }}</h3>
        <p class="mt-3 text-[15px] leading-relaxed text-ink-2" v-html="$t('lhP1')"></p>
        <p class="mt-3 text-[15px] leading-relaxed text-ink-2">{{ $t("lhP2") }}</p>

        <h3 class="mt-8 text-sm font-bold tracking-[-0.01em]" v-html="$t('lhStack')"></h3>
        <img
            src="https://skillicons.dev/icons?i=docker,cloudflare,postgres,nginx,nodejs,ts,linux"
            alt="Docker, Cloudflare, PostgreSQL, Nginx, Node.js, TypeScript, Linux"
            class="mt-4 max-w-full"
            loading="lazy"
        />

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <div v-for="pilar in pilares" :key="pilar.id" class="rounded-2xl border border-hairline p-4">
                <p class="flex items-center gap-2 text-[13px] font-semibold">
                    <i :class="pilar.icone" class="text-brand" aria-hidden="true"></i>
                    {{ pilar.tituloKey ? $t(pilar.tituloKey) : pilar.titulo }}
                </p>
                <p class="mt-2 text-sm leading-relaxed text-ink-2">{{ $t(pilar.textoKey) }}</p>
            </div>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
            <a
                href="https://loginhub.astralwavelabel.com/login"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full bg-linear-100 from-brand to-brand-2 px-5 py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                v-html="$t('lhBtnAccess')"
            ></a>
            <a
                href="https://github.com/moablive/AWLSRV_LoginHub"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full border border-hairline px-5 py-3 text-[13px] font-semibold transition-colors hover:border-brand hover:text-brand"
                v-html="$t('lhBtnRepo')"
            ></a>
        </div>
    </BaseModal>
</template>
