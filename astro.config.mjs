// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ['es', 'en', 'ca'],
        defaultLocale: 'es',
        routing: {
            prefixDefaultLocale: false,
            redirectToDefaultLocale: true,
        }
    },
    output: 'static',
    adapter: vercel({
    imageService: true,
    webAnalytics: {
        enabled: true,
    }
    })
});
