"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module2"],{

/***/ "./js/components/sections/FeaturedProductsWithMedia.js":
/*!*************************************************************!*\
  !*** ./js/components/sections/FeaturedProductsWithMedia.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/image-with-text */ "./js/components/image-with-text.js");
/* harmony import */ var JsComponents_ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/ProductCard */ "./js/components/ProductCard.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var cssMedia = {
    "--media-width": "50%",
    "--media-height": "350px",
    "--media-height-mobile": "360px"
  };
  var blockData = data.blocks;
  var products = data.products;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection-with-media__inner featured_products_with_image",
    style: {
      cssMedia
    },
    "data-media-position": "left",
    "data-media-position-mobile": "above"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection__products"
  }, blockData.map((block, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: block,
    key: index
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection__products  product-item-holder featured-products-grid"
  }, products.map((product, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_ProductCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product: product,
    key: index
  })))));
});

/***/ })

}]);