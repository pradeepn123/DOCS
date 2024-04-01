/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/sections/global.js":
/*!*******************************!*\
  !*** ./js/sections/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _store_locator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-locator */ "./js/sections/store-locator.js");
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscription */ "./js/sections/subscription.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_store_locator__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_subscription__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./js/sections/store-locator.js":
/*!**************************************!*\
  !*** ./js/sections/store-locator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");

// export default  () =>{
//     const storeLocator = document.querySelectorAll('[data-location]');
//     storeLocator.forEach(locator => {
//         locator.addEventListener('click', (e) => {
//             locator.closest('[data-location]').querySelector('.store-locator__location-list').classList.toggle('active')
//             locator.classList.toggle('rotate_arrow')
//         })

//     })
//     document.addEventListener('click', (e) => {
//         if(!e.target.closest('[data-location]')){
//             document.querySelector('.store-locator__location-list').classList.remove('active')
//             document.querySelectorAll('[data-location]').forEach(locator => {
//                 locator.classList.remove('rotate_arrow')
//             })
//         }
//     })
// }

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