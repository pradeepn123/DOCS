"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module0"],{

/***/ "./js/components/Carousel.js":
/*!***********************************!*\
  !*** ./js/components/Carousel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/element/bundle */ "./node_modules/swiper/swiper-element-bundle.mjs");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    settings,
    children
  } = _ref;
  (0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_2__.register)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var swiperEl = document.querySelector("swiper-container");
    var params = {
      slidesPerView: 1
    };
    if (settings) {
      params = _objectSpread(_objectSpread({}, params), settings);
    }
    Object.assign(swiperEl, params);
    swiperEl.initialize();
    swiperEl.addEventListener('swiperafterinit', () => {
      console.log("swiper init");
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("swiper-container", {
    init: "false"
  }, children.map((slide, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("swiper-slide", {
      key: index
    }, slide);
  }));
});

/***/ }),

/***/ "./js/components/sections/Banner.js":
/*!******************************************!*\
  !*** ./js/components/sections/Banner.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/image-with-text */ "./js/components/image-with-text.js");
/* harmony import */ var JsComponents_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/Carousel */ "./js/components/Carousel.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var settings = {
    "slidesPerView": 1
  };

  // console.log("slides banner.js",slides) 
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: settings
  }, Object.values(data).map((eachData, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: eachData,
    key: eachData.name + index,
    wrapperclass: "slideshow-slide__text_wrapper"
  }))))));
});

/***/ })

}]);