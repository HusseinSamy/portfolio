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
    slug: 'frontend-architecture-for-design-systems',
    meta: '2026 · Book review',
    title: 'Frontend Architecture for Design Systems: A Review Ten Years Later',
    summary:
      'The 2016 book is a case study of how Micah Godbolt built Red Hat’s design system, not a guide to architecting frontend applications. Its tools are a decade out of date, but its thinking holds up.',
    date: '2026-10-16',
    body: [
      { kind: 'heading', level: 2, id: 'tldr', text: 'TL;DR' },
      {
        kind: 'paragraph',
        html: '<cite>Frontend Architecture for Design Systems</cite> (2016) is a case study of how Micah Godbolt built Red Hat’s design system, not a guide to architecting frontend applications. Its tools are a decade out of date, but its thinking holds up, especially in the Process pillar, where shared templates and JSON schemas give markup ownership back to the frontend team. Read it for the mindset and the history; for modern frontend architecture, start with the resources at the end.',
      },
      { kind: 'heading', level: 2, id: 'abstract', text: 'Abstract' },
      {
        kind: 'paragraph',
        html: 'This is a review of Micah Godbolt’s <cite>Frontend Architecture for Design Systems</cite> (O’Reilly, 2016), written ten years after it came out. I explain what the book actually is: a case study of Red Hat’s design system, organized into four pillars (code, process, testing, and documentation). Then I walk through each pillar, and close with my verdict and the resources I found more useful for learning frontend architecture today.',
      },
      { kind: 'heading', level: 2, id: 'introduction', text: 'Introduction' },
      {
        kind: 'paragraph',
        html: 'Like anyone who wants to advance in their career, I wanted to understand frontend from a higher level, so I searched for “frontend architecture books.” And yes—I believe books are one of the best resources for deep knowledge. Reading is a kind of meditation for me, where I am always looking to achieve the flow state, that when achieved; topics flow smoothly and my mind creates new links on its own, connecting what I already know with what I’m reading, and it feels like a light bulb switching on in my head.',
      },
      {
        kind: 'paragraph',
        html: 'Unsurprisingly, there are almost no books on this topic, apart from one: <cite>Frontend Architecture for Design Systems: A Modern Blueprint for Scalable and Sustainable Websites</cite> by Micah Godbolt. My euphoria was immense when I found it, but it didn’t last long. “Modern” here referred to 2014 modernism (more than a decade ago). That meant no HTTP/3, no webpack or Vite, etc.',
      },
      {
        kind: 'paragraph',
        html: 'The book was published in 2016, a year after HTTP/2 was introduced in 2015, yet it still refers to resource concatenation, image maps, and domain sharding, workarounds that HTTP/2 made largely unnecessary. That’s because its tools and methodologies date back to 2014, when Micah started his Red Hat design system project.',
      },
      {
        kind: 'paragraph',
        html: 'Despite the book being outdated, I decided to give it a shot and read it from cover to cover. I don’t regret it, and I will share my thoughts so that you can decide whether to read it or not. I will also point to other resources on the same topic that I found more helpful by today’s standards.',
      },
      {
        kind: 'heading',
        level: 2,
        id: 'what-the-book-is-really-about',
        text: 'What the Book Is Really About',
      },
      {
        kind: 'paragraph',
        html: 'My expectation was a book about architecting a frontend application as a piece of software, since that’s what I was actually looking for. But when I looked at the title again, I realized it’s about architecting a <em>design system</em>. That means it focuses on the modularity of a website’s design system (e.g. design tokens, CSS architecture, semantic HTML, markup ownership, etc.) and less on architecting a frontend application as software (e.g. choosing the right application architecture, project structure, module boundaries, component architecture, etc.).',
      },
      {
        kind: 'paragraph',
        html: 'What the book really is, then, is a case study of developing a modular design system for Red Hat, a process that took over 800 days, and of the lessons learned along the way. Micah broke the design system architecture into four main pillars: Code, Process, Testing, and Documentation.',
      },
      { kind: 'heading', level: 2, id: 'pillar-1-code', text: 'Pillar 1: Code' },
      {
        kind: 'paragraph',
        html: 'In the Code pillar, he focuses on developing modular markup and argues that we should stop thinking about websites as pages and start thinking about them as a visual language that communicates our design to users. He then compares different CSS architectures (OOCSS, SMACSS, BEM, etc.) and describes concepts like specificity, location-dependent styling, and style encapsulation.',
      },
      {
        kind: 'paragraph',
        html: 'JavaScript gets only two or three pages, with the advice that you might not need a framework, so start lean and always lint your code. At the end, he gives examples of how he architected the Code pillar at Red Hat by writing guardrails, which he named the “Road Runner Rules” after the rules Chuck Jones set for the cartoon, and by making sure every PR adhered to them.',
      },
      { kind: 'heading', level: 2, id: 'pillar-2-process', text: 'Pillar 2: Process' },
      {
        kind: 'paragraph',
        html: 'If the Code pillar defines what good code looks like, the Process pillar defines how that code gets from a developer’s head to the user’s browser. This pillar was the best chapter for me. Here Micah stepped back and asked whether the process they were using was good enough for their needs, and, as is often the case, the answer was no. He looked at the root cause and started from there.',
      },
      {
        kind: 'heading',
        level: 3,
        id: 'the-problem',
        text: 'The Problem: Two Copies of the Same Markup',
      },
      {
        kind: 'paragraph',
        html: 'Micah’s frontend team worked several sprints ahead of the backend: they built a prototype, got it signed off, and handed it over for implementation. But the prototype’s markup lived in the frontend team’s own templates, so backend developers had to rebuild it by hand in the CMS, which at Red Hat meant re-creating every component in Drupal’s PHP templates. On his earlier projects, half of every implementation went into making the CMS output match the prototype, and many bugs were nothing more than a mismatch between the two.',
      },
      {
        kind: 'paragraph',
        html: 'Even when the two matched, they drifted apart: a change made in one copy wasn’t made in the other, until the prototypes no longer showed what was really in production. The root cause was that the CMS and the prototyping tool shared CSS and JavaScript but not HTML templates, which Micah calls the <em>last mile</em> problem. Drupal made it worse, because its rendering engine was so opinionated that you couldn’t prototype its markup without running Drupal itself.',
      },
      {
        kind: 'heading',
        level: 3,
        id: 'the-fix',
        text: 'The Fix: One Rendering Engine for Every Platform',
      },
      {
        kind: 'paragraph',
        html: 'So he decided to change their rendering engine and proposed a new strategy. The team cut into Drupal’s rendering pipeline and inserted their own: Twig templates, chosen because Twig had both PHP and Node compilers, so the style guide and production could render the very same template files. They adopted it, and it was clearly a lot better than the old one, and of course it solved the divergence problem.',
      },
      {
        kind: 'paragraph',
        html: 'From then on, the frontend team owned the templates, and the backend developers only had to collect the right data and pass it in. Micah describes the result as a design system API, or <em>theme as a service</em>: data goes in, and identical HTML comes out, whatever the platform.',
      },
      { kind: 'heading', level: 3, id: 'the-workflow', text: 'The Workflow, Before and After' },
      {
        kind: 'paragraph',
        html: 'Chapter 8 shows the bigger picture behind this fix as two workflows, the old one and the new one, redrawn below from the book.',
      },
      {
        kind: 'figure',
        caption: 'The old development workflow · redrawn from the book’s Figure 8-1',
        svg: `<svg viewBox="0 0 760 232" role="img" aria-label="The old workflow: the frontend developer comes last" font-size="13">
  <defs>
    <marker id="old-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10z" fill="var(--muted)" />
    </marker>
  </defs>
  <text x="24" y="34" font-size="15" font-weight="600" fill="var(--ink)">The old workflow: the frontend developer comes last</text>
  <g fill="none" stroke="var(--muted)" stroke-width="1.25">
    <path d="M152 140H184" marker-end="url(#old-arrow)" />
    <path d="M232 116V100H312" marker-end="url(#old-arrow)" />
    <path d="M232 164V180H312" marker-end="url(#old-arrow)" />
    <path d="M488 100H520" marker-end="url(#old-arrow)" />
    <path d="M488 180H520" marker-end="url(#old-arrow)" />
  </g>
  <rect x="24" y="116" width="128" height="48" rx="8" fill="none" stroke="var(--muted)" stroke-width="1.25" />
  <text x="88" y="144" text-anchor="middle" font-weight="600" fill="var(--ink)">Product owner</text>
  <rect x="184" y="116" width="96" height="48" rx="8" fill="none" stroke="var(--muted)" stroke-width="1.25" />
  <text x="232" y="144" text-anchor="middle" font-weight="600" fill="var(--ink)">UX</text>
  <rect x="312" y="72" width="176" height="56" rx="8" fill="none" stroke="var(--muted)" stroke-width="1.25" />
  <text x="400" y="96" text-anchor="middle" font-weight="600" fill="var(--ink)">Design</text>
  <text x="400" y="112" text-anchor="middle" font-size="11.5" fill="var(--ink)">Photoshop comps</text>
  <rect x="312" y="152" width="176" height="56" rx="8" fill="none" stroke="var(--muted)" stroke-width="1.25" />
  <text x="400" y="176" text-anchor="middle" font-weight="600" fill="var(--ink)">Development</text>
  <text x="400" y="192" text-anchor="middle" font-size="11.5" fill="var(--ink)">features and CMS markup</text>
  <rect x="520" y="80" width="216" height="120" rx="8" fill="var(--accent)" fill-opacity="0.12" stroke="var(--accent)" stroke-width="2" />
  <text x="628" y="128" text-anchor="middle" font-weight="600" fill="var(--ink)">Frontend developer</text>
  <text x="628" y="150" text-anchor="middle" font-size="11.5" fill="var(--ink)">makes the CMS markup</text>
  <text x="628" y="166" text-anchor="middle" font-size="11.5" fill="var(--ink)">look like the comps</text>
</svg>`,
      },
      {
        kind: 'paragraph',
        html: 'In the old workflow, UX handed off to design and development separately, and the frontend developer, brought in last, had to make the CMS markup look like the Photoshop comps.',
      },
      {
        kind: 'figure',
        caption: 'The new development workflow · redrawn from the book’s Figure 8-2',
        svg: `<svg viewBox="0 0 760 216" role="img" aria-label="The new workflow: the markup is settled in the prototype first" font-size="13">
  <defs>
    <marker id="new-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10z" fill="var(--muted)" />
    </marker>
  </defs>
  <text x="24" y="34" font-size="15" font-weight="600" fill="var(--ink)">The new workflow: the markup is settled in the prototype first</text>
  <g fill="none" stroke="var(--muted)" stroke-width="1.25">
    <path d="M232 140H276" marker-end="url(#new-arrow)" />
    <path d="M484 140H528" marker-end="url(#new-arrow)" />
    <path d="M440 88V72H324V88" marker-end="url(#new-arrow)" />
  </g>
  <text x="382" y="64" text-anchor="middle" font-size="11.5" fill="var(--ink)">iterate until accepted</text>
  <rect x="24" y="88" width="208" height="104" rx="8" fill="none" stroke="var(--muted)" stroke-width="1.25" />
  <text x="128" y="112" text-anchor="middle" font-weight="600" fill="var(--ink)">Requirements</text>
  <text x="128" y="128" text-anchor="middle" font-size="11.5" fill="var(--ink)">UX, design, development,</text>
  <text x="128" y="144" text-anchor="middle" font-size="11.5" fill="var(--ink)">and frontend, together</text>
  <rect x="276" y="88" width="208" height="104" rx="8" fill="var(--accent)" fill-opacity="0.12" stroke="var(--accent)" stroke-width="2" />
  <text x="380" y="112" text-anchor="middle" font-weight="600" fill="var(--ink)">Prototyping</text>
  <text x="380" y="128" text-anchor="middle" font-size="11.5" fill="var(--ink)">built in the browser,</text>
  <text x="380" y="144" text-anchor="middle" font-size="11.5" fill="var(--ink)">cheap and flexible</text>
  <rect x="528" y="88" width="208" height="104" rx="8" fill="none" stroke="var(--muted)" stroke-width="1.25" />
  <text x="632" y="112" text-anchor="middle" font-weight="600" fill="var(--ink)">Development</text>
  <text x="632" y="128" text-anchor="middle" font-size="11.5" fill="var(--ink)">passes data into the</text>
  <text x="632" y="144" text-anchor="middle" font-size="11.5" fill="var(--ink)">prototype’s markup;</text>
  <text x="632" y="160" text-anchor="middle" font-size="11.5" fill="var(--ink)">QA checks it against</text>
  <text x="632" y="176" text-anchor="middle" font-size="11.5" fill="var(--ink)">the prototype</text>
</svg>`,
      },
      {
        kind: 'paragraph',
        html: 'In the new one, all four disciplines shape the requirements together, the markup is settled in a prototype everyone can try in the browser, and developers only pass data into it.',
      },
      { kind: 'heading', level: 3, id: 'the-contract', text: 'The Contract: A JSON Schema' },
      {
        kind: 'paragraph',
        html: 'Once the templates were shared, the data each template expected became the contract between the two teams. Backend developers asked for every template’s variables, their types, and which ones were required, and the answers grew into a standard set of files that shipped with every component: a JSON schema, a Twig template, a Sass partial, visual regression tests with their test data, and a documentation page with its starting data. The schema was usually written first and every change to a component started there, so Micah calls this a <em>schema-driven design system</em>: the same idea as test-driven development, with schemas in place of tests.',
      },
      {
        kind: 'paragraph',
        html: 'The book’s example is a simplified logo wall from the Red Hat site, with an optional headline and exactly two or three logos. Here is a shortened version of its schema from Chapter 10:',
      },
      {
        kind: 'code',
        lang: 'json',
        code: `{
  "type": "object",
  "required": ["body"],
  "properties": {
    "headline": { "type": "string", "format": "text" },
    "body": {
      "type": "object",
      "oneOf": [
        {
          "title": "Two Up",
          "required": ["logos", "layout"],
          "properties": {
            "layout": { "type": "string", "enum": ["2up"], "options": { "hidden": true } },
            "logos": {
              "type": "array",
              "format": "tabs",
              "minItems": 2,
              "maxItems": 2,
              "items": { "$ref": "#/definitions/logo" }
            }
          }
        },
        {
          "title": "Three Up",
          "required": ["logos", "layout"],
          "properties": {
            "layout": { "type": "string", "enum": ["3up"], "options": { "hidden": true } },
            "logos": {
              "type": "array",
              "format": "tabs",
              "minItems": 3,
              "maxItems": 3,
              "items": { "$ref": "#/definitions/logo" }
            }
          }
        }
      ]
    }
  },
  "definitions": {
    "logo": {
      "title": "Logo",
      "type": "object",
      "oneOf": [
        {
          "title": "Upload File",
          "required": ["file"],
          "properties": { "file": { "type": "string", "format": "file" } }
        },
        {
          "title": "Paste URL",
          "required": ["url"],
          "properties": { "url": { "type": "string", "format": "url" } }
        }
      ]
    }
  }
}`,
      },
      {
        kind: 'paragraph',
        html: 'Three parts of it matter most. The headline isn’t listed in <code>required</code>, so it’s optional. <code>oneOf</code> forces the body to match exactly one shape, two logos with the <code>2up</code> layout or three with <code>3up</code>, which answers a question the mockup left open: what happens to the layout when there are only two logos? And each logo is defined once and reused through <code>$ref</code>, as either an uploaded file or a pasted URL.',
      },
      { kind: 'paragraph', html: 'Here is valid data for it, as the book shows it:' },
      {
        kind: 'code',
        lang: 'json',
        code: `{
  "headline": "This is my headline",
  "body": {
    "layout": "2up",
    "logos": [
      { "url": "http://www.fea.pub/my-logo.png" },
      { "file": "path/to/my-other-logo.png" }
    ]
  }
}`,
      },
      { kind: 'paragraph', html: 'And here is the Twig template the book pairs with it:' },
      {
        kind: 'code',
        lang: 'twig',
        code: `<div class="logo-wall">
  {% if headline %}
    <h1 class="logo-wall-headline">{{headline}}</h1>
  {% endif %}
  <div class="logo-wall-logos" data-layout="{{body.layout}}">
    {% for logo in body.logos %}
      <img class="logo-wall-logo" src="{{ logo.file ?: logo.url }}" />
    {% endfor %}
  </div>
</div>`,
      },
      {
        kind: 'paragraph',
        html: 'The book stops at the template and only says the layout is handled “within our CSS,” so here is a sketch of that Sass partial, written in the style of the book’s own examples, with each logo opting in to the layout its parent receives:',
      },
      {
        kind: 'code',
        lang: 'scss',
        code: `// _logo-wall.scss

.logo-wall-headline {
  margin: 0 0 24px; // elements never use top margins
}

.logo-wall-logos {
  display: flex;
  align-items: center;
}

.logo-wall-logo {
  display: block;
  box-sizing: border-box;
  height: auto;
  padding: 0 16px;

  // The logo opts in to the layout its parent gets from the schema:
  // two logos split the row in half, three split it in thirds.
  [data-layout="2up"] > & {
    width: 50%;
  }
  [data-layout="3up"] > & {
    width: 33.333%;
  }
}`,
      },
      {
        kind: 'paragraph',
        html: 'The Twig template prints the headline only if it’s set, writes <code>body.layout</code> into a <code>data-layout</code> attribute for the CSS, and loops over the logos, using the file when there is one and the URL otherwise. So that one schema gave the team the content model, validation before rendering, every variation the template had to handle. The backend can only fill in the fields the schema allows, so it can no longer change how a component is structured. That is what gives the frontend team full control.',
      },
      { kind: 'heading', level: 2, id: 'pillar-3-testing', text: 'Pillar 3: Testing' },
      {
        kind: 'paragraph',
        html: 'Once the code and the process were in place, the next question was how to keep the system from breaking as it grew, and that’s the Testing pillar. Micah’s starting point is that no architect can review every commit, so tests do it instead: they’re written with the code (or before it), live in the same repository, and must all pass before anything is merged into master. He covers three kinds of tests.',
      },
      {
        kind: 'paragraph',
        html: 'Unit tests check small functions that each do one thing, and at Red Hat every user story came with time reserved for them, about two hours for every eight hours of development. Performance tests enforce a budget, ideally 20% better than your competitors or the industry average, checked automatically through Grunt plug-ins for PageSpeed and WebPageTest. This chapter is also where the dated advice I mentioned earlier lives: concatenating files, image maps, and domain sharding all appear as ways to cut down HTTP requests.',
      },
      {
        kind: 'paragraph',
        html: 'Visual regression testing gets the most attention, with two full chapters. Micah opens with a scene every frontend developer knows: a pixel-perfect contact form keeps coming back to your ticket queue, because another developer changed a shared class, a designer compared it to an outdated Photoshop file, or a stakeholder changed their mind and called it a bug. His answer is to commit an approved screenshot of every component and compare every change against it, so a real regression stands out from yet another change request.',
      },
      { kind: 'heading', level: 2, id: 'pillar-4-documentation', text: 'Pillar 4: Documentation' },
      {
        kind: 'paragraph',
        html: 'Testing keeps the system reliable, but only if people actually know how to use it, and that’s where the Documentation pillar comes in. Micah’s argument is that frontend code grew into real systems of abstractions and dependencies, yet we never picked up the documentation habits of other programmers and kept that knowledge in our heads. He treats documentation as part of development, not something to do afterward, and skipping it creates technical debt, just like untested code.',
      },
      {
        kind: 'paragraph',
        html: 'He splits documentation into two kinds. Static documentation is written by hand next to the code: Hologram turns comment blocks in your Sass files into a style guide with rendered examples, and SassDoc documents your Sass variables, functions, and mixins and maps which ones depend on which. Code-driven documentation is generated from the code itself: Pattern Lab, built on Brad Frost’s Atomic Design, turns your templates into a browsable library of patterns, and JSON schemas spell out exactly what data each template expects.',
      },
      {
        kind: 'paragraph',
        html: 'Today, both kinds of documentation are built with different tools. <a href="https://storybook.js.org/docs/writing-docs/autodocs/">Storybook</a> does the job of both Hologram and Pattern Lab: each component’s states are written as stories next to its code, and its Autodocs feature turns them into a documentation page with live examples, interactive controls, and a props table inferred from the component itself.',
      },
      {
        kind: 'paragraph',
        html: 'SassDoc’s job, documenting the variables a design system is built on, has moved to design tokens. Colors, spacing, and typography are defined once in the <a href="https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/">Design Tokens Community Group format</a>, which reached its first stable version in October 2025 (fairly new spec), and tools like <a href="https://styledictionary.com/info/dtcg/">Style Dictionary</a> compile them into CSS, JavaScript, iOS and Android code, and even documentation.',
      },
      { kind: 'heading', level: 2, id: 'my-verdict', text: 'My Verdict' },
      {
        kind: 'paragraph',
        html: 'My honest review is that Micah’s solutions showed a great architectural mindset for the era in which he wrote the book. On the personal level, the book changed how I look at frontend development, from a bunch of components laid out on a screen to a set of rules that translate a design language (aka design system). It showed me the importance of slowing down and taking a step back to criticize and think about alternatives. It also gave me a glimpse of how software was built in the past, and how far the technological revolution has come.',
      },
      {
        kind: 'paragraph',
        html: "Despite all of what I learned from the book, I still don't recommend it for anyone who is looking for a book to learn how to design a modern scalable frontend system by today's standard.",
      },
      {
        kind: 'heading',
        level: 2,
        id: 'better-resources',
        text: 'Better Resources for Modern Frontend Architecture',
      },
      {
        kind: 'paragraph',
        html: 'If you are looking to learn the modern fundamentals of frontend architecture, here is a list of free better alternatives I have found useful:',
      },
      {
        kind: 'list',
        items: [
          '<a href="https://medium.com/@dmitriilobanov3/frontend-system-design-of-a-large-cpa-platform-b0c448f20ba4">Frontend System Design of a Large CPA Platform</a>, an article by Dmitrii Lobanov',
          '<a href="https://frontendatscale.com/courses/frontend-architecture/">Fundamentals of Frontend Architecture</a>, a course by Maxi Ferreira (Frontend at Scale)',
          '<a href="https://ahemdan.com/courses/frontend-system-design">Frontend System Design</a>, a course by Abdallah Hemdan (Arabic).',
        ],
      },
    ],
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
    testimonial: {
      quote: [
        "I've worked with Hussein for several months building Ciela, and he's one of the most capable people I've had on a project. He doesn't just execute what's asked, he actually thinks about whether it's the right call in the first place.",
        "He's technically strong, but the bigger thing is how he handles problems. He doesn't just flag an issue, he shows up with a couple of ways to fix it and walks you through the tradeoffs so you can actually decide.",
        "What I've appreciated most is that he's proactive, catching problems before they become problems and suggesting things worth building even when nobody asked. Ciela's MVP came together in four weeks, and a lot of that pace came from him building the right things instead of just building fast.",
        "He's also easy to work with. Updates come without me having to chase him, he asks the right questions when something's unclear, and he hits deadlines. He explains technical stuff in a way that actually lands, so conversations with him are useful, not just status checks.",
        "If you want a developer who's technically solid, communicates well, and thinks ahead instead of just taking orders, Hussein's your guy.",
      ],
      name: 'Adhiraj Hangal',
      role: 'Founder, Kingstone Systems',
      avatar: '/adhiraj.jpeg',
    },
    next: { label: 'NEXT CASE — EZONE.LY →', slug: 'ezone' },
  },
  {
    slug: 'ezone',
    eyebrow: 'Case 02 — ezone.ly',
    title: 'Storefront Themes at ezone.ly — Turning a Vague Asking into a Shipped Feature',
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
