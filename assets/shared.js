(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["shared"],{

/***/ "./js/components/sections lazy recursive ^\\.\\/.*\\.js$":
/*!**************************************************************************************!*\
  !*** ./js/components/sections/ lazy ^\.\/.*\.js$ chunkName: module namespace object ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Banner.js": [
		"./js/components/sections/Banner.js",
		"vendors",
		"shared",
		"module0"
	],
	"./FeaturedProducts.js": [
		"./js/components/sections/FeaturedProducts.js",
		"vendors",
		"shared",
		"module1"
	],
	"./FeaturedProductsWithMedia.js": [
		"./js/components/sections/FeaturedProductsWithMedia.js",
		"vendors",
		"shared",
		"module2"
	],
	"./ImageBlock.js": [
		"./js/components/sections/ImageBlock.js",
		"vendors",
		"shared",
		"module3"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./js/components/sections lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./js/components/Carousel.js":
/*!***********************************!*\
  !*** ./js/components/Carousel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.mjs");


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    settings,
    children
  } = _ref;
  var params = {
    slidesPerView: 1
  };
  if (settings) {
    params = _objectSpread(_objectSpread({}, params), settings);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    onSwiper: swiper => console.log(swiper)
  }), children.map((slide, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
      key: index
    }, slide);
  }));
});

/***/ }),

/***/ "./js/components/ProductCard.js":
/*!**************************************!*\
  !*** ./js/components/ProductCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    product
  } = _ref;
  var {
    title,
    link,
    vendor,
    variants = []
  } = product || {};
  var variantData = variants.map(variant => {
    return {
      price: variant.price,
      variant_id: variant.id,
      compare_at_price: variant.compare_at_price
    };
  });
  var imageObj = _objectSpread({
    id: Date.now()
  }, product.image);
  var [{
    price,
    variant_id,
    compare_at_price
  }] = variantData || [];
  var originalPrice = price;
  var convertedPrice = (originalPrice / 100).toFixed(2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-item animation--item",
    "data-input-item": "",
    "data-id": "8091513782403",
    "data-title": product.title,
    "data-url": product.link,
    "data-variant-id": variant_id,
    "data-quantity-in-cart": "0",
    "data-product-has-single-variant": "true",
    "data-quick-add-style": "icon",
    "data-product-item-alignment": "left",
    "data-price-position": "below_title",
    "data-show-inventory": "false",
    "data-ratings-visible": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-item__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-item__media-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-item__media",
    "data-aspect-ratio": "square"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "product-item__image-link",
    href: link,
    "aria-label": title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "image product-item__image aspect-ratio--square animation--lazy-load loaded",
    style: {
      "--object-fit": "contain"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: imageObj,
    image_aspect_ratio: 1
  }))), product.discountPercentage > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-badges",
    "data-badge-shape": "pill",
    "data-badge-vertical-position": "bottom",
    "data-badge-horizontal-position": "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-badge",
    "data-type": "sale"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "product-badge__inner badge-shape",
    "data-badge-shape": "pill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "displayed-discount-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    "data-badge-shape": "pill"
  }, "Sale"))))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    "data-product-item-element-visible-only-for-mode": "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-item__floating-action-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "product-item__quick-view-button btn btn--rounded show-product-quick-view product-item__disc-button",
    href: product.link,
    title: "Quick View",
    "aria-label": "Quick View"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "icon icon-quick-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M12.0875 15.6805C13.9032 15.6805 15.375 14.2086 15.375 12.393C15.375 10.5773 13.9032 9.10547 12.0875 9.10547C10.2719 9.10547 8.80005 10.5773 8.80005 12.393C8.80005 14.2086 10.2719 15.6805 12.0875 15.6805Z",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M22.489 11.7954C21.3901 10.5555 17.0224 6 11.8 6C6.57759 6 2.20992 10.5555 1.11096 11.7954C1.03921 11.8827 1 11.9923 1 12.1053C1 12.2184 1.03921 12.3279 1.11096 12.4153C2.20992 13.6552 6.57759 18.2107 11.8 18.2107C17.0224 18.2107 21.3901 13.6552 22.489 12.4153C22.5608 12.3279 22.6 12.2184 22.6 12.1053C22.6 11.9923 22.5608 11.8827 22.489 11.7954V11.7954Z",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-item__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    "data-product-item-element-visible-only-for-mode": "grid"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-item__text ta-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-item__text_group_primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "ff-body fs-body-60 product-item__product-vendor"
  }, vendor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "product-item__product-title fs-product-title ff-body",
    "data-line-limit": "2",
    "data-base-size-setting": "16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: link
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    "data-product-item-element-visible-only-for-mode": "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product-item__price-wrap",
    "data-position": "below_title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "product-item__price ff-product-price",
    "data-position": "below_title",
    "data-enlarged-prices": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "product-item__price-main"
  }, compare_at_price > convertedPrice ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("s", {
    className: "t-subdued"
  }, compare_at_price) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: compare_at_price > convertedPrice ? 'sale' : ''
  }, "$", convertedPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "displayed-discount-wrapper",
    "data-hidden": "false",
    "data-has-discount": "true"
  }, product.discountPercentage > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "displayed-discount badge-shape fs-body-60",
    "data-badge-shape": "pill"
  }, "Save ", product.discountPercentage, "%") : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("dl", {
    className: "unit-price",
    "data-unit-price-container": "",
    "data-unit-price-available": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("dt", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "visually-hidden visually-hidden--inline"
  }, "Unit price")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("dd", {
    className: "unit-price__price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    "data-unit-price": ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "visually-hidden"
  }, "per"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    "data-unit-base": ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    "data-unit-price-base-unit": ""
  }))))))))))));
});

/***/ }),

