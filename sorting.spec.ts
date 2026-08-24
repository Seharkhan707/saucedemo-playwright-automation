import { test, expect } from '@playwright/test';

test.describe('SauceDemo Product Sorting Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test('should sort products by name A to Z', async ({ page }) => {
    await page.selectOption('.product_sort_container', 'az');

    const firstProduct = page.locator('.inventory_item_name').first();
    await expect(firstProduct).toHaveText('Sauce Labs Backpack');
  });

  test('should sort products by name Z to A', async ({ page }) => {
    await page.selectOption('.product_sort_container', 'za');

    const firstProduct = page.locator('.inventory_item_name').first();
    await expect(firstProduct).toHaveText('Test.allTheThings() T-Shirt (Red)');
  });

  test('should sort products by price low to high', async ({ page }) => {
    await page.selectOption('.product_sort_container', 'lohi');

    const firstPrice = page.locator('.inventory_item_price').first();
    await expect(firstPrice).toHaveText('$7.99');
  });

  test('should sort products by price high to low', async ({ page }) => {
    await page.selectOption('.product_sort_container', 'hilo');

    const firstPrice = page.locator('.inventory_item_price').first();
    await expect(firstPrice).toHaveText('$49.99');
  });

  test('should display all six products on inventory page', async ({ page }) => {
    const products = page.locator('.inventory_item');
    await expect(products).toHaveCount(6);
  });

});