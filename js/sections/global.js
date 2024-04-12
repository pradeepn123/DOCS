import subscription from "./subscription";
import customStoreLocatore from './custom-store-locatore';
import megamenunav from "./megamenu-nav";
import Megamenuproduct from "./megamenu-product-nav";

window.initMegamenuNav = megamenunav;
window.initMegamenuNavProduct = Megamenuproduct;
document.addEventListener('DOMContentLoaded', () => {
    subscription()
    customStoreLocatore();
})
