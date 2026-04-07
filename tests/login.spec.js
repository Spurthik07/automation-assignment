import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

  await page.goto('https://idp.automationanywhere.com/');

  try {
    await page.click('text=Accept All Cookies', { timeout: 5000 });
  } catch (e) {}

  await page.fill('input[placeholder="*Email"]', 'spurthi.k@campusuvce.in');
  await page.click('button:has-text("Next")');

  await page.waitForSelector('input[placeholder="Password"]');
  await page.fill('input[placeholder="Password"]', 'Hiautomation@123');


  await page.waitForURL('**/s/**');

  await expect(page.locator('text=Automation')).toBeVisible();

});