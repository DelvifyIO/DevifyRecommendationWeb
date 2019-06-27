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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/cart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n$( document ).ready(function() {\r\n    const cart = JSON.parse(sessionStorage.getItem('delvify_cart')) || { items: [] };\r\n    let total = 0;\r\n    let currencySign = '$';\r\n    let promises = [];\r\n    if (cart.items.length > 0) {\r\n        promises = cart.items.map(function ({ sku, quantity }) {\r\n            return api('GET', '/product', { sku }).done((item) => {\r\n                $('#table').append(\r\n                    \"<tr class=\\\"table-row\\\" id=\\\"table-row-\" + sku + \"\\\">\" +\r\n                    \"<td class=\\\"column-1\\\">\" +\r\n                    \"<div class=\\\"cart-img-product b-rad-4 o-f-hidden\\\" data-pid=\\\"\" + item.sku + \"\\\">\" +\r\n                    \"<img src=\\\"\" + item.images[0].url200 + \"\\\" alt=\\\"IMG-PRODUCT\\\">\" +\r\n                    \"</div>\" +\r\n                    \"</td>\" +\r\n                    \"<td class=\\\"column-2\\\">\" + item.name + \"</td>\" +\r\n                    \"<td class=\\\"column-3\\\"><span>\" + item.currency.sign + \"</span><span class='item-price'>\" + item.price + \"</span></td>\" +\r\n                    \"<td class=\\\"column-4 t-center\\\">\" + quantity + \"</td>\" +\r\n                    \"<td class=\\\"column-5\\\"><span>\" + item.currency.sign + \"</span><span class='item-total-price'>\" + item.price * quantity + \"</span></td>\" +\r\n                    \"</tr>\");\r\n                total += item.price * quantity;\r\n                currencySign = item.currency.sign;\r\n            });\r\n        });\r\n    } else {\r\n        $('#emptyContainer').append(\r\n            \"<div class=\\\"flex-c p-t-25 p-b-25 bo9 p-l-35 p-r-60 p-lr-15-sm\\\">\" +\r\n            \"  <h3 class=\\\"m-text15 t-center\\\">Empty Cart</h3>\" +\r\n            \"</div>\");\r\n    }\r\n\r\n    Promise.all(promises).then(() => {\r\n        $('.cart-img-product').on('click', function(){\r\n            removeFromCart($(this).data('pid'));\r\n        });\r\n        $('.currency').text(currencySign);\r\n        $('#subTotal').text(total);\r\n        $('#total').text(total);\r\n    });\r\n\r\n    $('#btn-checkout').on('click', function () {\r\n        const cart = JSON.parse(sessionStorage.getItem('delvify_cart')) || { items: [] };\r\n        const items = [];\r\n        const getItems = cart.items.map(function ({ sku, quantity }) {\r\n            return api('GET', '/product', { sku }).done((item) => {\r\n                items.push({ pid: item.sku, quantity, currency: item.currency.name, price: item.price });\r\n            });\r\n        });\r\n        Promise.all(getItems).then(() => {\r\n            if (getItems.length > 0) {\r\n                swal('Success', \"order placed\", \"success\");\r\n                const oid = `${Math.floor(Math.random() * 2147483647)}.${Date.now()}`;\r\n                recommendationRecord('PURCHASE', { oid, order: items });\r\n                sessionStorage.removeItem('delvify_cart');\r\n                $('#table .table-row').remove();\r\n                $('.header-icons-noti').text(0);\r\n                $('#subTotal').text(0);\r\n                $('#total').text(0);\r\n                const emptyContainer = $('#emptyContainer');\r\n                if (emptyContainer.length <= 0) {\r\n                    emptyContainer.append(\r\n                        \"<div class=\\\"flex-c p-t-25 p-b-25 bo9 p-l-35 p-r-60 p-lr-15-sm\\\">\" +\r\n                        \"  <h3 class=\\\"m-text15 t-center\\\">Empty Cart</h3>\" +\r\n                        \"</div>\");\r\n                }\r\n            }\r\n        });\r\n    })\r\n\r\n});\r\n\r\nfunction removeFromCart(sku) {\r\n    const cart = JSON.parse(sessionStorage.getItem('delvify_cart')) || { items: [] };\r\n    const index = cart.items.findIndex(function (item) {\r\n        return item.sku == sku;\r\n    });\r\n    const subTotalElement =  $('#subTotal');\r\n    const itemTotal = parseFloat($(`#table #table-row-${sku} .item-total-price`).text());\r\n    const total = parseFloat(subTotalElement.text()) - itemTotal;\r\n\r\n    if (index >= 0) {\r\n        cart.items.splice(index, 1);\r\n        $(`#table #table-row-${sku}`).remove();\r\n    }\r\n    sessionStorage.setItem('delvify_cart', JSON.stringify(cart));\r\n    $('.header-icons-noti').text(cart.items.reduce((acc, item) => item.quantity + acc, 0));\r\n    if (cart.items.length <= 0) {\r\n        $('#emptyContainer').append(\r\n            \"<div class=\\\"flex-c p-t-25 p-b-25 bo9 p-l-35 p-r-60 p-lr-15-sm\\\">\" +\r\n            \"  <h3 class=\\\"m-text15 t-center\\\">Empty Cart</h3>\" +\r\n            \"</div>\");\r\n    }\r\n    subTotalElement.text(total);\r\n    $('#total').text(total);\r\n}\n\n//# sourceURL=webpack:///./src/js/cart.js?");

/***/ })

/******/ });