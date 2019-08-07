webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/reducers/user-reducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/user-reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user-actions */ "./redux/actions/user-actions.js");


var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER"]:
      return {
        email: payload.email,
        token: payload.token
      };

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]:
      return null;

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_ERROR"]:
      return {
        error: payload.error
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ })

})
//# sourceMappingURL=index.js.953d2e4efe589e759b58.hot-update.js.map