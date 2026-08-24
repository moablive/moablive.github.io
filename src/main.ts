import { ViteSSG } from "vite-ssg/single-page";
import App from "./App.vue";
import { i18n } from "./i18n";
import "./assets/style.css";

// Página única: nenhum router envolvido, então nada de rota fantasma no Pages.
export const createApp = ViteSSG(App, ({ app }) => {
    app.use(i18n);
});
