import{test as baseTest} from'@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { Cartdetails } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutInformationPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

// 1. Grouping your page objects into a clean layout block

type MyPageFixtures ={
    loginpage : LoginPage;
    inventoryPage: InventoryPage;
    productdetailsPage: ProductDetailsPage;
    cartdetailsPage: Cartdetails;
    checkoutsteponePage: CheckoutStepOnePage;
    checkoutoverviewPage: CheckoutOverviewPage;
    checkoutcompletePage: CheckoutCompletePage;

};

// 2. Automating the 'new Page(page)' setups behind the scenes

export const test=baseTest.extend<MyPageFixtures>({

loginpage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },


 inventoryPage: async({page},use)=>{
    await use (new InventoryPage(page));
 },

productdetailsPage:async({page},use)=>{
    await use(new ProductDetailsPage(page));
},

cartdetailsPage:async({page},use)=>{
    await use (new Cartdetails(page));
},

checkoutsteponePage:async({page},use)=>{
    await use (new CheckoutStepOnePage(page));
},

checkoutoverviewPage:async({page},use)=>{
    await use (new CheckoutOverviewPage(page));
},

checkoutcompletePage:async({page},use)=>{
    await use (new CheckoutCompletePage(page));
},
});

export{expect} from '@playwright/test';