/***/ "./js/components/ResponsiveImage.js":
/*!******************************************!*\
  !*** ./js/components/ResponsiveImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    aspectratio = 1,
    image,
    settings
  } = _ref;
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
  var {
    imageFit
  } = settings || {};
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
  if (aspectratio <= 1) {
    maxWidthImage = parseInt(maxHeightImage) * aspectratio;
  } else {
    maxHeightImage = parseInt(maxWidthImage) / aspectratio;
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
      objectFit: "".concat(imageFit ? imageFit : 'contain'),
      aspectRatio: "".concat(aspectratio)
    };
  };
  var css = "\n  .responsive-image__wrapper:before {\n    content: '';\n    width: 100%;\n    display: block;\n    padding-top: var(--padding-top);\n  }\n\n  .responsive-image__wrapper {\n      height: 100%;\n      position: relative;\n      max-width: var(--max-width);\n      max-height: var(--max-height);\n  }\n\n  .responsive-image__image {\n      position: absolute;\n      top: 0;\n      height: 100%;\n      left: 0;\n      width: 100%;\n      object-fit: var(--objectFit);\n      aspect-ratio: var(--aspectRatio);\n      \n  }";
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
    "data-aspectratio": aspectratio,
    "data-sizes": "auto",
    tabIndex: "-1",
    style: getImageStyle()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, css)));
});

/***/ }),

/***/ "./js/components/homepage.js":
/*!***********************************!*\
  !*** ./js/components/homepage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
  var [sections, updateSections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var data = yield fetch('/pages/clarkston');
      var xmlString = yield data.text();
      var pageDoc = new DOMParser().parseFromString(xmlString, "text/html");
      var pageData = "";
      pageDoc.querySelectorAll('[data-json]').forEach((scriptData, index) => {
        if (index) {
          pageData = pageData + ",";
        }
        pageData = pageData + "".concat(scriptData.innerHTML);
      });
      pageData = "{ ".concat(pageData, " }");
      var sectionData = JSON.parse(pageData);
      var sections = yield Promise.all(Object.keys(sectionData).map( /*#__PURE__*/function () {
        var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (sectionKey, index) {
          var props = sectionData[sectionKey];
          var componentKey = sectionKey.split('-section-type')[0];
          var module = yield __webpack_require__("./js/components/sections lazy recursive ^\\.\\/.*\\.js$")("./".concat(componentKey, ".js"));
          var Component = yield module.default;
          return {
            props: props,
            Component: Component
          };
        });
        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }()));
      if (sectionData) {
        var loader = document.querySelector('.product-card-item__placeholder');
        loader.style.display = 'none';
        var bannerLoader = document.querySelector('.banner_loader_section');
        bannerLoader.style.display = 'none';
      }
      var script = document.createElement("script");
      script.src = shopifyData.url;
      script.async = false;
      document.body.appendChild(script);
      updateSections(sections);
    })();
  }, []);
  return sections.map((componentData, index) => {
    var {
      Component,
      props
    } = componentData;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, {
      data: props,
      key: index
    });
  });
});

/***/ }),

