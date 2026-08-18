export const identity = {
  brand: 'HUSSEIN SAMY',
  email: 'husseinsamy.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hussein-samy/',
  github: 'https://github.com/husseinsamy',
  meta: 'HUSSEIN SAMY · CAIRO · UTC+3',
  availability: 'CAIRO, EGYPT · UTC+3 · REMOTE · FULL-TIME OR CONTRACT',
  cv: '/Hussein_Samy_CV.pdf',
}

export const cases = [
  {
    slug: 'ciela',
    title: 'Ciela',
    meta: '2025 · FOUNDING ENGINEER',
    summary:
      'A production SaaS MVP delivered in four weeks — database schema, secure APIs, authenticated flows and Stripe billing, shipped end to end by one engineer.',
    tags: ['NEXT.JS', 'SUPABASE AUTH', 'STRIPE'],
    outcomes: ['+30 LIGHTHOUSE PERF'],
  },
  {
    slug: 'vocabed',
    title: 'Vocabed',
    meta: '2025 · SOLO PROJECT',
    summary:
      'A vocabulary learning app built to see how far a single-person product can go on strict constraints: no dependency added without a reason written down.',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS'],
    outcomes: [],
  },
  {
    slug: 'ezone',
    title: 'ezone.ly',
    meta: '2023–2025 · REMOTE, MID-LEVEL',
    summary:
      'Eighteen months on a large Angular codebase across two time zones: memory leaks traced and closed, layout shift removed, and the first unit tests the critical paths ever had.',
    tags: ['ANGULAR', 'RXJS'],
    outcomes: ['−27% BUILD TIME', '+31 LIGHTHOUSE PERF'],
  },
]

export const principles = [
  {
    n: '01',
    title: 'I write the update before anyone asks for it.',
    body: 'Decisions, blockers and trade-offs go in the thread or the PR description, not in my head. Someone eight hours behind me should be able to pick the work up cold, without waiting for a call.',
  },
  {
    n: '02',
    title: 'Ambiguity gets one specific question, not five vague ones.',
    body: 'When a requirement is unclear I state the assumption in writing, build the smallest version that tests it, and ask the one question that actually changes the outcome. Waiting a day for a reply is not a plan.',
  },
  {
    n: '03',
    title: 'I fix or I file. I don’t route around.',
    body: 'A bug I meet in someone else’s code gets either a fix with a test or an issue with reproduction steps. Workarounds left quietly in place are how codebases become unmaintainable.',
  },
  {
    n: '04',
    title: 'First weeks: ship small, read wide, then have opinions.',
    body: 'Week one I ship something real and small, to learn the pipeline by using it. Week two I read what nobody reads — build config, test setup, the oldest module. Week three I have opinions, and I write them down before I argue for them.',
  },
  {
    n: '05',
    title: 'I use AI tools daily and review every line as if I wrote it.',
    body: 'Because I did. Generated code goes through the same reading, the same naming standards and the same tests as anything else. Speed is not an excuse for code I can’t explain in review.',
  },
]

export const writing = [
  {
    href: '#',
    meta: '2026 · Debugging',
    title: 'The subscription you forgot to close',
    summary:
      'How neglected RxJS subscriptions and a circular dependency added 27% to a build, and the method I used to find them.',
  },
]

