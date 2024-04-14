"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module1"],{

/***/ "./js/components/ProductCarousel.js":
/*!******************************************!*\
  !*** ./js/components/ProductCarousel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ "./js/components/ProductCard.js");
/* harmony import */ var _carousel_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel-items */ "./js/components/carousel-items.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    products = [],
    parentRef
  } = _ref;
  var carouselSettings = JSON.stringify({
    "slidesPerView": 2.5,
    "spaceBetween": "12px",
    "navigation": false,
    "overflowNagivation": true,
    "speed": 600,
    "autoplay": {
      "delay": 3000
    },
    "breakpoints": {
      "768": {
        "slidesPerView": 3.2,
        "spaceBetween": "16px",
        "pagination": true
      },
      "1024": {
        "slidesPerView": 4,
        "spaceBetween": "24px",
        "pagination": true,
        "navigation": true
      }
    }
  });
  var sliderSettings = {
    paginationWrapperClass: 'swiper-pagination--dot',
    parentRef
    //pass navigationWrapperClassas for a custom navigation class
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("custom-carousel", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carousel_items__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: sliderSettings
  }, products.map((product, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product: product,
    key: index
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    "data-settings": true,
    type: "text/json"
  }, carouselSettings)));
});

/***/ }),

/***/ "./js/components/sections/FeaturedProducts.js":
/*!****************************************************!*\
  !*** ./js/components/sections/FeaturedProducts.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var JsComponents_ProductCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/ProductCarousel */ "./js/components/ProductCarousel.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var parentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  var {
    products = []
  } = data || {};
  var [parentEl, setParentEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setParentEl(parentRef.current);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection-react section featured-product",
    "data-parent": true,
    style: {
      "--section-style-spacing-top": "36px",
      "--section-style-spacing-bottom": "36px"
    },
    ref: parentRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header section-blocks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection-header__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ff-body fs-body-50 fs-accent section-header__preheading"
  }, data.preheading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "ff-heading section-header__heading fs-heading-3-base"
  }, data.heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-carousel__pagination",
    "data-pagination-wrapper": true
  })), parentEl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_ProductCarousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    products: products,
    parentRef: parentEl
  }))));
});

/***/ })

}]);