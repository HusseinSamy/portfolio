import { describe, expect, it } from 'vitest'
import { caseStudies, cases } from '../app/data/portfolio'

const slugs = caseStudies.map((c) => c.slug)

describe('case studies', () => {
  it('every card on the home page links to a case that exists', () => {
    expect(cases.map((c) => c.slug).filter((s) => !slugs.includes(s))).toEqual([])
  })

  it('the next-case chain never dead-ends', () => {
    expect(caseStudies.map((c) => c.next.slug).filter((s) => !slugs.includes(s))).toEqual([])
  })
})
