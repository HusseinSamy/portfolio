import type {
  About,
  Article,
  CaseStudy,
  CaseSummary,
  Identity,
  Principle,
} from '@portfolio/content'

export type { CaseStudy }

export const identity: Identity = {
  brand: 'HUSSEIN SAMY',
  email: 'husseinsamy.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hussein-samy/',
  github: 'https://github.com/husseinsamy',
  meta: 'HUSSEIN SAMY · CAIRO · UTC+3',
  availability: 'CAIRO, EGYPT · UTC+3 · REMOTE · FULL-TIME OR CONTRACT',
  cv: '/Hussein_Samy_CV.pdf',
}

export const cases: CaseSummary[] = [
  {
    slug: 'ciela',
    title: 'Ciela',
    meta: 'FOUNDING ENGINEER · 4 WEEKS',
    summary:
      'Adhiraj came to me with an idea, not a spec. He wanted a tool that generates high-conversion LinkedIn posts using AI: text via OpenAI, visuals via Midjourney.',
    tags: ['NEXT.JS', 'SUPABASE', 'STRIPE', 'RESEND', 'UPSTASH', 'OPENAI API', 'MIDJOURNEY API'],
  },
  {
    slug: 'ezone',
    title: 'Storefront Themes at ezone.ly',
    meta: 'FRONTEND ENGINEER',
    summary:
      'The task I was given was one sentence long: create themes for the storefronts. No spec, no wireframes, no definition of what a "theme" was supposed to mean.',
  },
  {
    slug: 'records-archive-dashboard',
    title: 'Records Archive Dashboard',
    meta: 'INITIATOR AND DECISION MAKER',
    summary:
      "The unit's records lived in Word documents, Excel sheets, and an Access database, scattered across the machine with no relationships between them.",
    tags: ['LARAVEL', 'LIVEWIRE', 'MEILISEARCH'],
  },
]

export const principles: Principle[] = [
  {
    n: '01',
    title: 'Bad news travels fastest.',
    body: 'If something is blocked, broken, or late, you hear it the day I know it, not after I quietly fix it. Surprises are the real failure, not delays.',
  },
  {
    n: '02',
    title: 'Silence never means progress.',
    body: "On async work you get a written update at a predictable rhythm: what moved, what's next, what I need. If you have to ask where things stand, I've already failed.",
  },
  {
    n: '03',
    title: 'A question, never a guess.',
    body: 'When a requirement can be read two ways, I write down both readings, pick one, explain why, and send it before building. You correct a paragraph, not a pull request.',
  },
  {
    n: '04',
    title: 'Broken things become my responsibility.',
    body: "Not something I ship around, and not something I file and forget. If it's outside my scope, it gets documented and handed to someone who can own it.",
  },
  {
    n: '05',
    title: 'Written beats spoken, by default.',
    body: "Decisions, context, and reasoning live in text a teammate in any time zone can read hours later. Meetings are for deciding, not informing. Unwritten knowledge doesn't exist yet.",
  },
]

