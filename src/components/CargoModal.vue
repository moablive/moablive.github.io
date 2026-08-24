<script setup lang="ts">
import { computed } from "vue";
import type { Cargo } from "@/data/types";
import { useLabel } from "@/composables/useLabel";

const props = defineProps<{ cargo: Cargo }>();
const { lab } = useLabel();

// O título do modal deriva do cargo traduzido — antes era literal e ficava
// em português mesmo com a página em inglês.
const tituloModal = computed(() => `${lab(props.cargo.cargoCompleto ?? props.cargo.cargo)} — ${props.cargo.empresa}`);
</script>

<template>
    <!-- Um componente cobre os 6 modais de cargo; antes eram 6 arquivos HTML. -->
    <div class="modal fade" :id="cargo.modalId" tabindex="-1" :aria-labelledby="`${cargo.modalId}Label`" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div
                class="modal-content border-0 shadow-lg"
                :class="cargo.modal.destaque === 'success' ? 'modal-accent-success' : 'modal-accent-primary'"
            >
                <div class="modal-header bg-light">
                    <h2
                        class="modal-title h5 fw-bold"
                        :class="cargo.modal.destaque === 'success' ? 'text-success' : 'text-primary'"
                        :id="`${cargo.modalId}Label`"
                    >
                        <i class="fas me-2" :class="cargo.modal.tituloIcone" aria-hidden="true"></i>{{ tituloModal }}
                    </h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" :aria-label="$t('close')"></button>
                </div>

                <div class="modal-body p-4 p-md-5">
                    <p class="text-muted" v-if="!cargo.modal.site" v-html="$t(cargo.modal.dataKey)"></p>
                    <p class="text-muted" v-else>
                        <i class="fas fa-calendar-alt me-2" aria-hidden="true"></i
                        ><strong>{{ $t(cargo.modal.dataKey) }}</strong> |
                        <a :href="cargo.modal.site.href" target="_blank" rel="noopener noreferrer" class="text-decoration-none">{{
                            cargo.modal.site.label
                        }}</a>
                    </p>

                    <p v-html="$t(cargo.modal.descKey)"></p>

                    <h3 class="h6 fw-bold text-dark mt-4 mb-3">{{ $t(cargo.modal.listaTituloKey) }}</h3>
                    <ul class="list-unstyled modal-impact-list">
                        <li v-for="key in cargo.modal.itensKeys" :key="key" v-html="$t(key)"></li>
                    </ul>

                    <hr class="my-4" />
                    <h3 class="h6">{{ $t(cargo.modal.techTituloKey) }}</h3>
                    <div class="d-flex flex-wrap gap-2 mt-2">
                        <span class="badge" :class="tech.variante" v-for="(tech, i) in cargo.modal.techs" :key="i">{{
                            lab(tech.texto)
                        }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
