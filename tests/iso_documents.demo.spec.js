import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');


test.describe('Verify ISO Documents', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://login-shore.synergymarinetest.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dscorpio_vcms_qa%26redirect_uri%3Dhttps%253A%252F%252Foceans-gourmetcms-shore-qa.synergymarinetest.com%252Fauthentication%252Fcallback%26response_type%3Dcode%26scope%3Demail%2520profile%2520openid%2520IdentityServerApi%26state%3D202bbc45edb74868b263dca1b2dd3951%26code_challenge%3Df-beV5xBZQiGeOiFHIkfb_KLI4hVy3NPY15TR9ivKQY%26code_challenge_method%3DS256%26response_mode%3Dquery');
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('purchasemanager@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('Think@123');
        await page.getByRole('button', { name: 'Login' }).click();
    });

    test('ISO Documents', async () => {
        const browser = await chromium.launch({
            headless: false
        });
        await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home',{
            waitUntil:'networkidle',
            timeout: 60000,
        });
          console.log('✅ Shore home page loaded');
            

        await page.locator('span').filter({ hasText: 'Icon' }).nth(5).click();
        const pageURl = page.url();

        if(pageURl)
        {
            await expect(page).toHaveURL('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/iso-certificates')
            console.log('Expected Page Url is:', pageURl)
        }else{
            console.error('Actual Page Url is:', pageURl)
        }
        await page.getByText('View Documents').first().click();
        await page.getByText('View').nth(1).click();
        await page.getByRole('button', { name: 'Close' }).click();

        // ---------------------
        await context.close();
        await browser.close();
    });

     test('ISO Documents', async ({ page }) => {
            // Step 1: Navigate to Shore Home
            await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home', {
                waitUntil: 'networkidle',
                timeout: 60000,
            });

          

            
            // Step 2: Define locator (fixed XPath)
            const isoDocuments = page.locator('span').filter({ hasText: 'Icon' }).nth(5).click;

            // Step 3: Check if ISO Documents button is visible
            const isVisible = await isoDocuments.isVisible();
            if (isVisible) {
                console.log('✅ ISO Documents button is visible, proceeding to click...');

                // Step 4: Click and wait for navigation
                await isoDocuments.click();
                console.log('✅ ISO Documents button clicked');

                // Step 5: Wait for the target page
                await page.waitForLoadState('networkidle', { timeout: 15000 });

                const currentUrl = page.url();
                if (currentUrl.includes('/iso-certificates')) {
                    console.log('✅ Successfully navigated to ISO Certificates page');
                    await expect(page).toHaveURL('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/iso-certificates');
                } else {
                    console.error('❌ Navigation failed. Current URL:', currentUrl);
                }

            } else {
                console.error('❌ ISO Documents button not found or not visible');
            }

            // Optional Step 6: Verify you are not redirected to login page
            const loginPageVisible = await page.locator('text=Login').isVisible();
            if (loginPageVisible) {
                console.error('⚠️ Redirected to Login page. Session might have expired.');
            }
        });




})