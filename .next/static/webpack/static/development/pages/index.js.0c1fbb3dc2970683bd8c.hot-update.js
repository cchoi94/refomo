webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/refPost-actions.js":
/*!******************************************!*\
  !*** ./redux/actions/refPost-actions.js ***!
  \******************************************/
/*! exports provided: SELECTED_REFPOST, ALL_REFPOSTS, SHOW_ERROR, updateSelectedRefPost, showError, getRefPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_REFPOST", function() { return SELECTED_REFPOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_REFPOSTS", function() { return ALL_REFPOSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ERROR", function() { return SHOW_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSelectedRefPost", function() { return updateSelectedRefPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRefPosts", function() { return getRefPosts; });
/* harmony import */ var _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Requests/axiosInstance */ "./components/Requests/axiosInstance.js");

var SELECTED_REFPOST = 'refpost:updatedSelectedRefpost';
var ALL_REFPOSTS = 'refpost:setAllRefPosts';
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
}; // export const setAllRefPosts = () => {
// }

var getRefPosts = function getRefPosts() {
  return function (dispatch) {
    _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/refPosts').then(function (response) {
      console.log(response); // dispatch(setRefPosts)
    }, function (error) {
      console.log(error); // dispatch(showError(error))
    });
  };
};

/***/ })

})
//# sourceMappingURL=index.js.0c1fbb3dc2970683bd8c.hot-update.js.map