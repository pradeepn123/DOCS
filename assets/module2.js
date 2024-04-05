"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module2"],{

/***/ "./js/components/sections/FeaturedProductsWithMedia.js":
/*!*************************************************************!*\
  !*** ./js/components/sections/FeaturedProductsWithMedia.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/image-with-text */ "./js/components/image-with-text.js");
/* harmony import */ var JsComponents_ResponsiveImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! JsComponents/ResponsiveImage */ "./js/components/ResponsiveImage.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var blockData = data.blocks;
  var products = data.products;
  blockData.map((block, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: block,
    key: index
  }));
  var desktopImage = blockData.map((block, index) => {
    return block.desktopImage;
  });
  var mobileImage = blockData.map((block, index) => {
    return block.mobileImage;
  });
  var imageObjDesktop = _objectSpread({
    id: Date.now()
  }, desktopImage);
  var imageObjMobile = _objectSpread({
    id: Date.now()
  }, mobileImage);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "banner__container kuchVi"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "banner__header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(JsComponents_ResponsiveImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: imageObjDesktop,
    image_aspect_ratio: mobileratio
  })))));
});

/***/ })

}]);