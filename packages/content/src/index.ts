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
  tags: string[]
}

export type Principle = {
  n: string
  title: string
  body: string
}

export type Article = {
  href: string
  meta: string
  title: string
  summary: string
}

export type CaseSection = {
  heading: string
  body?: string
  items?: string[]
}

export type CaseStudy = {
  slug: string
  eyebrow: string
  title: string
  lead: string
  facts: { label: string; value: string }[]
  sections: CaseSection[]
  outcome?: { value: string; body: string }
  next: { label: string; slug: string }
}

export type Content = {
  identity: Identity
  cases: CaseSummary[]
  principles: Principle[]
  writing: Article[]
  caseStudies: CaseStudy[]
}
