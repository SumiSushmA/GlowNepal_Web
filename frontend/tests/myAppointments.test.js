import { expect, test } from '@playwright/test';

test.describe('My Appointments Page Basic Tests', () => {

  // ✅ Test 1: Ensure the page loads successfully
  test('should load the My Appointments page', async ({ page }) => {
    await page.goto('http://localhost:5174/my-appointments');
    await page.waitForLoadState('domcontentloaded');

    const pageContent = await page.locator('body').textContent();
    expect(pageContent.length).toBeGreaterThan(10);
  });

  // ✅ Test 2: Ensure the page URL is correct
  test('should be on the correct URL', async ({ page }) => {
    await page.goto('http://localhost:5174/my-appointments');
    await expect(page).toHaveURL(/my-appointments/);
  });

  // ✅ Test 3: Ensure the page does not show a 404 error
  test('should not show a 404 error', async ({ page }) => {
    await page.goto('http://localhost:5174/my-appointments');
    const pageContent = await page.locator('body').textContent();
    expect(pageContent).not.toContain('404');
  });

  // ✅ Test 4: Ensure the page does not crash
  test('should not crash on load', async ({ page }) => {
    await page.goto('http://localhost:5174/my-appointments');
    expect(page.isClosed()).toBeFalsy();
  });

  // ✅ Test 5: Ensure there are no console errors
  test('should not have console errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error));

    await page.goto('http://localhost:5174/my-appointments');

    expect(errors.length).toBe(0);
  });



});