/***/ "./js/components/image-with-text.js":
/*!******************************************!*\
  !*** ./js/components/image-with-text.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    data
  } = _ref;
  var {
    heading = '',
    description,
    desktopImage,
    mobileImage,
    desktopratio,
    mobileratio,
    positionVertical,
    positionHorizontal,
    positionHorizontalMobile,
    positionVerticalMobile,
    subheading,
    textFont,
    textFontMob,
    url,
    button
  } = data || {};
  var imageObjDesktop = _objectSpread({
    id: Date.now()
  }, desktopImage);
  var imageObjMobile = _objectSpread({
    id: Date.now()
  }, mobileImage);
  function createMarkup() {
    return {
      __html: heading
    };
  }
  var getWrapperStyles = () => {
    return {
      '--horizontal-align': "".concat(positionHorizontal),
      '--vertical-align': "".concat(positionVertical),
      '--horizontal-align-mob': "".concat(positionHorizontalMobile),
      '--vertical-align-mob': "".concat(positionVerticalMobile),
      '--heading-font': "".concat(textFont, "px"),
      '--heading-font-mob': "".concat(textFontMob, "px")
    };
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "banner__container",
    style: getWrapperStyles()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "banner__images",
    id: "banner-image-".concat(imageObjDesktop.id),
    style: {
      "poisition": "relative !important"
    }
  }, imageObjMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "banner__mob-image-wrapp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: imageObjMobile,
    image_aspect_ratio: "".concat(mobileratio),
    settings: {
      imageFit: "cover"
    }
  })), imageObjDesktop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "banner__desktop-image-wrapp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: imageObjDesktop,
    image_aspect_ratio: "".concat(desktopratio),
    settings: {
      imageFit: "cover"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "banner__text-wrapp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "banner_text-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "banner__subheading ",
    "data-divider-enabled": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "banner__subtext"
  }, subheading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
    className: "banner__heading",
    dangerouslySetInnerHTML: createMarkup()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "banner__description",
    "data-divider-enabled": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "accent__text"
  }, description)), url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "button-wrapper",
    "data-alignment": "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "btn btn--primary",
    href: url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, button))))))));
});

/***/ }),

/***/ "./js/components/reactWrapper.js":
/*!***************************************!*\
  !*** ./js/components/reactWrapper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-6 */ "./node_modules/json-6/dist/index.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_6__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Component, container, propsEl) => {
  //component is a pre-compiled class
  //container is where you want to inject component
  //propEl pass prop when injecting
  var appContainer = document.querySelectorAll(container);
  var singlePropsEl = document.querySelector(propsEl);
  var props = {};
  if (singlePropsEl) {
    props = json_6__WEBPACK_IMPORTED_MODULE_2___default().parse(singlePropsEl === null || singlePropsEl === void 0 ? void 0 : singlePropsEl.innerHTML) || {};
  }
  return [...appContainer].map(appTarget => {
    var initialized = appTarget.dataset.initialized || false;
    if (appTarget && !initialized) {
      if (!singlePropsEl) {
        if (propsEl) {
          var _appTarget$querySelec;
          props = {};
          props = json_6__WEBPACK_IMPORTED_MODULE_2___default().parse((_appTarget$querySelec = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec === void 0 ? void 0 : _appTarget$querySelec.innerHTML) || {}; //get json from the script id 
        }
      }
      appTarget.dataset.initialized = true;
      var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appTarget);
      root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {
        shopifyData: props
      }));
      return root;
    }
  });
});

/***/ }),

/***/ "./js/components/subscription/megamenu-product.js":
/*!********************************************************!*\
  !*** ./js/components/subscription/megamenu-product.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
  var {
    data: {
      proheading,
      product_list: products
    }
  } = shopifyData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "meganav__secondary--heading fs-accent fs-accent-bold"
  }, proheading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "meganav__secondary--inner meganav-promoted-products-inner",
    "data-layout": "list"
  }, products.map((product, index) => {
    var {
      title,
      vendor,
      subtitle,
      handle,
      image = [],
      price = []
    } = product;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: handle,
      "aria-label": "[pt]",
      className: "meganav-promoted-products-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "meganav-promoted-products-item-image-wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "image aspect-ratio--square animation--lazy-load loaded"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: title,
      className: "image__img",
      loading: "lazy",
      width: "2500",
      height: "2500",
      src: image.src
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "meganav-promoted-products-item-text-wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
      className: "ff-body fs-body-60 meganav-promoted-products-item-text-vendor"
    }, vendor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "ff-body fs-body-100 meganav-promoted-products-item-text-title"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "fs-body-60 meganav-promoted-products-item-text-price"
    }, price.compare_at_price ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      class: "ff-product-price "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      class: "product-item__price-main"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      class: "visually-hidden"
    }, "Regular price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("s", {
      class: "t-subdued"
    }, price.compare_at_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      class: "sale",
      "data-price": ""
    }, price.originalPrice))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ff-product-price "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "product-item__price-main"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, price.originalPrice)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dl", {
      className: "unit-price",
      "data-unit-price-container": "",
      "data-unit-price-available": "false"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "visually-hidden visually-hidden--inline"
    }, "Unit price")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", {
      className: "unit-price__price"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-unit-price": ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "aria-hidden": "true"
    }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "visually-hidden"
    }, "per"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-unit-base": ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-unit-price-base-unit": ""
    }))))));
  })));
});

/***/ }),

