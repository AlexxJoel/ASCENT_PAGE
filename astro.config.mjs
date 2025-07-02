// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
    markdown: {
        syntaxHighlight: 'shiki',
        shikiConfig: {
            theme: 'github-dark'
        },
        remarkPlugins: [
            // Puedes añadir plugins remark aquí si los necesitas
        ],
        rehypePlugins: [
            // Plugins rehype si son necesarios
        ]
    },
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), tailwind(), image({
        serviceEntryPoint: '@astrojs/image/sharp'   
    })],
});