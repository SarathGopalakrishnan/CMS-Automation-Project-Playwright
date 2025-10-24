const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://login-shore.synergymarinetest.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dscorpio_vcms_qa%26redirect_uri%3Dhttps%253A%252F%252Foceans-gourmetcms-shore-qa.synergymarinetest.com%252Fauthentication%252Fcallback%26response_type%3Dcode%26scope%3Demail%2520profile%2520openid%2520IdentityServerApi%26state%3D202bbc45edb74868b263dca1b2dd3951%26code_challenge%3Df-beV5xBZQiGeOiFHIkfb_KLI4hVy3NPY15TR9ivKQY%26code_challenge_method%3DS256%26response_mode%3Dquery');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('purchasemanager@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Think@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home');
  await page.locator('span').first().click();
  await page.getByRole('link', { name: 'My Vessels' }).click();
  await page.getByRole('textbox', { name: 'Active' }).click();
  await page.getByText('Inactive').click();
  await page.getByRole('textbox', { name: 'Inactive' }).click();
  await page.getByText('Active', { exact: true }).click();
  await page.locator('span').first().click();
  await page.locator('span').nth(2).click();
  await page.getByText('Master Screens').click();
  await page.getByRole('link', { name: 'Vendors' }).click();
  await page.locator('span').nth(1).click();
  await page.getByRole('button', { name: 'Vendors' }).click();
  await page.getByRole('button', { name: 'Open chart menu' }).nth(1).click();
  await page.getByText('Apply Filter').click();
  await page.getByRole('textbox', { name: 'Select start date' }).click();
  await page.getByRole('combobox').first().selectOption('8');
  await page.getByRole('button', { name: 'Choose Monday, September 1st,' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('.recharts-sector').first().click();
  await page.getByRole('button', { name: 'Back' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();