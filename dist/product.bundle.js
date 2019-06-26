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

eval("$(\".selection-1\").select2({\n    minimumResultsForSearch: 20,\n    dropdownParent: $('#dropDownSelect1')\n});\n\n$(\".selection-2\").select2({\n    minimumResultsForSearch: 20,\n    dropdownParent: $('#dropDownSelect2')\n});\n\nvar skipValues = [\n    document.getElementById('value-lower'),\n    document.getElementById('value-upper')\n];\n\nfunction displayItem(item) {\n    return (\n        \"<div class=\\\"col-sm-12 col-md-6 col-lg-4 p-b-50\\\">\" +\n        \"<div class=\\\"block2\\\">\" +\n        \"<div class=\\\"block2-img wrap-pic-w of-hidden pos-relative\\\">\" +\n        \"<img src=\\\"\"+ item.images[0].url +\"\\\" alt=\\\"IMG-PRODUCT\\\">\" +\n        \"<div class=\\\"block2-overlay trans-0-4\\\">\" +\n        \"<a href=\\\"#\\\" class=\\\"block2-btn-addwishlist hov-pointer trans-0-4\\\">\" +\n        \"<i class=\\\"icon-wishlist icon_heart_alt\\\" aria-hidden=\\\"true\\\"></i>\" +\n        \"<i class=\\\"icon-wishlist icon_heart dis-none\\\" aria-hidden=\\\"true\\\"></i>\" +\n        \"</a>\" +\n        \"<div class=\\\"block2-btn-addcart-ctn trans-0-4\\\">\" +\n        \"<div class=\\\"block2-btn-addcart w-size1 trans-0-4\\\" data-pid=\\\"\" + item.sku + \"\\\">\" +\n        \"<button class=\\\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\\\">\" +\n        \"Add to Cart\" +\n        \"</button>\" +\n        \"</div>\" +\n        \"</div>\" +\n        \"</div>\" +\n        \"</div>\" +\n        \"<div class=\\\"block2-txt p-t-20\\\">\" +\n        \"<a href=\\\"product-details.html?sku=\" + item.sku + \"\\\" class=\\\"block2-name dis-block s-text3 p-b-5\\\">\" +\n        item.name +\n        \"</a>\" +\n        \"<span class=\\\"block2-price m-text6 p-r-5\\\">\" +\n        `${item.currency.sign}${item.price}` +\n        \"</span>\" +\n        \"</div>\" +\n        \"</div>\" +\n        \"</div>\"\n    )\n}\n\n\n$( document ).ready(function() {\n\n    const limit = 15;\n    const page = getQuery()['p'] || 1;\n    const categoryId = getQuery()['category'] || null;\n    const keyword = getQuery()['keyword'] || null;\n    const param = { limit, offset: (page - 1)* limit };\n    if (categoryId) {\n        param['categoryId'] = categoryId;\n    }\n    if (keyword) {\n        $.post(\"http://localhost:5000/computeSimilarity\", { query: keyword })\n\n            .then((result) => {\n                // const result = ['423', '456', '766', '123', '345', '343', '867', '642'];\n                return $.get(`${\"http://localhost:8081/api\"}/product`, result)  //{ skus: result }\n            })\n            .then((products) => {\n                for(let i = 0; i < products.length; i++) {\n                    const item = products[i];\n                    $('#productList').append(displayItem(item));\n                }\n                addListener('wishlist');\n                $('.block2-btn-addcart').on('click', function(){\n                    const pid = $(this).data('pid');\n                    const item = products.find((t) => t.sku == pid);\n                    swal(item.name, \"is added to cart !\", \"success\");\n                    addToCart(item.sku, 1);\n                    // recommendation_recordAddCart({ pid: item.sku });\n                });\n            }).catch(console.log);\n        return false;\n    } else {\n        api('GET', \"/product\", param).done((response) => {\n            const pages = Math.ceil(response.count / limit);\n            const products = response.rows;\n            for(let i = 0; i < products.length; i++) {\n                const item = products[i];\n                $('#productList').append(displayItem(item));\n            }\n            for(let i = 1; i <= pages; i++) {\n                const category = categoryId ? `category=${categoryId}&` : \"\";\n                const href = (page == i) ? \"javascript:void(0);\" : (\"product.html?\" + category + \"p=\" + i);\n                $('#pagination').append(\n                    \"<a href=\\\"\" + href + \"\\\" class=\\\"item-pagination flex-c-m trans-0-4\" + ((page == i) ? \" active-pagination\\\"\" : \"\\\"\") + \">\" + i +\"</a>\"\n                )\n            }\n            addListener('wishlist');\n\n            $('.block2-btn-addcart').on('click', function(){\n                const pid = $(this).data('pid');\n                const item = products.find((t) => t.sku == pid);\n                swal(item.name, \"is added to cart !\", \"success\");\n                addToCart(item.sku, 1);\n                // recommendation_recordAddCart({ pid: item.sku });\n            });\n        });\n    }\n\n});\n\n\n//# sourceURL=webpack:///./src/js/product.js?");

/***/ })

/******/ });