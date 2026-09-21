import { expect,Locator,Page } from "@playwright/test";
export class CheckoutStepOnePage 
{
  readonly page: Page;
  readonly headerContainer: Locator;
  readonly pageTitle: Locator;
  readonly firstName:Locator;
  readonly lastName:Locator;
  readonly postalcode:Locator;
  readonly cancelButton: Locator;
  readonly continueButton: Locator;

  constructor(page:Page)
  {
    this.page=page;
    this.headerContainer=page.locator('[data-test="header-container"]');
    this.pageTitle=page.locator('.app_logo');
    this.firstName=page.locator('[data-test="firstName"]');
    this.lastName=page.locator('[data-test="lastName"]');
    this.postalcode=page.locator('[data-test="postalCode"]');
    this.cancelButton=page.getByRole('button',{name:'Cancel'});
    this.continueButton=page.getByRole('button',{name:'Continue'});


  }

  async fillcheckoutInformation(firstName:string,lastName:string,postalcode:string): Promise<void>
   {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalcode.fill(postalcode);
   }
    async clickContinue(): Promise<void> 
    {
    await this.continueButton.click();
    }

  async clickCancel(): Promise<void> 
  {
    await this.cancelButton.click();
  }
}

  

