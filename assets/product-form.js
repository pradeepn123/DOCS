/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./js/sections/product-form.js ***!
  \*************************************/
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var atcTrigger = document.querySelector('[data-atc-trigger');
  if (atcTrigger) {
    atcTrigger.addEventListener('change', handleAtcTrigger);
  }
});
function handleAtcTrigger() {
  var addTocCart = document.querySelector('[data-atc]');
  if (!addTocCart) return;
  console.log("this", this.checked);
  if (this.checked == true) {
    if (addTocCart.disabled) {
      addTocCart.disabled = false;
    }
  }
}
/******/ })()
;