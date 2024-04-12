import subscription from "./subscription";
import customStoreLocatore from './custom-store-locatore';
import megamenunav from "./megamenu-nav";
import Megamenuproduct from "./megamenu-product-nav";
import mobileMenuProductNav from "./mobile-menu-product-nav";
import mobileMenuProductList from "./mobile-nav-menu-list";


window.initMegamenuNav = megamenunav;
window.initMegamenuNavProduct = Megamenuproduct;
window.initMobilemenuNavProduct = mobileMenuProductNav;
document.addEventListener('DOMContentLoaded', () => {
    subscription()
    customStoreLocatore();
    mobileMenuProductNav()
    mobileMenuProductList()
})
