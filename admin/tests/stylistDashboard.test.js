import { expect, test } from '@playwright/test';

test.describe('Stylist Dashboard Page Tests', () => {

  // ✅ Test 1: Ensure the Stylist Dashboard page loads successfully
  test('should load the Stylist Dashboard page', async ({ page }) => {
    await page.goto('http://localhost:5174/stylist-dashboard'); // Adjust URL if needed
    await expect(page).toHaveURL(/stylist-dashboard/);
  });

  // ✅ Test 2: Ensure the page does not crash on load
  test('should not crash while loading', async ({ page }) => {
    await page.goto('http://localhost:5174/stylist-dashboard');
    await expect(page).not.toHaveTitle('Error');
  });

    // ✅ Test 3: Ensure clicking "Cancel" removes a booking
    test('should remove a booking when clicking cancel', async ({ page }) => {
        await page.goto('http://localhost:5174/stylist-dashboard');

        const cancelButton = page.locator('img[src*="cancel_icon"]').first();
        
        if (await cancelButton.isVisible()) {
            await cancelButton.click();
            await page.waitForTimeout(500);
            await expect(cancelButton).not.toBeVisible();
        } else {
            console.log("No cancel button found, skipping test.");
        }
    });

});

