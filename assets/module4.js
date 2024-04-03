"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module4"],{

/***/ "./js/components/subscription/product-card-common.js":
/*!***********************************************************!*\
  !*** ./js/components/subscription/product-card-common.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
  console.log('Data', shopifyData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header section-blocks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ff-body fs-body-50 fs-accent section-header__preheading"
  }, shopifyData.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "ff-heading section-header__heading fs-heading-3-base"
  }, shopifyData.heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection__products featured-collection-slider-grid standard-grid-spacing product-item-holder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("scroll-slider-component", {
    class: "scroll-slider scroll-slider--full-width-below-1024 scroll-slider--peek-and-full-width-below-1024 scroll-all-sizes",
    style: {
      "--columns": "2",
      "--columns-above-720": "4",
      "--columns-above-1024": "5",
      "--peek": "24px",
      "--peek-above-1024": "0px",
      "--gap": "12px",
      "--gap-above-1024": "16px",
      "--gap-above-1200": "24px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scroll-slider__slider"
  }, shopifyData.products.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__media-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "product-item__image-link",
    href: product.link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image product-item__image aspect-ratio--square"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "image__img",
    src: product.image.src,
    alt: product.title
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__text ta-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__text_group_primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ff-body fs-body-60 product-item__product-vendor"
  }, product.vendor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "product-item__product-title fs-product-title ff-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: product.link
  }, product.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-product-item-element-visible-only-for-mode": "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__price-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "product-item__price ff-product-price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "product-item__price-main"
  }, product.variants[0].compare_at_price > product.variants[0].price ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("s", {
    className: "t-subdued"
  }, product.variants[0].compare_at_price) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: product.variants[0].compare_at_price > product.variants[0].price ? 'sale' : ''
  }, "$", product.variants[0].price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "displayed-discount-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "displayed-discount badge-shape fs-body-60"
  }, "Save ", product.discountPercentage, "%"))))))))))))))));
});

/***/ })

}]);