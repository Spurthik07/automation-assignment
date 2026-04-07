import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    browserName: 'firefox',   // 🔥 force firefox
    headless: false,
    ignoreHTTPSErrors: true,
  },
});