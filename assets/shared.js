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
		"shared"
	],
	"./ImageWithTextSplit.js": [
		"./js/components/sections/ImageWithTextSplit.js",
		"vendors",
		"shared"
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

/***/ "./js/components lazy recursive ^\\.\\/.*$":
/*!***********************************************************************************!*\
  !*** ./js/components/ lazy ^\.\/.*$ chunkName: drawer-component namespace object ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Carousel": [
		"./js/components/Carousel.js",
		"vendors",
		"shared"
	],
	"./Carousel.js": [
		"./js/components/Carousel.js",
		"vendors",
		"shared"
	],
	"./ImageCard": [
		"./js/components/ImageCard.js",
		"vendors",
		"shared"
	],
	"./ImageCard.js": [
		"./js/components/ImageCard.js",
		"vendors",
		"shared"
	],
	"./ProductCard": [
		"./js/components/ProductCard.js",
		"vendors",
		"shared"
	],
	"./ProductCard.js": [
		"./js/components/ProductCard.js",
		"vendors",
		"shared"
	],
	"./ProductCarousel": [
		"./js/components/ProductCarousel.js",
		"vendors",
		"shared"
	],
	"./ProductCarousel.js": [
		"./js/components/ProductCarousel.js",
		"vendors",
		"shared"
	],
	"./ResponsiveImage": [
		"./js/components/ResponsiveImage.js",
		"shared"
	],
	"./ResponsiveImage.js": [
		"./js/components/ResponsiveImage.js",
		"shared"
	],
	"./SlideshowComponent": [
		"./js/components/SlideshowComponent.js",
		"vendors",
		"shared",
		"drawer-component10"
	],
	"./SlideshowComponent.js": [
		"./js/components/SlideshowComponent.js",
		"vendors",
		"shared",
		"drawer-component10"
	],
	"./breakpoints": [
		"./js/components/breakpoints.js",
		"shared"
	],
	"./breakpoints.js": [
		"./js/components/breakpoints.js",
		"shared"
	],
	"./carousel-items": [
		"./js/components/carousel-items.js",
		"shared"
	],
	"./carousel-items.js": [
		"./js/components/carousel-items.js",
		"shared"
	],
	"./constants": [
		"./js/components/constants.js",
		"shared"
	],
	"./constants.js": [
		"./js/components/constants.js",
		"shared"
	],
	"./contexts/breakpointContextWrapper": [
		"./js/components/contexts/breakpointContextWrapper.js",
		"shared"
	],
	"./contexts/breakpointContextWrapper.js": [
		"./js/components/contexts/breakpointContextWrapper.js",
		"shared"
	],
	"./custom-carousel": [
		"./js/components/custom-carousel.js",
		"vendors",
		"shared"
	],
	"./custom-carousel.js": [
		"./js/components/custom-carousel.js",
		"vendors",
		"shared"
	],
	"./drawer": [
		"./js/components/drawer.js"
	],
	"./drawer.js": [
		"./js/components/drawer.js"
	],
	"./homepage": [
		"./js/components/homepage.js",
		"vendors",
		"shared"
	],
	"./homepage.js": [
		"./js/components/homepage.js",
		"vendors",
		"shared"
	],
	"./icon": [
		"./js/components/icon.js",
		"drawer-component26"
	],
	"./icon.js": [
		"./js/components/icon.js",
		"drawer-component26"
	],
	"./image-with-text": [
		"./js/components/image-with-text.js",
		"vendors",
		"shared"
	],
	"./image-with-text.js": [
		"./js/components/image-with-text.js",
		"vendors",
		"shared"
	],
	"./megamenu/desktop-megamenu-nav": [
		"./js/components/megamenu/desktop-megamenu-nav.js",
		"vendors",
		"shared"
	],
	"./megamenu/desktop-megamenu-nav.js": [
		"./js/components/megamenu/desktop-megamenu-nav.js",
		"vendors",
		"shared"
	],
	"./megamenu/desktop-megamenu-product": [
		"./js/components/megamenu/desktop-megamenu-product.js",
		"shared"
	],
	"./megamenu/desktop-megamenu-product.js": [
		"./js/components/megamenu/desktop-megamenu-product.js",
		"shared"
	],
	"./megamenu/mobile-account-drawer": [
		"./js/components/megamenu/mobile-account-drawer.js",
		"shared"
	],
	"./megamenu/mobile-account-drawer.js": [
		"./js/components/megamenu/mobile-account-drawer.js",
		"shared"
	],
	"./megamenu/mobile-megamenu-nav": [
		"./js/components/megamenu/mobile-megamenu-nav.js",
		"shared"
	],
	"./megamenu/mobile-megamenu-nav.js": [
		"./js/components/megamenu/mobile-megamenu-nav.js",
		"shared"
	],
	"./megamenu/mobile-megamenu-product": [
		"./js/components/megamenu/mobile-megamenu-product.js",
		"shared"
	],
	"./megamenu/mobile-megamenu-product.js": [
		"./js/components/megamenu/mobile-megamenu-product.js",
		"shared"
	],
	"./reactWrapper": [
		"./js/components/reactWrapper.js"
	],
	"./reactWrapper.js": [
		"./js/components/reactWrapper.js"
	],
	"./sections/Banner": [
		"./js/components/sections/Banner.js",
		"vendors",
		"shared",
		"module0"
	],
	"./sections/Banner.js": [
		"./js/components/sections/Banner.js",
		"vendors",
		"shared",
		"module0"
	],
	"./sections/FeaturedProducts": [
		"./js/components/sections/FeaturedProducts.js",
		"vendors",
		"shared",
		"module1"
	],
	"./sections/FeaturedProducts.js": [
		"./js/components/sections/FeaturedProducts.js",
		"vendors",
		"shared",
		"module1"
	],
	"./sections/FeaturedProductsWithMedia": [
		"./js/components/sections/FeaturedProductsWithMedia.js",
		"vendors",
		"shared",
		"module2"
	],
	"./sections/FeaturedProductsWithMedia.js": [
		"./js/components/sections/FeaturedProductsWithMedia.js",
		"vendors",
		"shared",
		"module2"
	],
	"./sections/ImageBlock": [
		"./js/components/sections/ImageBlock.js",
		"vendors",
		"shared"
	],
	"./sections/ImageBlock.js": [
		"./js/components/sections/ImageBlock.js",
		"vendors",
		"shared"
	],
	"./sections/ImageWithTextSplit": [
		"./js/components/sections/ImageWithTextSplit.js",
		"vendors",
		"shared"
	],
	"./sections/ImageWithTextSplit.js": [
		"./js/components/sections/ImageWithTextSplit.js",
		"vendors",
		"shared"
	],
	"./store-locator": [
		"./js/components/store-locator.js",
		"shared"
	],
	"./store-locator-modal": [
		"./js/components/store-locator-modal.js",
		"vendors",
		"drawer-component53"
	],
	"./store-locator-modal.js": [
		"./js/components/store-locator-modal.js",
		"vendors",
		"drawer-component53"
	],
	"./store-locator.js": [
		"./js/components/store-locator.js",
		"shared"
	],
	"./subscription/onetime": [
		"./js/components/subscription/onetime.js",
		"shared"
	],
	"./subscription/onetime.js": [
		"./js/components/subscription/onetime.js",
		"shared"
	],
	"./subscription/subscription": [
		"./js/components/subscription/subscription.js",
		"shared"
	],
	"./subscription/subscription-selector": [
		"./js/components/subscription/subscription-selector.js",
		"shared"
	],
	"./subscription/subscription-selector.js": [
		"./js/components/subscription/subscription-selector.js",
		"shared"
	],
	"./subscription/subscription.js": [
		"./js/components/subscription/subscription.js",
		"shared"
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
webpackAsyncContext.id = "./js/components lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./js/components/Carousel.js":
/*!***********************************!*\
  !*** ./js/components/Carousel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


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
  var prevRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var nextRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    onInit: swiper => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    pagination: settings.pagination && {
      clickable: true
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.A11y],
    onSwiper: swiper => console.log(swiper)
  }), children.map((slide, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
      key: index
    }, slide);
  })), settings.navigation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    ref: prevRef,
    className: "swiper_navigation navigation__prev"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    ref: nextRef,
    className: "swiper_navigation navigation__next"
  })));
});

/***/ }),

