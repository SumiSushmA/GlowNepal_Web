import { expect, test } from '@playwright/test';

test.describe('Appointment Page Tests', () => {

  // ✅ Test 1: Ensure the Appointment page loads successfully
  test('should load the Appointment page', async ({ page }) => {
    await page.goto('http://localhost:5174/appointment/1'); // Replace '1' with a valid stylistId
    await expect(page).toHaveURL(/appointment/);
  });

  // ✅ Test 2: Ensure the page contains a button
  test('should have at least one button', async ({ page }) => {
    await page.goto('http://localhost:5174/appointment/1');
    const button = page.locator('button');
    await expect(button.first()).toBeVisible();
  });

  // ✅ Test 3: Ensure there is a section (container) on the page
  test('should have a section or div container', async ({ page }) => {
    await page.goto('http://localhost:5174/appointment/1');
    const section = page.locator('section, div');
    await expect(section.first()).toBeVisible();
  });

  // ✅ Test 4: Ensure the page doesn't crash on load
  test('should not crash while loading', async ({ page }) => {
    await page.goto('http://localhost:5174/appointment/1');
    await expect(page).not.toHaveTitle('Error');
  });

});
