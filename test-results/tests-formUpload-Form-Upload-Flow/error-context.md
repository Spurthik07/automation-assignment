# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\formUpload.spec.js >> Form Upload Flow
- Location: tests\formUpload.spec.js:3:5

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: page.reload: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e5]:
      - link "Automation Anywhere" [ref=e6] [cursor=pointer]:
        - /url: /sso/s/
        - img "Automation Anywhere" [ref=e7]
      - button "Spurthi K" [ref=e16] [cursor=pointer]:
        - img "Spurthi K" [ref=e17]
        - generic [ref=e18]: Spurthi K
    - generic [ref=e21]:
      - paragraph [ref=e27]: SELECT YOUR AUTOMATION ANYWHERE DESTINATION
      - generic [ref=e31]:
        - link "Pathfinder Community Take off on your automation mission. Learn, connect and transform with our automation community. Access Pathfinder Community" [ref=e33] [cursor=pointer]:
          - /url: https://idp.automationanywhere.com/idp/login?app=0sp2t000000XZB0
          - generic [ref=e34]:
            - img [ref=e37]
            - generic [ref=e39]: Pathfinder Community
            - generic [ref=e41]: Take off on your automation mission. Learn, connect and transform with our automation community.
            - button "Access Pathfinder Community" [ref=e43]
        - link "Documentation Search across all product documentation for all Automation Anywhere products Access Documentation" [ref=e45] [cursor=pointer]:
          - /url: https://idp.automationanywhere.com/idp/login?app=0sp6F000000k9ky
          - generic [ref=e46]:
            - img [ref=e49]
            - generic [ref=e51]: Documentation
            - generic [ref=e53]: Search across all product documentation for all Automation Anywhere products
            - button "Access Documentation" [ref=e55]
        - link "Agentic App Store The world’s first digital workforce marketplace. Access Agentic App Store" [ref=e57] [cursor=pointer]:
          - /url: https://idp.automationanywhere.com/idp/login?app=0sp6F000000k9l3
          - generic [ref=e58]:
            - img [ref=e61]
            - generic [ref=e63]: Agentic App Store
            - generic [ref=e65]: The world’s first digital workforce marketplace.
            - button "Access Agentic App Store" [ref=e67]
        - link "Training E-learning courses, certifications and role-based product learning trails for users at all levels. Access Training" [ref=e69] [cursor=pointer]:
          - /url: https://upskill.automationanywhere.com/auth/login/3q8k6ihfvo3dq?next=%2F
          - generic [ref=e70]:
            - img [ref=e73]
            - generic [ref=e75]: Training
            - generic [ref=e77]: E-learning courses, certifications and role-based product learning trails for users at all levels.
            - button "Access Training" [ref=e79]
    - paragraph [ref=e82]:
      - generic [ref=e83]: © 2026 Automation Anywhere, Inc.
      - link "Privacy" [ref=e84] [cursor=pointer]:
        - /url: https://www.automationanywhere.com/privacy
      - text: "|"
      - link "Terms" [ref=e85] [cursor=pointer]:
        - /url: https://www.automationanywhere.com/terms
      - text: "|"
      - link "Trademark" [ref=e86] [cursor=pointer]:
        - /url: https://www.automationanywhere.com/trademark
      - text: "|"
      - link "Products" [ref=e87] [cursor=pointer]:
        - /url: https://www.automationanywhere.com/products/enterprise
      - text: "|"
      - link "Customers" [ref=e88] [cursor=pointer]:
        - /url: https://www.automationanywhere.com/customers/who-uses-us
      - text: "|"
      - link "Careers" [ref=e89] [cursor=pointer]:
        - /url: https://www.automationanywhere.com/company/careers
  - generic:
    - status
  - generic [ref=e91]: Home
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Form Upload Flow', async ({ page }) => {
  4  | 
  5  |   test.setTimeout(120000);
  6  | 
  7  |   await page.goto('https://idp.automationanywhere.com/');
  8  | 
  9  |   try {
  10 |     await page.click('text=Accept All Cookies', { timeout: 5000 });
  11 |   } catch {}
  12 | 
  13 |   await page.fill('input[placeholder="*Email"]', 'spurthi.k@campusuvce.in');
  14 |   await page.click('button:has-text("Next")');
  15 | 
  16 |   await page.waitForSelector('input[placeholder="Password"]');
  17 |   await page.fill('input[placeholder="Password"]', 'Hiautomation@123');
  18 | 
  19 |   await page.locator('button:has-text("Sign"), button:has-text("Login")')
  20 |     .first()
  21 |     .click()
  22 |     .catch(() => {});
  23 | 
  24 |   await page.goto('https://idp.automationanywhere.com/s/automation', {
  25 |     waitUntil: 'domcontentloaded'
  26 |   }).catch(() => {});
  27 | 
  28 |   await page.waitForLoadState('domcontentloaded');
  29 | 
  30 |   try {
  31 |     await page.waitForSelector('text=Create', { timeout: 15000 });
  32 |   } catch {
> 33 |     await page.reload();
     |                ^ Error: page.reload: Target page, context or browser has been closed
  34 |     await page.waitForSelector('text=Create', { timeout: 15000 });
  35 |   }
  36 | 
  37 |   await page.getByRole('button', { name: /create/i }).click();
  38 |   await page.getByText('Form').click();
  39 | 
  40 |   await page.waitForTimeout(2000);
  41 | 
  42 |   await page.locator('input').first().fill('Test Input');
  43 | 
  44 |   await page.setInputFiles('input[type="file"]', 'tests/sample.pdf');
  45 | 
  46 |   await expect(page.locator('text=sample.pdf')).toBeVisible();
  47 | 
  48 |   await page.getByRole('button', { name: /save/i }).click();
  49 | 
  50 | });
```