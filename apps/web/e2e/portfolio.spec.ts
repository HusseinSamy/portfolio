import { expect, test } from '@playwright/test'

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

test('jumping to a section from the map marks it as the one being read', async ({ page }) => {
  await page.goto(article)
  // Mid-article on purpose: a section near the end may never reach the read line.
  const testing = page.getByRole('link', { name: 'Pillar 3: Testing' })
  await testing.click()
  await expect(page).toHaveURL(/#pillar-3-testing$/)
  await expect(testing).toHaveAttribute('aria-current', 'location')

  // The first jump can land before hydration, where the on-mount pass marks it.
  // This one comes after, so only the scroll listener can mark it.
  const code = page.getByRole('link', { name: 'Pillar 1: Code' })
  await code.click()
  await expect(code).toHaveAttribute('aria-current', 'location')
  await expect(testing).not.toHaveAttribute('aria-current')
})

test('the section map collapses and expands', async ({ page }) => {
  await page.goto(article)
  const map = page.getByRole('navigation', { name: 'On this page' })
  const toggle = page.locator('summary').filter({ visible: true })
  await expect(map).toBeVisible()
  await toggle.click()
  await expect(map).toBeHidden()
  await toggle.click()
  await expect(map).toBeVisible()
})
