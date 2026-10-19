<script setup lang="ts">
import SecaoTitulo from "./SecaoTitulo.vue";

/** As cinco linguagens/plataformas de especialidade, com o ícone do skillicons.dev.
    Última seção da página: fecha com o que mais define o trabalho. */
const ESPECIALIDADES = [
    { id: "ts", nome: "TypeScript", textoKey: "specTs" },
    { id: "nodejs", nome: "Node.js", textoKey: "specNode" },
    { id: "dotnet", nome: ".NET", textoKey: "specDotnet" },
    { id: "cs", nome: "C#", textoKey: "specCs" },
    { id: "py", nome: "Python", textoKey: "specPy" },
];
</script>

<template>
    <section id="especialidades" class="mx-auto max-w-[1180px] px-5 py-20">
        <SecaoTitulo etiqueta="10" :titulo="$t('specTitle')" />
        <p class="-mt-6 mb-10 max-w-2xl text-sm text-ink-3">{{ $t("specSubtitle") }}</p>

        <div class="relative overflow-hidden rounded-[2rem] bg-[#0d1017] px-5 py-10 sm:px-10 sm:py-12">
            <!-- Brilhos decorativos, atrás dos cards. -->
            <div class="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-fill/40 blur-3xl" aria-hidden="true"></div>
            <div class="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-brand-2/25 blur-3xl" aria-hidden="true"></div>

            <ul class="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <li
                    v-for="(e, i) in ESPECIALIDADES"
                    :key="e.id"
                    class="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
                    :class="i === ESPECIALIDADES.length - 1 && 'col-span-2 sm:col-span-1'"
                >
                    <img
                        :src="`https://skillicons.dev/icons?i=${e.id}&theme=dark`"
                        :alt="e.nome"
                        class="h-16 w-16 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20"
                        width="80"
                        height="80"
                        loading="lazy"
                    />
                    <h3 class="mt-5 text-lg font-extrabold tracking-[-0.02em] text-white">{{ e.nome }}</h3>
                    <p class="mt-2 text-[13px] leading-relaxed text-white/65">{{ $t(e.textoKey) }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>
