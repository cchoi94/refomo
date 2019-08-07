webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/refPost-actions.js":
/*!******************************************!*\
  !*** ./redux/actions/refPost-actions.js ***!
  \******************************************/
/*! exports provided: SELECTED_REFPOST, ALL_REFPOSTS, SHOW_ERROR, updateSelectedRefPost, showError, setAllRefPosts, getRefPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_REFPOST", function() { return SELECTED_REFPOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_REFPOSTS", function() { return ALL_REFPOSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ERROR", function() { return SHOW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSelectedRefPost", function() { return updateSelectedRefPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAllRefPosts", function() { return setAllRefPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRefPosts", function() { return getRefPosts; });
/* harmony import */ var _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Requests/axiosInstance */ "./components/Requests/axiosInstance.js");

var SELECTED_REFPOST = 'refpost:selectedRefpost';
var ALL_REFPOSTS = 'refpost:selectedRefpost';
var SHOW_ERROR = 'refpost:showError';
var updateSelectedRefPost = function updateSelectedRefPost(refPost) {
  return {
    type: SELECTED_REFPOST,
    payload: {
      refPost: refPost
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
var setAllRefPosts = function setAllRefPosts() {};
var getRefPosts = function getRefPosts() {
  return function (dispatch) {
    _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/refPosts').then(function (response) {
      console.log(response); // dispatch(setRefPosts)
    }, function (error) {
      console.log(error); // dispatch(showError(error))
    });
  };
};

/***/ }),

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
//# sourceMappingURL=index.js.830a704de6ae7a47b2f9.hot-update.js.map