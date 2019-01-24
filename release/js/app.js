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

/***/ "./lib/js/entry.js":
/*!*************************!*\
  !*** ./lib/js/entry.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interface_canvas_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface/canvas/canvas */ \"./lib/js/interface/canvas/canvas.js\");\n/* harmony import */ var _interface_canvas_sortable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface/canvas/sortable */ \"./lib/js/interface/canvas/sortable.js\");\n/* harmony import */ var _interface_canvas_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface/canvas/sidebar */ \"./lib/js/interface/canvas/sidebar.js\");\n/* harmony import */ var _interface_canvas_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface/canvas/container */ \"./lib/js/interface/canvas/container.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n( function ($){\r\n\r\n  $.fn.formBuilder = function(){\r\n\r\n    return $(this).append( createBuilder() );\r\n\r\n  };\r\n\r\n  //Main function\r\n  function createBuilder(){\r\n    let element = Object(_interface_canvas_container__WEBPACK_IMPORTED_MODULE_3__[\"builderContainer\"])();\r\n    let canvas = Object(_interface_canvas_canvas__WEBPACK_IMPORTED_MODULE_0__[\"canvasContainer\"])();\r\n    let sortable = Object(_interface_canvas_sortable__WEBPACK_IMPORTED_MODULE_1__[\"sortableCanvas\"])();\r\n    let sidebar = Object(_interface_canvas_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"sidebarContainer\"])();\r\n\r\n    canvas.append( sortable );\r\n    element.append( sidebar );\r\n    element.append( canvas );\r\n\r\n    return element;\r\n  }\r\n\r\n})(jQuery);\r\n\n\n//# sourceURL=webpack:///./lib/js/entry.js?");

/***/ }),

/***/ "./lib/js/interface/canvas/canvas.js":
/*!*******************************************!*\
  !*** ./lib/js/interface/canvas/canvas.js ***!
  \*******************************************/
/*! exports provided: canvasContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvasContainer\", function() { return canvasContainer; });\nfunction canvasContainer(){\r\n  let canvas = $( '<div>',{\r\n    class: \"form-builder-canvas\"\r\n  });\r\n\r\n  canvas.droppable({\r\n    accept: '.form-builder-tool',\r\n    drop: function( event, ui ){\r\n      let element = ui.draggable.data('html');\r\n\r\n      console.log( element );\r\n    }\r\n\r\n  });\r\n\r\n  return canvas;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./lib/js/interface/canvas/canvas.js?");

/***/ }),

/***/ "./lib/js/interface/canvas/container.js":
/*!**********************************************!*\
  !*** ./lib/js/interface/canvas/container.js ***!
  \**********************************************/
/*! exports provided: builderContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"builderContainer\", function() { return builderContainer; });\nfunction builderContainer(){\r\n  return $( '<div>',{\r\n    class: \"form-builder-container\"\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./lib/js/interface/canvas/container.js?");

/***/ }),

/***/ "./lib/js/interface/canvas/sidebar.js":
/*!********************************************!*\
  !*** ./lib/js/interface/canvas/sidebar.js ***!
  \********************************************/
/*! exports provided: sidebarContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sidebarContainer\", function() { return sidebarContainer; });\nfunction createWidgets(){\r\n  let widgets = __webpack_require__( /*! ../../widgets/common.json */ \"./lib/js/widgets/common.json\" );\r\n\r\n  let sidebarWidgets = $( \"<div></div>\" );\r\n\r\n  Object.keys( widgets ).forEach(function(k){\r\n\r\n    let icon = $( '<i>', {\r\n      class: widgets[k]['icon'] + \" fa-lg\"\r\n    });\r\n\r\n    let element = $( '<a>',{\r\n      class: \"form-builder-tool\",\r\n      \"data-build-type\": k,\r\n      \"data-html\": widgets[k]['html'],\r\n      \"data-build-options\": widgets[k]['options']\r\n    }).html( widgets[k]['name'] );\r\n\r\n    element.prepend( icon );\r\n    element.draggable({\r\n      revert: 'invalid',\r\n      opacity: 0.75,\r\n      helper: 'clone',\r\n      cursor: 'grab',\r\n      cursorAt: {},\r\n      start: function(){\r\n        $(this).css( 'z-index', 500);\r\n        $( '.form-builder-canvas' ).addClass( 'docking' );\r\n      },\r\n      stop: function(){\r\n        $( '.form-builder-canvas' ).removeClass( 'docking' );\r\n      }\r\n    });\r\n\r\n    sidebarWidgets.append( element );\r\n\r\n  });\r\n\r\n  return sidebarWidgets;\r\n\r\n}\r\n\r\nfunction sidebarContainer(){\r\n  let sidebar = $( \"<div>\", {\r\n    class: \"form-builder-sidebar\"\r\n  });\r\n\r\n  let elements = createWidgets();\r\n\r\n  sidebar.append( elements.children() );\r\n\r\n  return sidebar;\r\n\r\n}//End sidebar\r\n\n\n//# sourceURL=webpack:///./lib/js/interface/canvas/sidebar.js?");

