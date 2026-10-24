import { computed } from 'vue'
import { identity, siteUrl } from '~/data/portfolio'

export const person = {
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Hussein Samy',
  url: siteUrl,
  jobTitle: 'Frontend engineer',
  email: `mailto:${identity.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
  knowsAbout: ['React', 'Next.js', 'Angular', 'JavaScript', 'Frontend architecture'],
  sameAs: [identity.linkedin, identity.github],
}

type PageSeo = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  // Schema.org nodes for this page, joined into one JSON-LD graph.
  schema?: Record<string, unknown>[]
}

// Title, description, canonical, social cards and JSON-LD for one page, kept in one
// place so every route answers the same questions the same way. Takes a getter: the
// case-study page swaps slug to slug without remounting, and its head must follow.
export function usePageSeo(source: () => PageSeo | undefined) {
  const seo = computed(source)
  const url = computed(() => `${siteUrl}${seo.value?.path ?? ''}`)

  useSeoMeta({
    title: () => seo.value?.title,
    description: () => seo.value?.description,
    ogTitle: () => seo.value?.title,
    ogDescription: () => seo.value?.description,
    ogType: () => seo.value?.type ?? 'website',
    ogUrl: url,
    ogSiteName: 'Hussein Samy',
    ogImage: `${siteUrl}/og.png`,
    ogImageAlt: 'Hussein Samy — Frontend engineer',
    twitterCard: 'summary_large_image',
  })

  useHead(() => ({
    link: [{ rel: 'canonical', href: url.value }],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': seo.value?.schema ?? [],
        }).replace(/</g, '\\u003c'),
      },
    ],
  }))
}
