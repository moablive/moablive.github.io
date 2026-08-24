<script setup lang="ts">
const pilares = [
    { id: "docker", icone: "fab fa-docker text-primary", titulo: "Docker & Nginx", textoKey: "lhDocker" },
    { id: "cf", icone: "fas fa-cloud text-warning", titulo: "Cloudflare Tunnels", textoKey: "lhCf" },
    { id: "pg", icone: "fas fa-database text-info", titulo: "PostgreSQL (ACID)", textoKey: "lhPg" },
    { id: "sec", icone: "fas fa-shield-alt text-success", tituloKey: "lhSecTitle", textoKey: "lhSec" },
];
</script>

<template>
    <div class="modal fade" id="modalLoginHub" tabindex="-1" aria-labelledby="modalLoginHubLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content border-0 shadow-lg glass-effect-modal">
                <div class="modal-header bg-gradient-dark text-white border-0">
                    <h2 class="modal-title h5 fw-bold" id="modalLoginHubLabel">
                        <i class="fas fa-fingerprint me-2" aria-hidden="true"></i> AWLSRV LoginHub (IdP)
                    </h2>
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        :aria-label="$t('close')"
                    ></button>
                </div>

                <div class="modal-body p-4 p-md-5">
                    <div class="row align-items-center">
                        <div class="col-md-5 text-center mb-4 mb-md-0">
                            <i class="fas fa-server fa-6x text-secondary mb-3" aria-hidden="true"></i>
                            <h3 class="h6 fw-bold mt-2">{{ $t("lhEnterprise") }}</h3>
                        </div>
                        <div class="col-md-7">
                            <h3 class="h5 fw-bold mb-3">{{ $t("lhWhat") }}</h3>
                            <p class="text-muted" v-html="$t('lhP1')"></p>
                            <p class="text-muted">{{ $t("lhP2") }}</p>
                        </div>
                    </div>

                    <hr class="my-4" />
                    <h3 class="h6 fw-bold text-center mb-4" v-html="$t('lhStack')"></h3>
                    <div class="d-flex justify-content-center mb-4">
                        <img
                            src="https://skillicons.dev/icons?i=docker,cloudflare,postgres,nginx,nodejs,ts,linux"
                            alt="Docker, Cloudflare, PostgreSQL, Nginx, Node.js, TypeScript, Linux"
                            class="img-fluid modal-stack-icons"
                            loading="lazy"
                        />
                    </div>

                    <div class="row g-3">
                        <div class="col-sm-6" v-for="pilar in pilares" :key="pilar.id">
                            <div class="p-3 border rounded-3 h-100 bg-light">
                                <i :class="pilar.icone" class="me-2" aria-hidden="true"></i>
                                <strong>{{ pilar.tituloKey ? $t(pilar.tituloKey) : pilar.titulo }}</strong>
                                <p class="small text-muted mb-0">{{ $t(pilar.textoKey) }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer border-0 bg-light justify-content-center">
                    <a
                        href="https://loginhub.astralwavelabel.com/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-success rounded-pill px-4 fw-bold"
                        v-html="$t('lhBtnAccess')"
                    ></a>
                    <a
                        href="https://github.com/moablive/AWLSRV_LoginHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-dark rounded-pill px-4"
                        v-html="$t('lhBtnRepo')"
                    ></a>
                </div>
            </div>
        </div>
    </div>
</template>
