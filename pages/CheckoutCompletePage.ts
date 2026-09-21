import { expect, Locator, Page } from "@playwright/test";

export class CheckoutCompletePage {
  readonly page: Page;
  readonly headerContainer: Locator;
  readonly completeHeader: Locator;
  readonly completeText: Locator;
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerContainer = page.locator('[data-test="header-container"]');
    
    // Success Messages
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.completeText = page.locator('[data-test="complete-text"]');
    
    // Back Home Navigation Button
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }

  // Verification Methods
  async verifyCheckoutIsComplete(): Promise<void> {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
    await expect(this.completeText).toBeVisible();
  }

  // Action Methods
  async clickBackHome(): Promise<void> {
    await this.backHomeButton.click();
  }
}