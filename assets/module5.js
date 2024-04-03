"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module5"],{

/***/ "./js/components/subscription/banner.js":
/*!**********************************************!*\
  !*** ./js/components/subscription/banner.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_with_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-with-text */ "./js/components/subscription/image-with-text.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
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
});

/***/ })

}]);