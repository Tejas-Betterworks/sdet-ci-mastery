// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('Check Google Title', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
