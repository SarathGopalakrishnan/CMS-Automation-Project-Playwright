import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');


let context;
let page;
test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    await context.tracing.start( 
        {
            snapshots: true,
            screenshots: true
        });
    page = await context.newPage();    
})

test.afterAll(async ()  => {
    await context.tracing.stop({ path: 'test2_trace.zip'})
})

test('Demo Test', async ({ }) => {
    // await context.tracing.start(
    //     {
    //         snapshots: true,
    //         screenshots: true
    // //     }
    // );
    await page.goto('https://login-shore.synergymarinetest.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dscorpio_vcms_qa%26redirect_uri%3Dhttps%253A%252F%252Foceans-gourmetcms-shore-qa.synergymarinetest.com%252Fauthentication%252Fcallback%26response_type%3Dcode%26scope%3Demail%2520profile%2520openid%2520IdentityServerApi%26state%3D202bbc45edb74868b263dca1b2dd3951%26code_challenge%3Df-beV5xBZQiGeOiFHIkfb_KLI4hVy3NPY15TR9ivKQY%26code_challenge_method%3DS256%26response_mode%3Dquery');
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
    // await context.tracing.stop( {path: 'test1_trace.zip' });
    await page.locator('div').filter({ hasText: 'Signing you back in' }).nth(3).click();
    await page.locator('span').first().click();
    await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home');
});