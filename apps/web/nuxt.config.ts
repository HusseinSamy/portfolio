import tailwindcss from '@tailwindcss/vite'

import { themeBar } from './app/utils/theme'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // Extra safety for array and object lookups, but may have false positives.
  typescript: { tsConfig: { compilerOptions: { noUncheckedIndexedAccess: true } } },

  css: ['~/assets/style.css'],
  vite: { plugins: [tailwindcss()] },

  // Flat names (`AppButton`, not `CoreAppButton`) so the folders stay a filing
  // system and never leak into the templates.
  components: [{ path: '~/components', pathPrefix: false }],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Hussein Samy — Frontend engineer',
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      meta: [
        {
          name: 'description',
          content:
            'I ship production frontends that stay fast, accessible, and easy to change. Frontend engineer in Cairo, UTC+3, open to remote roles.',
        },
      ],
      script: [
        {
          // Set the theme before first paint so dark mode never flashes light, and
          // write the matching theme-color so iOS Safari tints its bar instead of
          // painting its own white/black strip above the page.
          innerHTML: `const t=localStorage.getItem('theme')??(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;document.head.insertAdjacentHTML('beforeend','<meta name="theme-color" content="'+(t==='dark'?'${themeBar.dark}':'${themeBar.light}')+'">')`,
          tagPosition: 'head',
        },
      ],
    },
  },
})
