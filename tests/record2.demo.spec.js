import {test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('record2 demo',async () => {
  const browser = await chromium.launch({
    headless: false,
    // args: ['--start-maximized'],

  });
  const context = await browser.newContext({ viewport: null});
  const page = await context.newPage();
  await page.goto('https://login-shore.synergymarinetest.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dscorpio_vcms_qa%26redirect_uri%3Dhttps%253A%252F%252Foceans-gourmetcms-shore-qa.synergymarinetest.com%252Fauthentication%252Fcallback%26response_type%3Dcode%26scope%3Demail%2520profile%2520openid%2520IdentityServerApi%26state%3D202bbc45edb74868b263dca1b2dd3951%26code_challenge%3Df-beV5xBZQiGeOiFHIkfb_KLI4hVy3NPY15TR9ivKQY%26code_challenge_method%3DS256%26response_mode%3Dquery');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('purchasemanager@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Think@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('div').filter({ hasText: 'Signing you back in' }).nth(3).click();
  await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home');
   await page.waitForSelector('role=link[name="Menu Item that reveals Vendors"]', { timeout: 60000 });
  await page.getByRole('button',{ name: 'vendors'}).scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'Vendors' }).waitFor({state: 'visible'});
  await page.getByRole('button', { name: 'vendors'}).click();
  await page.getByRole('button', { name: 'Open chart menu' }).first().click();
  await page.getByRole('button', { name: 'Open chart menu' }).first().click();
  await page.getByRole('button', { name: 'Open chart menu' }).first().click();
  await page.getByText('Apply Filter').click();
  await page.getByRole('textbox', { name: 'Select start date' }).click();
  await page.getByRole('combobox').first().selectOption('8');
  await page.getByRole('button', { name: 'Choose Monday, September 1st,' }).click();
  await page.getByRole('textbox', { name: 'Select end date' }).click();
  await page.locator('.chart-filter-content-area').click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('.recharts-sector').first().click();

  // ---------------------
  await context.close();
  await browser.close();
})