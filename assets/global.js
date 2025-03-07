/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/sections/custom-store-locatore.js":
/*!**********************************************!*\
  !*** ./js/sections/custom-store-locatore.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/reactWrapper */ "./js/components/reactWrapper.js");
/* harmony import */ var JsComponents_store_locator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/store-locator */ "./js/components/store-locator.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(JsComponents_store_locator__WEBPACK_IMPORTED_MODULE_1__["default"], 'store-locator', '#storeLocator-data');
});

/***/ }),

/***/ "./js/sections/global.js":
/*!*******************************!*\
  !*** ./js/sections/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription */ "./js/sections/subscription.js");
/* harmony import */ var _custom_store_locatore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-store-locatore */ "./js/sections/custom-store-locatore.js");
/* harmony import */ var _megamenu_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./megamenu-nav */ "./js/sections/megamenu-nav.js");
/* harmony import */ var _megamenu_product_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./megamenu-product-nav */ "./js/sections/megamenu-product-nav.js");
/* harmony import */ var _mobile_menu_product_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-menu-product-nav */ "./js/sections/mobile-menu-product-nav.js");
/* harmony import */ var _mobile_nav_menu_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-nav-menu-list */ "./js/sections/mobile-nav-menu-list.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage */ "./js/sections/homepage.js");
/* harmony import */ var JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! JsComponents/custom-carousel */ "./js/components/custom-carousel.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./js/sections/modal.js");









window.initMegamenuNav = _megamenu_nav__WEBPACK_IMPORTED_MODULE_0__["default"];
window.initMegamenuNavProduct = _megamenu_product_nav__WEBPACK_IMPORTED_MODULE_1__["default"];
window.initMobilemenuNavProduct = _mobile_menu_product_nav__WEBPACK_IMPORTED_MODULE_2__["default"];
window.initmobileMenuNav = _mobile_nav_menu_list__WEBPACK_IMPORTED_MODULE_3__["default"];
document.addEventListener('DOMContentLoaded', () => {
  (0,_modal__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_subscription__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_custom_store_locatore__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_homepage__WEBPACK_IMPORTED_MODULE_7__["default"])();
  customElements.define('custom-carousel', JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_8__["default"]);
});

/***/ }),

/***/ "./js/sections/homepage.js":
/*!*********************************!*\
  !*** ./js/sections/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/reactWrapper */ "./js/components/reactWrapper.js");
/* harmony import */ var _components_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/homepage */ "./js/components/homepage.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(_components_homepage__WEBPACK_IMPORTED_MODULE_1__["default"], 'Homepage', '#theme-files');
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
/* harmony import */ var JsComponents_megamenu_desktop_megamenu_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/megamenu/desktop-megamenu-nav */ "./js/components/megamenu/desktop-megamenu-nav.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(JsComponents_megamenu_desktop_megamenu_nav__WEBPACK_IMPORTED_MODULE_1__["default"], 'react-megamenu', '#meganav-menu');
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
/* harmony import */ var JsComponents_megamenu_desktop_megamenu_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/megamenu/desktop-megamenu-product */ "./js/components/megamenu/desktop-megamenu-product.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(JsComponents_megamenu_desktop_megamenu_product__WEBPACK_IMPORTED_MODULE_1__["default"], 'react-megamenu-product', '#meganav-menu-product');
});

/***/ }),

/***/ "./js/sections/mobile-menu-product-nav.js":
/*!************************************************!*\
  !*** ./js/sections/mobile-menu-product-nav.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/reactWrapper */ "./js/components/reactWrapper.js");
/* harmony import */ var JsComponents_megamenu_mobile_megamenu_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/megamenu/mobile-megamenu-product */ "./js/components/megamenu/mobile-megamenu-product.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(JsComponents_megamenu_mobile_megamenu_product__WEBPACK_IMPORTED_MODULE_1__["default"], 'mobile-react-megamenu-product', '#mobile-menu-product');
});

/***/ }),

/***/ "./js/sections/mobile-nav-menu-list.js":
/*!*********************************************!*\
  !*** ./js/sections/mobile-nav-menu-list.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/reactWrapper */ "./js/components/reactWrapper.js");
/* harmony import */ var JsComponents_megamenu_mobile_megamenu_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/megamenu/mobile-megamenu-nav */ "./js/components/megamenu/mobile-megamenu-nav.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(JsComponents_megamenu_mobile_megamenu_nav__WEBPACK_IMPORTED_MODULE_1__["default"], 'mobile-nav-menu-list', '#mobile-nav-menu-list');
});

/***/ }),

/***/ "./js/sections/modal.js":
/*!******************************!*\
  !*** ./js/sections/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JsComponents/drawer */ "./js/components/drawer.js");
/* harmony import */ var JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/reactWrapper */ "./js/components/reactWrapper.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_reactWrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(JsComponents_drawer__WEBPACK_IMPORTED_MODULE_1__["default"], 'drawer-component');
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "./" + chunkId + ".js?" + {"module0":"e0bafb239d9c5ecc6c1b","module1":"defd353290a49740eafa","module2":"947fd71ca2d12a2841fb","drawer-component10":"1bfc9c364827c64cb962","drawer-component26":"d8e9039baf4e94148b9f","drawer-component53":"0deb098e4c8f9290486f"}[chunkId] + "";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "shoptrade-Shopify-Development:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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