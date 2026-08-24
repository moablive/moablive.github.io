<script setup lang="ts">
import type { Projeto } from "@/data/types";
import { useLabel } from "@/composables/useLabel";
import BaseModal from "./BaseModal.vue";

defineProps<{ projeto: Projeto }>();

const { lab } = useLabel();
</script>

<template>
    <BaseModal v-if="projeto.arq && projeto.modalId" :id="projeto.modalId" :titulo="lab(projeto.titulo)" icone="fa-diagram-project">
        <p class="text-[15px] leading-relaxed text-ink-2" v-html="$t(projeto.arq.descKey)"></p>

        <h3 class="mt-8 text-sm font-bold tracking-[-0.01em]">{{ $t("modalArchPoints") }}</h3>
        <ul class="mt-4 flex flex-col gap-3">
            <li
                v-for="key in projeto.arq.itensKeys"
                :key="key"
                class="rounded-2xl border border-hairline px-4 py-3 text-[15px] leading-relaxed text-ink-2"
                v-html="$t(key)"
            ></li>
        </ul>

        <h3 class="mt-8 text-sm font-bold tracking-[-0.01em]">{{ $t("modalTech") }}</h3>
        <img :src="projeto.stack" :alt="projeto.stackAlt" class="mt-4 max-w-full" loading="lazy" />

        <a
            :href="projeto.href"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-block rounded-full bg-linear-100 from-fill to-fill-2 px-5 py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
        >
            <span v-if="projeto.ctaKey" v-html="$t(projeto.ctaKey)"></span>
            <span v-else><i class="fab fa-github mr-2" aria-hidden="true"></i>GitHub</span>
        </a>
    </BaseModal>
</template>
