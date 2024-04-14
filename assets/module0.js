"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module0"],{

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
/* harmony import */ var JsComponents_carousel_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/carousel-items */ "./js/components/carousel-items.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var settings = JSON.stringify({
    "slidesPerView": 1,
    "spaceBetween": 10,
    "overflowNagivation": false,
    "speed": 1000,
    "autoplay": {
      "delay": 3000
    },
    "breakpoints": {
      "768": {
        "slidesPerView": 1,
        "spaceBetween": 27
      },
      "1200": {
        "slidesPerView": 1,
        "spaceBetween": 27,
        "pagination": true,
        "autoplay": {
          "delay": 3000
        }
      }
    }
  });
  var carouselsettings = {
    paginationWrapperClass: 'swiper-pagination--bar'
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
      styleClass = 'style-1',
      mobileMediaGridColumn = 'span 4',
      desktopMediaGridColumn = 'span 4',
      mobileContentGridColumn = 'span 1',
      desktopContentGridColumn = 'span 1',
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
      themeHeadingClasses: 'fs-heading-display-1 ff-heading',
      "default": {
        "media": {
          image: mobileImage || desktopImage,
          ratio: mobileratio,
          gridColumn: mobileMediaGridColumn,
          gridRow: 'span 1'
        },
        "content": {
          maxWidth: "500px",
          textColor: 'white',
          background: 'transparent',
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
          maxWidth: "500px",
          textColor: 'white',
          background: 'transparent',
          gridColumn: desktopContentGridColumn,
          gridRow: 'span 1'
        }
      }
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner banner--custom",
    "data-parent": true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("custom-carousel", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_carousel_items__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: carouselsettings
  }, imageWithTextData.map((eachData, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    enableTint: true,
    data: eachData,
    wrapperClass: "banner__slideshow",
    key: index
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    "data-settings": true,
    type: "text/json"
  }, settings))))));
});

/***/ })

}]);