/***/ "./js/components/ImageCard.js":
/*!************************************!*\
  !*** ./js/components/ImageCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    block,
    imageFit,
    aspectratio = 1
  } = _ref;
  var {
    image_source: image,
    collection_title
  } = block;
  var imageObj = _objectSpread({
    id: Date.now()
  }, image);
  var imageSettings = {
    imageFit
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collection-item animation--item",
    "data-image-crop": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: block.collection,
    className: "collection-item__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collection-item__image__wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "image collection-item__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ResponsiveImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: imageObj,
    aspectratio: aspectratio,
    settings: imageSettings,
    imageFit: imageFit
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collection-item__meta collection-item__title ff-heading fs-body-100",
    "data-text-alignment": "center"
  }, collection_title)));
});

/***/ }),

/***/ "./js/components/ProductCard.js":
/*!**************************************!*\
  !*** ./js/components/ProductCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  var productParent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.initProductItem(productParent.current);
  }, []);
  var [{
    price,
    variant_id,
    compare_at_price
  }] = variantData || [];
  var originalPrice = price;
  var convertedPrice = (originalPrice / 100).toFixed(2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "product__container",
    ref: productParent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
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
    image: imageObj
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
  })))))))))))));
});

/***/ }),

/***/ "./js/components/ProductCarousel.js":
/*!******************************************!*\
  !*** ./js/components/ProductCarousel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ "./js/components/ProductCard.js");
/* harmony import */ var _carousel_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel-items */ "./js/components/carousel-items.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    products = [],
    parentRef
  } = _ref;
  var carouselSettings = JSON.stringify({
    "slidesPerView": 2.5,
    "spaceBetween": "12px",
    "navigation": false,
    "overflowNagivation": true,
    "speed": 600,
    "autoplay": {
      "delay": 3000
    },
    "breakpoints": {
      "768": {
        "slidesPerView": 3.2,
        "spaceBetween": "16px",
        "pagination": true
      },
      "1024": {
        "slidesPerView": 4,
        "spaceBetween": "24px",
        "pagination": true,
        "navigation": true
      }
    }
  });
  var sliderSettings = {
    paginationWrapperClass: 'swiper-pagination--dot',
    parentRef
    //pass navigationWrapperClassas for a custom navigation class
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("custom-carousel", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carousel_items__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: sliderSettings
  }, products.map((product, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product: product,
    key: index
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    "data-settings": true,
    type: "text/json"
  }, carouselSettings)));
});

