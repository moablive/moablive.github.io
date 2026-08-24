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
    <BaseModal id="modalLoginHub" titulo="AWLSRV LoginHub (IdP)" icone="fa-fingerprint" tom="accent">
        <div class="grid gap-6 sm:grid-cols-12 sm:items-center">
            <div class="hard-2 flex items-center justify-center bg-ink py-8 sm:col-span-4">
                <i class="fas fa-server text-6xl text-sun" aria-hidden="true"></i>
            </div>
            <div class="sm:col-span-8">
                <h3 class="font-display text-lg tracking-[-0.02em]">{{ $t("lhWhat") }}</h3>
                <p class="mt-3 text-[15px] leading-relaxed" v-html="$t('lhP1')"></p>
                <p class="mt-3 text-[15px] leading-relaxed text-ink-soft">{{ $t("lhP2") }}</p>
            </div>
        </div>

        <h3 class="mt-8 font-display text-sm tracking-[-0.01em] uppercase" v-html="$t('lhStack')"></h3>
        <img
            src="https://skillicons.dev/icons?i=docker,cloudflare,postgres,nginx,nodejs,ts,linux"
            alt="Docker, Cloudflare, PostgreSQL, Nginx, Node.js, TypeScript, Linux"
            class="mt-4 max-w-full"
            loading="lazy"
        />

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <div v-for="pilar in pilares" :key="pilar.id" class="hard-2 bg-paper p-4">
                <p class="flex items-center gap-2 font-mono text-xs font-bold">
                    <i :class="pilar.icone" aria-hidden="true"></i>{{ pilar.tituloKey ? $t(pilar.tituloKey) : pilar.titulo }}
                </p>
                <p class="mt-2 text-sm leading-relaxed text-ink-soft">{{ $t(pilar.textoKey) }}</p>
            </div>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
            <a
                href="https://loginhub.astralwavelabel.com/login"
                target="_blank"
                rel="noopener noreferrer"
                class="hard-2 bg-sun px-5 py-3 font-mono text-xs font-bold text-ink transition-transform hover:-translate-y-0.5"
                v-html="$t('lhBtnAccess')"
            ></a>
            <a
                href="https://github.com/moablive/AWLSRV_LoginHub"
                target="_blank"
                rel="noopener noreferrer"
                class="hard-2 bg-ink px-5 py-3 font-mono text-xs font-bold text-paper transition-transform hover:-translate-y-0.5"
                v-html="$t('lhBtnRepo')"
            ></a>
        </div>
    </BaseModal>
</template>
