"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module3"],{

/***/ "./js/components/sections/ImageBlock.js":
/*!**********************************************!*\
  !*** ./js/components/sections/ImageBlock.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var JsComponents_ImageCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/ImageCard */ "./js/components/ImageCard.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Carousel */ "./js/components/Carousel.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var {
    blocks,
    heading,
    imagefit,
    aspectratio
  } = data;
  var settings = {
    "slidesPerView": 2.1,
    "spaceBetween": "12px",
    "breakpoints": {
      "768": {
        "slidesPerView": 3.2,
        "spaceBetween": "16px"
      },
      "1024": {
        "slidesPerView": 4,
        "spaceBetween": "24px"
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collection-list",
    style: {
      "--section-style-spacing-top": "36px",
      "--section-style-spacing-bottom": "36px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collection-list__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header section-blocks animation--container-header",
    "data-alignment": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "ff-heading section-header__heading fs-heading-3-base"
  }, heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collection-list__collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: settings
  }, blocks.map((block, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_ImageCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    block: block,
    key: index,
    imageFit: imagefit,
    aspectratio: aspectratio
  })))))));
});

/***/ })

}]);