import { test, expect } from '@playwright/test';

test('Example separate test 1', async ({ page }) => {
  // Your test logic here
  test.skip(!!process.env.CI, 'Skip external URL test in CI environment');
  
  await page.goto('https://conduit.bondaracademy.com/');
  await expect(page).toHaveTitle(/Conduit|RealWorld/i);
});

test('Example separate test 2', async ({ page }) => {
  // Another test
  test.skip(!!process.env.CI, 'Skip external URL test in CI environment');
  
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading')).toContainText('Sign in');
});
