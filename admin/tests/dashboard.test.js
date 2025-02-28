import { expect, test } from '@playwright/test';

test.describe('Dashboard Basic Tests', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://localhost:5174/dashboard');
  });

  test.afterEach(async () => {
    await page.close();
  });

  // ✅ Test 1: Check if the dashboard page loads
  test('should load dashboard page successfully', async () => {
    await page.waitForSelector('body', { timeout: 10000 });
    expect(await page.title()).not.toBeNull();
  });

  // ✅ Test 2: Check if the page has a header or title section
  test('should contain a dashboard title', async () => {
    await page.waitForSelector('.text-2xl.font-semibold', { timeout: 10000 });
    const titleText = await page.textContent('.text-2xl.font-semibold');
    expect(titleText).not.toBeNull();
  });

  // ✅ Test 3: Ensure main content exists
  test('should have a main content section', async () => {
    await page.waitForSelector('div', { timeout: 20000 });
    const contentExists = await page.isVisible('div');
    expect(contentExists).toBeTruthy();
  });

  //test 4

test('should not crash while loading', async ({ page }) => {
    await page.goto('http://localhost:5174/dashboard');
    await expect(page).not.toHaveTitle('Error');
  });

});


