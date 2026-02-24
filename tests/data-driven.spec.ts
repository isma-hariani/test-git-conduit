import { test, expect } from '@playwright/test';
[
    { username: "12", errorMessage: "username is too short (minimum is 3 characters)", isErrorDisplayed: true },
    { username: "123", errorMessage: "username", isErrorDisplayed: false },
    { username: "12345678901234567890", errorMessage: "Username", isErrorDisplayed: false },
    { username: "123456789012345678901", errorMessage: "Username is too long (maximum is 20 characters)", isErrorDisplayed: true }
].forEach(({username, errorMessage, isErrorDisplayed}) => {
  test(`Error message test: ${username}`, async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Email' }).fill('12');
  await page.getByRole('textbox', { name: 'Password' }).fill('hello');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  if(isErrorDisplayed) {
      await expect(page.locator('.error-messages')).toContainText(errorMessage);
  } else {
  await expect(page.locator('.error-messages')).not.toContainText(errorMessage);
    }
  })
});
