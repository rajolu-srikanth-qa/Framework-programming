import { expect, Locator, Page } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly headerContainer: Locator;
  readonly pageTitle: Locator;
  readonly cartQuantityLabel: Locator;
  readonly itemDescriptionLabel: Locator;
  readonly inventoryItems:Locator;
   readonly inventoryItemDescription:Locator;
   readonly inventoryItemPrice:Locator;
   readonly paymentInfoLabel: Locator;
  readonly shippingInfoLabel: Locator;
  readonly subtotalLabel: Locator;
  readonly taxLabel: Locator;
  readonly totalLabel: Locator;
  readonly cancelButton: Locator;
  readonly finishButton: Locator;

  constructor(page:Page){
    this.page=page;
    this.headerContainer=page.locator('[data-test="header-container"]');
    this.pageTitle=page.locator('.app_logo');
    this.cartQuantityLabel=page.locator('[data-test="cart-quantity-label"]');
    this.itemDescriptionLabel=page.locator('[data-test="cart-desc-label"]');
    this.inventoryItems=page.locator('[data-test="inventory-item"]');
    this.inventoryItemDescription=page.locator('[data-test="inventory-item-desc"]');
    this.inventoryItemPrice=page.locator('[data-test="inventory-item-price"]');
    this.paymentInfoLabel = page.locator('[data-test="payment-info-value"]');
    this.shippingInfoLabel = page.locator('[data-test="shipping-info-value"]');
    this.subtotalLabel = page.locator('[data-test="subtotal-label"]');
    this.taxLabel = page.locator('[data-test="tax-label"]');
    this.totalLabel = page.locator('[data-test="total-label"]');
    this.cancelButton=page.getByRole('button',{name:'Cancel'});
    this.finishButton=page.getByRole('button',{name:'Finish'});
  }
    //Verfication methods:
    async verifypageTitle(expectedTitle: string): Promise<void>
    {
    await expect(this.pageTitle).toHaveText(expectedTitle);
    }

    async verifycartQuantityLabelIsDisplayed():Promise<void>
    {
    await expect(this.cartQuantityLabel).toBeVisible;
    }

    async verifyitemDescriptionLabelIsDisplayed():Promise<void>
    {
    await expect(this.itemDescriptionLabel).toBeVisible;
    }

    async verifyTotalPrice(expectedTotal: string): Promise<void> {
    await expect(this.totalLabel).toContainText(expectedTotal);
  }

  async verifyPaymentInfoIsDisplayed(): Promise<void> {
    await expect(this.paymentInfoLabel).toBeVisible();
  }

    //Action Items

    async clickcancel(): Promise<void>{
        await this.cancelButton.click();

    }

    async clickfinish(): Promise<void>{
        await this.finishButton.click();
        
    }
  }


