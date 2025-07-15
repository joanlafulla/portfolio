// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ['es', 'en', 'ca'],
        defaultLocale: 'es',
        routing: {
            prefixDefaultLocale: false,
            redirectToDefaultLocale: true,
        }
    }
});
