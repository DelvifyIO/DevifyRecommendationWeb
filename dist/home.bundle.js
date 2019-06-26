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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$( document ).ready(function() {\n    api('GET', '/category/featured', { limit: 5 }).done((response) => {\n        let content = '';\n        for (let i = 0; i < 5; i++) {\n            const category = response[i];\n            let list = '';\n            if (i % 2 === 0) {\n                list += \"<div class='col-sm-10 col-md-8 col-lg-4 m-l-r-auto'>\";\n            }\n            list += \"<div class='block1 hov-img-zoom pos-relative m-b-30'>\" +\n                \"<img src='\" + category.products[0].images[0].url + \"'/>\" +\n\n                \"<div class=\\\"block1-wrapbtn w-size2\\\">\" +\n                \"<a href=\\\"product.html?category=\" + category.id + \"\\\" class=\\\"flex-c-m size2 m-text2 bg3 hov1 trans-0-4 t-center p-r-5 p-l-5\\\">\" +\n                category.name +\n                \"</a>\" +\n                \"</div>\" +\n                \"</div>\";\n            if (i === 4) {\n                list += \"<div class=\\\"block2 wrap-pic-w pos-relative m-b-30\\\">\" +\n                    \"<img src=\\\"../images/icons/bg-01.jpg\\\" alt=\\\"IMG\\\">\" +\n                    \"<div class=\\\"block2-content sizefull ab-t-l flex-col-c-m\\\">\" +\n                    \"<h4 class=\\\"m-text4 t-center w-size3 p-b-8\\\">\" +\n                    \"Sign up & get 20% off\" +\n                    \"</h4>\" +\n                    \"<p class=\\\"t-center w-size4\\\">\" +\n                    \"Be the frist to know about the latest fashion news and get exclu-sive offers\" +\n                    \"</p>\" +\n                    \"<div class=\\\"w-size2 p-t-25\\\">\" +\n                    \"<a href=\\\"#\\\" class=\\\"flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4\\\">\" +\n                    \"Sign Up\" +\n                    \"</a>\" +\n                    \"</div>\" +\n                    \"</div>\" +\n                    \"</div>\" +\n                    \"</div>\";\n            }\n            if (i % 2 !== 0) {\n                list += \"</div>\";\n            }\n            content += list;\n        }\n        $('#newProducts').append(content);\n    });\n});\n\n$(\".selection-1\").select2({\n    minimumResultsForSearch: 20,\n    dropdownParent: $('#dropDownSelect1')\n});\n\n//# sourceURL=webpack:///./src/js/home.js?");

/***/ })

/******/ });