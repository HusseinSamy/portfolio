import { expect, test, type Page } from '@playwright/test'

test('the home page leads with the claim', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText(
    'I ship production frontends that stay fast, accessible, and easy to change.',
  )
})

test('a work card opens its case study', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: /ezone\.ly/ }).click()
  await expect(page).toHaveURL(/\/work\/ezone$/)
  await expect(page.locator('h1')).toContainText('Storefront Themes at ezone.ly')
})

test('hovering a commitment previews it, leaving the list restores the pinned one', async ({
  page,
}) => {
  await page.goto('/#how')
  const steps = page.getByRole('button', { name: /^0\d/ })
  // The outgoing block lingers for the fade, so target the one not leaving.
  const card = page.locator('#how div:not(.step-fade-leave-active) > h3')

  await steps.nth(2).click()
  await expect(card).toHaveText('A question, never a guess.')

  await steps.nth(4).hover()
  await expect(card).toHaveText('Written beats spoken, by default.')

  // Cursor away from the list without a click: back to the step that was pinned.
  const list = await steps.nth(0).boundingBox()
  await page.mouse.move(list!.x + list!.width / 2, list!.y - 40)
  await expect(card).toHaveText('A question, never a guess.')
})

const article = '/writing/frontend-architecture-for-design-systems'

test('the writing card opens its article', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: /Frontend Architecture for Design Systems/ }).click()
  await expect(page).toHaveURL(/\/writing\/frontend-architecture-for-design-systems$/)
  await expect(page.locator('h1')).toHaveText(
    'Frontend Architecture for Design Systems: A Review Ten Years Later',
  )
})

// A hover that lands before hydration opens nothing, so step off and hover again
// until the map reports itself open.
async function hoverMapOpen(page: Page) {
  const map = page.getByRole('button', { name: 'Table of contents' })
  await expect(async () => {
    await page.mouse.move(0, 0)
    await map.hover()
    await expect(map).toHaveAttribute('aria-expanded', 'true', { timeout: 500 })
  }).toPass()
}

// The panel hides after a jump, so these locators look past visibility.
const entry = (page: Page, name: string) => page.getByRole('link', { name, includeHidden: true })

test('jumping to a section from the map marks it as the one being read', async ({ page }) => {
  await page.goto(article)
  await hoverMapOpen(page)
  // Mid-article on purpose: a section near the end may never reach the read line.
  await entry(page, 'Pillar 3: Testing').click()
  await expect(page).toHaveURL(/#pillar-3-testing$/)
  await expect(entry(page, 'Pillar 3: Testing')).toHaveAttribute('aria-current', 'location')

  await hoverMapOpen(page)
  await entry(page, 'Pillar 1: Code').click()
  await expect(entry(page, 'Pillar 1: Code')).toHaveAttribute('aria-current', 'location')
  await expect(entry(page, 'Pillar 3: Testing')).not.toHaveAttribute('aria-current')
})

test('the section map opens on hover and closes when the pointer leaves', async ({ page }) => {
  await page.goto(article)
  await hoverMapOpen(page)
  await expect(entry(page, 'My Verdict')).toBeVisible()
  await page.mouse.move(10, 400)
  await expect(entry(page, 'My Verdict')).toBeHidden()
})

test('Enter opens the section map and Escape closes it', async ({ page }) => {
  await page.goto(article)
  const map = page.getByRole('button', { name: 'Table of contents' })
  await expect(async () => {
    await map.press('Enter')
    await expect(map).toHaveAttribute('aria-expanded', 'true', { timeout: 500 })
  }).toPass()
  await expect(entry(page, 'My Verdict')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(entry(page, 'My Verdict')).toBeHidden()
  await expect(map).toBeFocused()
})