/***/ "./js/components/subscription/megamenu.js":
/*!************************************************!*\
  !*** ./js/components/subscription/megamenu.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
  var {
    data: {
      navigation: defaultNavigation,
      product_list: products,
      dynamicHeader = false
    }
  } = shopifyData;
  var handle = window.localStorage.getItem('location-page');
  var [navigation, updateNavigations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultNavigation);
  var updateNavigationItems = () => {
    var dynamicNavigation = JSON.parse(JSON.stringify(navigation));
    dynamicNavigation.forEach(item => {
      var {
        menu_link,
        sub_menu_title
      } = item;
      menu_link = "/collections/".concat(handle);
      item["menu_link"] = menu_link;
      sub_menu_title.forEach(item => {
        var {
          url
        } = item;
        var params = url.split('?')[1];
        var newurl = "".concat(menu_link, "?").concat(params, "&filter.v.availability=1");
        item["url"] = newurl;
      });
    });
    updateNavigations(dynamicNavigation);
  };
  var getNavigationItems = () => {
    (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var navigation = yield fetch("/pages/".concat(handle, "?view=get-navigation"));
      var response = yield navigation.json();
      updateNavigations(response.megamenu);
    })();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dynamicHeader ? getNavigationItems() : updateNavigationItems();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "meganav__nav",
    "data-column-count": "4",
    "data-show-column-dividers": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "meganav__list-parent",
    depth: "0",
    "data-show-column-dividers": "true"
  }, navigation.map((nav, index) => {
    var {
      menu_link: link,
      menu_title: title,
      sub_menu_title: subMenuTitle
    } = nav;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      className: "meganav__list-child animation--dropdown-item has-children",
      depth: "0",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", {
      className: "has-children fs-accent-bold"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: link,
      title: ""
    }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
      depth: "1"
    }, subMenuTitle.map((submenu, index) => {
      var {
        title,
        url
      } = submenu;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
        className: "fs-body-100",
        href: url
      }, title));
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "meganav__column-rule",
    "data-index": "1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "meganav__column-rule",
    "data-index": "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "meganav__column-rule",
    "data-index": "3"
  })));
});

/***/ }),

/***/ "./js/components/subscription/mobile-account-drawer.js":
/*!*************************************************************!*\
  !*** ./js/components/subscription/mobile-account-drawer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-menu-depth": "1",
    "data-pane-key": "account-info",
    "data-scroll-lock-ignore": "",
    "aria-hidden": "true",
    inert: "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "mobile-menu__item mobile-menu__item--header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "mobile-menu__item--heading-back-link fs-body-100 ",
    "data-action": "home",
    "aria-label": "Back to Main Menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon icon-arrow-short back-link-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 12.4016H11.5H23M23 12.4016L13.8 3M23 12.4016L13.8 21.8032",
    stroke: "currentColor",
    strokeWidth: "1.75"
  }))), "Back to Main Menu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login",
    "data-scope": "component",
    "data-account-login": ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login__success-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login__success",
    "data-success-message": ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ff-body fs-body-100"
  }, "We've sent you an email with a link to update your password."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "login-form",
    className: "login__wrapper",
    "data-part": "login",
    "aria-hidden": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "login__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "login__heading ff-heading fs-heading-4-base"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login__main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    method: "post",
    action: "/account/login",
    id: "mobile-menu-account-login",
    acceptCharset: "UTF-8",
    "data-login-with-shop-sign-in": "true",
    noValidate: "novalidate",
    className: "login__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "hidden",
    name: "form_type",
    defaultValue: "customer_login"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "hidden",
    name: "utf8",
    defaultValue: "\u2713"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "mobile-menu-account-login-CustomerEmail"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    className: "input ",
    name: "customer[email]",
    id: "mobile-menu-account-login-CustomerEmail",
    autoComplete: "email",
    autoCorrect: "off",
    autoCapitalize: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login__label-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "mobile-menu-account-login-CustomerPassword"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn btn--text-link fs-body-75",
    "data-toggle": "",
    "aria-controls": "mobile-menu-account-login-register-form"
  }, "Forgot password?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    className: "input ",
    defaultValue: "",
    name: "customer[password]",
    id: "mobile-menu-account-login-CustomerPassword"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "login__button btn btn--primary btn--full"
  }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login__links ff-body fs-body-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "New customer?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "link",
    href: "https://shopify.com/58773962883/account?locale=en"
  }, "Create account"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "mobile-menu-account-login-register-form",
    className: "login__wrapper hide",
    "data-part": "reset",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "login__heading ff-heading fs-heading-3-base"
  }, "Reset your password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "login__subheading fs-body-75"
  }, "We will send you an email to reset your password.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login__main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    method: "post",
    action: "/account/recover",
    acceptCharset: "UTF-8",
    className: "login__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "hidden",
    name: "form_type",
    defaultValue: "recover_customer_password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "hidden",
    name: "utf8",
    defaultValue: "\u2713"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "mobile-menu-account-login-RecoverEmail"
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    defaultValue: "",
    name: "email",
    id: "mobile-menu-account-login-RecoverEmail",
    className: "input",
    autoCorrect: "off",
    autoCapitalize: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "login__button btn btn--primary btn--full"
  }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login__links ff-body fs-body-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    "data-toggle": "",
    className: "btn btn--text-link",
    "aria-controls": "login-form"
  }, "Cancel")))))));
});

/***/ }),

