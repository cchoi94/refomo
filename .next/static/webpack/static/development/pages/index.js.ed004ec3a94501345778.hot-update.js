webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/user-actions.js":
/*!***************************************!*\
  !*** ./redux/actions/user-actions.js ***!
  \***************************************/
/*! exports provided: UPDATE_USER, LOGOUT_USER, SHOW_ERROR, updateUser, showError, loginUser, signupUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ERROR", function() { return SHOW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupUser", function() { return signupUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Requests/axiosInstance */ "./components/Requests/axiosInstance.js");

var UPDATE_USER = 'user:updateUser';
var LOGOUT_USER = 'user:logoutUser';
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
var signupUser = function signupUser(email, password) {
  return function (dispatch) {
    _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/users/signup', {
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
var logoutUser = function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: null
  };
};

/***/ })

})
//# sourceMappingURL=index.js.ed004ec3a94501345778.hot-update.js.map