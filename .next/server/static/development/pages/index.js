module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AddReferralForm.js":
/*!***************************************!*\
  !*** ./components/AddReferralForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_refPost_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/refPost-actions */ "./redux/actions/refPost-actions.js");

var _jsxFileName = "/Users/codychoi/Desktop/refomo/components/AddReferralForm.js";






class AddReferralForm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHandleFormInput", () => {
      this.setState({
        [event.target.name]: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHandlePostSubmit", event => {
      event.preventDefault();
      let postData = {
        refCode: this.state.refCode,
        refType: this.state.refType,
        user: this.props.user.email
      };
      this.props.onPostNewRefPost(postData, this.props.user.token);
    });

    this.state = {
      refCode: null,
      refType: null
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, this.props.user ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.onHandlePostSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Add your referral code"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      onChange: this.onHandleFormInput,
      name: "refCode",
      placeholder: "Refferal Code",
      type: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      onChange: this.onHandleFormInput,
      name: "refType",
      placeholder: "Refferal Type",
      type: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Post refferal code")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Please login to add refferal codes"));
  }

}

const userSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(state => state.user, user => user);
const mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(userSelector, user => ({
  user
}));
const mapActionsToProps = {
  onPostNewRefPost: _redux_actions_refPost_actions__WEBPACK_IMPORTED_MODULE_5__["postNewRefPost"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapActionsToProps)(AddReferralForm)));

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
var _jsxFileName = "/Users/codychoi/Desktop/refomo/components/Layout.js";




const Layout = Page => {
  return class PageLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
        store: _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }));
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/user-actions */ "./redux/actions/user-actions.js");

var _jsxFileName = "/Users/codychoi/Desktop/refomo/components/Login.js";






class Login extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHandleInputChange", event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHandleLogin", event => {
      event.preventDefault();
      this.props.onLoginUser(this.state.email, this.state.password);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onHandleSignup", event => {
      event.preventDefault();
      this.props.onSignupUser(this.state.email, this.state.password);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeFormToSignUp", () => {
      this.setState({
        formType: 'signup'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeFormToLogin", () => {
      this.setState({
        formType: 'login'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "test", () => {
      console.log(this.props);
    });

    this.state = {
      email: null,
      password: null,
      formType: 'login'
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, this.state.formType === 'login' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.onHandleLogin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Login Form"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      onChange: this.onHandleInputChange,
      placeholder: "Email",
      name: "email",
      type: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      onChange: this.onHandleInputChange,
      placeholder: "password",
      name: "password",
      type: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: this.changeFormToSignUp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Change to Signup")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: this.props.onLogoutUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Logout")), this.state.formType === 'signup' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.onHandleSignup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Signup Form"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      onChange: this.onHandleInputChange,
      placeholder: "Email",
      name: "email",
      type: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      onChange: this.onHandleInputChange,
      placeholder: "password",
      name: "password",
      type: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Signup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: this.changeFormToLogin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Change to Login")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: this.props.onLogoutUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Logout")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: this.test,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "test"));
  }

}

const userSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(state => state.user, user => user);
const mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(userSelector, user => ({
  user
}));
const mapActionsToProps = {
  onLoginUser: _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["loginUser"],
  onSignupUser: _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["signupUser"],
  onLogoutUser: _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["logoutUser"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapActionsToProps)(Login)));

/***/ }),

/***/ "./components/Requests/axiosInstance.js":
/*!**********************************************!*\
  !*** ./components/Requests/axiosInstance.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'https://pacific-retreat-35565.herokuapp.com'
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_refPost_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/refPost-actions */ "./redux/actions/refPost-actions.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Login */ "./components/Login.js");
/* harmony import */ var _components_AddReferralForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AddReferralForm */ "./components/AddReferralForm.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/codychoi/Desktop/refomo/pages/index.js";









class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetRefPosts();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Refferal codes page"), this.props.refPosts && this.props.refPosts.map(post => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, post.refCode, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, " By "), post.user);
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddReferralForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  }

}

const refPostsSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(state => state.refPosts, refPosts => refPosts);
const mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(refPostsSelector, refPosts => ({
  refPosts
}));
const mapActionsToProps = {
  onGetRefPosts: _redux_actions_refPost_actions__WEBPACK_IMPORTED_MODULE_4__["getRefPosts"],
  onUpdateSelectedRefPost: _redux_actions_refPost_actions__WEBPACK_IMPORTED_MODULE_4__["updateSelectedRefPost"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapActionsToProps)(Index)));

/***/ }),

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

const SELECTED_REFPOST = 'refpost:updatedSelectedRefpost';
const ALL_REFPOSTS = 'refpost:setAllRefPosts';
const SHOW_ERROR = 'refpost:showError';
const updateSelectedRefPost = refPost => {
  return {
    type: SELECTED_REFPOST,
    payload: {
      refPost
    }
  };
};
const showError = error => {
  return {
    type: SHOW_ERROR,
    payload: {
      error
    }
  };
};
const setAllRefPosts = refPosts => {
  return {
    type: ALL_REFPOSTS,
    payload: {
      refPosts
    }
  };
};
const getRefPosts = () => {
  return dispatch => {
    _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/refPosts').then(response => {
      console.log(response);
      dispatch(setAllRefPosts(response.data.refPosts));
    }, error => {
      console.log(error);
      dispatch(showError(error));
    });
  };
};
const postNewRefPost = (postData, userToken) => {
  // return dispatch => {
  //   console.log(postData, userToken)
  // }
  return dispatch => {
    Object(_components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: 'post',
      url: '/api/refPosts',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      },
      data: postData
    }).then(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  };
};

/***/ }),

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

const UPDATE_USER = 'user:updateUser';
const LOGOUT_USER = 'user:logoutUser';
const SHOW_ERROR = 'user:updateError';
const updateUser = newUserData => {
  return {
    type: UPDATE_USER,
    payload: {
      email: newUserData.email,
      token: newUserData.token
    }
  };
};
const showError = error => {
  return {
    type: SHOW_ERROR,
    payload: {
      error
    }
  };
};
const loginUser = (email, password) => {
  return dispatch => {
    _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/users/login', {
      email,
      password
    }).then(response => {
      console.log(response);
      dispatch(updateUser({
        email,
        token: response.data.token
      }));
    }, error => {
      dispatch(showError(error));
    });
  };
};
const signupUser = (email, password) => {
  return dispatch => {
    _components_Requests_axiosInstance__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/users/signup', {
      email,
      password
    }).then(response => {
      dispatch(loginUser(email, password));
    }, error => {
      dispatch(showError(error));
    });
  };
};
const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: null
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


const refPostReducer = (state = [], {
  type,
  payload
}) => {
  switch (type) {
    case _actions_refPost_actions__WEBPACK_IMPORTED_MODULE_0__["SELECTED_REFPOST"]:
      return {
        selectedRefPost: payload.selectedRefPost,
        allRefPosts: payload.allRefPosts
      };

    case _actions_refPost_actions__WEBPACK_IMPORTED_MODULE_0__["ALL_REFPOSTS"]:
      return payload.refPosts;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (refPostReducer);

/***/ }),

/***/ "./redux/reducers/user-reducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/user-reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user-actions */ "./redux/actions/user-actions.js");


const userReducer = (state = null, {
  type,
  payload
}) => {
  switch (type) {
    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER"]:
      return {
        email: payload.email,
        token: payload.token
      };

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]:
      return payload;

    case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["SHOW_ERROR"]:
      return {
        error: payload.error
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_refPost_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/refPost-reducer */ "./redux/reducers/refPost-reducer.js");
/* harmony import */ var _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/user-reducer */ "./redux/reducers/user-reducer.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);





const allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  refPosts: _reducers_refPost_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  user: _reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
const allStoreEnhancers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(allReducers, allStoreEnhancers);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/codychoi/Desktop/refomo/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map