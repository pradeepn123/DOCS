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
/* harmony import */ var JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/image-with-text */ "./js/components/image-with-text.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var settings = JSON.stringify({
    "slidesPerView": 1,
    "spaceBetween": 10,
    "overflowNagivation": true,
    "breakpoints": {
      "768": {
        "navigation": true,
        "slidesPerView": 1,
        "spaceBetween": 27
      },
      "1200": {
        "navigation": true,
        "slidesPerView": 1,
        "spaceBetween": 27,
        "speed": 600
      }
    }
  });
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
      mobilntentGridColumn = 'span 1',
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
    className: "banner banner--custom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("custom-carousel", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel__container swiper",
    "data-swiper-container": true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "swiper-wrapper"
  }, imageWithTextData.map((eachData, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "swiper-slide",
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: eachData,
    wrapperclassName: "banner__slideshow"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "swiper-pagination"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "swiper-navigations",
    "data-swiper-navigations": true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    "data-settings": true,
    type: "text/json"
  }, settings))))));
});

/***/ })

}]);