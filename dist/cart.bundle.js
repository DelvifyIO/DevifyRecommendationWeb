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

eval("\n$( document ).ready(function() {\n    const cart = JSON.parse(sessionStorage.getItem('delvify_cart')) || { items: [] };\n    let total = 0;\n    let currencySign = '$';\n    let promises = [];\n    if (cart.items.length > 0) {\n        promises = cart.items.map(function ({ sku, quantity }) {\n            return api('GET', '/product', { sku }).done((item) => {\n                $('#table').append(\n                    \"<tr class=\\\"table-row\\\" id=\\\"table-row-\" + sku + \"\\\">\" +\n                    \"<td class=\\\"column-1\\\">\" +\n                    \"<div class=\\\"cart-img-product b-rad-4 o-f-hidden\\\" data-pid=\\\"\" + item.sku + \"\\\">\" +\n                    \"<img src=\\\"\" + item.images[0].url200 + \"\\\" alt=\\\"IMG-PRODUCT\\\">\" +\n                    \"</div>\" +\n                    \"</td>\" +\n                    \"<td class=\\\"column-2\\\">\" + item.name + \"</td>\" +\n                    \"<td class=\\\"column-3\\\"><span>\" + item.currency.sign + \"</span><span class='item-price'>\" + item.price + \"</span></td>\" +\n                    \"<td class=\\\"column-4 t-center\\\">\" + quantity + \"</td>\" +\n                    \"<td class=\\\"column-5\\\"><span>\" + item.currency.sign + \"</span><span class='item-total-price'>\" + item.price * quantity + \"</span></td>\" +\n                    \"</tr>\");\n                total += item.price * quantity;\n                currencySign = item.currency.sign;\n            });\n        });\n    } else {\n        $('#emptyContainer').append(\n            \"<div class=\\\"flex-c p-t-25 p-b-25 bo9 p-l-35 p-r-60 p-lr-15-sm\\\">\" +\n            \"  <h3 class=\\\"m-text15 t-center\\\">Empty Cart</h3>\" +\n            \"</div>\");\n    }\n\n    Promise.all(promises).then(() => {\n        $('.cart-img-product').on('click', function(){\n            removeFromCart($(this).data('pid'));\n        });\n        $('.currency').text(currencySign);\n        $('#subTotal').text(total);\n        $('#total').text(total);\n    });\n\n    $('#btn-checkout').on('click', function () {\n        const cart = JSON.parse(sessionStorage.getItem('delvify_cart')) || { items: [] };\n        const items = [];\n        const getItems = cart.items.map(function ({ sku, quantity }) {\n            return api('GET', '/product', { sku }).done((item) => {\n                items.push({ pid: item.sku, quantity, currency: item.currency.name, price: item.price });\n            });\n        });\n        Promise.all(getItems).then(() => {\n            if (getItems.length > 0) {\n                swal('Success', \"order placed\", \"success\");\n                const oid = `${Math.floor(Math.random() * 2147483647)}.${Date.now()}`;\n                // recommendation_recordCheckout(oid, items);\n                sessionStorage.removeItem('delvify_cart');\n                $('#table .table-row').remove();\n                $('.header-icons-noti').text(0);\n                $('#subTotal').text(0);\n                $('#total').text(0);\n                const emptyContainer = $('#emptyContainer');\n                if (emptyContainer.length <= 0) {\n                    emptyContainer.append(\n                        \"<div class=\\\"flex-c p-t-25 p-b-25 bo9 p-l-35 p-r-60 p-lr-15-sm\\\">\" +\n                        \"  <h3 class=\\\"m-text15 t-center\\\">Empty Cart</h3>\" +\n                        \"</div>\");\n                }\n            }\n        });\n    })\n\n});\n\nfunction removeFromCart(sku) {\n    const cart = JSON.parse(sessionStorage.getItem('delvify_cart')) || { items: [] };\n    const index = cart.items.findIndex(function (item) {\n        return item.sku == sku;\n    });\n    const subTotalElement =  $('#subTotal');\n    const itemTotal = parseFloat($(`#table #table-row-${sku} .item-total-price`).text());\n    const total = parseFloat(subTotalElement.text()) - itemTotal;\n\n    if (index >= 0) {\n        cart.items.splice(index, 1);\n        $(`#table #table-row-${sku}`).remove();\n    }\n    sessionStorage.setItem('delvify_cart', JSON.stringify(cart));\n    $('.header-icons-noti').text(cart.items.reduce((acc, item) => item.quantity + acc, 0));\n    if (cart.items.length <= 0) {\n        $('#emptyContainer').append(\n            \"<div class=\\\"flex-c p-t-25 p-b-25 bo9 p-l-35 p-r-60 p-lr-15-sm\\\">\" +\n            \"  <h3 class=\\\"m-text15 t-center\\\">Empty Cart</h3>\" +\n            \"</div>\");\n    }\n    subTotalElement.text(total);\n    $('#total').text(total);\n}\n\n//# sourceURL=webpack:///./src/js/cart.js?");

/***/ })

/******/ });