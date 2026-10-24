import { siteUrl } from '../../../app/data/portfolio'

export default defineEventHandler(() => ({
  specVersion: '1.0',
  host: { displayName: 'Hussein Samy', identifier: 'husseinsamy.site' },
  entries: [
    {
      identifier: 'urn:air:husseinsamy.site:portfolio:llms-txt',
      displayName: 'Hussein Samy portfolio index (llms.txt)',
      type: 'text/plain',
      url: `${siteUrl}/llms.txt`,
      description:
        'Curated index of the case studies, writing and background of Hussein Samy, a frontend engineer.',
      representativeQueries: [
        'Who is Hussein Samy?',
        'Frontend engineer for remote work in the UTC+3 time zone',
        'Case study of shipping an AI LinkedIn post generator in four weeks',
      ],
    },
  ],
}))
