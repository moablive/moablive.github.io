<script setup lang="ts">
import { cargos } from "@/data/trajetoria";
import { useLabel } from "@/composables/useLabel";

const { lab } = useLabel();
</script>

<template>
    <section id="trajetoria" class="experience-section py-5 bg-light-custom">
        <div class="container timeline-wrapper">
            <h2 class="section-heading text-center mb-2">{{ $t("expTitle") }}</h2>
            <p class="text-center text-muted mb-5">{{ $t("expSubtitle") }}</p>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 justify-content-center">
                <div class="col" v-for="cargo in cargos" :key="cargo.id">
                    <div
                        class="timeline-item-h d-flex flex-column h-100 align-items-center"
                        :class="{ 'current-role': cargo.atual }"
                    >
                        <span class="date-badge" v-html="lab(cargo.periodo)"></span>

                        <button
                            type="button"
                            class="card timeline-card-pro w-100 h-100 text-start"
                            :class="{ 'card-atual-pro': cargo.atual }"
                            data-bs-toggle="modal"
                            :data-bs-target="`#${cargo.modalId}`"
                        >
                            <div class="card-body p-4 d-flex flex-column pt-5">
                                <div
                                    class="role-icon-box bg-opacity-10"
                                    :class="cargo.atual ? 'bg-success text-success' : 'bg-primary text-primary'"
                                >
                                    <i class="fas" :class="cargo.icone" aria-hidden="true"></i>
                                </div>
                                <h3 class="card-title h5 fw-bold mb-1" :class="cargo.atual ? 'text-success' : 'text-primary'">
                                    {{ lab(cargo.cargo) }}
                                </h3>
                                <h4 class="card-subtitle h6 text-dark fw-bold mb-3">{{ cargo.empresa }}</h4>
                                <p
                                    class="card-text mb-auto pb-4"
                                    :class="cargo.atual ? 'text-success fw-bold' : 'text-muted'"
                                >
                                    <small v-html="$t(cargo.duracaoKey)"></small>
                                </p>
                                <div class="badges-container mt-auto">
                                    <span
                                        class="badge"
                                        :class="cargo.atual ? 'bg-dark' : 'bg-primary'"
                                        v-for="(tag, i) in cargo.tags"
                                        :key="i"
                                        >{{ lab(tag) }}</span
                                    >
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
