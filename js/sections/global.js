import subscription from "./subscription";
<<<<<<< HEAD
import customStoreLocatore from './custom-store-locatore';
import megamenunav from "./megamenu-nav";
import Megamenuproduct from "./megamenu-product-nav";
import initMobilemenuNavProduct from "./mobile-menu-product-nav";
import mobileMenuNav from "./mobile-nav-menu-list";
=======
import homepage from "./homepage";
>>>>>>> 14f4bdf (Created dynamic structure for component and prop rendering)


window.initMegamenuNav = megamenunav;
window.initMegamenuNavProduct = Megamenuproduct;
window.initMobilemenuNavProduct = initMobilemenuNavProduct;
window.initmobileMenuNav = mobileMenuNav;
document.addEventListener('DOMContentLoaded', () => {
    subscription()
<<<<<<< HEAD
    customStoreLocatore();
=======
    homepage()
>>>>>>> 14f4bdf (Created dynamic structure for component and prop rendering)
})
