
import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
const { chromium } = require('@playwright/test');

import { LoginPage } from '././Pages/login'

test.describe('All My Tests', () => {

   

    test.beforeEach(async ({ page }) => {
        // login.spec.js



test('Login test', async ({ page }) => {
  // ✅ Pass the "page" object provided by Playwright
  const loginPage = new LoginPage(page);

  await loginPage.goToLogin();
  await loginPage.enterUsername('myUsername');
  await loginPage.enterPassword('myPassword');
  await loginPage.clickOnLogin();

  await expect(page).toHaveURL(/dashboard/);
});


        const Login = new LoginPage(page)
        Login.Gotologin()
        Login.enterUsername('purchasemanager@gmail.com')
        Login.enterPassword('Think@123')

        // await page.goto('https://login-shore.synergymarinetest.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dscorpio_vcms_qa%26redirect_uri%3Dhttps%253A%252F%252Foceans-gourmetcms-shore-qa.synergymarinetest.com%252Fauthentication%252Fcallback%26response_type%3Dcode%26scope%3Demail%2520profile%2520openid%2520IdentityServerApi%26state%3D202bbc45edb74868b263dca1b2dd3951%26code_challenge%3Df-beV5xBZQiGeOiFHIkfb_KLI4hVy3NPY15TR9ivKQY%26code_challenge_method%3DS256%26response_mode%3Dquery');
        // await page.getByRole('textbox', { name: 'Username' }).click();
        // await page.getByRole('textbox', { name: 'Username' }).fill('purchasemanager@gmail.com');
        // await page.getByRole('textbox', { name: 'Password' }).fill('Think@123');
        // await page.getByRole('button', { name: 'Login' }).click();
    });



    test('homepage', async ({ page }) => {
        // CSS Selector translation:
        const vesselMenu = page.locator('#root > div > div:nth-child(2) > div > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > span');
        // await vesselMenu.waitFor({ state: 'visible', timeout: 15000 });

        //   await page.locator('.cursor-pointer.main-nav-item.w-full.justify-start.flex.flex-row.active > .w-full').click();
        // Find the element that contains the exact text "My Vessels"
        try {
            await vesselMenu.waitFor({ state: 'visible', timeout: 15000 });
            await vesselMenu.click();
            console.log("SUCCESS: Vessel Menu button was clicked.");
        } catch (err) {
            console.error("Vessel Menu not visisble:", err);

        }

        await page.getByRole('link', { name: 'My Vessels' }).click();
        await page.getByRole('textbox', { name: 'Active' }).click(({ timeout: 10000 }));
        await page.getByText('Inactive').click();
        await page.getByRole('textbox', { name: 'Inactive' }).click(({ timeout: 10000 }));
        await page.getByText('Active', { exact: true }).click(({ timeout: 10000 }));
        await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home', {
            waitUntil: 'networkidle', // waits for network requests to finish
            timeout: 60000,
        });
        console.log("SUCCESS: Shore Home page loaded.");
    })

    test('vendordashboard', async ({ page }) => {

        // Wait for final redirect to finish
        
        await page.waitForLoadState('networkidle', { timeout: 60000 });
        await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/dashboard')
        await page.locator('span').nth(1).click();
        // await expect(page).toHaveTitle('Catering Management System')
        // await expect(page).toHaveScreenshot()
        // console.log("✅ SUCCESS: Span link (index 1) was clicked.");
        await page.locator("//button[normalize-space()='Vendors']//*[name()='svg']").click();
        // await page.getByRole('button', { name: 'Vendors' }).click();
        //*[@id="root"]/div/div[3]/div/div[2]/div[2]/div/div[2]/div[1]/button
        // await expect(page).toHaveScreenshot()
        await page.locator("//div[@class='dashboard-grid-item vendor-top5-supply-chart-container vendor-top-pending-value-chart-container chart-element']//button[@aria-label='Open chart menu']").click();
        await page.getByText('Apply Filter').click();
        // await expect(page).toHaveScreenshot()
        await page.getByRole('textbox', { name: 'Select start date' }).click();
        await page.getByRole('combobox').first().selectOption('8');
        // await expect(page).toHaveScreenshot()
        await page.getByRole('button', { name: 'Choose Monday, September 1st,' }).click();
        await page.getByRole('button', { name: 'Apply' }).click();
        // await expect(page).toHaveScreenshot()
        const element = page.locator("(//*[name()='g'][@class='recharts-layer recharts-pie-sector'])[1]");
        const box = await element.boundingBox();
        if (box) {
            await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
            console.log("Clicked the pie chart segment successfully.");
        } else {
            console.error("Element not visible for bounding box calculation.");
        }

        // using try catch if button is not visible
        const exceldownload = page.locator("//img[@alt='Download as excel']");

        try {
            await exceldownload.waitFor({ state: 'visible', timeout: 10000 });
            await exceldownload.click();
            console.log("✅ Excel Download button clicked successfully.");
        } catch (error) {
            console.error("❌ Excel Download button not found or not visible within timeout.");
        }

        // using if else excel downlload
        // const exceldownload = page.locator("//img[@alt='Download as excel']");

        // if (await exceldownload.isVisible()) {
        //     await exceldownload.click();
        //     console.log("✅ Excel Download button clicked successfully.");
        // } else {
        //     console.error("❌ Excel Download button is not visible or not found.");
        // }



    });

})

// test.afterAll(async ({ page }) => {
//     await page.close()
// });