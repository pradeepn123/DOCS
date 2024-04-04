"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["module0"],{

/***/ "./js/components/Banner.js":
/*!*********************************!*\
  !*** ./js/components/Banner.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
/* harmony import */ var _image_with_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-with-text */ "./js/components/image-with-text.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ "./js/components/Carousel.js");

<<<<<<< HEAD


=======
/* harmony import */ var _ImageCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCards */ "./js/components/ImageCards.js");


;
>>>>>>> 86b1a33 (Created image blocks section and rendered individual image card data)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  var {
    data
  } = _ref;
<<<<<<< HEAD
  var slides = Object.values(data).map((eachData, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_image_with_text__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: eachData,
    key: eachData.name + index
  }));
  var settings = {
    "slidesPerView": 1
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner__header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slides: slides,
    settings: settings
  }))));
=======
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data => {
  // console.log(data);
  var dataValues = data.data;
  var imageCards = dataValues.blocks;
  // console.log(imageCards);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, dataValues.heading), imageCards.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index
  }, console.log("item...", item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.collection), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.collection_filter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.collection_filter_type), item.collection_title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.collection_title), item.image_source && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.image_source), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collection-item animation--item",
    "data-image-crop": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: item.collection,
    className: "collection-item__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collection-item__image__wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image collection-item__image aspect-ratio--square animation--lazy-load loaded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    className: "image__img",
    loading: "lazy",
    src: item.image_source
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collection-item__meta collection-item__title ff-heading fs-body-100",
    "data-text-alignment": "center"
  }, " ", item.collection_title, " "))))));
>>>>>>> 77b45e8 (image block section html updated)
=======
  var {
    blocks,
    heading
  } = data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-header section-blocks animation--container-header",
    "data-alignment": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "ff-heading section-header__heading fs-heading-3-base"
  }, heading)), blocks.map((block, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ImageCards__WEBPACK_IMPORTED_MODULE_1__["default"], {
    block: block,
    key: index
  })));
>>>>>>> 86b1a33 (Created image blocks section and rendered individual image card data)
});

/***/ })

}]);