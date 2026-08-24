<script setup lang="ts">
import { certificados } from "@/data/certificados";
</script>

<template>
    <section id="certificados" class="py-5">
        <div class="container">
            <h2 class="section-heading text-center mb-5">{{ $t("certTitle") }}</h2>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div class="col" v-for="cert in certificados" :key="cert.id">
                    <div class="card h-100 cert-card-pro">
                        <i class="fas cert-watermark" :class="cert.marcaDagua" aria-hidden="true"></i>
                        <div class="card-body p-4 d-flex flex-column cert-content-wrapper">
                            <h3 class="card-title h5 text-dark fw-bold mb-3">{{ $t(cert.tituloKey) }}</h3>
                            <h4 class="card-subtitle h6 mb-3 text-primary fw-bold">
                                <i class="fas me-2" :class="cert.instituicaoIcone" aria-hidden="true"></i
                                >{{ cert.instituicao }}
                            </h4>
                            <div class="card-text text-muted mb-4 mt-auto">
                                <small class="d-block mb-1" v-html="$t(cert.dataKey)"></small>
                                <small class="d-block" v-if="cert.credencial">
                                    <i class="fas fa-fingerprint text-secondary me-2" aria-hidden="true"></i>ID:
                                    {{ cert.credencial }}
                                </small>
                            </div>
                            <a
                                :href="cert.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-outline-primary w-100 rounded-pill fw-bold"
                                v-html="$t(cert.ctaKey)"
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
