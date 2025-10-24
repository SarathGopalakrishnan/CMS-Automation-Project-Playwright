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
  await page.getByText('Master Screens').click();
  await page.getByRole('link', { name: 'Vendors' }).click();
  await page.locator('div:nth-child(14) > .rt-tr > div:nth-child(7) > button').click();
  await page.getByRole('button', { name: 'Certificates' }).click();
  await page.getByRole('button', { name: '✏️' }).first().click();
  await page.locator('.space-y-3 > .flex').click();
  await page.locator('body').setInputFiles('extra-meals-details.pdf');
  await page.getByRole('textbox', { name: 'Issue Date' }).click();
  await page.getByRole('textbox', { name: 'Expiry Date' }).click();
  await page.getByRole('button', { name: 'Choose Thursday, October 16th,' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Update' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();