/***/ }),

/***/ "./js/components/ResponsiveImage.js":
/*!******************************************!*\
  !*** ./js/components/ResponsiveImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ "./js/components/breakpoints.js":
/*!**************************************!*\
  !*** ./js/components/breakpoints.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentBreakpoint: () => (/* binding */ getCurrentBreakpoint)
/* harmony export */ });
/* harmony import */ var JsComponents_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/constants */ "./js/components/constants.js");

var getCurrentBreakpoint = () => {
  var browserWidth = window.innerWidth;
  var getCurrentBreakpoint = () => {
    var matchedBreakpointArray = [];
    if (JsComponents_constants__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINTS) {
      var currentBreakpointIndex = 0;
      for (var breakpoint of Object.keys(JsComponents_constants__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINTS)) {
        if (browserWidth >= breakpoint) {
          matchedBreakpointArray.push(parseInt(breakpoint));
        }
        currentBreakpointIndex = currentBreakpointIndex + 1;
      }
    }
    var selectedBreakpoint = matchedBreakpointArray.toSorted((a, b) => b - a)[0];
    return JsComponents_constants__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINTS[selectedBreakpoint];
  };
  return getCurrentBreakpoint();
};
window.addEventListener('resize', () => {
  getCurrentBreakpoint();
});

/***/ }),

/***/ "./js/components/carousel-items.js":
/*!*****************************************!*\
  !*** ./js/components/carousel-items.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var JsComponents_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/constants */ "./js/components/constants.js");



