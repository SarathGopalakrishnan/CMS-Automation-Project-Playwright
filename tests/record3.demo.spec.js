import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('record2 demo', async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://login-shore.synergymarinetest.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dscorpio_vcms_qa%26redirect_uri%3Dhttps%253A%252F%252Foceans-gourmetcms-shore-qa.synergymarinetest.com%252Fauthentication%252Fcallback%26response_type%3Dcode%26scope%3Demail%2520profile%2520openid%2520IdentityServerApi%26state%3D202bbc45edb74868b263dca1b2dd3951%26code_challenge%3Df-beV5xBZQiGeOiFHIkfb_KLI4hVy3NPY15TR9ivKQY%26code_challenge_method%3DS256%26response_mode%3Dquery');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('purchasemanager@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Password' }).fill('T');
    await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Password' }).fill('Think@123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home');

    // Fix 2: Corrected quotes, keeping the nth(2) index
    // CSS Selector translation:
    const vesselMenu = page.locator('#root > div > div:nth-child(2) > div > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > span');
    await vesselMenu.waitFor({ state: 'visible', timeout: 15000 });

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

    // await page.locator('span').first().click();
    // await page.getByRole('link', { name: 'My Vessels' }).click();
    // await page.getByRole('textbox', { name: 'Active' }).click();
    // await page.getByText('Inactive').click();
    // await page.getByRole('textbox', { name: 'Inactive' }).click();
    // await page.getByText('Active', { exact: true }).click();
    // await page.locator('span').first().click();
    // await page.locator('span').nth(2).click();
    // await page.getByText('Master Screens').click();
    // await page.getByRole('link', { name: 'Vendors' }).click();
    // await page.locator('span').nth(1).click();
    // await page.getByRole('button', { name: 'Vendors' }).click();
    // await page.getByRole('button', { name: 'Open chart menu' }).nth(1).click();
    // await page.getByText('Apply Filter').click();
    // await page.getByRole('textbox', { name: 'Select start date' }).click();
    // await page.getByRole('combobox').first().selectOption('8');
    // await page.getByRole('button', { name: 'Choose Monday, September 1st,' }).click();
    // await page.getByRole('button', { name: 'Apply' }).click();
    // await page.locator('.recharts-sector').first().click();
    // await page.getByRole('button', { name: 'Back' }).click();


    // Step 1: Go to Shore Home
    await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home', {
        waitUntil: 'networkidle', // waits for network requests to finish
        timeout: 60000,
    });
    console.log("SUCCESS: Shore Home page loaded.");

    // Step 2: Wait for the Vendors Dashboard button to be visible


    // // Fix 2: Corrected quotes, keeping the nth(2) index

    // const vendorvesselMenu = page.locator('#root > div > div:nth-child(2) > div > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > span');
    // await vendorvesselMenu.waitFor({ state: 'visible', timeout: 15000 });

    // //   await page.locator('.cursor-pointer.main-nav-item.w-full.justify-start.flex.flex-row.active > .w-full').click();
    // // Find the element that contains the exact text "My Vessels"
    // try {
    //     await vendorvesselMenu.waitFor({ state: 'visible', timeout: 15000 });
    //     await vendorvesselMenu.click();
    //     console.log("SUCCESS: Vessel Menu button was clicked.");
    // } catch (err) {
    //     console.error("Vessel Menu not visisble:", err);

    // }

    // const masterScreensMenu = page.locator("xpath=//li[normalize-space()='Master Screens']", { exact: true });

    // try {
    //     await masterScreensMenu.waitFor({ state: 'visible', timeout: 15000 });

    //     console.log("SUCCESS: Master Screen Link was Clicked.");

    // } catch (err) {
    //     console.error("Master Screen Link is not Visible:", err);
    // }
    // // Define the locator (no click yet)
    // const vendorsMenu = page.locator("//li[normalize-space()='Vendors']", { exact: true }).click();

    // // Wait until it becomes visible
    // await expect(vendorsMenu).toBeVisible({ timeout: 15000 });

    // // Click the element once visible
    // // await vendorsMenu.click();

    // console.log("SUCCESS: Vendor Screen Link was Clicked.");


    // await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home');
    // console.log("Returned to Prevuious Page")

    // const vendorDashboard = page.locator('#root > div > div:nth-child(2) > div > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > span', { exact: true });

    // try {
    //     await vendorDashboard.waitFor({ state: 'visible', timeout: 15000 });
    //     console.log("SUCCESS: Vendor Dashboard is visible on Shore Home.");

    //     // Step 3: Click on Vendor Dashboard
    //     await vendorDashboard.click();
    //     console.log("SUCCESS: Vendor Dashboard was clicked.");

    //     // Step 4: (Optional) Wait until Vendor page or data grid loads
    //     await page.waitForLoadState('networkidle');
    //     await expect(page).toHaveURL('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore/vendormaster'); // adjust if vendor URL contains 'vendors'
    //     console.log("SUCCESS: Navigated to Vendor Dashboard page.");

    // } catch (err) {
    //     console.error("ERROR: Vendor Dashboard was not visible or clickable:", err);
    // }
    // await page.pause();
    await page.locator('span').nth(1).click();
    await expect(page).toHaveURL('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/dashboard')
    await expect(page).toHaveTitle('Catering Management System')
    await expect(page).toHaveScreenshot()
    console.log("✅ SUCCESS: Span link (index 1) was clicked.");

    await page.getByRole('button', { name: 'Vendors' }).click();
    await expect(page).toHaveScreenshot()
    await page.getByRole('button', { name: 'Open chart menu' }).nth(1).click();
    await page.getByText('Apply Filter').click();
    await expect(page).toHaveScreenshot()
    await page.getByRole('textbox', { name: 'Select start date' }).click();
    await page.getByRole('combobox').first().selectOption('8');
    await expect(page).toHaveScreenshot()
    await page.getByRole('button', { name: 'Choose Monday, September 1st,' }).click();
    await page.getByRole('button', { name: 'Apply' }).click();
    await expect(page).toHaveScreenshot()
    await page.locator('.recharts-sector').first().click();
    await page.getByRole('button', { name: 'Back' }).click();
    await expect(page).toHaveScreenshot()

    // Check if element is visible before clicking
    // if (await spanLink.isVisible()) {
    //     await spanLink.click();
    //     console.log("✅ SUCCESS: Span link (index 1) was clicked.");
    // } else {
    //     console.log("❌ ERROR: Span link (index 1) is not visible or not found.");
    // }

    // const vendordashboard = page.locator("xpath=(//button[normalize-space()='Vendors'])[1]", { exact: true });
    // try {
    //     await vendordashboard.waitFor({ state: 'visible', timeout: 15000 });
    //     await expect(vendordashboard).toHaveClass('tab-button ');
    //     await vendordashboard.click();
    //     console.log("SUCCESS: Vendors Link was Clicked");
    // } catch (err) {
    //     console.log("Vendors link is not clicked:", err);
    // }




    // ---------------------
    await context.close();
    await browser.close();
});