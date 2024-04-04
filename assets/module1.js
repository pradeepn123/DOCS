<<<<<<< HEAD
<<<<<<< HEAD
"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module1"],{

/***/ "./js/components/FeaturedProducts.js":
/*!*******************************************!*\
  !*** ./js/components/FeaturedProducts.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard */ "./js/components/ProductCard.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "featured-collection section",
    style: {
      "--section-style-spacing-top": "36px",
      "--section-style-spacing-bottom": "36px"
    },
    "data-section-id": "{{ section.id }}",
    "data-section-type": "featured-collection",
    "data-products-per-view": "{{ section.settings.num_columns }}",
    "data-mobile-products-per-view": "{{ section.settings.num_columns_mobile }}"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "section-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header section-blocks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ff-body fs-body-50 fs-accent section-header__preheading"
  }, data.preheading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "ff-heading section-header__heading fs-heading-3-base"
  }, data.heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, data.products.map((product, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    product: product,
    key: index
  })))))))));
});
=======
=======
"use strict";
>>>>>>> 672e6c4 (asset file minor changes)
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module1"],{

/***/ "./js/components/ImageCards.js":
/*!*************************************!*\
  !*** ./js/components/ImageCards.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ResponsiveImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponsiveImage */ "./js/components/ResponsiveImage.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


<<<<<<< HEAD
>>>>>>> 86b1a33 (Created image blocks section and rendered individual image card data)
=======
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    block
  } = _ref;
  var {
    image_source: image
  } = block;
  var imageObj = _objectSpread({
    id: Date.now()
  }, image);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collection-item animation--item",
    "data-image-crop": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: block.collection,
    className: "collection-item__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collection-item__image__wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "image collection-item__image animation--lazy-load loaded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: imageObj,
    image_aspect_ratio: 1
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collection-item__meta collection-item__title ff-body fs-body-100",
    "data-text-alignment": "center"
  })));
});
>>>>>>> 672e6c4 (asset file minor changes)

/***/ })

}]);