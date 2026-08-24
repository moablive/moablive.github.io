<script setup lang="ts">
import { useModal } from "@/composables/useModal";

const { abrir } = useModal();
const PRODUCAO = "https://loginhub.astralwavelabel.com/login";
</script>

<template>
    <section id="login-hub-feature" class="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
        <div class="hard lift bg-ink px-6 py-10 text-paper sm:px-10 sm:py-14">
            <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
                <div class="lg:col-span-7">
                    <p class="label-mono mb-5 text-sun">{{ $t("featureTitle") }}</p>
                    <h2 class="font-display text-[clamp(1.75rem,5vw,3.25rem)] leading-none tracking-[-0.03em] uppercase">
                        AWLSRV LoginHub
                    </h2>
                    <p class="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/80">{{ $t("featureSubtitle") }}</p>
                </div>

                <div class="flex flex-col gap-3 lg:col-span-5">
                    <div class="hard-2 flex items-center justify-between gap-3 border-sun bg-ink px-4 py-3">
                        <span class="label-mono text-paper/70">
                            <i class="fab fa-docker mr-2" aria-hidden="true"></i>{{ $t("envLabel") }}
                        </span>
                        <span class="label-mono flex items-center gap-2 text-sun">
                            <span class="h-2 w-2 animate-pulse bg-sun" aria-hidden="true"></span>Cloudflare Tunnel
                        </span>
                    </div>

                    <button
                        type="button"
                        class="hard-2 border-paper bg-sun px-5 py-3.5 font-mono text-xs font-bold text-ink transition-transform hover:-translate-y-0.5"
                        @click="abrir('modalLoginHub', $event)"
                        v-html="$t('featureBtnArch')"
                    ></button>

                    <a
                        :href="PRODUCAO"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hard-2 border-paper bg-accent px-5 py-3.5 text-center font-mono text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
                        v-html="$t('featureBtnProd')"
                    ></a>
                </div>
            </div>
        </div>
    </section>
</template>