var SwiperWrapper = _ref => {
  var {
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel__container swiper",
    "data-swiper-container": true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "swiper-wrapper"
  }, children.map((renderedComponent, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "swiper-slide",
      key: index
    }, renderedComponent);
  })));
};
var Navigation = _ref2 => {
  var {
    wrapperClass,
    container
  } = _ref2;
  var childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "swiper-navigations ".concat(wrapperClass),
    "data-navigations": true
  });
  return container ? /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(childNode, container) : childNode;
};
var Pagination = _ref3 => {
  var {
    wrapperClass,
    container
  } = _ref3;
  var childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "swiper-pagination ".concat(wrapperClass),
    "data-pagination": true
  });
  return container ? /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(childNode, container) : childNode;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref4 => {
  var {
    children = [],
    settings = {}
  } = _ref4;
  var {
    parentRef,
    navigationWrapperClass = '',
    paginationWrapperClass = ''
  } = settings;
  var paginationContainer = parentRef && parentRef.querySelector(JsComponents_constants__WEBPACK_IMPORTED_MODULE_2__.CAROUSEL["paginationWrapper"]);
  var navigationContainer = parentRef && parentRef.querySelector(JsComponents_constants__WEBPACK_IMPORTED_MODULE_2__.CAROUSEL["navigationWrapper"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SwiperWrapper, {
    children: children
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Navigation, {
    wrapperClass: navigationWrapperClass,
    container: navigationContainer
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Pagination, {
    wrapperClass: paginationWrapperClass,
    container: paginationContainer
  }));
});

/***/ }),

/***/ "./js/components/constants.js":
/*!************************************!*\
  !*** ./js/components/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BREAKPOINTS: () => (/* binding */ BREAKPOINTS),
/* harmony export */   CAROUSEL: () => (/* binding */ CAROUSEL)
/* harmony export */ });
var BREAKPOINTS = {
  "0": "default",
  "769": "sm",
  "1024": "md",
  "1200": "lg"
};
var CAROUSEL = {
  paginationWrapper: '[data-pagination-wrapper]',
  navigationWrapper: '[data-navigation-wrapper]',
  paginationType: {
    "bars": "bars",
    "dots": "dots"
  }
};

/***/ }),

/***/ "./js/components/contexts/breakpointContextWrapper.js":
/*!************************************************************!*\
  !*** ./js/components/contexts/breakpointContextWrapper.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakPointContext: () => (/* binding */ BreakPointContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breakpoints */ "./js/components/breakpoints.js");


var BreakPointContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)((0,_breakpoints__WEBPACK_IMPORTED_MODULE_1__.getCurrentBreakpoint)());

/***/ }),

/***/ "./js/components/custom-carousel.js":
/*!******************************************!*\
  !*** ./js/components/custom-carousel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var JsComponents_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! JsComponents/constants */ "./js/components/constants.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


