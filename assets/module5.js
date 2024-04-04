"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module5"],{

<<<<<<< HEAD
/***/ "./js/components/subscription/banner.js":
/*!**********************************************!*\
  !*** ./js/components/subscription/banner.js ***!
  \**********************************************/
=======
/***/ "./js/components/subscription/image-with-text.js":
/*!*******************************************************!*\
  !*** ./js/components/subscription/image-with-text.js ***!
  \*******************************************************/
>>>>>>> 75065ec (banner image ui done)
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
/* harmony import */ var _image_with_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-with-text */ "./js/components/subscription/image-with-text.js");

=======
>>>>>>> 75065ec (banner image ui done)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
<<<<<<< HEAD
  // console.log("--------------",shopifyData)
  var bannerData = [];
  Object.values(shopifyData).forEach(data => {
    data.map(eachData => {
      bannerData.push({
        image: eachData.image,
        title: eachData.heading,
        subText: eachData.subheading,
        button: eachData.button,
        url: eachData.url
      });
    });
  });
  console.log("cccc", bannerData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, Object.values(bannerData).map((eachData, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_image_with_text__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: eachData,
    key: eachData.name + index
  })))));
=======
  console.log('data', data);
  var {
    title,
    image = [],
    subText,
    url,
    button
  } = data || {};
  var imageDesktop = image.map(image => {
    return image.desktopImage;
  });
  var imageMobile = image.map(image => {
    return image.mobileImage;
  });
  var desktop = true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banne__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image background-image slideshow-slide__image animation--image animation--lazy-load loaded",
    style: {
      "--focal-alignment": "center;"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "image__img",
    src: imageDesktop,
    alt: imageDesktop
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slideshow-slide__text-container-inner text-container-inner section-blocks animation--container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    class: "section-blocks__accent fs-accent ",
    "data-divider-enabled": "false",
    style: {
      "--delay-offset-multiplier": "4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    class: "accent__text"
  }, subText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    class: "slideshow-slide__text-container-heading ff-heading fs-heading-display-1 section-blocks__heading",
    style: {
      "--delay-offset-multiplier": "5"
    }
  }, title), url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "button-wrapper slideshow-slide__text-container-image-button section-blocks__button",
    "data-alignment": "none",
    style: {
      "--delay-offset-multiplier": "6"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "btn btn--primary",
    href: url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, button))) : ''));
>>>>>>> 75065ec (banner image ui done)
});

/***/ })

}]);