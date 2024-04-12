import storeLocator from "./store-locator";
import subscription from "./subscription";
import megamenunav from "./megamenu-nav";
import Megamenuproduct from "./megamenu-product-nav";

window.initMegamenuNav = megamenunav;
window.initMegamenuNavProduct = Megamenuproduct;
document.addEventListener('DOMContentLoaded', () => {
    subscription()
    // megamenunav()
    customStoreLocatore();
})
