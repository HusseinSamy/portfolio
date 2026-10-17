// Shared content schema: the shapes the CMS produces and the frontend renders.
// Both sides import from here so a field rename breaks the build, not the page.

export type Identity = {
  brand: string
  email: string
  linkedin: string
  github: string
  meta: string
  availability: string
  cv: string
}

export type CaseSummary = {
  slug: string
  title: string
  meta: string
  summary: string
  tags?: string[]
}

export type Principle = {
  n: string
  title: string
  body: string
}

// Headings carry their anchor id, so the section map is read off the body and
// cannot drift from it. `html`, list `items` and `svg` are hand-authored markup.
export type ArticleBlock =
  | { kind: 'heading'; level: 2 | 3; id: string; text: string }
  | { kind: 'paragraph'; html: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'code'; lang: string; code: string }
  | { kind: 'figure'; svg: string; caption: string }

export type Article = {
  slug: string
  meta: string
  title: string
  summary: string
  date: string // ISO day, as 2026-10-16
  body: ArticleBlock[]
}

export type CaseSection = {
  heading: string
  body: string[]
}

export type Testimonial = {
  quote: string[]
  name: string
  role: string
  avatar: string
}

export type CaseStudy = {
  slug: string
  eyebrow: string
  title: string
  facts: { label: string; value: string }[]
  sections: CaseSection[]
  testimonial?: Testimonial
  next: { label: string; slug: string }
}

export type About = {
  summary: string
  story: string[]
}

export type Content = {
  identity: Identity
  cases: CaseSummary[]
  principles: Principle[]
  writing: Article[]
  caseStudies: CaseStudy[]
  about: About
}
