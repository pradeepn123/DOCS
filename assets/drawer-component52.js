"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["drawer-component52"],{

/***/ "./js/components/store-locator.js":
/*!****************************************!*\
  !*** ./js/components/store-locator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  var toggleDrawer = () => {
    //load the component from js/component into the modal and pass the data
    window.drawer.update('store-locator-modal', {
      data: curatedData
    });
  };
  var DropdownComponent = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    }))));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Shop from")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DropdownComponent, null)));
});

/***/ })

}]);