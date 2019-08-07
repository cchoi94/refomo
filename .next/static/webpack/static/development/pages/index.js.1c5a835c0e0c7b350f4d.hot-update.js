webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/reducers/refPost-reducer.js":
/*!*******************************************!*\
  !*** ./redux/reducers/refPost-reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_refPost_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/refPost-actions */ "./redux/actions/refPost-actions.js");


var refPostReducer = function refPostReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  console.log(type, payload);

  switch (type) {
    case _actions_refPost_actions__WEBPACK_IMPORTED_MODULE_0__["SELECTED_REFPOST"]:
      return {
        selectedRefPost: payload.selectedRefPost,
        allRefPosts: payload.allRefPosts
      };

    case _actions_refPost_actions__WEBPACK_IMPORTED_MODULE_0__["ALL_REFPOSTS"]:
      return payload.refPost;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (refPostReducer);

/***/ })

})
//# sourceMappingURL=index.js.1c5a835c0e0c7b350f4d.hot-update.js.map