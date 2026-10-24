import { about, cases, identity, siteUrl, writing } from '../../app/data/portfolio'

// llmstxt.org: an H1, a blockquote summary, then H2 sections of annotated links.
export default defineEventHandler((event) => {
  const work = cases.map((c) => `- [${c.title}](${siteUrl}/work/${c.slug}): ${c.summary}`)
  const posts = writing.map((a) => `- [${a.title}](${siteUrl}/writing/${a.slug}): ${a.summary}`)

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return [
    '# Hussein Samy',
    '',
    '> Frontend engineer in Cairo (UTC+3), open to remote roles. Three years of React, Next.js and Angular in production, with strong core JavaScript underneath.',
    '',
    about.summary,
    '',
    '## Case studies',
    '',
    ...work,
    '',
    '## Writing',
    '',
    ...posts,
    '',
    '## About',
    '',
    `- [About](${siteUrl}/about): How I became a self-taught frontend engineer.`,
    `- [Portfolio home](${siteUrl}/): Selected work, how I work, writing and contact.`,
    '',
    '## Contact',
    '',
    `- [LinkedIn](${identity.linkedin})`,
    `- [GitHub](${identity.github})`,
    `- [Email](mailto:${identity.email})`,
    '',
  ].join('\n')
})
