/* Mobile browsers paint their own bar above and below the page unless theme-color
   says otherwise — hence the white (or, on a dark system, black) strip. Hex because
   meta[theme-color] predates oklch; these mirror --bg in style.css. The metas ship
   as a prefers-color-scheme pair, so clearing media is what makes an explicit
   override win over the system preference.

   ponytail: only the toggle patches them — on a fresh load an explicit theme that
   disagrees with the system one shows the system colour, because Unhead re-renders
   the metas after mount and wins any race. Move the metas into a reactive useHead
   if that mismatch ever matters. */
export const themeBar = { light: '#f2f3f5', dark: '#101316' } as const

export function applyTheme(theme: keyof typeof themeBar) {
  document.documentElement.dataset.theme = theme
  for (const meta of document.head.querySelectorAll('meta[name=theme-color]')) {
    meta.setAttribute('media', '')
    meta.setAttribute('content', themeBar[theme])
  }
}