var _excluded = ["breakpoints"],
  _excluded2 = ["pagination", "navigation"],
  _excluded3 = ["navigation", "pagination", "progressPagination", "paginationType"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




class CustomCarousel extends HTMLElement {
  constructor() {
    super();
    this.carouselSettings;
    this.currentWidth;
    this.innerHTML;
    this.container;
  }
  connectedCallback() {
    this.initCarousel();
  }
  getCarouselSettings() {
    var {
      paginationType: readOnlyPaginationType
    } = JsComponents_constants__WEBPACK_IMPORTED_MODULE_4__.CAROUSEL;
    this.currentWidth = window.innerWidth;
    //default settings
    var defaultSettings = {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 1000,
      navigation: false
    };
    var carouselSettings = defaultSettings;
    //end of default settings 

    //handle breakpoint
    var _this$carouselSetting = this.carouselSettings,
      {
        breakpoints
      } = _this$carouselSetting,
      otherSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$carouselSetting, _excluded);
    if (breakpoints) {
      this.breakpoints = Object.keys(breakpoints);
      this.breakpoints.forEach((breakpoint, index) => {
        if (this.currentWidth >= breakpoint) {
          if (breakpoints[breakpoint]) {
            this.breakpointSettings = breakpoints[breakpoint];
          } else {
            this.breakpointSettings = breakpoints[this.breakpoints[index - 1]];
          }
          var _this$breakpointSetti = this.breakpointSettings,
            {
              pagination,
              navigation
            } = _this$breakpointSetti,
            otherResponsiveSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$breakpointSetti, _excluded2);
          this.carouselSettings = _objectSpread(_objectSpread(_objectSpread({}, otherSettings), otherResponsiveSettings), {}, {
            pagination,
            navigation
          });
        }
      });
    }
    if (this.carouselSettings && Object.keys(this.carouselSettings).length > 0) {
      var _this$carouselSetting2 = this.carouselSettings,
        {
          navigation,
          pagination,
          progressPagination,
          paginationType = readOnlyPaginationType["dots"]
        } = _this$carouselSetting2,
        otherSwiperSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$carouselSetting2, _excluded3);
      carouselSettings = _objectSpread({}, otherSwiperSettings);
      if (navigation) {
        var navigationNext = this.parent.querySelector('[data-navigation-next]');
        var navigationPrev = this.parent.querySelector('[data-navigation-prev]');
        carouselSettings = _objectSpread(_objectSpread({}, carouselSettings), {}, {
          navigation: {
            nextEl: navigationNext,
            prevEl: navigationPrev
          }
        });
      }
      if (pagination) {
        var swiperPagination = this.parent.querySelector('[data-pagination]');
        var _pagination = {
          el: swiperPagination,
          clickable: true
        };
        if (paginationType == "bars") {
          _pagination = {
            el: swiperPagination,
            clickable: true,
            type: 'custom',
            renderCustom: (swiper, current, total) => {
              var text = '';
              Array(total).fill().forEach((_, index) => {
                text += "<div class='swiper-pagination-bullet swiper-pagination--bar ".concat(index == current - 1 ? 'swiper-pagination-active' : '', " '>\n                    <div class=\"swiper-pagination__progress\"></div>\n                  </div>");
              });
              return text;
            }
          };
        }
        if (progressPagination) {
          _pagination = {
            el: swiperPagination,
            type: 'progressbar'
          };
        }
        carouselSettings = _objectSpread(_objectSpread({}, carouselSettings), {}, {
          pagination: _pagination
        });
      }
    }
    return carouselSettings;
  }
  initCarousel() {
    var _this$querySelector, _this$querySelector2;
    this.parent = this.closest('[data-parent]');
    this.carouselSettings = JSON.parse(((_this$querySelector = this.querySelector('[data-settings]')) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.innerHTML) || "{}");
    this.placeholders = (_this$querySelector2 = this.querySelector('[data-carousel-placeholder]')) === null || _this$querySelector2 === void 0 ? void 0 : _this$querySelector2.innerHTML;
    this.navigations = this.parent.querySelector('[data-navigations]');
    this.currentWidth = window.innerWidth;
    var swiperNavigationElements = "\n      <div data-navigation-next data-navigation  class=\"swiper-navigation swiper-navigation--next ".concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 12.4016H11.5H23M23 12.4016L13.8 3M23 12.4016L13.8 21.8032\" stroke=\"currentColor\" stroke-width=\"1.75\"></path></svg>\n    </div>\n    <div data-navigation-prev data-navigation class=\"swiper-navigation swiper-navigation--prev ").concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 12.4016H11.5H23M23 12.4016L13.8 3M23 12.4016L13.8 21.8032\" stroke=\"currentColor\" stroke-width=\"1.75\"></path></svg>\n    </div>\n    ");
    this.carouselSettings['customNavigation'] ? '' : this.navigations.innerHTML = swiperNavigationElements;
    this.container = this.querySelector('[data-swiper-container]');
    var carouselSettings = this.getCarouselSettings();
    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](this.container, _objectSpread({
      on: {
        beforeInit: () => {
          var {
            navigation,
            pagination
          } = carouselSettings || {};
          if (!navigation) {
            this.parent.querySelectorAll('[data-navigation]').forEach(navigation => navigation.classList.add('swiper-navigation--hide'));
          } else {
            this.parent.querySelector('.swiper-navigation--hide') && this.querySelectorAll('.swiper-navigation--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
          if (!pagination) {
            this.parent.querySelectorAll('.swiper-pagination').forEach(navigation => navigation.classList.add('swiper-pagination--hide'));
          } else {
            this.parent.querySelector('.swiper-pagination--hide') && this.querySelectorAll('.swiper-pagination--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
        },
        init: () => {
          var _this$parent$querySel;
          var currentSlider = (_this$parent$querySel = this.parent.querySelectorAll('.swiper-pagination-bullet')[0]) === null || _this$parent$querySel === void 0 ? void 0 : _this$parent$querySel.querySelector('.swiper-pagination__progress');
          if (currentSlider) {
            gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(currentSlider, {
              width: "100%",
              duration: 4,
              "ease": "ease"
            });
          }
        }
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Autoplay]
    }, carouselSettings));
    this.swiper.on('activeIndexChange', current => {
      var _this$parent$querySel2;
      var currentSlider = this.parent.querySelectorAll('.swiper-pagination-bullet')[current.activeIndex];
      (_this$parent$querySel2 = this.parent.querySelector('.swiper-pagination-bullet-active')) === null || _this$parent$querySel2 === void 0 || _this$parent$querySel2.classList.remove('swiper-pagination-bullet-active');
      currentSlider === null || currentSlider === void 0 || currentSlider.classList.add('swiper-pagination-bullet-active');
    });
    this.swiper.on('slideChange', current => {
      var _this$parent$querySel3;
      var currentSlider = (_this$parent$querySel3 = this.parent.querySelectorAll('.swiper-pagination-bullet')[current.activeIndex]) === null || _this$parent$querySel3 === void 0 ? void 0 : _this$parent$querySel3.querySelector('.swiper-pagination__progress');
      gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(currentSlider, {
        width: "100%",
        duration: 4,
        "ease": "ease"
      });
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCarousel);

/***/ }),

/***/ "./js/components/drawer.js":
/*!*********************************!*\
  !*** ./js/components/drawer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modern_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modern-drawer */ "./node_modules/react-modern-drawer/dist/index.modern.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [Component, setComponent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [isComponentLoaded, setComponentLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var updateDrawerContent = (componentName, data) => {
    __webpack_require__("./js/components lazy recursive ^\\.\\/.*$")("./".concat(componentName)).then(module => {
      var Component = module.default;
      setComponent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {
        data: data
      }));
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Component) {
      setComponentLoaded(true);
      setActive(true);
    }
  }, [Component]);
  var openDrawer = () => {
    setActive(true);
  };
  var closeDrawer = () => {
    setActive(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.drawer = {
      update: updateDrawerContent,
      open: openDrawer,
      close: closeDrawer
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "drawer ".concat(active ? 'drawer--active' : '')
  }, active && isComponentLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_modern_drawer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: active,
    onClose: closeDrawer,
    direction: "right",
    className: "drawer__container"
  }, Component));
});

