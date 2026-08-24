<script setup lang="ts">
const itens = ["trackPg", "trackNode", "trackDocker", "trackCf"];
</script>

<template>
    <div class="modal fade" id="modalTechStack" tabindex="-1" aria-labelledby="modalTechStackLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content border-0 shadow-lg">
                <div class="modal-header bg-dark text-white border-0">
                    <h2 class="modal-title h5" id="modalTechStackLabel">
                        <i class="fab fa-github me-2" aria-hidden="true"></i> portfolio-track-visit
                    </h2>
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        :aria-label="$t('close')"
                    ></button>
                </div>

                <div class="modal-body text-center p-4">
                    <h3 class="h6 fw-bold">{{ $t("trackTitle") }}</h3>
                    <p class="text-muted small">{{ $t("trackDesc") }}</p>

                    <div class="my-4">
                        <img
                            src="https://skillicons.dev/icons?i=nodejs,ts,postgres,docker,cloudflare"
                            alt="Node.js, TypeScript, PostgreSQL, Docker, Cloudflare"
                            class="img-fluid"
                            loading="lazy"
                        />
                    </div>

                    <ul class="list-group list-group-flush text-start small mb-4">
                        <li class="list-group-item bg-transparent" v-for="key in itens" :key="key" v-html="$t(key)"></li>
                    </ul>

                    <a
                        href="https://github.com/moablive/portfolio-track-visit"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-dark w-100 rounded-pill"
                        v-html="$t('trackBtnRepo')"
                    ></a>
                </div>
            </div>
        </div>
    </div>
</template>
