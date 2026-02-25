import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
import path from 'path';

const excelFilePath = path.join(__dirname, '../data/UserData.xlsx');

test('Excel data test', async ({ page }) => {
  test.skip(!!process.env.CI, 'Skip external URL test in CI environment');
  
  const workbook = XLSX.readFile(excelFilePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const xlsToJson = XLSX.utils.sheet_to_json(worksheet);
  console.log(xlsToJson);
  
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
});