/***/ }),

/***/ "./js/components/homepage.js":
/*!***********************************!*\
  !*** ./js/components/homepage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  var getSectionData = () => {
    (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var loader = document.querySelector('.product-card-item__placeholder');
      loader.style.display = 'block';
      var bannerLoader = document.querySelector('.banner_loader_section');
      bannerLoader.style.display = 'block';
      var handle = window.localStorage.getItem('location-page');
      var data = yield fetch("/pages/".concat(handle));
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
        var _loader = document.querySelector('.product-card-item__placeholder');
        _loader.style.display = 'none';
        var _bannerLoader = document.querySelector('.banner_loader_section');
        _bannerLoader.style.display = 'none';
      }
      updateSections(sections);
    })();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getSectionData();
  }, []);
  window.updateHomepage = getSectionData;
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var JsComponents_ResponsiveImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! JsComponents/ResponsiveImage */ "./js/components/ResponsiveImage.js");
/* harmony import */ var JsComponents_contexts_breakpointContextWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JsComponents/contexts/breakpointContextWrapper */ "./js/components/contexts/breakpointContextWrapper.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data: curatedData,
    wrapperClass,
    enableTint
  } = _ref;
  var currentBreakpoint = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(JsComponents_contexts_breakpointContextWrapper__WEBPACK_IMPORTED_MODULE_2__.BreakPointContext);
  var selectedBreakpoinData = curatedData[currentBreakpoint] || curatedData["default"];
  var {
    media: {
      image,
      ratio,
      gridColumn: mediaGridColumn,
      gridRow: mediagridRow
    },
    content: {
      textColor,
      gridColumn: contentGridColumn,
      gridRow: contentgridRow
    }
  } = selectedBreakpoinData;
  var imageObj = _objectSpread({
    id: Date.now()
  }, image);
  function createMarkup() {
    var htmlContent = "".concat(heading);
    return {
      __html: htmlContent
    };
  }
  var contentStyle = {
    color: textColor,
    gridColumn: contentGridColumn,
    gridRow: contentgridRow
  };
  var mediaStyle = {
    gridColumn: mediaGridColumn,
    gridRow: mediagridRow
  };
  var {
    heading,
    description,
    subheading,
    styleClass,
    url,
    button,
    themeHeadingClasses
  } = curatedData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "image-text ".concat(wrapperClass, " ")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "image-text__images image-text__images--".concat(wrapperClass, " image-text__images--").concat(styleClass),
    style: mediaStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(JsComponents_ResponsiveImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: imageObj,
    aspectratio: "".concat(ratio),
    settings: {
      imageFit: "cover"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "image-text__content-wrapper image-text__content-wrapper--".concat(styleClass)
  }, enableTint && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "carousel__tint"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "image-text__content image-text__content--".concat(wrapperClass),
    style: contentStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "image-text__subheading fs-accent section-blocks__accent accent__text"
  }, subheading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
    className: "image-text__heading image-text__text ".concat(themeHeadingClasses),
    dangerouslySetInnerHTML: createMarkup()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "image-text__description"
  }, description), url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "image-text__button section-blocks__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "btn btn--primary",
    href: url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, button))))));
});

