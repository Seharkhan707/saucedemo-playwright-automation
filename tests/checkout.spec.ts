import { test, expect } from '@playwright/test';

test.describe('SauceDemo Checkout Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Login and add a product to cart before each checkout test
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('#checkout');
  });

  test('should complete checkout with valid information', async ({ page }) => {
    await page.fill('#first-name', 'Sehar');
    await page.fill('#last-name', 'Abrar');
    await page.fill('#postal-code', '54000');
    await page.click('#continue');

    await expect(page).toHaveURL(/.*checkout-step-two.html/);
    await page.click('#finish');

    await expect(page).toHaveURL(/.*checkout-complete.html/);
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

  test('should show error when first name is missing', async ({ page }) => {
    await page.fill('#last-name', 'Abrar');
    await page.fill('#postal-code', '54000');
    await page.click('#continue');

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('First Name is required');
  });

  test('should show error when postal code is missing', async ({ page }) => {
    await page.fill('#first-name', 'Sehar');
    await page.fill('#last-name', 'Abrar');
    await page.click('#continue');

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Postal Code is required');
  });

  test('should display correct order summary before finishing', async ({ page }) => {
    await page.fill('#first-name', 'Sehar');
    await page.fill('#last-name', 'Abrar');
    await page.fill('#postal-code', '54000');
    await page.click('#continue');

    await expect(page.locator('.summary_info')).toBeVisible();
    await expect(page.locator('.summary_subtotal_label')).toContainText('Item total');
    await expect(page.locator('.summary_total_label')).toContainText('Total');
  });

  test('should allow cancelling checkout and return to cart', async ({ page }) => {
    await page.click('#cancel');
    await expect(page).toHaveURL(/.*cart.html/);
  });

});