type CaseSection = { heading: string; body?: string; items?: string[] }

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

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ciela',
    eyebrow: 'Case 01 — Ciela',
    title: 'A billable SaaS product, live in four weeks, built by one engineer.',
    lead: 'Schema, secure APIs, authentication and recurring billing — the whole path from empty repository to a customer being charged.',
    facts: [
      { label: 'Role', value: 'Founding engineer — sole developer' },
      { label: 'Timeline', value: 'Feb – Apr 2025 · MVP shipped in 4 weeks' },
      { label: 'Stack', value: 'Next.js, TypeScript, Supabase, Stripe' },
      { label: 'Working mode', value: 'Fully remote, US client, async English' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'The client had a validated idea, a deadline, and no engineering team. What they needed was not a prototype but a product that could take a payment: real accounts, real data, real subscriptions.',
      },
      {
        heading: 'What I built',
        items: [
          'Database architecture and the API layer on top of it, designed around the two objects the product actually sells.',
          'Authenticated frontend flows on Supabase Auth: sign-up, session handling, protected routes, and the states that only appear when something goes wrong.',
          'Stripe subscriptions for recurring billing, including the webhook path that keeps account state and payment state from drifting apart.',
        ],
      },
      {
        heading: 'Decisions that mattered',
        body: 'Four weeks is not enough time to be indecisive, so I fixed the order early: the smallest path that ends in a charge, built first and completely. Each dependency had to justify itself against thirty lines of my own code, and several didn’t.',
      },
    ],
    outcome: {
      value: '+30 Lighthouse performance',
      body: 'Achieved through first-contentful-paint work and decoupling dependencies. The MVP went to production inside the four-week window, taking live subscription payments.',
    },
    next: { label: 'NEXT CASE — VOCABED →', slug: 'vocabed' },
  },
  {
    slug: 'vocabed',
    eyebrow: 'Case 02 — Vocabed',
    title: 'A learning app built under one rule: every dependency has to be argued for.',
    lead: 'A vocabulary app I designed, built and shipped alone, to find out how much of a product one person can hold in their head at once.',
    facts: [
      { label: 'Role', value: 'Sole designer and developer' },
      { label: 'Timeline', value: '2025 · ongoing, shipped in public' },
      { label: 'Stack', value: 'Next.js, TypeScript, Tailwind CSS' },
      { label: 'Working mode', value: 'Personal project, nights and weekends' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'Vocabulary apps fail at the same point: they make adding a word easy and reviewing it a chore. I wanted to find out whether the review loop could be made short enough that I would use it myself, on a phone, in a queue.',
      },
      {
        heading: 'What I built',
        items: [
          'A spaced-repetition review loop that opens on the next card and needs no navigation to reach it.',
          'A typed data layer where a word, a sense and a review are separate objects, because collapsing them is what makes these apps hard to change later.',
          'Keyboard-first review on desktop and thumb-first on mobile — the same component, not two implementations.',
        ],
      },
      {
        heading: 'Decisions that mattered',
        body: 'The constraint was the point: no dependency without a written reason in the commit. State is React state until it demonstrably cannot be, and the review scheduler is about sixty lines of my own code rather than a library I would have to learn to debug. Nothing here is measured yet, so nothing here is claimed as a number.',
      },
    ],
    next: { label: 'NEXT CASE — EZONE.LY →', slug: 'ezone' },
  },
  {
    slug: 'ezone',
    eyebrow: 'Case 03 — ezone.ly',
    title: 'Eighteen months inside an Angular codebase I did not start.',
    lead: 'Memory leaks traced and closed, layout shift removed, and the first unit tests the critical paths ever had — across two time zones.',
    facts: [
      { label: 'Role', value: 'Frontend engineer — mid-level, product team' },
      { label: 'Timeline', value: '2023 – 2025 · 18 months' },
      { label: 'Stack', value: 'Angular, RxJS, TypeScript' },
      { label: 'Working mode', value: 'Fully remote across two time zones, async English' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'A large Angular application that had grown for years faster than anyone could read it. Builds were slow enough to discourage small commits, long sessions degraded in the browser, and the paths that took money had no tests at all.',
      },
      {
        heading: 'What I built',
        items: [
          'A pass over the subscription lifecycle: leaked RxJS subscriptions found, closed, and prevented from returning by a lint rule rather than a convention.',
          'Build-time work on a circular dependency and the module graph around it, which is where most of the 27% came from.',
          'Layout-shift fixes on the pages users actually land on — reserved space for late-loading content instead of chasing symptoms.',
          'The first unit tests on the critical paths, written alongside the bug fixes that motivated them.',
        ],
      },
      {
        heading: 'Decisions that mattered',
        body: 'I fixed or I filed, and I wrote down which. In a codebase this size the temptation is to route around the bad module and keep moving; that is exactly how it got this way. Every change had a reproduction before it had a patch, and the numbers below were measured before and after rather than estimated.',
      },
    ],
    outcome: {
      value: '−27% build time',
      body: 'Measured on CI over the same commit range, alongside +31 Lighthouse performance on the landing paths after the layout-shift work.',
    },
    next: { label: 'NEXT CASE — CIELA →', slug: 'ciela' },
  },
]
