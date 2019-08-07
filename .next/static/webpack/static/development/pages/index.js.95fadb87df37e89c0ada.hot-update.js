webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/user-actions.js":
/*!***************************************!*\
  !*** ./redux/actions/user-actions.js ***!
  \***************************************/
/*! exports provided: UPDATE_USER, SHOW_ERROR, updateUser, showError, loginUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ERROR", function() { return SHOW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony import */ var _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Requests/axiosInstance */ "./components/Requests/axiosInstance.js");

var UPDATE_USER = 'user:updateUser';
var SHOW_ERROR = 'user:updateError';
var updateUser = function updateUser(newUserData) {
  return {
    type: UPDATE_USER,
    payload: {
      email: newUserData.email,
      token: newUserData.token
    }
  };
};
var showError = function showError(error) {
  return {
    type: SHOW_ERROR,
    payload: {
      error: error
    }
  };
};
var loginUser = function loginUser(email, password) {
  return function (dispatch) {
    _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/users/login', {
      email: email,
      password: password
    }).then(function (response) {
      dispatch(updateUser({
        email: email,
        token: response.data.token
      }));
    }, function (error) {
      dispatch(showError(error));
    });
  };
};

/***/ })

})
//# sourceMappingURL=index.js.95fadb87df37e89c0ada.hot-update.js.map