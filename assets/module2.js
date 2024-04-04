"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module2"],{

<<<<<<< HEAD
/***/ "./js/components/FeaturedProducts.js":
/*!*******************************************!*\
  !*** ./js/components/FeaturedProducts.js ***!
  \*******************************************/
=======
/***/ "./js/components/ResponsiveImage.js":
/*!******************************************!*\
  !*** ./js/components/ResponsiveImage.js ***!
  \******************************************/
>>>>>>> 86b1a33 (Created image blocks section and rendered individual image card data)
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard */ "./js/components/ProductCard.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "featured-collection section",
    style: {
      "--section-style-spacing-top": "36px",
      "--section-style-spacing-bottom": "36px"
    },
    "data-section-id": "{{ section.id }}",
    "data-section-type": "featured-collection",
    "data-products-per-view": "{{ section.settings.num_columns }}",
    "data-mobile-products-per-view": "{{ section.settings.num_columns_mobile }}"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "section-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header section-blocks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ff-body fs-body-50 fs-accent section-header__preheading"
  }, data.preheading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "ff-heading section-header__heading fs-heading-3-base"
  }, data.heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection__products featured-collection-slider-grid standard-grid-spacing product-item-holder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("scroll-slider-component", {
    class: "scroll-slider scroll-slider--full-width-below-1024 scroll-slider--peek-and-full-width-below-1024 scroll-all-sizes",
    style: {
      "--columns": "2",
      "--columns-above-720": "4",
      "--columns-above-1024": "5",
      "--peek": "24px",
      "--peek-above-1024": "0px",
      "--gap": "12px",
      "--gap-above-1024": "16px",
      "--gap-above-1200": "24px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scroll-slider__slider"
  }, data.products.map((product, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    product: product,
    key: index
  })))))))));
=======

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    image_aspect_ratio,
    image,
    imgurl
  } = _ref;
  console.log('imgurl', imgurl);
  console.log('image', image);
  var img = Object.keys(image).forEach((key, index) => {
    console.log(key);
    console.log(index);
  });
  console.log(img);
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

  //   const imageWidth = getImageWidths(displayImage.width);
  var imageSizes = getImageWidths(displayImage.width);
  var imageSrcSet = imageSizes.map(width => {
    return "".concat(displayImage.src, "&width=").concat(width, " ").concat(width, "w");
  }).join(",");
  var urlTokens = srcTokens;
  var uriEncodedSrc = "".concat(encodeURI(imageSrc), "?width=300&height=300");
  var dataSrcUrl = uriEncodedSrc.replace(urlTokens.replacementToken, urlTokens.dataSrcToken);
  var srcUrl = uriEncodedSrc.replace(urlTokens.replacementToken, urlTokens.srcToken);
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
    className: "responsive-image__image lazyload",
    src: srcUrl,
    srcSet: uriEncodedSrc,
    "data-src": dataSrcUrl,
    "data-widths": "[".concat(imageWidth, "]"),
    "data-aspectratio": aspectRatio,
    "data-sizes": "auto",
    tabIndex: "-1",
    style: getImageStyle()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, css));
>>>>>>> 86b1a33 (Created image blocks section and rendered individual image card data)
});

/***/ })

}]);