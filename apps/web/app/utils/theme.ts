/* iOS Safari paints its own bar above the page unless a theme-color meta says
   otherwise — hence the white (or, on a dark system, black) strip. Hex because
   meta[theme-color] predates oklch; these mirror --bg in style.css. */
export const themeBar = { light: '#f2f3f5', dark: '#101316' } as const

export function applyTheme(theme: keyof typeof themeBar) {
  document.documentElement.dataset.theme = theme
  document.head.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeBar[theme])
}
