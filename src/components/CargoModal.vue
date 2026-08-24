<script setup lang="ts">
import { computed } from "vue";
import type { Cargo } from "@/data/types";
import { useLabel } from "@/composables/useLabel";
import BaseModal from "./BaseModal.vue";

const props = defineProps<{ cargo: Cargo }>();
const { lab } = useLabel();

// O título deriva do cargo traduzido — literal deixaria o modal em português
// com a página em inglês.
const titulo = computed(() => `${lab(props.cargo.cargoCompleto ?? props.cargo.cargo)} — ${props.cargo.empresa}`);
</script>

<template>
    <!-- Um componente cobre os 6 modais de cargo. -->
    <BaseModal
        :id="cargo.modalId"
        :titulo="titulo"
        :icone="cargo.modal.tituloIcone"
        :tom="cargo.modal.destaque === 'success' ? 'sun' : 'ink'"
    >
        <p v-if="!cargo.modal.site" class="label-mono text-ink-soft" v-html="$t(cargo.modal.dataKey)"></p>
        <p v-else class="label-mono text-ink-soft">
            <i class="fas fa-calendar-alt mr-2" aria-hidden="true"></i>{{ $t(cargo.modal.dataKey) }} ·
            <a :href="cargo.modal.site.href" target="_blank" rel="noopener noreferrer">{{ cargo.modal.site.label }}</a>
        </p>

        <p class="mt-5 text-[15px] leading-relaxed" v-html="$t(cargo.modal.descKey)"></p>

        <h3 class="mt-8 font-display text-sm tracking-[-0.01em] uppercase">{{ $t(cargo.modal.listaTituloKey) }}</h3>
        <ul class="mt-4 flex flex-col gap-3">
            <li
                v-for="key in cargo.modal.itensKeys"
                :key="key"
                class="border-l-[3px] border-accent pl-4 text-[15px] leading-relaxed"
                v-html="$t(key)"
            ></li>
        </ul>

        <h3 class="mt-8 font-display text-sm tracking-[-0.01em] uppercase">{{ $t(cargo.modal.techTituloKey) }}</h3>
        <div class="mt-4 flex flex-wrap gap-2">
            <span
                v-for="(tech, i) in cargo.modal.techs"
                :key="i"
                class="hard-2 bg-paper px-3 py-1.5 font-mono text-xs font-bold"
                >{{ lab(tech.texto) }}</span
            >
        </div>
    </BaseModal>
</template>
