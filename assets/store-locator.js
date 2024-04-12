/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./js/sections/store-locator.js ***!
  \**************************************/
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (() => {
  document.querySelectorAll('[data-dropdown-wrapper]').forEach(dropdown => {
    var dropdownSelect = dropdown === null || dropdown === void 0 ? void 0 : dropdown.querySelector('[data-dropdown-select]');
    var caret = dropdown === null || dropdown === void 0 ? void 0 : dropdown.querySelector('[data-dropdown-caret]');
    var menu = dropdown === null || dropdown === void 0 ? void 0 : dropdown.querySelector('[data-dropdown-menu]');
    var options = menu === null || menu === void 0 ? void 0 : menu.querySelectorAll('[data-dropdown-selector]');
    var selected = dropdownSelect === null || dropdownSelect === void 0 ? void 0 : dropdownSelect.querySelector('[data-dropdown-selected]');
    var toggleDropdown = () => {
      dropdownSelect === null || dropdownSelect === void 0 || dropdownSelect.classList.toggle('select-clicked');
      caret === null || caret === void 0 || caret.classList.toggle('caret-rotate');
      menu === null || menu === void 0 || menu.classList.toggle('menu-open');
    };
    dropdownSelect === null || dropdownSelect === void 0 || dropdownSelect.addEventListener('click', toggleDropdown);
    var handleDropdownContainer = event => {
      if (!dropdown.contains(event.target)) [dropdownSelect, caret, menu].forEach(el => el === null || el === void 0 ? void 0 : el.classList.remove('select-clicked', 'caret-rotate', 'menu-open'));
    };
    ['click', 'scroll'].forEach(eventType => document.addEventListener(eventType, handleDropdownContainer));
  });
});
/******/ })()
;