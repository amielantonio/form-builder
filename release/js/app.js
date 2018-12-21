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
/******/ ({

/***/ "./lib/js/canvas/canvas.js":
/*!*********************************!*\
  !*** ./lib/js/canvas/canvas.js ***!
  \*********************************/
/*! exports provided: createCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCanvas\", function() { return createCanvas; });\nfunction createSortableCanvas(){\r\n  return $( '<div>' , {\r\n    class: \"form-builder-sortable\"\r\n  });\r\n}//End Sortable\r\n\r\nfunction createCanvas(){\r\n  let canvas =  $( '<div>',{\r\n    class: \"form-builder-canvas\"\r\n  });\r\n\r\n  return canvas.append(createSortableCanvas());\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./lib/js/canvas/canvas.js?");

/***/ }),

/***/ "./lib/js/canvas/canvas_draggable.js":
/*!*******************************************!*\
  !*** ./lib/js/canvas/canvas_draggable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$( \".form-builder-tool\" ).draggable({\r\n  revert: 'invalid',\r\n  opacity: 0.8,\r\n  helper: 'clone',\r\n  cursor: 'grab',\r\n  cursorAt: {},\r\n  start: function(){\r\n    $(this).css( 'z-index', 500);\r\n    $( '.form-builder-canvas' ).addClass( 'docking' );\r\n  },\r\n  stop: function(){\r\n    $( '.form-builder-canvas' ).removeClass( 'docking' );\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./lib/js/canvas/canvas_draggable.js?");

/***/ }),

/***/ "./lib/js/canvas/canvas_droppable.js":
/*!*******************************************!*\
  !*** ./lib/js/canvas/canvas_droppable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$( '' ).droppable({\r\n  accept: '',\r\n  greedy: '',\r\n  drop: function(){\r\n\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./lib/js/canvas/canvas_droppable.js?");

/***/ }),

/***/ "./lib/js/canvas/canvas_sortable.js":
/*!******************************************!*\
  !*** ./lib/js/canvas/canvas_sortable.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$( '.form-builder-canvas .form-builder-sotable' ).sortable({\r\n  placeholder: \"item-highlight-sorting\",\r\n  opacity: 0.8,\r\n  start: function(){\r\n\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./lib/js/canvas/canvas_sortable.js?");

/***/ }),

/***/ "./lib/js/canvas/container.js":
/*!************************************!*\
  !*** ./lib/js/canvas/container.js ***!
  \************************************/
/*! exports provided: createContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContainer\", function() { return createContainer; });\nfunction createContainer(){\r\n  return $( '<div>',{\r\n    class: \"form-builder-container\"\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./lib/js/canvas/container.js?");

/***/ }),

