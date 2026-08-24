<script setup lang="ts">
import { formacoes } from "@/data/formacao";
</script>

<template>
    <section id="formacao" class="py-5 bg-light-custom">
        <div class="container">
            <h2 class="section-heading text-center mb-5">{{ $t("educationTitle") }}</h2>

            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div
                        v-for="item in formacoes"
                        :key="item.id"
                        class="card edu-card-pro shadow-sm mb-4 overflow-hidden"
                        :class="item.concluido ? 'edu-border-success' : 'edu-border-warning'"
                    >
                        <div class="card-body p-4">
                            <div class="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4">
                                <a
                                    :href="item.siteInstituicao"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="edu-school-link d-flex align-items-center justify-content-center"
                                    tabindex="-1"
                                    aria-hidden="true"
                                >
                                    <div class="edu-school-badge">{{ item.sigla }}</div>
                                </a>

                                <div class="edu-content-wrap flex-grow-1 text-center text-md-start">
                                    <div
                                        class="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-between gap-3 mb-2"
                                    >
                                        <h3 class="edu-course-title mb-0">{{ $t(item.cursoKey) }}</h3>
                                        <span
                                            class="badge rounded-pill shadow-sm px-3 py-2 flex-shrink-0"
                                            :class="
                                                item.concluido
                                                    ? 'bg-success bg-opacity-10 text-success border border-success'
                                                    : 'bg-warning text-dark border border-warning'
                                            "
                                            v-html="$t(item.concluido ? 'eduStatusDone' : 'eduStatusOngoing')"
                                        ></span>
                                    </div>

                                    <a
                                        :href="item.siteInstituicao"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="edu-school-link"
                                    >
                                        <div class="edu-school-name">{{ item.instituicao }}</div>
                                    </a>

                                    <p class="edu-meta" v-html="$t(item.periodoKey)"></p>
                                </div>

                                <a
                                    :href="item.credencial ?? item.siteInstituicao"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="btn btn-sm rounded-circle shadow-sm edu-action-btn"
                                    :class="item.credencial ? 'btn-success' : 'btn-outline-dark'"
                                    :title="$t(item.credencial ? 'btnViewCredential' : 'btnVisitInst')"
                                    :aria-label="$t(item.credencialAriaKey)"
                                >
                                    <i
                                        class="fas"
                                        :class="item.credencial ? 'fa-medal' : 'fa-external-link-alt'"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
