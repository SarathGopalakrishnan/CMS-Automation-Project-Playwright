import { test, expect, chromium, Page } from '@playwright/test';

// 🔹 Reusable helper function for clean element interactions
// Reusable helper function for clean element interactions
async function waitAndClick(page: Page, selector: string, description: string) {
  const element = page.locator(selector);
  await element.waitFor({ state: 'visible', timeout: 15000 });
  await element.click();
  console.log(`✅ SUCCESS: ${description} clicked.`);
}



test('Shore Portal Navigation Flow', async () => {
  // Launch Browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // --------------------------------------------------
  // 🔹 Login
  // --------------------------------------------------
    await page.goto('https://login-shore.synergymarinetest.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dscorpio_vcms_qa%26redirect_uri%3Dhttps%253A%252F%252Foceans-gourmetcms-shore-qa.synergymarinetest.com%252Fauthentication%252Fcallback%26response_type%3Dcode%26scope%3Demail%2520profile%2520openid%2520IdentityServerApi%26state%3D202bbc45edb74868b263dca1b2dd3951%26code_challenge%3Df-beV5xBZQiGeOiFHIkfb_KLI4hVy3NPY15TR9ivKQY%26code_challenge_method%3DS256%26response_mode%3Dquery'{
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  await page.getByRole('textbox', { name: 'Username' }).fill('purchasemanager@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Think@123');
  await page.getByRole('button', { name: 'Login' }).click();

  console.log('✅ SUCCESS: Logged in successfully.');

  // --------------------------------------------------
  // 🔹 Wait for Shore Home Page
  // --------------------------------------------------
  await page.waitForURL('**/shore-home', { timeout: 30000 });
  await page.waitForLoadState('networkidle');
  console.log('✅ SUCCESS: Shore Home page loaded.');

  // --------------------------------------------------
  // 🔹 Click Vessel Menu
  // --------------------------------------------------
  await waitAndClick(
    page,
    '#root > div > div:nth-child(2) > div > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > span',
    'Vessel Menu'
  );

  // --------------------------------------------------
  // 🔹 Click “My Vessels” Link and Toggle Active/Inactive
  // --------------------------------------------------
  await waitAndClick(page, "role=link[name='My Vessels']", 'My Vessels link');

  await page.getByRole('textbox', { name: 'Active' }).click();
  await page.getByText('Inactive').click();
  await page.getByRole('textbox', { name: 'Inactive' }).click();
  await page.getByText('Active', { exact: true }).click();
  console.log('✅ SUCCESS: Vessel Active/Inactive toggled.');

  // --------------------------------------------------
  // 🔹 Navigate to Master Screens → Vendors
  // --------------------------------------------------
  await waitAndClick(page, "//li[normalize-space()='Master Screens']", 'Master Screens');
  await waitAndClick(page, "//li[normalize-space()='Vendors']", 'Vendors Menu');

  // --------------------------------------------------
  // 🔹 Return to Shore Home
  // --------------------------------------------------
  await page.goto('https://oceans-gourmetcms-shore-qa.synergymarinetest.com/shore-home', {
    waitUntil: 'networkidle',
  });
  console.log('✅ SUCCESS: Returned to Shore Home.');

  // --------------------------------------------------
  // 🔹 Click Vendor Dashboard
  // --------------------------------------------------
  await waitAndClick(
    page,
    '#root > div > div:nth-child(2) > div > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > span',
    'Vendor Dashboard'
  );

  await expect(page).toHaveURL(/shore\/vendormaster/i);
  console.log('✅ SUCCESS: Vendor Dashboard page opened.');

  // --------------------------------------------------
  // 🔹 Click Data Center Icon
  // --------------------------------------------------
  await waitAndClick(page, "(//span[@class='nav-icons nav-icon'])[1]", 'Data Center Icon');

  // --------------------------------------------------
  // 🔹 Click Vendors Tab in Data Center
  // --------------------------------------------------
  const vendorsTab = page.locator("(//button[normalize-space()='Vendors'])[1]");
  await expect(vendorsTab).toBeVisible({ timeout: 15000 });
  await vendorsTab.click();
  console.log('✅ SUCCESS: Vendors tab clicked.');

  // --------------------------------------------------
  // 🔹 Close context and browser
  // --------------------------------------------------
  await context.close();
  await browser.close();
  console.log('✅ SUCCESS: Browser closed gracefully.');
});