/***/ }),

/***/ "./lib/js/interface/canvas/sortable.js":
/*!*********************************************!*\
  !*** ./lib/js/interface/canvas/sortable.js ***!
  \*********************************************/
/*! exports provided: sortableCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortableCanvas\", function() { return sortableCanvas; });\n/* harmony import */ var _components_row_row_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/row/row_interface */ \"./lib/js/interface/components/row/row_interface.js\");\n\r\n\r\n\r\nfunction sortableCanvas(){\r\n\r\n  let sortable = $( '<div>' , {\r\n    class: \"form-builder-sortable\"\r\n  });\r\n\r\n  sortable.sortable({\r\n    placeholder: \"item-highlight-sorting\",\r\n    opacity: 0.8,\r\n    start: function(){\r\n\r\n    }\r\n  });\r\n\r\n  let rowPreset = new _components_row_row_interface__WEBPACK_IMPORTED_MODULE_0__[\"Rows\"]();\r\n\r\n  sortable.append( rowPreset.createPreset() );\r\n\r\n  return sortable;\r\n}//End Sortable\r\n\n\n//# sourceURL=webpack:///./lib/js/interface/canvas/sortable.js?");

/***/ }),

/***/ "./lib/js/interface/components/row/row_interface.js":
/*!**********************************************************!*\
  !*** ./lib/js/interface/components/row/row_interface.js ***!
  \**********************************************************/
/*! exports provided: Rows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Rows\", function() { return Rows; });\nclass Rows {\r\n\r\n  createPreset(){\r\n    let rowCreator = $( '<div>', {\r\n      class: \"row-creator\",\r\n      \"data-options\": \"row\"\r\n    });\r\n\r\n    let rowOptions = \"\";\r\n\r\n    console.log(rowOptions);\r\n\r\n    return rowCreator;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./lib/js/interface/components/row/row_interface.js?");

/***/ }),

/***/ "./lib/js/widgets/common.json":
/*!************************************!*\
  !*** ./lib/js/widgets/common.json ***!
  \************************************/
/*! exports provided: textbox, email, radio, checkbox, date, password, hidden, file, num, tel, select, textarea, button, paragraph, default */
/***/ (function(module) {

eval("module.exports = {\"textbox\":{\"html\":\"text\",\"name\":\"Textbox\",\"options\":\"text\",\"icon\":\"fas fa-font\"},\"email\":{\"html\":\"email\",\"name\":\"Email\",\"options\":\"text\",\"icon\":\"far fa-envelope\"},\"radio\":{\"html\":\"radio\",\"name\":\"Radio\",\"options\":\"choices\",\"icon\":\"far fa-check-circle\"},\"checkbox\":{\"html\":\"checkbox\",\"name\":\"Checkbox\",\"options\":\"choices\",\"icon\":\"far fa-check-square\"},\"date\":{\"html\":\"datepicker\",\"name\":\"Date\",\"options\":\"date\",\"icon\":\"far fa-calendar-alt\"},\"password\":{\"html\":\"password\",\"name\":\"Password\",\"options\":\"text\",\"icon\":\"fas fa-lock\"},\"hidden\":{\"html\":\"hidden\",\"name\":\"Hidden\",\"options\":\"hidden\",\"icon\":\"fas fa-font\"},\"file\":{\"html\":\"file\",\"name\":\"file\",\"options\":\"file\",\"icon\":\"fas fa-file-upload\"},\"num\":{\"html\":\"num\",\"name\":\"Number\",\"options\":\"text\",\"icon\":\"fas fa-sort-numeric-up\"},\"tel\":{\"html\":\"tel\",\"name\":\"Telephone\",\"options\":\"text\",\"icon\":\"fas fa-phone\"},\"select\":{\"html\":\"select\",\"name\":\"Dropdown\",\"options\":\"dropdown\",\"icon\":\"far fa-caret-square-down\"},\"textarea\":{\"html\":\"textarea\",\"name\":\"Textbox\",\"options\":\"text\",\"icon\":\"far fa-file-alt\"},\"button\":{\"html\":\"button\",\"name\":\"Button\",\"options\":\"button\",\"icon\":\"far fa-square\"},\"paragraph\":{\"html\":\"paragraph\",\"name\":\"Textbox\",\"options\":\"paragraph\",\"icon\":\"fas fa-paragraph\"}};\n\n//# sourceURL=webpack:///./lib/js/widgets/common.json?");

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