import { expect, test } from '@playwright/test';

// test 1
test('should load the login page', async ({ page }) => {
  await page.goto('http://localhost:5174/login'); // Make sure this URL is correct

  // Wait for the login form title (Change selector if needed)
  const title = await page.textContent('.text-2xl.font-semibold'); // Adjust this based on your actual title
  expect(title).toContain('Admin Login'); // Ensure it matches what you see
});

// test 2
test('should have email and password fields', async ({ page }) => {
  await page.goto('http://localhost:5174/login');

  const emailInput = await page.locator('input[type="email"]');
  const passwordInput = await page.locator('input[type="password"]');

  await expect(emailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
});

//test 3
test('should allow switching between Login and Sign Up', async ({ page }) => {
  await page.goto('http://localhost:5174/login');

  // Click on "Stylist Login? Click here"
  await page.click('text=Click here');

  // Check if "Stylist Login" is visible
  await expect(page.locator('.text-2xl.font-semibold')).toContainText('Stylist Login');

  // Click back to "Admin Login"
  await page.click('text=Click here');

  // Ensure we are back to Admin Login
  await expect(page.locator('.text-2xl.font-semibold')).toContainText('Admin Login');
});
