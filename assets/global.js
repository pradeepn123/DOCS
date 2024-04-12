/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/subscription/megamenu-product.js":
/*!********************************************************!*\
  !*** ./js/components/subscription/megamenu-product.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    shopifyData
  } = _ref;
  console.log(shopifyData, 'data');
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
      alt: "Alastin C-RADICAL Defense Antioxidant Serum",
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
      navigation,
      product_list: products
    }
  } = shopifyData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "meganav__nav",
    "data-column-count": "4",
    "data-show-column-dividers": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "meganav__list-parent",
    depth: "0",
    "data-show-column-dividers": "true"
  }, navigation.map((nav, index) => {
    var {
      menu_link: link,
      menu_title: title,
      sub_menu_title: subMenuTitle
    } = nav;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "meganav__list-child animation--dropdown-item has-children",
      depth: "0",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "has-children fs-accent-bold"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: link,
      title: ""
    }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      depth: "1"
    }, subMenuTitle.map((submenu, index) => {
      var {
        title,
        url
      } = submenu;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "fs-body-100",
        href: url
      }, title));
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "meganav__column-rule",
    "data-index": "1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "meganav__column-rule",
    "data-index": "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "meganav__column-rule",
    "data-index": "3"
  })));
});

/***/ }),

/***/ "./js/sections/global.js":
/*!*******************************!*\
  !*** ./js/sections/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _store_locator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store-locator */ "./js/sections/store-locator.js");
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription */ "./js/sections/subscription.js");
/* harmony import */ var _megamenu_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./megamenu-nav */ "./js/sections/megamenu-nav.js");
/* harmony import */ var _megamenu_product_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./megamenu-product-nav */ "./js/sections/megamenu-product-nav.js");




window.initMegamenuNav = _megamenu_nav__WEBPACK_IMPORTED_MODULE_0__["default"];
window.initMegamenuNavProduct = _megamenu_product_nav__WEBPACK_IMPORTED_MODULE_1__["default"];
document.addEventListener('DOMContentLoaded', () => {
  (0,_store_locator__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_subscription__WEBPACK_IMPORTED_MODULE_3__["default"])();
  // megamenunav()
});

/***/ }),

/***/ "./js/sections/megamenu-nav.js":
/*!*************************************!*\
  !*** ./js/sections/megamenu-nav.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/reactWrapper */ "./js/components/reactWrapper.js");
/* harmony import */ var ReactComponents_megamenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ReactComponents/megamenu */ "./js/components/subscription/megamenu.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(ReactComponents_megamenu__WEBPACK_IMPORTED_MODULE_1__["default"], 'react-megamenu', '#meganav-menu');
});

/***/ }),

/***/ "./js/sections/megamenu-product-nav.js":
/*!*********************************************!*\
  !*** ./js/sections/megamenu-product-nav.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/reactWrapper */ "./js/components/reactWrapper.js");
/* harmony import */ var ReactComponents_megamenu_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ReactComponents/megamenu-product */ "./js/components/subscription/megamenu-product.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(ReactComponents_megamenu_product__WEBPACK_IMPORTED_MODULE_1__["default"], 'react-megamenu-product', '#meganav-menu-product');
});

/***/ }),

/***/ "./js/sections/store-locator.js":
/*!**************************************!*\
  !*** ./js/sections/store-locator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  document.querySelectorAll('[data-dropdown-wrapper]').forEach(dropdown => {
    var _menu, _dropdownSelect, _dropdownSelect3;
    var dropdownSelect = dropdown === null || dropdown === void 0 ? void 0 : dropdown.querySelector('[data-dropdown-select]');
    var caret = dropdown === null || dropdown === void 0 ? void 0 : dropdown.querySelector('[data-dropdown-caret]');
    var menu = dropdown === null || dropdown === void 0 ? void 0 : dropdown.querySelector('[data-dropdown-menu]');
    var options = (_menu = menu) === null || _menu === void 0 ? void 0 : _menu.querySelectorAll('[data-dropdown-selector]');
    var selected = (_dropdownSelect = dropdownSelect) === null || _dropdownSelect === void 0 ? void 0 : _dropdownSelect.querySelector('[data-dropdown-selected]');
    var toggleDropdown = () => {
      var _dropdownSelect2, _caret, _menu2;
      (_dropdownSelect2 = dropdownSelect) === null || _dropdownSelect2 === void 0 || _dropdownSelect2.classList.toggle('select-clicked');
      (_caret = caret) === null || _caret === void 0 || _caret.classList.toggle('caret-rotate');
      (_menu2 = menu) === null || _menu2 === void 0 || _menu2.classList.toggle('menu-open');
    };
    (_dropdownSelect3 = dropdownSelect) === null || _dropdownSelect3 === void 0 || _dropdownSelect3.addEventListener('click', toggleDropdown);
    options.forEach(option => {
      option.addEventListener('click', () => {
        console.log(option.querySelector('[store-name]').innerText, "option");
        selected.innerText = option.querySelector('[store-name]').innerText;
        [('', (0,_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("dropdownSelect")), ('', (0,_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("caret")), ('', (0,_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("menu"))].forEach(el => el === null || el === void 0 ? void 0 : el.classList.remove('select-clicked', 'caret-rotate', 'menu-open'));
        options.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
      });
    });
    var handleDropdownContainer = event => {
      if (!dropdown.contains(event.target)) [dropdownSelect, caret, menu].forEach(el => el === null || el === void 0 ? void 0 : el.classList.remove('select-clicked', 'caret-rotate', 'menu-open'));
    };
    ['click', 'scroll'].forEach(eventType => document.addEventListener(eventType, handleDropdownContainer));
  });
});

/***/ }),

/***/ "./js/sections/subscription.js":
/*!*************************************!*\
  !*** ./js/sections/subscription.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/reactWrapper */ "./js/components/reactWrapper.js");
/* harmony import */ var ReactComponents_subscription_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ReactComponents/subscription-selector */ "./js/components/subscription/subscription-selector.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(ReactComponents_subscription_selector__WEBPACK_IMPORTED_MODULE_1__["default"], 'subscriptions', '#subscription-data');
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"global": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","shared"], () => (__webpack_require__("./js/sections/global.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;