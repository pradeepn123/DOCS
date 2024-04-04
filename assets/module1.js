"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module1"],{

/***/ "./js/components/ProductCard.js":
/*!**************************************!*\
  !*** ./js/components/ProductCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    product
  } = _ref;
  var {
    variants = []
  } = product || {};
  var variantData = variants.map(variant => {
    return {
      price: variant.price,
      id: variant.id,
      compare_at_price: variant.compare_at_price
    };
  });
  var [{
    price,
    id,
    compare_at_price
  }] = variantData || [];
  var originalPrice = price;
  var convertedPrice = (originalPrice / 100).toFixed(2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item animation--item",
    "data-input-item": "",
    "data-id": "8091513782403",
    "data-title": product.title,
    "data-url": product.link,
    "data-variant-id": "43813675630723",
    "data-quantity-in-cart": "0",
    "data-product-has-single-variant": "true",
    "data-quick-add-style": "icon",
    "data-product-item-alignment": "left",
    "data-price-position": "below_title",
    "data-show-inventory": "false",
    "data-ratings-visible": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__media-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__media",
    "data-aspect-ratio": "square"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "product-item__image-link",
    href: product.link,
    "aria-label": product.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image product-item__image aspect-ratio--square animation--lazy-load loaded",
    style: {
      "--object-fit": "contain"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: product.title,
    className: "image__img",
    loading: "lazy",
    width: "2500",
    height: "2500",
    src: product.image.src
  }))), product.discountPercentage > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-badges",
    "data-badge-shape": "pill",
    "data-badge-vertical-position": "bottom",
    "data-badge-horizontal-position": "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-badge",
    "data-type": "sale"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "product-badge__inner badge-shape",
    "data-badge-shape": "pill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "displayed-discount-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "data-badge-shape": "pill"
  }, "Sale"))))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-product-item-element-visible-only-for-mode": "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__floating-action-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "product-item__quick-view-button btn btn--rounded show-product-quick-view product-item__disc-button",
    href: product.link,
    title: "Quick View",
    "aria-label": "Quick View"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon icon-quick-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M12.0875 15.6805C13.9032 15.6805 15.375 14.2086 15.375 12.393C15.375 10.5773 13.9032 9.10547 12.0875 9.10547C10.2719 9.10547 8.80005 10.5773 8.80005 12.393C8.80005 14.2086 10.2719 15.6805 12.0875 15.6805Z",
    stroke: "currentColor",
    "stroke-width": "1.2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M22.489 11.7954C21.3901 10.5555 17.0224 6 11.8 6C6.57759 6 2.20992 10.5555 1.11096 11.7954C1.03921 11.8827 1 11.9923 1 12.1053C1 12.2184 1.03921 12.3279 1.11096 12.4153C2.20992 13.6552 6.57759 18.2107 11.8 18.2107C17.0224 18.2107 21.3901 13.6552 22.489 12.4153C22.5608 12.3279 22.6 12.2184 22.6 12.1053C22.6 11.9923 22.5608 11.8827 22.489 11.7954V11.7954Z",
    stroke: "currentColor",
    "stroke-width": "1.2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-product-item-element-visible-only-for-mode": "grid"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__text ta-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__text_group_primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ff-body fs-body-60 product-item__product-vendor"
  }, product.vendor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "product-item__product-title fs-product-title ff-body",
    "data-line-limit": "2",
    "data-base-size-setting": "16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: product.link
  }, product.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "data-product-item-element-visible-only-for-mode": "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-item__price-wrap",
    "data-position": "below_title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "product-item__price ff-product-price",
    "data-position": "below_title",
    "data-enlarged-prices": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "product-item__price-main"
  }, compare_at_price > convertedPrice ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("s", {
    className: "t-subdued"
  }, compare_at_price) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: compare_at_price > convertedPrice ? 'sale' : ''
  }, "$", convertedPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "displayed-discount-wrapper",
    "data-hidden": "false",
    "data-has-discount": "false"
  }, product.discountPercentage > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "displayed-discount badge-shape fs-body-60",
    "data-badge-shape": "pill"
  }, "Save ", product.discountPercentage, "%") : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dl", {
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
  }))))))))))));
});

/***/ }),

/***/ "./js/components/sections/FeaturedProducts.js":
/*!****************************************************!*\
  !*** ./js/components/sections/FeaturedProducts.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var JsComponents_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/ProductCard */ "./js/components/ProductCard.js");


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
    className: "section-header section-blocks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "ff-body fs-body-50 fs-accent section-header__preheading"
  }, data.preheading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "ff-heading section-header__heading fs-heading-3-base"
  }, data.heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "featured-collection__products featured-collection-slider-grid standard-grid-spacing product-item-holder",
    "data-standard-grid-spacing-type": "product-list",
    "data-grid-style": "default",
    "data-product-item-alignment": "left",
    "data-has-slider": "true",
    "data-slider-desktop": "true",
    "data-slider-mobile": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, data.products.map((product, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(JsComponents_ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    product: product,
    key: index
  }))))))));
});

/***/ })

}]);