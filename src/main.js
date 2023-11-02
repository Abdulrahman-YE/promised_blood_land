/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import messages from "@intlify/unplugin-vue-i18n/messages";

// Plugins
import { registerPlugins } from '@/plugins'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    fallbackLocale: "en",
    availableLocales: ["en", "ar", "es", "fr", "zh"],
    messages: messages,
});

const app = createApp(App)

registerPlugins(app)
app.use(i18n)

app.mount('#app')
