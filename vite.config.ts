import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    // User site servido na raiz do domínio; num repositório de projeto isto
    // precisaria ser "/nome-do-repo/".
    base: "/",
    plugins: [vue(), tailwindcss()],
    resolve: {
        alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    },
    // Sem isto o bundle SSR importa vue-i18n direto do node_modules, onde as
    // feature flags do Vue não estão definidas e o prerender quebra com
    // "__VUE_PROD_DEVTOOLS__ is not defined".
    ssr: {
        noExternal: ["vue-i18n", "@intlify/shared", "@intlify/core-base"],
    },
    define: {
        __VUE_OPTIONS_API__: "true",
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
        __INTLIFY_PROD_DEVTOOLS__: "false",
        __INTLIFY_JIT_COMPILATION__: "true",
        __INTLIFY_DROP_MESSAGE_COMPILER__: "false",
        __VUE_I18N_FULL_INSTALL__: "true",
        __VUE_I18N_LEGACY_API__: "false",
    },
    build: {
        outDir: "dist",
        emptyOutDir: true,
    },
    ssgOptions: {
        script: "async",
    },
});
