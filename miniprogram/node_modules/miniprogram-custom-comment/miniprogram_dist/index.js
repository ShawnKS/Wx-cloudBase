module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */

var _setTimeout;

Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    bottom: {
      type: Number
    },
    commentData: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    focus: false,
    height: 0,
    commentValue: '',
    tooltip: '',
    content: '',
    pageX: 0,
    pageY: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    focus: function focus(e) {
      this.setData({
        height: e.detail.height
      });
    },
    tap: function tap(e) {
      var _this = this;
      clearTimeout(_setTimeout);
      _setTimeout = setTimeout(function () {
        _this.setData({
          content: '',
          pageX: 0,
          pageY: 0
        });
      }, 5000);
      _this.setData({
        content: e.currentTarget.dataset.content,
        pageX: e.detail.x - _this.data.tooltip.length * 10,
        pageY: e.detail.y - 45
      });
    },
    copy: function copy() {
      this.setData({
        focus: false,
        pageX: 0,
        pageY: 0
      });
      this.triggerEvent('CopyComment', this.data.content);
    },
    reply: function reply() {
      clearTimeout(_setTimeout);
      this.setData({
        focus: true,
        pageX: 0,
        pageY: 0
      });
    },
    input: function input(e) {
      this.setData({
        commentValue: e.detail.value
      });
    },
    blur: function blur() {
      this.setData({
        height: 0
      });
    },
    clear: function clear() {
      this.triggerEvent('ClearComment', this.data.content);
      this.clearValue();
    },
    clearValue: function clearValue() {
      this.setData({
        // focus: true,
        commentValue: ''
      });
    },
    confirm: function confirm(e) {
      this.triggerEvent('AuthComment', e.detail);
      this.clearValue();
    },
    confirmButton: function confirmButton(e) {
      this.triggerEvent('AuthCommentButton', e.currentTarget.dataset);
      this.clearValue();
    }
  }
});

/***/ })
/******/ ]);