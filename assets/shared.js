"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["shared"],{

/***/ "./js/components/reactWrapper.js":
/*!***************************************!*\
  !*** ./js/components/reactWrapper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./js/components/subscription/onetime.js":
/*!***********************************************!*\
  !*** ./js/components/subscription/onetime.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SvgIcon */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var storeCheckdIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n                        <circle cx=\"15\" cy=\"15\" r=\"15\" fill=\"#1B428A\"/>\n                        <path d=\"M8 14.5L13 19.5L21.5 11\" stroke=\"white\"/>\n                        </svg>";
var storeUnckeckIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n                        <circle cx=\"15\" cy=\"15\" r=\"15\" fill=\"#1B428A\"></circle>\n                        <path d=\"M8 14.5L13 19.5L21.5 11\" stroke=\"white\"></path>\n                        </svg>";
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
  debugger;
  var {
    data
  } = shopifyData || {};
  var curatedData = data.filter(item => item.id);
  var [selectedLocation, setSelectedLocation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(curatedData[0].id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "storeDd-wrapper",
    "data-dropdown-menu": true
  }, data.map((location, index) => {
    var {
      id,
      title,
      address
    } = location || {};
    console.log("iii", id);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "storeDd-wrapper__optionsWrap",
      "data-dropdown-selector": true,
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "/collections/clarkston",
      className: "storeDd-wrapper__options-box ".concat(id == selectedLocation ? "checked" : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "storeDd-wrapper__storeName",
      "store-name": true
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "storeDd-wrapper__text-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "storeDd-wrapper__storeAddress"
    }, address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "storeDd-wrapper__button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SvgIcon, {
      svgClass: "",
      icon: id == selectedLocation ? storeCheckdIcon : storeUnckeckIcon
    })))));
  })));
});

/***/ }),

/***/ "./js/components/subscription/subscription-selector.js":
/*!*************************************************************!*\
  !*** ./js/components/subscription/subscription-selector.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        debugger;
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