/***/ }),

/***/ "./js/components/megamenu/desktop-megamenu-nav.js":
/*!********************************************************!*\
  !*** ./js/components/megamenu/desktop-megamenu-nav.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ "./js/components/megamenu/desktop-megamenu-product.js":
/*!************************************************************!*\
  !*** ./js/components/megamenu/desktop-megamenu-product.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ "./js/components/megamenu/mobile-account-drawer.js":
/*!*********************************************************!*\
  !*** ./js/components/megamenu/mobile-account-drawer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ "./js/components/megamenu/mobile-megamenu-nav.js":
/*!*******************************************************!*\
  !*** ./js/components/megamenu/mobile-megamenu-nav.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _mobile_account_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-account-drawer */ "./js/components/megamenu/mobile-account-drawer.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
  console.log(shopifyData, 'shopifyData');
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

/***/ "./js/components/megamenu/mobile-megamenu-product.js":
/*!***********************************************************!*\
  !*** ./js/components/megamenu/mobile-megamenu-product.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ "./js/components/reactWrapper.js":
/*!***************************************!*\
  !*** ./js/components/reactWrapper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ "./js/components/sections/ImageBlock.js":
/*!**********************************************!*\
  !*** ./js/components/sections/ImageBlock.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    aspectratio = 1,
    slides
  } = data;
  var settings = {
    "slidesPerView": 2.1,
    "navigation": false,
    "pagination": false,
    "spaceBetween": "12px",
    "breakpoints": {
      "768": {
        "slidesPerView": 3.2,
        "spaceBetween": "16px"
      },
      "1024": {
        "slidesPerView": "".concat(slides),
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

/***/ }),

/***/ "./js/components/sections/ImageWithTextSplit.js":
/*!******************************************************!*\
  !*** ./js/components/sections/ImageWithTextSplit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./js/components/store-locator.js":
/*!****************************************!*\
  !*** ./js/components/store-locator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SvgIcon: () => (/* binding */ SvgIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

  //switch for drawer
  var isDrawer = false;
  //switch for dynamic content
  var isDynamic = false;
  var toggleDrawer = () => {
    //load the component from js/component into the modal and pass the data
    window.drawer.update('store-locator-modal', {
      data: curatedData
    });
  };
  var toggleDropdown = () => {
    setDropDownActive(!isDropdownActive);
  };
  var handleSelection = location => {
    setSelectedLocation(location);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.localStorage.setItem("location", selectedLocation.id);
    window.localStorage.setItem("location-page", selectedLocation.handle);
    isDynamic && window.updateHomepage && window.updateHomepage();
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
    onClick: isDrawer ? toggleDrawer : toggleDropdown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "store-locator__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Shop from")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "store-locator--dropdown store-locator__location ".concat(isDropdownActive ? 'select-clicked' : ''),
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
      href: "".concat(isDynamic ? '#' : "".concat(url, "?filter.v.availability=1")),
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

/***/ "./js/components/subscription/onetime.js":
/*!***********************************************!*\
  !*** ./js/components/subscription/onetime.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ "./js/components/subscription/subscription-selector.js":
/*!*************************************************************!*\
  !*** ./js/components/subscription/subscription-selector.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
__webpack_require__.r(__webpack_exports__);
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