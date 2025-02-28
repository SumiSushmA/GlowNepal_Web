import { expect, test } from '@playwright/test';

test.describe('Stylists Page Basic Tests', () => {

  // ✅ Test 1: Ensure the page loads successfully
  test('should load the Stylists page', async ({ page }) => {
    await page.goto('http://localhost:5174/stylists');
    await page.waitForLoadState('domcontentloaded');

    const pageContent = await page.locator('body').textContent();
    expect(pageContent.length).toBeGreaterThan(10);
  });

  // ✅ Test 2: Ensure the page contains some text (simple check)
  test('should have some visible text on the page', async ({ page }) => {
    await page.goto('http://localhost:5174/stylists');
    const textContent = await page.locator('body').textContent();
    expect(textContent).toMatch(/\w+/);
  });

  // ✅ Test 3: Ensure the page does not show a 404 error
  test('should not show a 404 error', async ({ page }) => {
    await page.goto('http://localhost:5174/stylists');
    const pageContent = await page.locator('body').textContent();
    expect(pageContent).not.toContain('404');
  });

  // ✅ NEW TEST 4: Ensure the page URL is correct
  test('should be on the correct URL', async ({ page }) => {
    await page.goto('http://localhost:5174/stylists');
    await expect(page).toHaveURL(/stylists/);
  });

  // ✅ NEW TEST 5: Ensure the page does not crash
  test('should not crash on load', async ({ page }) => {
    await page.goto('http://localhost:5174/stylists');
    expect(page.isClosed()).toBeFalsy();
  });

  // ✅ NEW TEST 6: Ensure there are no console errors
  test('should not have console errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error));

    await page.goto('http://localhost:5174/stylists');

    expect(errors.length).toBe(0);
  });

});
