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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/image-with-text */ "./js/components/image-with-text.js");
/* harmony import */ var JsComponents_ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/ProductCard */ "./js/components/ProductCard.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var blockData = data.blocks;
  var products = data.products;
  var imageWithTextData = Object.values(blockData).map(item => {
    var {
      heading = '',
      description,
      desktopImage,
      mobileImage,
      desktopratio,
      mobileratio,
      subheading,
      styleClass = 'style-1',
      mobileMediaGridColumn = 'span 4',
      desktopMediaGridColumn = 'span 4',
      mobileContentGridColumn = 'span 4',
      desktopContentGridColumn = 'span 4',
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
      themeHeadingClasses: 'ff-heading fs-heading-1-base',
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
    className: "Featured-products-with-media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-products-with-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection__products"
  }, imageWithTextData.map((block, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_image_with_text__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: block,
    key: block.name + index,
    wrapperClass: "featured-media"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection__products product-item-holder featured-products-grid"
  }, products.map((product, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_ProductCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product: product,
    key: index
  }))))));
});

/***/ })

}]);