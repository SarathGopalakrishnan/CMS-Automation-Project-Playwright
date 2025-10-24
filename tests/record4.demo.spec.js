import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test ('record2 demo',async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
    await page.goto('https://login-shore.synergymarinetest.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dscorpio_vcms_qa%26redirect_uri%3Dhttps%253A%252F%252Foceans-gourmetcms-shore-qa.synergymarinetest.com%252Fauthentication%252Fcallback%26response_type%3Dcode%26scope%3Demail%2520profile%2520openid%2520IdentityServerApi%26state%3D202bbc45edb74868b263dca1b2dd3951%26code_challenge%3Df-beV5xBZQiGeOiFHIkfb_KLI4hVy3NPY15TR9ivKQY%26code_challenge_method%3DS256%26response_mode%3Dquery');
    await page.pause()
    //using any object property
    await page.click('[id="Username"]')
    await page.locator('[id="Username"]').fill('purchasemananger@gmail.com')
    await page.click('[id="Password"]')
    await page.locator('[id="Password"]').fill('Think@123')
    //using CSS Selectors
    // await page.click("//button[normalize-space(.)='Login']");
    await page.waitForSelector
    await page.getByRole('button', { name: 'Login' }).click(({timeout: 30000 }));
    // await page.locator('div').filter({ hasText: 'Signing you back in' }).nth(3).click();
    await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home');
    // await page.getByRole('button', { name: 'Login' }).click();
    
});

