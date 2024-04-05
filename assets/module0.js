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
    slides,
    settings
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
  }, slides.map((slide, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("swiper-slide", {
      key: index
    }, slide);
  }));
});

/***/ }),

/***/ "./js/components/image-with-text.js":
/*!******************************************!*\
  !*** ./js/components/image-with-text.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveImage */ "./js/components/ResponsiveImage.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data,
    wrapperclass
  } = _ref;
  var {
    heading,
    desktopImage,
    mobileImage,
    subheading,
    url,
    button
  } = data || {};
  var {
    srcDesktop
  } = desktopImage || {};
  var {
    srcMobile
  } = mobileImage || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scroll-slider__slider",
    "data-slide-count": "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slideshow-slide",
    "data-index": "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slideshow-slide__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "background-image-container image-hero__image-container",
    "data-has-mobile-image": "true",
    "data-absolutely-position-image": "false"
  }, srcMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image background-image background-image--mobile",
    style: {
      "--focal-alignment": "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: srcMobile,
    image_aspect_ratio: 0.7
  })), srcDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image background-image ",
    style: {
      "--focal-alignment": "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: srcDesktop,
    image_aspect_ratio: 2.6
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slideshow-slide__overlay image-overlay animation--image-overlay",
    "data-image-overlay-tint-style": "solid",
    style: {
      "--overlay-opacity": "20%",
      "--color-overlay-tint": "#000;"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slideshow-slide__text-container-wrapper ".concat(wrapperclass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slideshow-slide__text-container text-container image-overlay-content animation--item",
    style: {
      "--color-text": "#FFFFFF",
      "--color-background": "#000",
      "--color-text-alpha-90": "rgba(255, 255, 255, 0.9)",
      "--color-text-alpha-80": "rgba(255, 255, 255, 0.8)",
      "--color-text-alpha-70": "rgba(255, 255, 255, 0.7)",
      "--color-text-alpha-60": "rgba(255, 255, 255, 0.6)",
      "--color-text-alpha-50": "rgba(255, 255, 255, 0.5)",
      "--color-text-alpha-40": "rgba(255, 255, 255, 0.4)",
      "--color-text-alpha-30": "rgba(255, 255, 255, 0.3)",
      "--color-text-alpha-25": "rgba(255, 255, 255, 0.25)",
      "--color-text-alpha-20": "rgba(255, 255, 255, 0.2)",
      "--color-text-alpha-10": "rgba(255, 255, 255, 0.1)",
      "--color-text-alpha-05": "rgba(255, 255, 255, 0.05)",
      "--delay-offset-multiplier": "3"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slideshow-slide__text-container-inner text-container-inner section-blocks animation--container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "section-blocks__accent fs-accent ",
    "data-divider-enabled": "false",
    style: {
      "--delay-offset-multiplier": "4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "accent__text"
  }, subheading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "slideshow-slide__text-container-heading ff-heading fs-heading-display-1 section-blocks__heading",
    style: {
      "--delay-offset-multiplier": "5"
    }
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "button-wrapper slideshow-slide__text-container-image-button section-blocks__button",
    "data-alignment": "none",
    style: {
      "--delay-offset-multiplier": "6"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "btn btn--primary",
    href: url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, button)))))))));
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
/* harmony import */ var JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/image-with-text */ "./js/components/image-with-text.js");
/* harmony import */ var JsComponents_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/Carousel */ "./js/components/Carousel.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var slides = Object.values(data).map((eachData, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: eachData,
    key: eachData.name + index,
    wrapperclass: "slideshow-slide__text_wrapper"
  }));
  var settings = {
    "slidesPerView": 1
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slides: slides,
    settings: settings
  }))));
});

/***/ })

}]);