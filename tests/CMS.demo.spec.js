import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');
// let context;
// let page;

// test.beforeAll(async ({ browser }) => {
//   context = await browser.newContext();
//   await context.tracing.start({
//     snapshots: true,
//     screenshots: true,
//   });
//   page = await context.newPage();
// });

// test.afterAll(async () => {
//   await context.tracing.stop({ path: 'test8_trace.zip' });
//   await context.close();
// });
test('record2 demo', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to login page
  await page.goto('https://login-shore.synergymarinetest.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dscorpio_vcms_qa%26redirect_uri%3Dhttps%253A%252F%252Foceans-gourmetcms-shore-qa.synergymarinetest.com%252Fauthentication%252Fcallback%26response_type%3Dcode%26scope%3Demail%2520profile%2520openid%2520IdentityServerApi%26state%3D202bbc45edb74868b263dca1b2dd3951%26code_challenge%3Df-beV5xBZQiGeOiFHIkfb_KLI4hVy3NPY15TR9ivKQY%26code_challenge_method%3DS256%26response_mode%3Dquery');


  // await page.pause();
  // Wait for Username and fill
  await page.waitForSelector('#Username', { timeout: 10000 });
  await expect(page.locator('#Username')).toBeVisible();
  await page.fill('#Username', 'purchasemananger@gmail.com');

  // Wait for Password and fill
  await page.waitForSelector('#Password', { timeout: 10000 });
  await expect(page.locator('#Password')).toBeVisible();
  await page.fill('#Password', 'Think@123');

  // Click login button
  await page.waitForSelector('button:has-text("Login")', { timeout: 10000 });
  await page.getByRole('button', { name: 'Login' }).click();

  // Navigate to shore home (wait for it to fully load)

  // await page.locator('div').filter({ hasText: 'Signing you back in' }).nth(3).click();

  // Step 1: Navigate to the URL. The browser will handle the redirect to the login page.
  await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector("//span[@class='ship-icons']");
  await page.locator("//span[@class='ship-icons']").click()

  // wait for final page element
  // await expect(page.locator('text="PR FROM VESSEL"]')).toHaveText('PR FROM VESSEL')
  await page.waitForSelector("#root > div > div:nth-child(2) > div > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > span", { timeout: 10000 });
  await page.locator('#root > div > div:nth-child(2) > div > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > span');



  // Wait for Vessel Menu and click safely
  const vesselMenu = page.locator(
    '#root > div > div:nth-child(2) > div > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > span'
  );
  try {
    await vesselMenu.waitFor({ state: 'visible', timeout: 10000 });
    await vesselMenu.click();
  } catch (err) {
    console.error('Vessel Menu not visible:', err);
  }

  // Wait for Master Screens and click safely
  const masterScreensMenu = page.locator("xpath=//li[normalize-space()='Master Screens']");
  try {
    await masterScreensMenu.waitFor({ state: 'visible', timeout: 10000 });
    await masterScreensMenu.click();
  } catch (err) {
    console.error('Master Screens not visible:', err);
  }

  // Continue with the rest of your code safely here
  await context.close();
  await browser.close();
});
