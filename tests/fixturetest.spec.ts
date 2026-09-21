// 1. Import 'test' from your fixture file instead of standard Playwright
import { test } from '../fixtures/sauceDemoFixtures';

// 2. Pass your custom fixture names directly into the arguments block
test('Verify full checkout flow using custom fixtures', async ({ 
  loginpage, 
  inventoryPage, 
  cartdetailsPage, 
  checkoutsteponePage, 
  checkoutoverviewPage, 
  checkoutcompletePage 
}) => {

  // Step 1: Log in
  await loginpage.page.goto('https://www.saucedemo.com/');
  await loginpage.login('standard_user', 'secret_sauce');

  // Step 2: Inventory Page actions
  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.cartLink.click();

  // Step 3: Cart page validation and checkout action
  await cartdetailsPage.verifypageTitle('Swag Labs');
  await cartdetailsPage.verifycartQuantityLabelIsDisplayed();
  await cartdetailsPage.verifyitemDescriptionLabelIsDisplayed();
  await cartdetailsPage.clickCheckout();

  // Step 4: Checkout form entry
  await checkoutsteponePage.fillcheckoutInformation('Srikanth', 'Rajolu', '522503');
  await checkoutsteponePage.clickContinue();

  // Step 5: Checkout Overview verification and confirmation
  await checkoutoverviewPage.verifyPaymentInfoIsDisplayed();
  await checkoutoverviewPage.verifyTotalPrice('$32.39');
  await checkoutoverviewPage.clickfinish();

  // Step 6: Checkout Confirmation Page
  await checkoutcompletePage.verifyCheckoutIsComplete();
  await checkoutcompletePage.clickBackHome();

});