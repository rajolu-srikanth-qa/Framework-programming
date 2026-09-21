import{test,expect,Page} from'@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import { ProductDetailsPage} from '../pages/ProductDetailsPage';
import {Cartdetails} from'../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutInformationPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';


test('Verify product checkout flow', async ({ page }) => {

//Intiliaze all pages
const loginPage=new LoginPage(page);
const inventoryPage = new InventoryPage(page);
const productDetailsPage = new ProductDetailsPage(page);
const cartPage = new Cartdetails(page);
const checkoutInformation = new CheckoutStepOnePage(page);
const checkoutSummary  = new CheckoutOverviewPage(page);
const checkcompletePage=new CheckoutCompletePage(page);

await page.goto('https://www.saucedemo.com/');
await loginPage.login('standard_user', 'secret_sauce');

await inventoryPage.addProductToCart('Sauce Labs Backpack');

await inventoryPage.cartLink.click();

await cartPage.verifypageTitle('Swag Labs');
await cartPage.verifycartQuantityLabelIsDisplayed();
await cartPage.verifyitemDescriptionLabelIsDisplayed();
await cartPage.clickCheckout();

await checkoutInformation.fillcheckoutInformation('Srikanth','Rajolu','522503');
await checkoutInformation.clickContinue();

// Validate price summaries and finalize order
  await checkoutSummary.verifyPaymentInfoIsDisplayed();
  await checkoutSummary.verifyTotalPrice('$32.39'); // Item subtotal + tax total
  await checkoutSummary.clickfinish();

  // Verify final order success screen and return to products layout
  await checkcompletePage.verifyCheckoutIsComplete();
  await checkcompletePage.clickBackHome();
})


