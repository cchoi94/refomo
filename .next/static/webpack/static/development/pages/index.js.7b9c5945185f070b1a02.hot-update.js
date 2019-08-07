webpackHotUpdate("static/development/pages/index.js",{

/***/ "./redux/actions/refPost-actions.js":
/*!******************************************!*\
  !*** ./redux/actions/refPost-actions.js ***!
  \******************************************/
/*! exports provided: SELECTED_REFPOST, ALL_REFPOSTS, SHOW_ERROR, updateSelectedRefPost, showError, setAllRefPosts, getRefPosts, postNewRefPost */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNewRefPost", function() { return postNewRefPost; });
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
};
var setAllRefPosts = function setAllRefPosts(refPosts) {
  return {
    type: ALL_REFPOSTS,
    payload: {
      refPosts: refPosts
    }
  };
};
var getRefPosts = function getRefPosts() {
  return function (dispatch) {
    _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/refPosts').then(function (response) {
      console.log(response);
      dispatch(setAllRefPosts(response.data.refPosts));
    }, function (error) {
      console.log(error);
      dispatch(showError(error));
    });
  };
};
var postNewRefPost = function postNewRefPost(postData, userToken) {
  console.log(postData, userToken); // return dispatch => {
  //   axios({
  //     method: 'post',
  //     url: '/api/users',
  //     headers: {
  //       'Content-Type' : 'application/json',
  //       'Authorization' : `Bearer ${}`
  //     }
  //   })
  // }
};

/***/ })

})
//# sourceMappingURL=index.js.7b9c5945185f070b1a02.hot-update.js.map