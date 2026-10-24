import { caseStudies, siteUrl, writing } from '../../app/data/portfolio'

export default defineEventHandler((event) => {
  const pages: { path: string; lastmod?: string }[] = [
    { path: '/' },
    { path: '/about' },
    ...caseStudies.map((c) => ({ path: `/work/${c.slug}` })),
    ...writing.map((a) => ({ path: `/writing/${a.slug}`, lastmod: a.date })),
  ]
  const urls = pages
    .map(
      ({ path, lastmod }) =>
        `  <url><loc>${siteUrl}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`,
    )
    .join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})
