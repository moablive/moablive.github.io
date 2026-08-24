<script setup lang="ts">
const PRODUCAO = "https://loginhub.astralwavelabel.com/login";
</script>

<template>
    <section id="login-hub-feature" class="py-5">
        <div class="container text-center">
            <h2 class="h3 mb-3 fw-bold text-dark">{{ $t("featureTitle") }}</h2>
            <p class="text-muted mb-4">{{ $t("featureSubtitle") }}</p>

            <div class="d-flex justify-content-center gap-3 flex-wrap">
                <button
                    type="button"
                    class="btn btn-dark btn-lg rounded-pill shadow-lg px-4"
                    data-bs-toggle="modal"
                    data-bs-target="#modalLoginHub"
                    v-html="$t('featureBtnArch')"
                ></button>
                <a
                    :href="PRODUCAO"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-outline-success btn-lg rounded-pill shadow-lg px-4"
                    v-html="$t('featureBtnProd')"
                ></a>
            </div>

            <div class="mt-4 p-3 border rounded-4 bg-white shadow-sm mx-auto env-card">
                <div class="d-flex align-items-center justify-content-between px-3 gap-2 flex-wrap">
                    <span class="fw-bold text-secondary"
                        ><i class="fab fa-docker me-2" aria-hidden="true"></i>Environment:</span
                    >
                    <span
                        class="badge bg-success bg-opacity-10 text-success border border-success px-3 py-2 rounded-pill"
                        v-html="$t('featureEnvOnline')"
                    ></span>
                </div>
            </div>
        </div>
    </section>
</template>
