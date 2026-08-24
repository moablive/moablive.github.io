<script setup lang="ts">
import type { Cargo } from "@/data/types";
import { useLabel } from "@/composables/useLabel";
import { useModal } from "@/composables/useModal";

defineProps<{ cargo: Cargo }>();

const { lab } = useLabel();
const { abrir } = useModal();
</script>

<template>
    <button
        type="button"
        class="glass lift-hover grid w-full grid-cols-1 items-center gap-4 rounded-3xl p-5 text-left sm:p-6 md:grid-cols-[8.5rem_1fr_auto]"
        @click="abrir(cargo.modalId, $event)"
    >
        <span class="label-mono text-brand" v-html="lab(cargo.periodo)"></span>

        <span>
            <span class="block text-base font-bold tracking-[-0.02em] sm:text-lg">{{ lab(cargo.cargo) }}</span>
            <span class="mt-1 block text-sm text-ink-2">{{ cargo.empresa }}</span>
            <span class="label-mono mt-1.5 block text-ink-3" v-html="$t(cargo.duracaoKey)"></span>
        </span>

        <span class="flex flex-wrap gap-2 md:justify-end">
            <span
                v-for="(tag, i) in cargo.tags"
                :key="i"
                class="rounded-full px-2.5 py-1 font-mono text-[11px]"
                :class="
                    cargo.paralelo && i === 0
                        ? 'bg-linear-100 from-fill to-fill-2 text-white'
                        : 'border border-hairline text-ink-2'
                "
                >{{ lab(tag) }}</span
            >
        </span>
    </button>
</template>
