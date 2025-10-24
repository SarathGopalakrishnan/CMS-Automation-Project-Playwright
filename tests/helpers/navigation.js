// helpers/navigation.js

/**
 * Clicks the Vessel Menu safely after ensuring it’s visible.
 *
 * @param {import('@playwright/test').Page} page - The Playwright page instance.
 */
export async function clickVesselMenu(page) {
  const vesselMenu = page.locator(
    '#root > div > div:nth-child(2) > div > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > span'
  );

  await vesselMenu.waitFor({ state: 'visible', timeout: 15000 });
  await vesselMenu.click();
  console.log('✅ SUCCESS: Vessel Menu button was clicked.');
}
