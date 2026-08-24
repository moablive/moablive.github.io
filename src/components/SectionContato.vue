<script setup lang="ts">
import { contatos } from "@/data/tecnologias";
</script>

<template>
    <section id="contato" class="contact-section py-5 bg-light-custom">
        <div class="container">
            <h2 class="section-heading text-center mb-5">{{ $t("contactTitle") }}</h2>
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <p class="lead mb-4">{{ $t("contactLead") }}</p>
                    <div class="contact-badge mb-4">
                        <a
                            v-for="contato in contatos"
                            :key="contato.id"
                            :href="contato.href"
                            :target="contato.href.startsWith('mailto:') ? undefined : '_blank'"
                            rel="noopener noreferrer"
                            class="mx-1"
                        >
                            <img :src="contato.badge" :alt="contato.alt" loading="lazy" />
                        </a>
                    </div>
                    <p class="text-muted">
                        <i class="fas fa-map-marker-alt me-2" aria-hidden="true"></i>Porto Alegre, RS — Brasil
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
