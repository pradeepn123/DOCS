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
      navigation: defaultNavigation,
      product_list: products
    }
  } = shopifyData;
  var [navigation, updateNavigations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultNavigation);
  var updateNavigationItems = () => {
    var dynamicNavigation = JSON.parse(JSON.stringify(navigation));
    dynamicNavigation.forEach(item => {
      var {
        menu_link,
        sub_menu_title
      } = item;
      var handle = window.localStorage.getItem('location-page');
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateNavigationItems();
  }, []);
  window.updateNavigationItems = updateNavigationItems;
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

/***/ "./js/components/subscription/mobile-menu-list.js":
/*!********************************************************!*\
  !*** ./js/components/subscription/mobile-menu-list.js ***!
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
    links
  } = shopifyData;
  var [navigation, updateNavigations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(links);
  var updateNavigationItems = () => {
    var dynamicNavigation = JSON.parse(JSON.stringify(navigation));
    dynamicNavigation.forEach(item => {
      var {
        url: menu_link,
        sub_menu_title = []
      } = item;
      var handle = window.localStorage.getItem('location-page');
      var collectionUrl = "/collections/".concat(handle);
      var params = menu_link.split('?')[1];
      var newurl = "".concat(collectionUrl, "?").concat(params, "&filter.v.availability=1");
      item["url"] = newurl;
    });
    updateNavigations(dynamicNavigation);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateNavigationItems();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "mobile-menu__item fs-body-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "mobile-menu__link no-transition active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "mobile-menu__link__text fs-body-200",
    style: {
      fontWeight: 500
    }
  }, "Shop By Brand"))), navigation.map((nav, index) => {
    var {
      title,
      url
    } = nav;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "mobile-menu__item fs-body-100",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "mobile-menu__link no-transition active",
      href: url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "mobile-menu__link__text fs-body-100"
    }, title)));
  }));
});

/***/ }),

/***/ "./js/components/subscription/mobile-menu-product.js":
/*!***********************************************************!*\
  !*** ./js/components/subscription/mobile-menu-product.js ***!
  \***********************************************************/
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
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