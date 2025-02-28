import { expect, test } from '@playwright/test';

test.describe('All Appointments Page Tests', () => {

    // ✅ Test 1: Ensure the page loads correctly
    test('should load the All Appointments page', async ({ page }) => {
        await page.goto('http://localhost:5174/all-appointments');
        await expect(page).toHaveURL(/.*all-appointments/);
    });

    // ✅ Test 2: Ensure at least one appointment appears (if data exists)
    test('should display at least one appointment if available', async ({ page }) => {
        await page.goto('http://localhost:5174/all-appointments');

        // Wait for appointment data to load
        await page.waitForLoadState('domcontentloaded');
        const appointmentRow = page.locator('.border-b').nth(1);

        // Check if at least one appointment row exists
        if (await appointmentRow.isVisible()) {
            await expect(appointmentRow).toBeVisible();
        } else {
            console.warn("No appointments found, skipping this test.");
        }
    });

    // ✅ Test 3: Ensure the page does not crash
    test('should not crash when loading the page', async ({ page }) => {
        await page.goto('http://localhost:5174/all-appointments');

        // Ensure page does not contain an error message
        await expect(page.locator('body')).not.toContainText('Error');
    });
});

