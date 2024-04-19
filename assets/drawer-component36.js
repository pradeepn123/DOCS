"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["drawer-component36"],{

/***/ "./js/components/megamenu/mobile-megamenu-nav.js":
/*!*******************************************************!*\
  !*** ./js/components/megamenu/mobile-megamenu-nav.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

}]);