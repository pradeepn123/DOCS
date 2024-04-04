"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module7"],{

/***/ "./js/components/image-with-text.js":
/*!******************************************!*\
  !*** ./js/components/image-with-text.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var {
    heading,
    image = [],
    subheading,
    url,
    button
  } = data || {};
  var imageDesktop = image.map(image => {
    return image.desktopImage;
  });
  var imageMobile = image.map(image => {
    return image.mobileImage;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "scroll-slider__slider",
    "data-slide-count": "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "slideshow-slide",
    "data-index": "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "slideshow-slide__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "background-image-container image-hero__image-container",
    "data-has-mobile-image": "true",
    "data-absolutely-position-image": "false"
  }, imageMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "image background-image background-image--mobile",
    style: {
      "--focal-alignment": "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    class: "image__img",
    fetchpriority: "high",
    width: "1440",
    height: "550",
    src: imageMobile,
    style: {
      "height": "550px",
      "objectFit": "cover"
    }
  })), imageDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "image background-image ",
    style: {
      "--focal-alignment": "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    class: "image__img",
    fetchpriority: "high",
    width: "1440",
    height: "550",
    src: imageDesktop,
    style: {
      "height": "550px",
      "objectFit": "cover"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "slideshow-slide__overlay image-overlay animation--image-overlay",
    "data-image-overlay-tint-style": "solid",
    style: {
      "--overlay-opacity": "20%",
      "--color-overlay-tint": "#000;"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "slideshow-slide__text-container-wrapper",
    style: {
      "--text-horizontal-position": "flex-start",
      "--text-horizontal-position-mobile": "flex-start",
      "--text-vertical-position": "center",
      "--text-vertical-position-mobile": "center",
      "--text-alignment": "left",
      "--text-alignment-mobile": "left",
      "--content-max-width": "500px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "slideshow-slide__text-container text-container image-overlay-content animation--item",
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
    class: "slideshow-slide__text-container-inner text-container-inner section-blocks animation--container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    class: "section-blocks__accent fs-accent ",
    "data-divider-enabled": "false",
    style: {
      "--delay-offset-multiplier": "4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    class: "accent__text"
  }, subheading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    class: "slideshow-slide__text-container-heading ff-heading fs-heading-display-1 section-blocks__heading",
    style: {
      "--delay-offset-multiplier": "5"
    }
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "button-wrapper slideshow-slide__text-container-image-button section-blocks__button",
    "data-alignment": "none",
    style: {
      "--delay-offset-multiplier": "6"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    class: "btn btn--primary",
    href: url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, button)))))))));
});

/***/ })

}]);