export const writing: Article[] = [
  {
    href: '#',
    meta: '2026 · Debugging',
    title: 'The subscription you forgot to close',
    summary:
      'How neglected RxJS subscriptions and a circular dependency added 27% to a build, and the method I used to find them.',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ciela',
    eyebrow: 'Case 01 — Ciela',
    title: 'Ciela — AI-Powered LinkedIn Post Generator',
    facts: [
      { label: 'Role', value: 'Founding Engineer' },
      { label: 'Timeline', value: '4 weeks' },
      { label: 'Client', value: 'Adhiraj, via Upwork' },
      {
        label: 'Stack',
        value:
          'Next.js (full-stack), Supabase, Stripe, Resend, Upstash, OpenAI API, Midjourney API · Deployed on Vercel',
      },
    ],
    sections: [
      {
        heading: 'The Problem',
        body: [
          'Adhiraj came to me with an idea, not a spec. He wanted a tool that generates high-conversion LinkedIn posts using AI: text via OpenAI, visuals via Midjourney. But the product itself was undefined. There was no clear feature set, no user flow, and no priorities. Only a direction.',
          'That is a common situation with early-stage clients, and a risky one. An unclear brief plus a hard 4-week deadline is how projects die. So the real problem was never just "build a LinkedIn post generator." It was: turn a loose idea into a shippable product definition, then ship it, in four weeks.',
        ],
      },
      {
        heading: 'My Approach',
        body: [
          'In this kind of project, writing code is not the first thing to do. With four weeks on the clock, the temptation is to start building immediately, but building against a vague brief means building the wrong thing fast. So the first days went into discovery sessions with Adhiraj. In those calls I asked him to walk me through who the user was, what a "high-conversion post" meant to him, and what he would demo to a potential customer on day one. His answers gave us a shared picture of the product and, just as importantly, a long list of things the first version did not need.',
          "Once we agreed on what the MVP actually was, I turned that agreement into structure. I broke the project into three milestones, each with a fixed deadline and written acceptance criteria that Adhiraj agreed on. This protected both of us. He always knew exactly what he would receive and when, and I had a defense against scope creep: whenever a new feature idea came up mid-project (and they came up often), we simply re-opened that milestone's deadline and pricing. Most ideas quietly moved to the post-MVP list once they had a cost attached.",
          "With the scope contained, the technology choices followed the same principle: keep it simple and resist over-engineering. Next.js full-stack meant one codebase and one deployment target on Vercel. Supabase covered auth and the database. Stripe handled payments, Resend handled email, Upstash handled rate limiting. Every piece was chosen because it was the fastest proven path to a working product, not the most impressive one. I did not want to spend any of the four weeks fighting infrastructure, and I mostly didn't have to.",
        ],
      },
      {
        heading: 'Challenges',
        body: [
          'Midway through development, before the product was even published, we got an unplanned security audit.',
          'I was heading into mandatory military service, so I had told Adhiraj early on that he would need to hire someone else for post-MVP development. One of the applicants for that role decided to pen-test the unpublished project, and he found real problems. A misconfigured Row Level Security policy in Supabase let him list the test user emails directly from the database. Worse, he could directly invoke an RPC function that upgraded a user to the pro tier, bypassing the backend business logic entirely. Free pro accounts for anyone who found it.',
          "Uncomfortable? Yes. But the timing was ideal: a real attacker's perspective before a single real user existed. I treated it as a free audit, went through every RLS policy in the database, and closed the privilege-escalation path so the RPC could no longer be invoked with the public anon key. He had not even needed the app to exploit it; a direct call from Postman with the publishable key was enough.",
          'Digging into that exploit exposed a second, quieter weakness in the same area: the subscription flow was not idempotent. Stripe delivers webhooks with at-least-once semantics, which means the same event can arrive twice, and a user retrying a failed checkout can generate duplicate requests on our side too. In the rushed payment implementation, nothing guaranteed that processing the same "subscription activated" event twice would have the same effect as processing it once. Under the wrong retry, a user\'s tier or billing state could drift out of sync with Stripe. It never bit us in testing, but the pen-test made me look at the whole payments path with suspicion, and this was what I found there.',
        ],
      },
      {
        heading: 'What Was Shipped?',
        body: [
          'Four weeks after the first discovery call, I handed Adhiraj a working product, on the exact deadline we had committed to. All three milestones landed against their written acceptance criteria, with no slipped dates and no scope drift.',
          'What he received was a complete end-to-end MVP running live on Vercel: users could sign up, generate post copy and matching visuals with AI, manage a subscription through Stripe, and receive transactional email, all behind rate limiting. Just as deliberately, he received a clean handover position. The security findings were remediated before launch, and the next developer would inherit a small, documented stack with nothing clever to untangle.',
        ],
      },
      {
        heading: "What I'd Do Differently",
        body: [
          'I would give the payment logic the time it deserved instead of treating it as one feature among many. Concretely, that means two things. Every subscription state change would live strictly on the server, so nothing that touches billing or user tier is ever reachable from the client. And every payment operation would be idempotent on both ends: idempotency keys on every mutating call to Stripe, and event-deduplication on our webhook handler so a redelivered event can never double-apply.',
          'I would also make security review a milestone, not an accident. We got lucky that a stranger audited us before launch. Next time, a structured pass over RLS policies and every exposed function is a formal pre-launch acceptance criterion.',
        ],
      },
    ],
    next: { label: 'NEXT CASE — EZONE.LY →', slug: 'ezone' },
  },
  {
    slug: 'ezone',
    eyebrow: 'Case 02 — ezone.ly',
    title: 'Storefront Themes at ezone.ly — Turning a Vague Ask into a Shipped Feature',
    facts: [
      {
        label: 'Role',
        value:
          'Frontend engineer (owned the feature from research and proposal through the frontend build)',
      },
      {
        label: 'Context',
        value: 'Remote role at ezone.ly, an e-commerce storefront platform for merchants',
      },
    ],
    sections: [
      {
        heading: 'The Problem',
        body: [
          'ezone.ly serves around 140,000 active users, who have processed roughly 7 million orders and 76 million LYD in revenue through the platform. Every one of those merchants got the same storefront. Whatever they sold, their store looked like every other store on the platform, and there was no way for them to change that. The task I was given was one sentence long: create themes for the storefronts. No spec, no wireframes, no definition of what a "theme" was supposed to mean, and no decision about whether merchants would pick from a list or design something themselves.',
          'That gap was the actual problem. Building the wrong version of a theming feature would have cost weeks, and the ambiguity meant any version I built could be called wrong afterwards. Before writing code, I had to turn the sentence into a decision the team could stand behind.',
        ],
      },
      {
        heading: 'My Approach',
        body: [
          'I started by looking at how the platforms merchants already compared us against handled this. I went through Shopify, Salla, and Zid, created test stores where I could, and took screenshots of every step of their theming flow: what a merchant could change, where the settings lived, how the storefront reflected the change, and whether anything was paid.',
          'Two patterns came out of it. All three let merchants change colors and brand identity: logo, palette, fonts. That was the baseline; shipping less than that would have looked like a gap. Beyond the baseline, the stronger platforms ran a theme store, where the storefront layout itself was swappable and premium themes were sold for money.',
          'I put both options into a presentation with wireframes and booked a meeting with my direct manager rather than sending it over chat. Option one was the baseline: a settings panel for colors and brand identity, applied to the existing storefront. Option two was a theming engine: storefronts rendered from a theme definition, so new layouts could be added without touching the core, and a store could be built on top of it. Option two was my recommendation, and the argument was revenue. Paid premium themes would turn a feature every competitor gave away into a product line.',
          'I also put the cost next to it. The engine was a multi-month build touching the storefront rendering layer, and other features were already waiting on the same team. I walked into the meeting expecting option one to win. I presented option two anyway, because the decision belonged to the stakeholders, and they could only make it if someone showed them the full decision space. My job was to make the choice informed, not to make it for them.',
          'We agreed on option one. That was the right call for the quarter, and I said so in the meeting.',
        ],
      },
      {
        heading: 'Challenges',
        body: [
          'The hardest part was defining scope for a feature that had none. Once we chose the simpler option, "colors and brand identity" still had to become a list of exactly which properties a merchant could change and how each one propagated through the storefront. The list we settled on had three parts: colors, which sections appeared on the storefront and in what orientation, and a small set of settings per section. Free-form layout editing stayed off the list; that was the engine, and we had already decided not to build it.',
          'The second challenge was doing this without breaking existing stores. Every live storefront had to keep rendering identically until its owner chose to change something. We handled that with default values for every theme property, stored in the backend and matching the current look exactly, so a store that never opened the new feature never changed. The backend developer owned the defaults; my side was making sure the storefront rendered from them identically before any merchant touched a setting.',
        ],
      },
      {
        heading: 'What Was Shipped',
        body: [
          'Merchants found a new button in their dashboard, marked with a "new feature" tag. Opening it showed the theme settings alongside a live preview of their storefront, so every change to a color, a section, or a setting was visible before it went live. A store could go from the platform default to its own identity in one sitting, without a designer and without support tickets. More than 100 stores changed their theme in the first month. The feature matched what we had agreed in the meeting, with nothing added and nothing cut.',
          'The engine proposal and the competitor analysis stayed documented as the next step. It was never picked up; other work kept taking priority. I do not count that as a loss. The team made the decision with the full picture in front of them, and the feature that shipped was the one they had chosen.',
        ],
      },
      {
        heading: "What I'd Do Differently",
        body: [
          'I would keep the process: research the market, present the options with their costs, recommend, and accept the decision. It produced the right scope and it produced it before any code was written.',
          'What I would do better is the pitch for the engine. The revenue argument was a direction, not a number. I had screenshots of competitors selling premium themes but no estimate of what a theme store could earn on ezone.ly: how many of our merchants would pay, at what price, against what build cost. Stakeholders were comparing a concrete cost on one side with a vague upside on the other, and a vague upside loses that comparison every time. A stronger presentation would have gathered that data first, from competitor pricing and from our own merchant base, and put a figure on the table. The answer might still have been no. It would have been a no to a real proposal instead of to a promising idea.',
        ],
      },
    ],
    next: { label: 'NEXT CASE — RECORDS ARCHIVE DASHBOARD →', slug: 'records-archive-dashboard' },
  },
  {
    slug: 'records-archive-dashboard',
    eyebrow: 'Case 03 — Records Archive Dashboard',
    title: 'Records Archive Dashboard — Replacing Scattered Files with One System',
    facts: [
      {
        label: 'Role',
        value:
          'Initiator and decision maker (proposed the project, made the technical calls, did not write the code)',
      },
      { label: 'Context', value: 'Mandatory military service, archives unit' },
      {
        label: 'Stack',
        value:
          'Laravel, Livewire, Meilisearch · Built by a fellow conscript who was also a software developer',
      },
    ],
    sections: [
      {
        heading: 'The Problem',
        body: [
          "During my military service I was assigned as an archivist. The unit's records lived in Word documents, Excel sheets, and an Access database, scattered across the machine with no relationships between them. A record in one file had no link to the related record in another. Finding an answer meant knowing, from experience, which files to open and in what order.",
          'That knowledge lived in people, not in the system. Every newcomer had to be taught by an experienced archivist how to search, where to look, and how to be confident that what they found was complete and correct. That teaching was real work, repeated with every rotation, and it fell on the people who already had the most to do. The archive worked, but only because a few individuals held the map in their heads.',
          'Nobody had asked me to fix this. I was not satisfied with it, so I proposed a single system to replace the scattered files, and I got the go-ahead.',
        ],
      },
      {
        heading: 'My Approach',
        body: [
          'Since my duties left me no time to build it myself, my job was to define the system clearly, make the decisions that shaped it, and make sure the result worked for the people who would use it.',
          "We started with a meeting. I sat down with a fellow conscript who was also a software developer, laid out the mess as I saw it from the archivist's seat, and we discussed how to build something better. I was the decision maker: I took that discussion and turned it into the scope of the first version, cutting anything that did not solve the core problem of scattered, unrelated data.",
          'He did the build. I directed the direction, not the daily work: the core technical decisions were mine, and the implementation was his. He used Laravel with Livewire, which kept it to one framework with server-rendered screens and no separate frontend, and a codebase that a future conscript could maintain. Meilisearch handled search, because lookup was the whole point of the system: it is typo-tolerant, which matters when record names were entered inconsistently over years; it is fast; and it handles Arabic full-text search properly, which the database alone would not. The rejected option was keeping Access as the backend and putting a new interface on it, which would have preserved the disconnected data instead of replacing it.',
          "My review method was deliberately not technical. When the developer finished a module, I had a non-technical colleague sit with the dashboard and use it without guidance. I noted everything he said: where he hesitated, what he misread, what he expected to find and could not. Those notes went back to the developer as the change list. The people who would live with this system were archivists, not engineers, so an archivist's confusion was the only test that mattered.",
        ],
      },
      {
        heading: 'Challenges',
        body: [
          'The first challenge was the environment. We had no internet access on site, so nothing about the build was the way I would normally do it: no quick lookup of documentation, no package installs on demand, no cloud services. Dependencies had to be planned in advance. We kept a list of every package we needed, and whenever one of us was on leave with internet access, we downloaded them, carried them in on a flash drive, scanned the drive for malware, and copied them onto the development machine. A missing dependency did not cost minutes; it cost a wait until the next leave.',
          'The second was time. This was a personal initiative on top of my actual duties, not an assignment with hours carved out for it. Every review session and every decision had to fit around the work I was there to do.',
          'The third was migration, and it was the hardest. The old data had no relationships, so moving it into a structured system meant establishing those relationships by hand, record by record. We did what we could. When my service ended, the migration was still in progress.',
        ],
      },
      {
        heading: 'What Was Shipped',
        body: [
          'I need to be precise about what I can claim. I initiated the project, defined its scope, made the technical decisions that set its direction, and ran the testing on each module as it was delivered. I did not see the final product in daily use; my service ended while the data was still being migrated.',
          "What I did see was the testing phase, and it was already a different way of working. A colleague with no training on the old files could sit down, search, and find related records together instead of opening three files and reconciling them. The knowledge that used to live in experienced people's heads was starting to live in the system. Compared with the previous way of working, the results were much better, and that was visible before the migration was complete.",
        ],
      },
      {
        heading: "What I'd Do Differently",
        body: [
          'I would not change the approach. The scope was right for the problem, and testing with a non-technical user caught more than a technical review would have. I was happy with the progress we made.',
          'What I cannot do is give a full post-mortem, because I left before the system was finished. I know how the first version tested; I do not know how it held up after a year of real use, whether the migration was completed, or what the next archivist wished had been different. That is the honest limit of this case study.',
        ],
      },
    ],
    next: { label: 'NEXT CASE — CIELA →', slug: 'ciela' },
  },
]

