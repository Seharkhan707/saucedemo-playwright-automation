import { test, expect } from '@playwright/test';

test.describe('SauceDemo Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Login before each cart test
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test('should add a single product to the cart', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
  });

  test('should add multiple products to the cart', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');

    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('3');
  });

  test('should remove a product from the cart', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="remove-sauce-labs-backpack"]');

    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveCount(0);
  });

  test('should display correct product details in cart page', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');

    await expect(page).toHaveURL(/.*cart.html/);
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  });

  test('should navigate back to shopping from cart page', async ({ page }) => {
    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL(/.*cart.html/);

    await page.click('#continue-shopping');
    await expect(page).toHaveURL(/.*inventory.html/);
  });

});