
const{test, expect} = require('@playwright/test')

test("My First Page", async ({page}) => {
    await page.goto('https://login-shore.synergymarinetest.com/Account/Login')
    await expect(page).toHaveTitle('Synergy Shore Identity Server')
    })