export const about: About = {
  summary:
    'Two weeks before my final school grades, I wrote two plans. Plan A was a Computer Science degree. Plan B was teaching myself to build software without one. The grades came in and I never got to use Plan A. What followed was two years of C++, JavaScript, and Angular with no money for courses, a CV that one stranger rewrote with me, 57 applications, three calls, and one interview I failed my way through into my first job.',
  story: [
    'I was 18 and in my last year of secondary school. In Egypt, the grades from that year decide which college will take you, and there is no negotiating with them once they are published. Everyone around me was waiting. I was not good at waiting, so I wrote two plans instead.',
    'Plan A assumed the grades were high enough for a Computer Science major at any Egyptian university. Plan B assumed they were not, and that I would have to become a software developer without a department, a syllabus, or anyone checking my work.',
    'The grades were published. I read them twice. Then I opened Plan B.',
    'The first year went to fundamentals, on purpose. I chose C++ because it was the lowest level language I could realistically learn alone, and I wanted to understand what a computer was doing before I asked a framework to hide it from me. Alongside it I worked through algorithms, problem solving, and a design patterns course. I finished that course understanding almost nothing in it. I only realised years later, inside real codebases, what it had been trying to tell me.',
    'I could not afford the courses I was learning from. I downloaded cracked copies and kept a list of every one of them. When my first salary arrived, I went down the list and bought each course properly. The people who made them had got me a job. Paying them back was the least I owed.',
    'Then I had to pick a lane, and I picked it for the wrong reason. I went with web development and specifically frontend. Part of that was reasonable. There was more material for frontend than for anything else. The other part was a belief I had picked up somewhere and never questioned, that you had to be a frontend developer before you could be a backend one. That is simply not true. I still think about how much earlier I would have understood systems if I had started with backend engineering, and it is the one decision in this story I would reverse.',
    'So I learned HTML, CSS, and JavaScript. Then I learned the tooling around them, which was harder than the languages themselves. npm and package management. Git, and then GitHub, and the difference between the two. Gulp, and later Webpack, and why anyone would want a build step at all. Every tutorial assumed I already knew the tool before it.',
    'Then came the framework question, and I refused to guess. React, Angular, and Vue were all being argued about online, and every argument was written by someone who had already picked. I did two things instead. I read through Egyptian job listings to see what companies here were actually hiring for, and Angular came up far more than anything else. Then I asked a different question, which framework was the hardest to learn, on the theory that if I could survive the hardest one, switching to any other would be cheap. The answer to that was also Angular. Two questions, one answer. I started learning Angular.',
    'Almost two years passed like this. Money was a constant background pressure the entire time, and I was studying on a timeline nobody had approved. Imposter syndrome did not show up once. It came in waves, usually right after I finished something and realised how much more there was. I was surrounded by people who had a degree in progress and a graduation date. I had a folder of projects and a growing suspicion that I would never feel ready.',
    'At some point I decided that was exactly the point. I would apply before I felt ready, because I had stopped believing "ready" was something that would arrive on its own.',
    'The first thing I needed was a CV, and I had never written one. The first version was horrible. I will not soften that. I sent it to five people whose work I respected and who had no reason to answer me. One of them did. She went through it line by line, told me what actually counts on a CV and what to cut, and showed me how to present skills when you have no employer to attach them to. I rewrote the whole thing from her notes.',
    'Then I applied, and I still remember the exact numbers. Fifty-seven applications. Three companies called back.',
    'The first company rejected me during the phone call itself. I was still an undergraduate, and that was the end of the conversation.',
    'The second company invited me to a video interview. It took me about a minute on the call to understand they had not read my CV. They were visibly surprised that I was still a student, and more surprised that I was not a Computer Science student. They ran a ten-minute interview so the meeting would not look like a mistake, thanked me, and I never heard from them again.',
    'The third company screened me by phone and moved me to a technical interview. It was the first real, in-person technical interview of my life. I did badly. Not nervous-but-fine badly. I knew, while it was happening, that I was not answering the way I answered the same questions at home, and I walked out certain I had lost it.',
    'They offered me the job.',
    'The CTO who made that call was self-taught himself, and I turned out to be the only other self-taught developer in the company. I do not know exactly what he saw. I know he chose to trust it, and I am still grateful he did.',
    'I learned a great deal from my colleagues in that first year, on top of what the two years alone had already taught me. But the lesson I took from the whole story was not technical. Nobody was coming to tell me I was ready. Not the grades, not a degree, not an interview I felt good about. I had to trust myself and trust the work, and stop waiting for the right moment. There is no right moment. There is the one you decide to make.',
  ],
}
