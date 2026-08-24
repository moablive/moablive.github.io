<script setup lang="ts">
import { onMounted } from "vue";
import { cargos } from "@/data/trajetoria";

import AppNavbar from "@/components/AppNavbar.vue";
import SectionSobre from "@/components/SectionSobre.vue";
import SectionFormacao from "@/components/SectionFormacao.vue";
import SectionCertificados from "@/components/SectionCertificados.vue";
import SectionTrajetoria from "@/components/SectionTrajetoria.vue";
import SectionTecnologias from "@/components/SectionTecnologias.vue";
import SectionDestaque from "@/components/SectionDestaque.vue";
import SectionPortfolio from "@/components/SectionPortfolio.vue";
import SectionGithubStats from "@/components/SectionGithubStats.vue";
import SectionContato from "@/components/SectionContato.vue";
import SectionVisitas from "@/components/SectionVisitas.vue";
import CargoModal from "@/components/CargoModal.vue";
import ModalLoginHub from "@/components/ModalLoginHub.vue";
import ModalTrackStack from "@/components/ModalTrackStack.vue";
import LangFab from "@/components/LangFab.vue";
import AppFooter from "@/components/AppFooter.vue";

onMounted(() => {
    // O scrollspy do Bootstrap é criado no DOMContentLoaded a partir do
    // data-bs-spy do <body>. Como o Vue hidrata antes disso, os alvos já
    // existem — mas se a hidratação trocar nós, o índice fica velho. Refazer
    // aqui é barato e garante que o menu acompanhe a rolagem.
    const bootstrap = (window as any).bootstrap;
    if (!bootstrap?.ScrollSpy) return;
    bootstrap.ScrollSpy.getInstance(document.body)?.dispose();
    new bootstrap.ScrollSpy(document.body, {
        target: "#navbarNav",
        rootMargin: "0px 0px -45%",
        smoothScroll: true,
    });
});
</script>

<template>
    <a class="skip-link" href="#conteudo">{{ $t("skipLink") }}</a>

    <AppNavbar />

    <main id="conteudo">
        <SectionSobre />
        <SectionFormacao />
        <SectionCertificados />
        <SectionTrajetoria />
        <SectionTecnologias />
        <SectionDestaque />
        <SectionPortfolio />
        <SectionGithubStats />
        <SectionContato />
        <SectionVisitas />
    </main>

    <CargoModal v-for="cargo in cargos" :key="cargo.id" :cargo="cargo" />
    <ModalLoginHub />
    <ModalTrackStack />

    <LangFab />
    <AppFooter />
</template>