/***/ "./js/components/subscription/mobile-menu-list.js":
/*!********************************************************!*\
  !*** ./js/components/subscription/mobile-menu-list.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _mobile_account_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-account-drawer */ "./js/components/subscription/mobile-account-drawer.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
  console.log(shopifyData, "data");
  var {
    data: {
      menu_list: menulinks
    }
  } = shopifyData;
  var handleUrl = window.localStorage.getItem('location-page');
  var collectionUrl = "/collections/".concat(handleUrl);
  var [updatedLinks, setLinks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(menulinks);
  var updateLink = menuLink => {
    var {
      handle: url
    } = menuLink || {};
    var params = url.split('?')[1];
    if (params) {
      menuLink["handle"] = "".concat(collectionUrl, "?").concat(params, "&filter.v.availability=1");
    } else {
      menuLink["handle"] = "".concat(collectionUrl, "?filter.v.availability=1");
    }
  };
  var updateLinks = arr => {
    arr.forEach(link => {
      var {
        handle: url,
        submenu = []
      } = link;
      if (url != "#") {
        updateLink(link);
      }
      if (submenu.length) {
        updateLinks(submenu);
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var menulinkCloned = JSON.parse(JSON.stringify(menulinks));
    updateLinks(menulinkCloned);
    setLinks(menulinkCloned);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var container = document.querySelector('body');
    window.menuNav(container);
    window.AccountLogin(container);
  }, [updatedLinks]);
  var MenuItem = _ref2 => {
    var {
      item,
      index
    } = _ref2;
    var {
      handle,
      title,
      submenu,
      depth
    } = item;
    var container = document.querySelector(".mobile-menu__links-wrapper");
    var chevronIcon = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M1.875 7.438 12 17.563 22.125 7.438\" stroke=\"currentColor\" stroke-width=\"2\"></path> </svg>";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "mobile-menu__item fs-body-100",
      "data-depth": depth
    }, submenu ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "mobile-menu__link no-transition",
      href: "#",
      "data-action": "show-sub-pane",
      "data-link-target-pane-key": "submenu-shop-".concat(index, "-").concat(depth),
      "data-link": "primary",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "mobile-menu__link__text fs-body-100"
    }, title), submenu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "icon icon-chevron menu-icon",
      dangerouslySetInnerHTML: {
        __html: chevronIcon
      }
    }), submenu && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuList, {
      listArray: submenu,
      depth: depth,
      index: index
    }), container)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "mobile-menu__link",
      href: handle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "mobile-menu__link__text fs-body-100"
    }, title))));
  };
  var MenuList = _ref3 => {
    var {
      listArray,
      depth,
      index = 0
    } = _ref3;
    if (depth) {
      var chevronIconReverse = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M0 12.4016H11.5H23M23 12.4016L13.8 3M23 12.4016L13.8 21.8032\" stroke=\"currentColor\" stroke-width=\"1.75\"></path>\n            </svg>";
      var chevronIconBack = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.875 7.438 12 17.563 22.125 7.438\" stroke=\"currentColor\" strokeWidth=\"2\"></path></svg>";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        "data-menu-depth": depth,
        "data-pane-key": "submenu-shop-".concat(index, "-").concat(depth),
        "data-scroll-lock-ignore": "",
        "aria-hidden": "true",
        inert: "",
        className: "mobile-menu__list mobile-menu__list--sub"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "mobile-menu__item mobile-menu__item--header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "mobile-menu__item--heading-back-link fs-body-100 ",
        "data-action": "home",
        "aria-label": "Back to Main Menu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "icon icon-arrow-short back-link-icon",
        dangerouslySetInnerHTML: {
          __html: chevronIconReverse
        }
      }), "Back to Main Menu")), depth == 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "mobile-menu__item mobile-menu__item--callout"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        "data-action": "show-sub-pane",
        "data-link-target-pane-key": "submenu-shop-0-1",
        className: "mobile-menu__link fs-body-100",
        "aria-expanded": "true"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "icon icon-chevron back-link-icon",
        dangerouslySetInnerHTML: {
          __html: chevronIconBack
        }
      }), "Shop")), depth == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "mobile-menu__item mobile-menu__item--heading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "mobile-menu__link",
        "data-heading": "true",
        href: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "ff-heading fs-body-300 fs-heading-4-base"
      }, "Shop "))), listArray.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuItem, {
        item: item,
        index: index,
        key: "item-".concat(index, "-").concat(depth, "}")
      }))), depth == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mobile_account_drawer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    } else {
      var chevronIconAccount = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.992 2.664a4.71 4.71 0 0 1 2.447.685 5.035 5.035 0 0 1 1.795 1.88c.432.781.661 1.668.665 2.572a5.373 5.373 0 0 1-.644 2.579 5.05 5.05 0 0 1-1.673 1.826.552.552 0 0 0-.131.083 4.72 4.72 0 0 1-2.428.683 4.721 4.721 0 0 1-2.457-.686 5.046 5.046 0 0 1-1.801-1.887 5.37 5.37 0 0 1-.007-5.156 5.037 5.037 0 0 1 1.79-1.886 4.71 4.71 0 0 1 2.444-.693zm2.87 10.716a5.778 5.778 0 0 1-2.837.757 5.776 5.776 0 0 1-2.874-.762 8.657 8.657 0 0 0-4.094 3.21 9.386 9.386 0 0 0-1.65 5.333c0 .321-.247.582-.552.582-.306 0-.553-.26-.553-.582 0-2.163.652-4.27 1.861-6.019a9.826 9.826 0 0 1 3.898-3.32 6.272 6.272 0 0 1-1.252-1.596 6.593 6.593 0 0 1-.814-3.165v-.002A6.582 6.582 0 0 1 6.8 4.66a6.174 6.174 0 0 1 2.194-2.31 5.774 5.774 0 0 1 2.997-.85 5.773 5.773 0 0 1 2.999.84 6.17 6.17 0 0 1 2.2 2.303c.53.958.81 2.045.814 3.154a6.584 6.584 0 0 1-.789 3.16 6.27 6.27 0 0 1-1.265 1.628 9.824 9.824 0 0 1 3.887 3.314 10.593 10.593 0 0 1 1.861 6.019c0 .321-.247.582-.553.582-.305 0-.553-.26-.553-.582a9.387 9.387 0 0 0-1.65-5.333 8.656 8.656 0 0 0-4.08-3.205z\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\".19\"></path></svg>";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        "data-primary-container": "true"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "mobile-menu__item mobile-menu__item--header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "mobile-menu__item--heading-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "ff-heading fs-heading-5-base"
      }, "Menu"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "mobile-menu__item mobile-menu__item--callout"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        "data-action": "show-sub-pane",
        "data-link-target-pane-key": "account-info",
        className: "mobile-menu__link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "icon icon-header-account",
        dangerouslySetInnerHTML: {
          __html: chevronIconAccount
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "fs-body-100"
      }, "Log in or Create an Account"))), listArray.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuItem, {
        item: item,
        key: "menu-".concat(index, "-").concat(depth),
        index: index
      }))));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuList, {
    listArray: updatedLinks
  });
});

