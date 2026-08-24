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
        <p v-if="!cargo.modal.site" class="label-mono text-ink-3" v-html="$t(cargo.modal.dataKey)"></p>
        <p v-else class="label-mono text-ink-3">
            <i class="fas fa-calendar-alt mr-2" aria-hidden="true"></i>{{ $t(cargo.modal.dataKey) }} ·
            <a :href="cargo.modal.site.href" target="_blank" rel="noopener noreferrer">{{ cargo.modal.site.label }}</a>
        </p>

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
    </BaseModal>
</template>
