import tailwindcss from '@tailwindcss/vite'

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
          // Set the theme before first paint so dark mode never flashes light.
          innerHTML: `document.documentElement.dataset.theme=localStorage.getItem('theme')??(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')`,
          tagPosition: 'head',
        },
      ],
    },
  },
})