/***/ }),

/***/ "./js/components/subscription/mobile-menu-product.js":
/*!***********************************************************!*\
  !*** ./js/components/subscription/mobile-menu-product.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
  var {
    data: {
      proheading,
      product_list: products
    }
  } = shopifyData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mobile_menu__promo_block mobile-menu-block-promoted-products"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "mobile-menu-block-title fs-accent-bold"
  }, proheading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mobile-menu-block-promoted-products__inner",
    "data-layout": "list"
  }, products.map((product, index) => {
    var {
      title,
      subtitle,
      handle,
      image = [],
      price = []
    } = product;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: handle,
      "aria-label": title,
      className: "mobile-menu-promoted-products-item",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mobile-menu-promoted-products-item-image-wrap",
      style: {
        width: '79px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "image aspect-ratio--square animation--lazy-load loaded"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: title,
      className: "image__img",
      loading: "lazy",
      width: "2500",
      height: "2500",
      src: image.src
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mobile-menu-promoted-products-item-text-wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "ff-body fs-body-100 mobile-menu-promoted-products-item-text-title"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "fs-body-60 mobile-menu-promoted-products-item-text-price"
    }, price.compare_at_price ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ff-product-price "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "product-item__price-main"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "visually-hidden"
    }, "Regular price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("s", {
      className: "t-subdued"
    }, price.compare_at_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "sale",
      "data-price": ""
    }, price.originalPrice))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ff-product-price "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "product-item__price-main"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, price.originalPrice)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dl", {
      className: "unit-price",
      "data-unit-price-container": "",
      "data-unit-price-available": "false"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "visually-hidden visually-hidden--inline"
    }, "Unit price")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", {
      className: "unit-price__price"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-unit-price": ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "aria-hidden": "true"
    }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "visually-hidden"
    }, "per"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-unit-base": ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      "data-unit-price-base-unit": ""
    }))))));
  }))));
});

/***/ }),

