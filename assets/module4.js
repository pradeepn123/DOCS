"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module4"],{

/***/ "./js/components/sections/ImageWithTextSplit.js":
/*!******************************************************!*\
  !*** ./js/components/sections/ImageWithTextSplit.js ***!
  \******************************************************/
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
  var imageWithTextData = Object.values(data).map(item => {
    var {
      heading = '',
      description,
      desktopImage,
      mobileImage,
      desktopratio,
      mobileratio,
      subheading = '',
      styleClass = 'style-2',
      mobileMediaGridColumn = 'span 4',
      desktopMediaGridColumn = 'span 2',
      mobileContentGridColumn = 'span 4',
      desktopContentGridColumn = 'span 2',
      url,
      button
    } = item || {};
    return {
      heading,
      description,
      subheading,
      url,
      button,
      styleClass,
      themeHeadingClasses: 'fs-heading-display-3 ff-heading',
      "default": {
        "media": {
          image: mobileImage || desktopImage,
          ratio: mobileratio,
          gridColumn: mobileMediaGridColumn,
          gridRow: 'span 1'
        },
        "content": {
          maxWidth: '',
          textColor: '#38393d',
          background: '#e5ded8',
          gridColumn: mobileContentGridColumn,
          gridRow: 'span 1'
        }
      },
      "lg": {
        "media": {
          image: desktopImage || mobileImage,
          ratio: desktopratio,
          gridColumn: desktopMediaGridColumn,
          gridRow: 'span 1'
        },
        "content": {
          maxWidth: '',
          textColor: '#38393d',
          background: '#e5ded8',
          gridColumn: desktopContentGridColumn,
          gridRow: 'span 1'
        }
      }
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-with-text-split image-with-text-split__custom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-with-text-split__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-with-text-split__header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: settings
  }, imageWithTextData.map((eachData, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: eachData,
    key: eachData.name + index,
    wrapperClass: "image-with-text__split"
  })))))));
});

/***/ })

}]);