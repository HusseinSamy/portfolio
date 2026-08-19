import { ref, watchEffect } from 'vue'

const stored = localStorage.getItem('theme')
const theme = ref<'light' | 'dark'>(
  stored === 'dark' || stored === 'light'
    ? stored
    : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
)

watchEffect(() => {
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem('theme', theme.value)
})

export function useTheme() {
  return { theme, toggle: () => (theme.value = theme.value === 'dark' ? 'light' : 'dark') }
}
