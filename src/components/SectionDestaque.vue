<script setup lang="ts">
import { useModal } from "@/composables/useModal";

const { abrir } = useModal();
const PRODUCAO = "https://loginhub.astralwavelabel.com/login";
</script>

<template>
    <section id="login-hub-feature" class="mx-auto max-w-[1180px] px-5 py-20">
        <div class="relative overflow-hidden rounded-[2rem] bg-linear-135 from-fill to-fill-2 px-6 py-12 text-white sm:px-12 sm:py-16">
            <!-- Brilho decorativo, atrás do conteúdo. -->
            <div
                class="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/15 blur-3xl"
                aria-hidden="true"
            ></div>

            <div class="relative grid gap-8 lg:grid-cols-12 lg:items-center">
                <div class="lg:col-span-7">
                    <p class="label-mono mb-4 text-white/75">{{ $t("featureTitle") }}</p>
                    <h2 class="text-[clamp(1.75rem,4.5vw,2.75rem)] leading-tight font-extrabold tracking-[-0.03em]">
                        AWLSRV LoginHub
                    </h2>
                    <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-white/85">{{ $t("featureSubtitle") }}</p>

                    <p class="label-mono mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
                        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-white" aria-hidden="true"></span>
                        {{ $t("envLabel") }} Cloudflare Tunnel
                    </p>
                </div>

                <div class="flex flex-col gap-3 lg:col-span-5">
                    <button
                        type="button"
                        class="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-fill transition-transform hover:-translate-y-0.5"
                        @click="abrir('modalLoginHub', $event)"
                        v-html="$t('featureBtnArch')"
                    ></button>
                    <a
                        :href="PRODUCAO"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-full border border-white/40 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/12"
                        v-html="$t('featureBtnProd')"
                    ></a>
                </div>
            </div>
        </div>
    </section>
</template>