/***/ "./lib/js/canvas/sidebar.js":
/*!**********************************!*\
  !*** ./lib/js/canvas/sidebar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function createSidebar(){\r\n  var sidebar = $( \"<div>\", {\r\n    class: \"form-builder-sidebar\"\r\n  });\r\n\r\n  var widgets = {\r\n    \"row\": {\r\n      \"html\": \"div\",\r\n      \"name\": \"Row\",\r\n      \"options\": \"row\",\r\n      'icon': \"fas fa-th-large\"\r\n    },\r\n    \"textbox\": {\r\n      \"html\": \"input\",\r\n      \"name\": \"Textbox\",\r\n      \"options\": \"text\",\r\n      'icon': \"fas fa-font\"\r\n    },\r\n    \"email\": {\r\n      \"html\": \"input\",\r\n      \"name\": \"Email\",\r\n      \"options\": \"text\",\r\n      'icon': \"far fa-envelope\"\r\n    },\r\n    \"radio\": {\r\n      \"html\": \"input\",\r\n      \"name\": \"Radio\",\r\n      \"options\": \"choices\",\r\n      'icon': \"far fa-check-circle\"\r\n    },\r\n    \"checkbox\": {\r\n      \"html\": \"input\",\r\n      \"name\": \"Checkbox\",\r\n      \"options\": \"choices\",\r\n      'icon': \"far fa-check-square\"\r\n    },\r\n    \"date\": {\r\n      \"html\": \"input\",\r\n      \"name\": \"Date\",\r\n      \"options\": \"date\",\r\n      'icon': \"far fa-calendar-alt\"\r\n    },\r\n    \"password\": {\r\n      \"html\": \"input\",\r\n      \"name\": \"Password\",\r\n      \"options\": \"text\",\r\n      'icon': \"fas fa-lock\"\r\n    },\r\n    \"hidden\": {\r\n      \"html\": \"input\",\r\n      \"name\": \"Hidden\",\r\n      \"options\": \"hidden\",\r\n      'icon': \"fas fa-font\"\r\n    },\r\n    \"file\": {\r\n      \"html\": \"input\",\r\n      \"name\": \"file\",\r\n      \"options\": \"file\",\r\n      'icon': \"fas fa-file-upload\"\r\n    },\r\n    \"num\": {\r\n      \"html\": \"input\",\r\n      \"name\": \"Number\",\r\n      \"options\": \"text\",\r\n      'icon': \"fas fa-sort-numeric-up\"\r\n    },\r\n    \"tel\": {\r\n      \"html\": \"input\",\r\n      \"name\": \"Telephone\",\r\n      \"options\": \"text\",\r\n      'icon': \"fas fa-phone\"\r\n    },\r\n    \"select\": {\r\n      \"html\": \"select\",\r\n      \"name\": \"Dropdown\",\r\n      \"options\": \"dropdown\",\r\n      'icon': \"far fa-caret-square-down\"\r\n    },\r\n    \"textarea\": {\r\n      \"html\": \"textarea\",\r\n      \"name\": \"Textbox\",\r\n      \"options\": \"text\",\r\n      'icon': \"far fa-file-alt\"\r\n    },\r\n    \"button\": {\r\n      \"html\": \"button\",\r\n      \"name\": \"Button\",\r\n      \"options\": \"button\",\r\n      'icon': \"far fa-hand-point-up\"\r\n    },\r\n    \"paragraph\": {\r\n      \"html\": \"p\",\r\n      \"name\": \"Textbox\",\r\n      \"options\": \"paragraph\",\r\n      'icon': \"fas fa-paragraph\"\r\n    }\r\n  };\r\n\r\n  Object.keys( widgets ).forEach(function(k){\r\n\r\n    var icon = $( '<i>', {\r\n      class: widgets[k]['icon'] + \" fa-lg\"\r\n    });\r\n    var element = $( '<a>',{\r\n      class: \"form-builder-tool\",\r\n      \"data-build-type\": k,\r\n      \"data-html\": widgets[k]['html'],\r\n      \"data-build-options\": widgets[k]['options']\r\n    }).html( widgets[k]['name'] );\r\n\r\n    element.prepend( icon );\r\n    element.draggable({\r\n      revert: 'invalid',\r\n      opacity: 1,\r\n      helper: 'clone',\r\n      cursor: 'grab',\r\n      cursorAt: {},\r\n      start: function(){\r\n        $(this).css( 'z-index', 500);\r\n        $( '.form-builder-canvas' ).addClass( 'docking' );\r\n      },\r\n      stop: function(){\r\n        $( '.form-builder-canvas' ).removeClass( 'docking' );\r\n      }\r\n    });\r\n\r\n    sidebar.append( element );\r\n\r\n  });\r\n\r\n  return sidebar;\r\n\r\n}//End sidebar\r\n\r\n\r\nfunction createWidgets(){\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./lib/js/canvas/sidebar.js?");

/***/ }),

/***/ "./lib/js/entry.js":
/*!*************************!*\
  !*** ./lib/js/entry.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/container */ \"./lib/js/canvas/container.js\");\n/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas/canvas */ \"./lib/js/canvas/canvas.js\");\n\r\n\r\n\r\n( function ($){\r\n\r\n  __webpack_require__( /*! ./canvas/container */ \"./lib/js/canvas/container.js\" );\r\n  __webpack_require__( /*! ./canvas/canvas */ \"./lib/js/canvas/canvas.js\" );\r\n  __webpack_require__( /*! ./canvas/sidebar */ \"./lib/js/canvas/sidebar.js\" );\r\n\r\n\r\n  $.fn.formBuilder = function(){\r\n\r\n    return $(this).append( createBuilder() );\r\n\r\n  };\r\n\r\n  //Main function\r\n  function createBuilder(){\r\n\r\n    var element = Object(_canvas_container__WEBPACK_IMPORTED_MODULE_0__[\"createContainer\"])();\r\n    var canvas = Object(_canvas_canvas__WEBPACK_IMPORTED_MODULE_1__[\"createCanvas\"])();\r\n    // var sortable = createSortableCanvas();\r\n    // var sidebar = createSidebar();\r\n    //\r\n    //\r\n    // element.append( sidebar );\r\n    element.append( canvas );\r\n    //\r\n    // console.log( element );\r\n    return element;\r\n\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  function prepareCanvas() {\r\n    __webpack_require__( /*! ./canvas/canvas_draggable */ \"./lib/js/canvas/canvas_draggable.js\" );\r\n    __webpack_require__( /*! ./canvas/canvas_droppable */ \"./lib/js/canvas/canvas_droppable.js\" );\r\n    __webpack_require__( /*! ./canvas/canvas_sortable */ \"./lib/js/canvas/canvas_sortable.js\" );\r\n  }\r\n\r\n\r\n\r\n})(jQuery);\r\n\n\n//# sourceURL=webpack:///./lib/js/entry.js?");

/***/ }),

/***/ "./lib/sass/entry.scss":
/*!*****************************!*\
  !*** ./lib/sass/entry.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./lib/sass/entry.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./lib/js/entry.js ./lib/sass/entry.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./lib/js/entry.js */\"./lib/js/entry.js\");\nmodule.exports = __webpack_require__(/*! ./lib/sass/entry.scss */\"./lib/sass/entry.scss\");\n\n\n//# sourceURL=webpack:///multi_./lib/js/entry.js_./lib/sass/entry.scss?");

/***/ })

/******/ });