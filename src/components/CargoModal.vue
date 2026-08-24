<script setup lang="ts">
import { computed } from "vue";
import type { Cargo } from "@/data/types";
import { useLabel } from "@/composables/useLabel";
import BaseModal from "./BaseModal.vue";

const props = defineProps<{ cargo: Cargo }>();
const { lab } = useLabel();

const titulo = computed(() => `${lab(props.cargo.cargoCompleto ?? props.cargo.cargo)} — ${props.cargo.empresa}`);
</script>

<template>
    <BaseModal :id="cargo.modalId" :titulo="titulo" :icone="cargo.modal.tituloIcone">
        <p class="label-mono text-ink-3" v-html="$t(cargo.modal.dataKey)"></p>

        <p class="mt-5 text-[15px] leading-relaxed text-ink-2" v-html="$t(cargo.modal.descKey)"></p>

        <h3 class="mt-8 text-sm font-bold tracking-[-0.01em]">{{ $t(cargo.modal.listaTituloKey) }}</h3>
        <ul class="mt-4 flex flex-col gap-3">
            <li
                v-for="key in cargo.modal.itensKeys"
                :key="key"
                class="rounded-2xl border border-hairline px-4 py-3 text-[15px] leading-relaxed text-ink-2"
                v-html="$t(key)"
            ></li>
        </ul>

        <h3 class="mt-8 text-sm font-bold tracking-[-0.01em]">{{ $t(cargo.modal.techTituloKey) }}</h3>
        <div class="mt-4 flex flex-wrap gap-2">
            <span
                v-for="(tech, i) in cargo.modal.techs"
                :key="i"
                class="rounded-full border border-hairline px-3 py-1.5 font-mono text-[11px] text-ink-2"
                >{{ lab(tech.texto) }}</span
            >
        </div>

        <div v-if="cargo.modal.links" class="mt-8 flex flex-wrap gap-3">
            <a
                v-for="link in cargo.modal.links"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full px-5 py-3 text-[13px] font-semibold transition-opacity"
                :class="
                    link.primario
                        ? 'bg-linear-100 from-fill to-fill-2 text-white hover:opacity-90'
                        : 'border border-hairline transition-colors hover:border-brand hover:text-brand'
                "
                v-html="$t(link.i18n)"
            ></a>
        </div>
    </BaseModal>
</template>
