import { test, expect } from '@playwright/test';

test('Form Upload Flow', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto('https://community.cloud.automationanywhere.digital/#/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('spurthi.k@campusuvce.in');
  await page.getByRole('textbox', { name: 'Password' }).fill('Hiautomation@12');

  await page.getByRole('button', { name: /log in/i }).click();

  await page.waitForURL('**/home');

  await page.getByRole('link', { name: 'Automation', exact: true }).click();

  await expect(page.getByRole('button', { name: /create/i })).toBeVisible({ timeout: 20000 });

  await page.getByRole('button', { name: /create/i }).click();

  await page.getByRole('button', { name: /task bot/i }).click();

  await page.fill('input[name="name"]', `Test Bot ${Date.now()}`);
  await page.getByRole('button', { name: /create & edit/i }).click();

  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(8000);

  const searchBox = page.getByPlaceholder(/search/i).first();

  await searchBox.waitFor({ timeout: 15000 });
  await searchBox.fill('Message Box');
  await page.waitForSelector('text=Message Box', { timeout: 10000 });
  await page.locator('text=Message Box').first().click();

  await expect(page.locator('text=Message Box')).toBeVisible();

  await page.getByRole('button', { name: /save/i }).click();

  await page.waitForTimeout(3000);

});