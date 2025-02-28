import { expect, test } from '@playwright/test';

test.describe('Basic Login Component Tests', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://localhost:5174/login'); // Ensure your server is running
  });

  test.afterEach(async () => {
    await page.close();
  });

  // ✅ Test 1: Ensure the login page loads
  test('should load login page successfully', async () => {
    await page.waitForSelector('form', { timeout: 10000 }); // Ensure form is present
    expect(await page.title()).not.toBeNull(); // Page must have a title
  });

  // ✅ Test 2: Admin Login text should be visible
  test('should display Admin Login text', async () => {
    await page.waitForSelector('.text-2xl.font-semibold', { timeout: 10000 });
    const formTitle = await page.textContent('.text-2xl.font-semibold');
    expect(formTitle).toContain('Admin Login');
  });

  // ✅ Test 3: Check email and password fields exist
  test('should have email and password input fields', async () => {
    await page.waitForSelector('input[type="email"]', { timeout: 10000 });
    await page.waitForSelector('input[type="password"]', { timeout: 10000 });
  });

});
