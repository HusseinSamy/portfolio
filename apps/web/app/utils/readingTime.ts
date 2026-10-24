import type { Article } from '@portfolio/content'

const WORDS_PER_MINUTE = 200

// Prose only: code listings and diagrams are looked at, not read at reading speed.
export function readingMinutes(body: Article['body']) {
  const text = body
    .flatMap((b) =>
      b.kind === 'heading'
        ? [b.text]
        : b.kind === 'paragraph'
          ? [b.html]
          : b.kind === 'list'
            ? b.items
            : [],
    )
    .join(' ')
    .replace(/<[^>]+>/g, ' ')
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}
