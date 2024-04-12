import subscription from "./subscription";
import customStoreLocatore from './custom-store-locatore';
import megamenunav from "./megamenu-nav";
import Megamenuproduct from "./megamenu-product-nav";
import initMobilemenuNavProduct from "./mobile-menu-product-nav";
import mobileMenuNav from "./mobile-nav-menu-list";
import homepage from "./homepage";
import CustomCarousel from "JsComponents/custom-carousel";



window.initMegamenuNav = megamenunav;
window.initMegamenuNavProduct = Megamenuproduct;
window.initMobilemenuNavProduct = initMobilemenuNavProduct;
window.initmobileMenuNav = mobileMenuNav;
document.addEventListener('DOMContentLoaded', () => {
    subscription()
    customStoreLocatore();
    homepage()
    customElements.define('custom-carousel', CustomCarousel);
});
