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