/***/ "./js/components/subscription/onetime.js":
/*!***********************************************!*\
  !*** ./js/components/subscription/onetime.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data = [],
    handleSwitch = () => {},
    inputSwitch = ""
  } = _ref;
  var [subscription, setSubscription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (data && data.length > 0) {
      var initialOption = data[0];
      setSubscription(initialOption);
    }
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription-container__onetime-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription-container__oneTime-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "onetime",
    name: "purchase",
    className: "active",
    value: "onetime",
    onChange: handleSwitch,
    checked: inputSwitch === 'onetime'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "onetime"
  }, "ONE TIME PURCHASE "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subscription-container__oneTime-Price"
  }, subscription && subscription.price[0].variantPrice || ''))));
});

/***/ }),

/***/ "./js/components/subscription/store-locator.js":
/*!*****************************************************!*\
  !*** ./js/components/subscription/store-locator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SvgIcon */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var storeCheckdIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n                        <circle cx=\"15\" cy=\"15\" r=\"15\" fill=\"#1B428A\"/>\n                        <path d=\"M8 14.5L13 19.5L21.5 11\" stroke=\"white\"/>\n                        </svg>";
var storeUnckeckIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n                        <circle cx=\"15\" cy=\"15\" r=\"15\" fill=\"#1B428A\"></circle>\n                        <path d=\"M8 14.5L13 19.5L21.5 11\" stroke=\"white\"></path>\n                        </svg>";
var chevronDown = "<svg width=\"9\" height=\"6\" viewBox=\"0 0 9 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow_icon\">\n<path d=\"M1 0.625L4.75 4.375L8.5 0.625\" stroke=\"black\"></path>\n</svg>";
var SvgIcon = _ref => {
  var {
    icon,
    svgClass
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: svgClass,
    dangerouslySetInnerHTML: {
      __html: icon
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref2 => {
  var {
    shopifyData
  } = _ref2;
  var {
    data
  } = shopifyData || {};
  var curatedData = data.filter(item => item.id);
  var location = window.localStorage.getItem("location");
  var selectedItem = curatedData.find(_ref3 => {
    var {
      id
    } = _ref3;
    return id == location;
  });
  if (!selectedItem) selectedItem = curatedData[0];
  var [selectedLocation, setSelectedLocation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedItem);
  var [isDropdownActive, setDropDownActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var toggleDropdown = () => {
    setDropDownActive(!isDropdownActive);
  };
  var handleSelection = location => {
    setSelectedLocation(location);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.localStorage.setItem("location", selectedLocation.id);
    window.localStorage.setItem("location-page", selectedLocation.handle);
  }, [selectedLocation]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('click', ev => {
      if (!ev.target.closest('[data-dropdown-wrapper]')) {
        setDropDownActive(false);
      }
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "store-locator__container",
    "data-dropdown-wrapper": true,
    onClick: toggleDropdown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "store-locator__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Shop from")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "store-locator__location ".concat(isDropdownActive ? 'select-clicked' : ''),
    "data-dropdown-select": true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, selectedLocation.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SvgIcon, {
    icon: chevronDown
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "store-locator__location-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "storeDd-wrapper ".concat(isDropdownActive ? 'menu-open' : '', " "),
    "data-dropdown-menu": true
  }, data.map((location, index) => {
    var {
      id,
      title,
      address,
      url
    } = location || {};
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "storeDd-wrapper__optionsWrap",
      "data-dropdown-selector": "true",
      key: index,
      onClick: () => {
        handleSelection(location);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "".concat(url, "?filter.v.availability=1"),
      className: "storeDd-wrapper__options-box ".concat(id == selectedLocation.id ? "checked" : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "storeDd-wrapper__storeName",
      "store-name": "true"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "storeDd-wrapper__text-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "storeDd-wrapper__storeAddress",
      dangerouslySetInnerHTML: {
        __html: address
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "storeDd-wrapper__button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SvgIcon, {
      svgClass: "",
      icon: id == selectedLocation ? storeCheckdIcon : storeUnckeckIcon
    })))));
  }))))));
});

