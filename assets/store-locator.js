/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./js/sections/store-locator.js ***!
  \**************************************/
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var storeLocator = document.querySelectorAll('[data-location]');
  storeLocator.forEach(locator => {
    locator.addEventListener('click', e => {
      locator.closest('[data-location]').querySelector('.store-locator__location-list').classList.toggle('active');
      locator.classList.toggle('rotate_arrow');
    });
  });
});
/******/ })()
;