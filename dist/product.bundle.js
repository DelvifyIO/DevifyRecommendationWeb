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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/product.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/product.js":
/*!***************************!*\
  !*** ./src/js/product.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(\".selection-1\").select2({\r\n    minimumResultsForSearch: 20,\r\n    dropdownParent: $('#dropDownSelect1')\r\n});\r\n\r\n$(\".selection-2\").select2({\r\n    minimumResultsForSearch: 20,\r\n    dropdownParent: $('#dropDownSelect2')\r\n});\r\n\r\nvar skipValues = [\r\n    document.getElementById('value-lower'),\r\n    document.getElementById('value-upper')\r\n];\r\n\r\n$( document ).ready(function() {\r\n    const limit = 15;\r\n    const page = getQuery()['p'] || 1;\r\n    const categoryId = getQuery()['category'] || null;\r\n    const param = { limit, offset: (page - 1)* limit };\r\n    if (categoryId) {\r\n        param[categoryId] = categoryId;\r\n    }\r\n    api('GET', \"/product\", param).done((response) => {\r\n        const pages = Math.ceil(response.count / limit);\r\n        const products = response.rows;\r\n        for(let i = 0; i < products.length; i++) {\r\n            const item = products[i];\r\n            $('#productList').append(\"<div class=\\\"col-sm-12 col-md-6 col-lg-4 p-b-50\\\">\" +\r\n                \"<div class=\\\"block2\\\">\" +\r\n                \"<div class=\\\"block2-img wrap-pic-w of-hidden pos-relative\\\">\" +\r\n                \"<img src=\\\"\"+ item.images[0].url +\"\\\" alt=\\\"IMG-PRODUCT\\\">\" +\r\n                \"<div class=\\\"block2-overlay trans-0-4\\\">\" +\r\n                \"<a href=\\\"#\\\" class=\\\"block2-btn-addwishlist hov-pointer trans-0-4\\\">\" +\r\n                \"<i class=\\\"icon-wishlist icon_heart_alt\\\" aria-hidden=\\\"true\\\"></i>\" +\r\n                \"<i class=\\\"icon-wishlist icon_heart dis-none\\\" aria-hidden=\\\"true\\\"></i>\" +\r\n                \"</a>\" +\r\n                \"<div class=\\\"block2-btn-addcart-ctn trans-0-4\\\">\" +\r\n                \"<div class=\\\"block2-btn-addcart w-size1 trans-0-4\\\" data-id=\\\"\" + item.id + \"\\\">\" +\r\n                \"<button class=\\\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\\\">\" +\r\n                \"Add to Cart\" +\r\n                \"</button>\" +\r\n                \"</div>\" +\r\n                \"</div>\" +\r\n                \"</div>\" +\r\n                \"</div>\" +\r\n                \"<div class=\\\"block2-txt p-t-20\\\">\" +\r\n                \"<a href=\\\"product-details.html?id=\" + item.id + \"\\\" class=\\\"block2-name dis-block s-text3 p-b-5\\\">\" +\r\n                item.name +\r\n                \"</a>\" +\r\n                \"<span class=\\\"block2-price m-text6 p-r-5\\\">\" +\r\n                `${item.currency.sign}${item.price}` +\r\n                \"</span>\" +\r\n                \"</div>\" +\r\n                \"</div>\" +\r\n                \"</div>\");\r\n        }\r\n        for(let i = 1; i <= pages; i++) {\r\n            const category = categoryId ? `category=${categoryId}&` : \"\";\r\n            const href = (page == i) ? \"javascript:void(0);\" : (\"product.html?\" + category + \"p=\" + i);\r\n            $('#pagination').append(\r\n                \"<a href=\\\"\" + href + \"\\\" class=\\\"item-pagination flex-c-m trans-0-4\" + ((page == i) ? \" active-pagination\\\"\" : \"\\\"\") + \">\" + i +\"</a>\"\r\n            )\r\n        }\r\n        addListener('wishlist');\r\n\r\n        $('.block2-btn-addcart').on('click', function(){\r\n            const id = $(this).data('id');\r\n            const item = products.find((t) => t.id === id);\r\n            swal(item.name, \"is added to cart !\", \"success\");\r\n            addToCart(item.id, 1);\r\n            recommendation_recordAddCart({ pid: item.id });\r\n        });\r\n    });\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/product.js?");

/***/ })

/******/ });