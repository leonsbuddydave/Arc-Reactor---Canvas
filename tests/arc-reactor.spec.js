// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Arc Reactor Canvas', () => {
  test('should display and capture the Arc Reactor animation', async ({ page }) => {
    // Navigate to the index page
    await page.goto('/');

    // Wait for the canvas to be visible
    const canvas = page.locator('#screen');
    await expect(canvas).toBeVisible();

    // Give the page time to load and render
    await page.waitForTimeout(3000);

    // Take a screenshot of the page
    await page.screenshot({ path: 'artifacts/screenshot-initial.png', fullPage: true });

    // Wait for animation to progress and capture another frame
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'artifacts/screenshot-animation.png', fullPage: true });

    // Wait a bit more to capture good video content
    await page.waitForTimeout(3000);

    // Final screenshot
    await page.screenshot({ path: 'artifacts/screenshot-final.png', fullPage: true });

    // Verify the canvas exists
    await expect(canvas).toBeVisible();
  });
});
