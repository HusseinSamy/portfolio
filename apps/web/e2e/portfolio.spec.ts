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
