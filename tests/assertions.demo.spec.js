import { test, expect } from '@playwright/test'

test('Assertions Demo', async ({ page }) => {
    await page.goto('https://login-shore.synergymarinetest.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dscorpio_vcms_qa%26redirect_uri%3Dhttps%253A%252F%252Foceans-gourmetcms-shore-qa.synergymarinetest.com%252Fauthentication%252Fcallback%26response_type%3Dcode%26scope%3Demail%2520profile%2520openid%2520IdentityServerApi%26state%3D202bbc45edb74868b263dca1b2dd3951%26code_challenge%3Df-beV5xBZQiGeOiFHIkfb_KLI4hVy3NPY15TR9ivKQY%26code_challenge_method%3DS256%26response_mode%3Dquery')
    await page.pause()
    //Assertions
    //Check element present or not
    await expect(page.locator('[id="Username"]')).toHaveCount(1)
    if (await page.$('[id="Username"]')) {
        await page.locator('[id="Username"]').click()
        await page.locator('[id="Username"]').fill('purchasemananger@gmail.com')
    }
    //using any object property
    await expect(page.locator('[id="Password"]')).toHaveCount(1)
    await expect(page.locator('[id="Password"]')).toBeVisible()
    await expect.soft(page.locator('[id="Password"]')).toBeHidden()
    await expect(page.locator('[id="Password"]')).toBeEnabled()
    await expect.soft(page.locator('[id="Password"]')).toBeDisabled()
    if (await page.$('[id="Password"]')) {
        await page.locator('[id="Password"]').click()
        await page.locator('[id="Password"]').fill('Think@123')
    }
    //using CSS Selectors
    // await page.click("//button[normalize-space(.)='Login']");
    await page.waitForSelector
    await page.getByRole('button', { name: 'Login' }).click(({ timeout: 30000 }));
    // await page.locator('div').filter({ hasText: 'Signing you back in' }).nth(3).click();
    await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home');

    // wait for final page element
    // await expect(page.locator('text="PR FROM VESSEL"]')).toHaveText('PR FROM VESSEL')
    await page.locator('#root > div > div:nth-child(2) > div > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > span');




    // await page.getByRole('button', { name: 'Login' }).click();

});