/***/ }),

/***/ "./js/components/subscription/subscription-selector.js":
/*!*************************************************************!*\
  !*** ./js/components/subscription/subscription-selector.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onetime */ "./js/components/subscription/onetime.js");
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscription */ "./js/components/subscription/subscription.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
  var [inputSwitch, setInputSwitch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('onetime');
  var [data, updateData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  console.log(data, "data");
  var handleSwitch = event => {
    var value = event.target.value;
    setInputSwitch(value);
    var inputs = document.querySelectorAll('input[type="radio"][name="purchase"]');
    inputs.forEach(input => {
      if (input.value === value) {
        input.classList.add('active');
      } else {
        input.classList.remove('active');
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateData(prevData => [...prevData, ...shopifyData.data]);
  }, []);
  if (data.length) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_subscription__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: data,
      handleSwitch: handleSwitch,
      inputSwitch: inputSwitch
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_onetime__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: data,
      handleSwitch: handleSwitch,
      inputSwitch: inputSwitch
    }));
  }
});

/***/ }),

/***/ "./js/components/subscription/subscription.js":
/*!****************************************************!*\
  !*** ./js/components/subscription/subscription.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SubscriptionContainer = _ref => {
  var {
    data = [],
    handleSwitch = () => {},
    inputSwitch = ""
  } = _ref;
  var [subscription, setSubscription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (data && data.length > 0) {
      var initialOption = data[0];
      setSubscription(initialOption);
    }
  }, [data]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var selectedPlanIdInputs = document.querySelectorAll("input[name='selling_plan']");
    selectedPlanIdInputs.forEach(input => {
      if (inputSwitch == "subscription") {
        input.value = subscription.id;
      } else {
        input.value = '';
      }
    });
  }, [inputSwitch, subscription]);
  var calculateDiscountedPrice = (offerType, price, percentage) => {
    var numericPrice = parseFloat(price.split("$")[1]);
    var flatRate = percentage / 100;
    if (offerType == 'percentage') {
      var discountedPrice = numericPrice * (1 - percentage / 100);
      return discountedPrice.toFixed(2);
    } else if (offerType == 'fixed_amount') {
      var fixedAmt = numericPrice - flatRate;
      return fixedAmt;
    } else if (offerType == 'price') {
      return flatRate.toFixed(2);
    }
  };
  var calculateOffer = (offerType, price, offerPercentage) => {
    if (offerType === "percentage") {
      return "".concat(offerPercentage, "%");
    } else if (offerType === "fixed_amount") {
      var newFixedAmountValue = offerPercentage / 100;
      return "$".concat(newFixedAmountValue.toFixed(2));
    } else if (offerType === "price") {
      var numericPrice = parseFloat(price.split("$")[1]);
      var newValue = numericPrice - offerPercentage / 100;
      return "$".concat(newValue.toFixed(2));
    }
  };
  var handleSelectChange = event => {
    var selectedOptionObject = data.find(item => item.id === event.target.value);
    setSubscription(selectedOptionObject);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription-container__value-crossBtn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subscription-container__value-tag"
  }, "Purchase Options")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription-container__subs-one-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription-container__subscription-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription-container__subs-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    id: "subscribeSave",
    name: "purchase",
    value: "subscription",
    onChange: handleSwitch,
    checked: inputSwitch === 'subscription'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "subscribeSave"
  }, subscription && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "subscribeSave__text"
  }, "SUBSCRIBE & SAVE ", calculateOffer(subscription.priceAdjustments, subscription.price[0].variantPrice, subscription.offerPercentage)), data.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription-container__dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "delivery",
    id: "interval",
    className: "subscription-container__dropbtn",
    defaultValue: "",
    onChange: handleSelectChange
  }, data && data.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    key: index,
    value: item.id
  }, item.options)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription-container__dropdown"
  }, data && data.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subscription-container__dropbtn-single",
    key: index,
    value: item.id
  }, item.options)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subscription-container__subs-price"
  }, subscription && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subscription-container__subs-compPrice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'black',
      textDecoration: 'line-through',
      textDecorationColor: 'var(--gsc-button-background-color-100)'
    }
  }, subscription.price[0].variantPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subscription-container__subs-actualPrice"
  }, "$", calculateDiscountedPrice(subscription.priceAdjustments, subscription.price[0].variantPrice, subscription.offerPercentage)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscriptionContainer);

/***/ })

}]);