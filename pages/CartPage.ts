import { expect, Locator, Page } from '@playwright/test';

export class Cartdetails {
  readonly page: Page;
  readonly headerContainer: Locator;
  readonly pageTitle: Locator;
  readonly cartQuantityLabel: Locator;
  readonly itemDescriptionLabel: Locator;
  readonly continueShoppingButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page:Page){
    this.page=page;
    this.headerContainer=page.locator('[data-test="header-container"]');
    this.pageTitle=page.locator('.app_logo');
    this.cartQuantityLabel=page.locator('[data-test="cart-quantity-label"]');
    this.itemDescriptionLabel=page.locator('[data-test="cart-desc-label"]');
    this.continueShoppingButton=page.getByRole('button',{name:'Continue Shopping'});
    this.checkoutButton=page.getByRole('button',{name:'Checkout'});
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

    //Action Items

    async clickcontinueShopping(): Promise<void>{
        await this.continueShoppingButton.click();

    }

    async clickCheckout(): Promise<void>{
        await this.checkoutButton.click();
        
    }
  }



