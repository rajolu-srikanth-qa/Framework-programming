import { expect, Locator, Page } from '@playwright/test';

export class ProductDetailsPage {
  readonly page: Page;

  readonly productName: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly addToCartButton: Locator;
  readonly removeButton: Locator;
  readonly backToProductsButton: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productName = page.locator(
      '[data-test="inventory-item-name"]'
    );

    this.productDescription = page.locator(
      '[data-test="inventory-item-desc"]'
    );

    this.productPrice = page.locator(
      '[data-test="inventory-item-price"]'
    );

    this.addToCartButton = page.getByRole('button', {
      name: 'Add to cart'
    });

    this.removeButton = page.getByRole('button', {
      name: 'Remove'
    });

    this.backToProductsButton = page.locator(
      '[data-test="back-to-products"]'
    );

    this.cartLink = page.locator(
      '[data-test="shopping-cart-link"]'
    );
  }

  async verifyProductName(
    expectedProductName: string
  ): Promise<void> {
    await expect(this.productName).toHaveText(
      expectedProductName
    );
  }

  async verifyProductPrice(
    expectedPrice: string
  ): Promise<void> {
    await expect(this.productPrice).toHaveText(
      expectedPrice
    );
  }

  async verifyProductDescriptionIsDisplayed(): Promise<void> {
    await expect(this.productDescription).toBeVisible();
  }

  async addProductToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async removeProductFromCart(): Promise<void> {
    await this.removeButton.click();
  }

  async returnToProducts(): Promise<void> {
    await this.backToProductsButton.click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}