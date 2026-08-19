import type { Directive } from 'vue'

/* One reveal, fired once when a section enters the viewport. Under
   prefers-reduced-motion the element is simply left alone. */
export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    el.classList.add('reveal')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        el.classList.add('reveal-in')
        observer.disconnect()
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
  },
}
