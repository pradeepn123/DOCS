"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module3"],{

/***/ "./js/components/ImageCards.js":
/*!*************************************!*\
  !*** ./js/components/ImageCards.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ResponsiveImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponsiveImage */ "./js/components/ResponsiveImage.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    block
  } = _ref;
  var {
    image_source: image
  } = block;
  var imageObj = _objectSpread({
    id: Date.now()
  }, image);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collection-item animation--item",
    "data-image-crop": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: block.collection,
    className: "collection-item__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collection-item__image__wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "image collection-item__image animation--lazy-load loaded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: imageObj,
    image_aspect_ratio: 1
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collection-item__meta collection-item__title ff-body fs-body-100",
    "data-text-alignment": "center"
  })));
});

/***/ }),

/***/ "./js/components/ResponsiveImage.js":
/*!******************************************!*\
  !*** ./js/components/ResponsiveImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    image_aspect_ratio,
    image
  } = _ref;
  debugger;
  var min = 100;
  var max = 10000;
  var diff = max - min;
  var generated_image_id = Date.now() / diff + min;
  var displayImage = image;
  if (!displayImage) {
    displayImage = {
      width: 1920,
      height: 1080,
      id: Date.now(),
      src: 'https://cdn.shopify.com/s/files/1/0422/2255/1191/files/placeholderImage.webp?v=1692958737'
    };
  }
  var aspectRatio = image_aspect_ratio;
  var {
    height: maxHeightImage,
    id: image_id,
    src: imageSrc,
    width: maxWidthImage
  } = displayImage;
  var IMAGE_WIDTHS = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2160, 2376, 2592, 2808, 3024];
  var getImageWidths = nativeWidth => {
    var imageWidths = [];
    for (var i = 0; i < IMAGE_WIDTHS.length; i++) {
      var width = IMAGE_WIDTHS[i];
      if (nativeWidth > width) {
        imageWidths.push(width);
      } else {
        imageWidths.push(nativeWidth);
        break;
      }
    }
    return imageWidths.join(',');
  };
  var imageSizes = getImageWidths(displayImage.width).split(',');
  var imageSrcSet = imageSizes.map(width => {
    return "".concat(displayImage.src, "&width=").concat(width, " ").concat(width, "w");
  }).join(",");
  if (aspectRatio <= 1) {
    maxWidthImage = parseInt(maxHeightImage) * aspectRatio;
  } else {
    maxHeightImage = parseInt(maxWidthImage) / aspectRatio;
  }
  var maxWidthImageFloat = maxWidthImage * 1.0;
  var getWrapperStyles = () => {
    return {
      '--padding-top': "".concat(maxHeightImage / maxWidthImageFloat * 100, "%"),
      '--max-height': "".concat(maxHeightImage, "px"),
      '--max-width': "".concat(maxWidthImage, "px")
    };
  };
  var getImageStyle = () => {
    return {
      maxWidth: "".concat(maxWidthImage, "px"),
      maxHeight: "".concat(maxHeightImage, "px"),
      objectFit: 'contain'
    };
  };
  var css = "\n  .responsive-image__wrapper:before {\n    content: '';\n    width: 100%;\n    display: block;\n    padding-top: var(--padding-top);\n  }\n\n  .responsive-image__wrapper {\n      height: 100%;\n      position: relative;\n      max-width: var(--max-width);\n      max-height: var(--max-height);\n  }\n\n  .responsive-image__image {\n      position: absolute;\n      top: 0;\n      height: 100%;\n      left: 0;\n      width: 100%;\n      \n  }";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "ImageWrapper-".concat(image_id, "-").concat(generated_image_id),
    "data-image-id": image_id,
    className: "responsive-image__wrapper",
    style: getWrapperStyles()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "Image-".concat(image_id, "-").concat(generated_image_id),
    className: "responsive-image__image",
    src: displayImage.src,
    load: "lazy",
    srcSet: imageSrcSet,
    "data-widths": "[".concat(imageSizes, "]"),
    "data-aspectratio": aspectRatio,
    "data-sizes": "auto",
    tabIndex: "-1",
    style: getImageStyle()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, css)));
});

/***/ }),

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
/* harmony import */ var _ImageCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ImageCards */ "./js/components/ImageCards.js");


;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  var {
    blocks,
    heading
  } = data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header section-blocks animation--container-header",
    "data-alignment": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "ff-heading section-header__heading fs-heading-3-base"
  }, heading)), blocks.map((block, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ImageCards__WEBPACK_IMPORTED_MODULE_1__["default"], {
    block: block,
    key: index
  })));
});

/***/ })

}]);