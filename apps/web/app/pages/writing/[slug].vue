<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { siteUrl, writing } from '~/data/portfolio'

const route = useRoute('writing-slug')
const article = computed(() => writing.find((a) => a.slug === route.params.slug))

if (!article.value) throw createError({ statusCode: 404, statusMessage: 'Article not found' })

usePageSeo(() => {
  const a = article.value
  if (!a) return
  const url = `${siteUrl}/writing/${a.slug}`
  return {
    title: `${a.title} — Hussein Samy`,
    description: a.summary,
    path: `/writing/${a.slug}`,
    type: 'article',
    schema: [
      person,
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: a.title,
        description: a.summary,
        url,
        datePublished: a.date,
        timeRequired: `PT${readingMinutes(a.body)}M`,
        author: { '@id': `${siteUrl}/#person` },
        inLanguage: 'en',
      },
    ],
  }
})

const minutes = computed(() => (article.value ? readingMinutes(article.value.body) : 0))
// The cover follows the opening paragraph, so the page starts with the argument.
const coverAfter = computed(() => article.value?.body.findIndex((b) => b.kind === 'paragraph'))
const headings = computed(() => article.value?.body.filter((b) => b.kind === 'heading') ?? [])

// The ISO day parses as UTC midnight; formatting in UTC keeps server and client on that day.
const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' })

const prose =
  'text-ink text-prose leading-prose m-0 mb-6 text-pretty [&_a]:underline [&_a]:underline-offset-4 [&_code]:bg-shade [&_code]:rounded-control [&_code]:px-1 [&_code]:font-mono [&_code]:text-[0.85em]'

// Anchor jumps land a heading at the 104px header, just above this line.
const READ_LINE = 120
const active = ref(headings.value[0]?.id)

const onScroll = () => {
  // A short last section never reaches the line, so the page bottom selects it.
  // The 1px absorbs scrollHeight rounding.
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1
  active.value = atBottom
    ? headings.value.at(-1)?.id
    : (headings.value.findLast(
        (h) => document.getElementById(h.id)!.getBoundingClientRect().top <= READ_LINE,
      )?.id ?? headings.value[0]?.id)
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div v-if="article">
    <article class="max-w-read px-gutter relative z-1 mx-auto pt-10 pb-32">
      <EyebrowLabel tone="accent" class="mb-6">{{ article.meta }}</EyebrowLabel>
      <h1
        class="font-display m-0 mb-6 text-[clamp(32px,6vw,52px)] leading-[1.08] tracking-[-0.02em] font-medium text-pretty"
      >
        {{ article.title }}
      </h1>
      <p class="text-ink m-0 font-mono text-label uppercase">
        <time :datetime="article.date">{{ dateFormat.format(new Date(article.date)) }}</time>
        · {{ minutes }} min read
      </p>

      <template v-for="(block, i) in article.body" :key="i">
        <component
          :is="`h${block.level}`"
          v-if="block.kind === 'heading'"
          :id="block.id"
          class="font-display scroll-mt-header m-0 font-medium"
          :class="block.level === 2 ? 'text-title mt-16 mb-4' : 'text-subtitle mt-10 mb-3'"
          >{{ block.text }}</component
        >
        <p v-else-if="block.kind === 'paragraph'" :class="prose" v-html="block.html" />
        <ol v-else-if="block.kind === 'list'" class="list-decimal pl-6">
          <li v-for="item in block.items" :key="item" :class="prose" v-html="item" />
        </ol>
        <figure v-else-if="block.kind === 'code'" class="my-8">
          <figcaption class="text-ink mb-2 font-mono text-micro uppercase">
            {{ block.lang }}
          </figcaption>
          <pre
            tabindex="0"
            class="bg-panel border-line rounded-card m-0 overflow-x-auto border p-5 font-mono text-[13px] leading-[1.65]"
          ><code>{{ block.code }}</code></pre>
        </figure>
        <figure v-else class="my-10">
          <div
            tabindex="0"
            class="overflow-x-auto [&>svg]:block [&>svg]:h-auto [&>svg]:w-full [&>svg]:min-w-[600px]"
            v-html="block.svg"
          />
          <figcaption class="text-ink mt-3 font-mono text-micro uppercase">
            {{ block.caption }}
          </figcaption>
        </figure>
        <figure v-if="article.cover && i === coverAfter" class="my-10">
          <img
            :src="article.cover.src"
            :alt="article.cover.alt"
            :width="article.cover.width"
            :height="article.cover.height"
            class="border-line rounded-card h-auto w-full border"
          />
        </figure>
      </template>

      <div class="border-line mt-16 border-t pt-8">
        <NuxtLink
          to="/#writing"
          class="text-ink hover:text-ink font-mono text-label tracking-mono no-underline hover:no-underline"
          >← ALL WRITING</NuxtLink
        >
      </div>
    </article>

    <ArticleToc :items="headings" :active="active" />
  </div>
</template>
