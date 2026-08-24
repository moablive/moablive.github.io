<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { cargos } from "@/data/trajetoria";
import { useModal } from "@/composables/useModal";

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
import AppFooter from "@/components/AppFooter.vue";

// ESC fecha o modal aberto, de qualquer lugar da página.
const { modalAtivo, fechar } = useModal();
function aoTeclar(event: KeyboardEvent) {
    if (event.key === "Escape" && modalAtivo.value) fechar();
}
onMounted(() => document.addEventListener("keydown", aoTeclar));
onBeforeUnmount(() => document.removeEventListener("keydown", aoTeclar));
</script>

<template>
    <a
        class="glass sr-only rounded-full px-4 py-2 text-sm font-semibold focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
        href="#conteudo"
        >{{ $t("skipLink") }}</a
    >

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

    <AppFooter />
</template>
