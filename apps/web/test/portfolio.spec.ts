import { describe, expect, it } from 'vitest'
import { caseStudies, cases, writing } from '../app/data/portfolio'

const slugs = caseStudies.map((c) => c.slug)

describe('case studies', () => {
  it('every card on the home page links to a case that exists', () => {
    expect(cases.map((c) => c.slug).filter((s) => !slugs.includes(s))).toEqual([])
  })

  it('the next-case chain never dead-ends', () => {
    expect(caseStudies.map((c) => c.next.slug).filter((s) => !slugs.includes(s))).toEqual([])
  })
})

describe('writing', () => {
  it('every heading anchor is unique', () => {
    const duplicates = writing.flatMap((a) => {
      const ids = a.body.flatMap((b) => (b.kind === 'heading' ? [b.id] : []))
      return ids.filter((id, i) => ids.indexOf(id) !== i)
    })
    expect(duplicates).toEqual([])
  })

  it('every article date parses, so the page can format it', () => {
    expect(writing.filter((a) => Number.isNaN(Date.parse(a.date))).map((a) => a.slug)).toEqual([])
  })
})
