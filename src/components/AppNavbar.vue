<script setup lang="ts">
const links = [
    { href: "#sobre", key: "navAbout" },
    { href: "#formacao", key: "navEducation" },
    { href: "#certificados", key: "navCertificates" },
    { href: "#trajetoria", key: "navExperience" },
    { href: "#tecnologias", key: "navTech" },
    { href: "#portfolio", key: "navPortfolio" },
    { href: "#github-stats", key: "navGithub" },
    { href: "#contato", key: "navContact" },
];

const CURRICULO =
    "https://www.dropbox.com/scl/fi/ok2rqledpi9b2sdqqrboc/Curr-culo-2025.pdf?rlkey=4k4wybc0vq2ef35g7xbz475ut&st=403i9og5&dl=0";
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="/">Guilherme Bonato</a>

            <a
                :href="CURRICULO"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary btn-sm ms-auto me-2 order-lg-3"
            >
                <i class="fas fa-file-pdf me-1" aria-hidden="true"></i>
                <span class="d-none d-md-inline">{{ $t("downloadPDF") }}</span>
            </a>

            <button
                class="navbar-toggler order-lg-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                :aria-label="$t('navToggle')"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" v-for="link in links" :key="link.href">
                        <a class="nav-link" :href="link.href">{{ $t(link.key) }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
