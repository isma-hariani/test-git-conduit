import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
   await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'New Article' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill('Try Title');
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('Test Article');
  await page.getByRole('textbox', { name: 'Write your article' }).fill('test body article');
  await page.getByRole('textbox', { name: 'Enter tags' }).fill('test tag');
  await page.getByRole('textbox', { name: 'Enter tags' }).press('Enter');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await expect(page.getByRole('heading')).toHaveText('Try Title');
  await expect(page.locator('.tag-list li')).toHaveText('Test tag');
  await page.getByRole('button', { name: 'Delete Article' }).first().click();
});