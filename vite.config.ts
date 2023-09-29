import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import glsl from 'vite-plugin-glsl';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    glsl(),
    VitePWA({
      includeAssets: [
        'apple-touch-icon.png',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'favicon.ico',
        'robots.txt',
        'safari-pinned-tab.svg',
        'sitemap.xml',
      ],
      manifest: {
        name: 'Ruining Li',
        short_name: 'Ruining',
        description:
          "Ruining is a PhD student at Oxford VGG, working on 3D Computer Vision.",
        theme_color: '#f3eded',
        icons: [
          { src: 'me-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'me-512x512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'me-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      registerType: 'autoUpdate',
    }),
  ],
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
  css: {
    modules: { localsConvention: 'camelCaseOnly' },
  },
});
