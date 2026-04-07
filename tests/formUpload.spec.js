import { test, expect } from '@playwright/test';

test('Form Upload Flow', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto('https://idp.automationanywhere.com/');

  try {
    await page.click('text=Accept All Cookies', { timeout: 5000 });
  } catch {}

  await page.fill('input[placeholder="*Email"]', 'spurthi.k@campusuvce.in');
  await page.click('button:has-text("Next")');

  await page.waitForSelector('input[placeholder="Password"]');
  await page.fill('input[placeholder="Password"]', 'Hiautomation@123');

  await page.locator('button:has-text("Sign"), button:has-text("Login")')
    .first()
    .click()
    .catch(() => {});

  await page.goto('https://idp.automationanywhere.com/s/automation', {
    waitUntil: 'domcontentloaded'
  }).catch(() => {});

  await page.waitForLoadState('domcontentloaded');

  try {
    await page.waitForSelector('text=Create', { timeout: 15000 });
  } catch {
    await page.reload();
    await page.waitForSelector('text=Create', { timeout: 15000 });
  }

  await page.getByRole('button', { name: /create/i }).click();
  await page.getByText('Form').click();

  await page.waitForTimeout(2000);

  await page.locator('input').first().fill('Test Input');

  await page.setInputFiles('input[type="file"]', 'tests/sample.pdf');

  await expect(page.locator('text=sample.pdf')).toBeVisible();

  await page.getByRole('button', { name: /save/i }).click();

});