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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _slick_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slick-custom */ \"./src/js/slick-custom.js\");\n/* harmony import */ var _slick_custom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slick_custom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n// import './map-custom';\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\r\n    \"use strict\";\r\n\r\n    /*[ Load page ]\r\n    ===========================================================*/\r\n    $(\".animsition\").animsition({\r\n        inClass: 'fade-in',\r\n        outClass: 'fade-out',\r\n        inDuration: 1500,\r\n        outDuration: 800,\r\n        linkElement: '.animsition-link',\r\n        loading: true,\r\n        loadingParentElement: 'html',\r\n        loadingClass: 'animsition-loading-1',\r\n        loadingInner: '<div data-loader=\"ball-scale\"></div>',\r\n        timeout: false,\r\n        timeoutCountdown: 5000,\r\n        onLoadEvent: true,\r\n        browser: [ 'animation-duration', '-webkit-animation-duration'],\r\n        overlay : false,\r\n        overlayClass : 'animsition-overlay-slide',\r\n        overlayParentElement : 'html',\r\n        transition: function(url){ window.location.href = url; }\r\n    });\r\n\r\n    /*[ Back to top ]\r\n    ===========================================================*/\r\n    var windowH = $(window).height()/2;\r\n\r\n    $(window).on('scroll',function(){\r\n        if ($(this).scrollTop() > windowH) {\r\n            $(\"#myBtn\").css('display','flex');\r\n        } else {\r\n            $(\"#myBtn\").css('display','none');\r\n        }\r\n    });\r\n\r\n    $('#myBtn').on(\"click\", function(){\r\n        $('html, body').animate({scrollTop: 0}, 300);\r\n    });\r\n\r\n\r\n    /*[ Show header dropdown ]\r\n    ===========================================================*/\r\n    $('.js-show-header-dropdown').on('click', function(){\r\n        $(this).parent().find('.header-dropdown')\r\n    });\r\n\r\n    var menu = $('.js-show-header-dropdown');\r\n    var sub_menu_is_showed = -1;\r\n\r\n    for(var i=0; i<menu.length; i++){\r\n        $(menu[i]).on('click', function(){\r\n\r\n                if(jQuery.inArray( this, menu ) == sub_menu_is_showed){\r\n                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');\r\n                    sub_menu_is_showed = -1;\r\n                }\r\n                else {\r\n                    for (var i = 0; i < menu.length; i++) {\r\n                        $(menu[i]).parent().find('.header-dropdown').removeClass(\"show-header-dropdown\");\r\n                    }\r\n\r\n                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');\r\n                    sub_menu_is_showed = jQuery.inArray( this, menu );\r\n                }\r\n        });\r\n    }\r\n\r\n    $(\".js-show-header-dropdown, .header-dropdown\").click(function(event){\r\n        event.stopPropagation();\r\n    });\r\n\r\n    $(window).on(\"click\", function(){\r\n        for (var i = 0; i < menu.length; i++) {\r\n            $(menu[i]).parent().find('.header-dropdown').removeClass(\"show-header-dropdown\");\r\n        }\r\n        sub_menu_is_showed = -1;\r\n    });\r\n\r\n     /*[ Fixed Header ]\r\n    ===========================================================*/\r\n    var posWrapHeader = $('.topbar').height();\r\n    var header = $('.container-menu-header');\r\n\r\n    $(window).on('scroll',function(){\r\n\r\n        if($(this).scrollTop() >= 200 && $(window).width() > 992) {\r\n            $('.fixed-header2').addClass('show-fixed-header2');\r\n            $('.header2').css('visibility','hidden');\r\n            $('.header2').find('.header-dropdown').removeClass(\"show-header-dropdown\");\r\n\r\n        }\r\n        else {\r\n            $('.fixed-header2').removeClass('show-fixed-header2');\r\n            $('.header2').css('visibility','visible');\r\n            $('.fixed-header2').find('.header-dropdown').removeClass(\"show-header-dropdown\");\r\n        }\r\n\r\n    });\r\n\r\n    /*[ Show menu mobile ]\r\n    ===========================================================*/\r\n    $('.btn-show-menu-mobile').on('click', function(){\r\n        $(this).toggleClass('is-active');\r\n        $('.wrap-side-menu').slideToggle();\r\n    });\r\n\r\n    var arrowMainMenu = $('.arrow-main-menu');\r\n\r\n    for(var i=0; i<arrowMainMenu.length; i++){\r\n        $(arrowMainMenu[i]).on('click', function(){\r\n            $(this).parent().find('.sub-menu').slideToggle();\r\n            $(this).toggleClass('turn-arrow');\r\n        })\r\n    }\r\n\r\n    $(window).resize(function(){\r\n        if($(window).width() >= 992){\r\n            if($('.wrap-side-menu').css('display') == 'block'){\r\n                $('.wrap-side-menu').css('display','none');\r\n                $('.btn-show-menu-mobile').toggleClass('is-active');\r\n            }\r\n            if($('.sub-menu').css('display') == 'block'){\r\n                $('.sub-menu').css('display','none');\r\n                $('.arrow-main-menu').removeClass('turn-arrow');\r\n            }\r\n        }\r\n    });\r\n\r\n\r\n    /*[ remove top noti ]\r\n    ===========================================================*/\r\n    $('.btn-romove-top-noti').on('click', function(){\r\n        $(this).parent().remove();\r\n    })\r\n\r\n\r\n    /*[ Block2 button wishlist ]\r\n    ===========================================================*/\r\n    $('.block2-btn-addwishlist').on('click', function(e){\r\n        e.preventDefault();\r\n        $(this).addClass('block2-btn-towishlist');\r\n        $(this).removeClass('block2-btn-addwishlist');\r\n        $(this).off('click');\r\n    });\r\n\r\n    /*[ +/- num product ]\r\n    ===========================================================*/\r\n    $('.btn-num-product-down').on('click', function(e){\r\n        e.preventDefault();\r\n        var numProduct = Number($(this).next().val());\r\n        if(numProduct > 1) $(this).next().val(numProduct - 1);\r\n    });\r\n\r\n    $('.btn-num-product-up').on('click', function(e){\r\n        e.preventDefault();\r\n        var numProduct = Number($(this).prev().val());\r\n        $(this).prev().val(numProduct + 1);\r\n    });\r\n\r\n\r\n    /*[ Show content Product detail ]\r\n    ===========================================================*/\r\n    $('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');\r\n    $('.active-dropdown-content .dropdown-content').slideToggle('fast');\r\n\r\n    $('.js-toggle-dropdown-content').on('click', function(){\r\n        $(this).toggleClass('show-dropdown-content');\r\n        $(this).parent().find('.dropdown-content').slideToggle('fast');\r\n    });\r\n\r\n\r\n    /*[ Play video 01]\r\n    ===========================================================*/\r\n    var srcOld = $('.video-mo-01').children('iframe').attr('src');\r\n\r\n    $('[data-target=\"#modal-video-01\"]').on('click',function(){\r\n        $('.video-mo-01').children('iframe')[0].src += \"&autoplay=1\";\r\n\r\n        setTimeout(function(){\r\n            $('.video-mo-01').css('opacity','1');\r\n        },300);\r\n    });\r\n\r\n    $('[data-dismiss=\"modal\"]').on('click',function(){\r\n        $('.video-mo-01').children('iframe')[0].src = srcOld;\r\n        $('.video-mo-01').css('opacity','0');\r\n    });\r\n\r\n    $(\".selection-1\").select2({\r\n        minimumResultsForSearch: 20,\r\n        dropdownParent: $('#dropDownSelect1')\r\n    });\r\n\r\n    $(\".selection-2\").select2({\r\n        minimumResultsForSearch: 20,\r\n        dropdownParent: $('#dropDownSelect2')\r\n    });\r\n\r\n    $( document ).ready(function() {\r\n        api('GET', '/category', {}).done(function(categories, status) {\r\n            const category = getQuery()['category'];\r\n            $(\"#menuCategories\").append(\"<ul class='sub_menu categoriesSubMenu'></ul>\");\r\n            $(\"#sideCatMenu\").append(\"<li  class=\\\"p-t-4\\\"><a href='product.html' class=\\\"s-text13\" + (!category ? \" active1\" : \"\") + \"\\\">\" + \"All\" + \"</a></li>\");\r\n\r\n            for (i=0;i<categories.length;i++)\r\n            {\r\n                $(\".categoriesSubMenu\").append(\"<li><a href='product.html?category=\" + categories[i].id + \"'>\" + categories[i].name + \"</a></li>\");\r\n                $(\"#categoriesFooter\").append(\"<li class='p-b-9'><a class='text-7' href='product.html?category=\" + categories[i].id + \"'>\" + categories[i].name + \"</a></li>\");\r\n                $(\"#sideCatMenu\").append(\"<li  class=\\\"p-t-4\\\"><a href='product.html?category=\" + categories[i].id + \"' class=\\\"s-text13\" + (category == categories[i].id ? \" active1\" : \"\") + \"\\\">\" + categories[i].name + \"</a></li>\");\r\n            }\r\n        });\r\n        const cart = JSON.parse(sessionStorage.getItem('delvify_cart')) || { items: [] };\r\n        $('.header-icons-noti').text(cart.items.reduce((acc, item) => item.quantity + acc, 0));\r\n    })\r\n})(jQuery);\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/slick-custom.js":
/*!********************************!*\
  !*** ./src/js/slick-custom.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\n(function ($) {\r\n    // USE STRICT\r\n    \"use strict\";\r\n\r\n        /*[ Slick1 ]\r\n        ===========================================================*/\r\n        var itemSlick1 = $('.slick1').find('.item-slick1');\r\n        var action1 = [];\r\n        var action2 = [];\r\n        var action3 = [];\r\n        var cap1Slide1 = [];\r\n        var cap2Slide1 = [];\r\n        var btnSlide1 = [];\r\n\r\n        for(var i=0; i<itemSlick1.length; i++) {\r\n          cap1Slide1[i] = $(itemSlick1[i]).find('.caption1-slide1');\r\n          cap2Slide1[i] = $(itemSlick1[i]).find('.caption2-slide1');\r\n          btnSlide1[i] = $(itemSlick1[i]).find('.wrap-btn-slide1');\r\n        }\r\n\r\n\r\n        $('.slick1').on('init', function(){\r\n\r\n            action1[0] = setTimeout(function(){\r\n                $(cap1Slide1[0]).addClass($(cap1Slide1[0]).data('appear') + ' visible-true');\r\n            },200);\r\n\r\n            action2[0] = setTimeout(function(){\r\n                $(cap2Slide1[0]).addClass($(cap2Slide1[0]).data('appear') + ' visible-true');\r\n            },1000);\r\n\r\n            action3[0] = setTimeout(function(){\r\n                $(btnSlide1[0]).addClass($(btnSlide1)[0].data('appear') + ' visible-true');\r\n            },1800);              \r\n        });\r\n\r\n        initSlick1();\r\n\r\n        $('.slick1').on('afterChange', function(event, slick, currentSlide){ \r\n            for(var i=0; i<itemSlick1.length; i++) {\r\n\r\n              clearTimeout(action1[i]);\r\n              clearTimeout(action2[i]);\r\n              clearTimeout(action3[i]);\r\n\r\n\r\n              $(cap1Slide1[i]).removeClass($(cap1Slide1[i]).data('appear') + ' visible-true');\r\n              $(cap2Slide1[i]).removeClass($(cap2Slide1[i]).data('appear') + ' visible-true');\r\n              $(btnSlide1[i]).removeClass($(btnSlide1[i]).data('appear') + ' visible-true');\r\n\r\n            }\r\n\r\n            action1[currentSlide] = setTimeout(function(){\r\n                $(cap1Slide1[currentSlide]).addClass($(cap1Slide1[currentSlide]).data('appear') + ' visible-true');\r\n            },200);\r\n\r\n            action2[currentSlide] = setTimeout(function(){\r\n                $(cap2Slide1[currentSlide]).addClass($(cap2Slide1[currentSlide]).data('appear') + ' visible-true');\r\n            },1000);\r\n\r\n            action3[currentSlide] = setTimeout(function(){\r\n                $(btnSlide1[currentSlide]).addClass($(btnSlide1)[currentSlide].data('appear') + ' visible-true');\r\n            },1800);            \r\n        });\r\n\r\n\r\n        // initSlick2();\r\n        initSlick3();\r\n        initSlick4();\r\n\r\n\r\n\r\n})(jQuery);\r\nfunction initSlick1() {\r\n    $('.slick1').slick({\r\n        slidesToShow: 1,\r\n        slidesToScroll: 1,\r\n        fade: true,\r\n        dots: false,\r\n        appendDots: $('.wrap-slick1-dots'),\r\n        dotsClass:'slick1-dots',\r\n        infinite: true,\r\n        autoplay: true,\r\n        autoplaySpeed: 6000,\r\n        arrows: true,\r\n        appendArrows: $('.wrap-slick1'),\r\n        prevArrow:'<button class=\"arrow-slick1 prev-slick1\"><i class=\"fa  fa-angle-left\" aria-hidden=\"true\"></i></button>',\r\n        nextArrow:'<button class=\"arrow-slick1 next-slick1\"><i class=\"fa  fa-angle-right\" aria-hidden=\"true\"></i></button>',\r\n    });\r\n}\r\n\r\nfunction initSlick3() {\r\n\r\n    /*[ Slick3 ]\r\n    ===========================================================*/\r\n    $('.slick3').slick({\r\n        slidesToShow: 1,\r\n        slidesToScroll: 1,\r\n        fade: true,\r\n        dots: true,\r\n        appendDots: $('.wrap-slick3-dots'),\r\n        dotsClass:'slick3-dots',\r\n        infinite: true,\r\n        autoplay: false,\r\n        autoplaySpeed: 6000,\r\n        arrows: false,\r\n        customPaging: function(slick, index) {\r\n            var portrait = $(slick.$slides[index]).data('thumb');\r\n            return '<img src=\" ' + portrait + ' \"/><div class=\"slick3-dot-overlay\"></div>';\r\n        },\r\n    });\r\n}\r\n\r\nfunction initSlick4() {\r\n\r\n    /*[ Slick4 ]\r\n    ===========================================================*/\r\n    $('.slick4').slick({\r\n        slidesToShow: 1,\r\n        slidesToScroll: 1,\r\n        fade: true,\r\n        dots: true,\r\n        appendDots: $('.wrap-slick4-dots'),\r\n        dotsClass:'slick4-dots',\r\n        infinite: true,\r\n        autoplay: false,\r\n        autoplaySpeed: 6000,\r\n        arrows: false,\r\n        customPaging: function(slick, index) {\r\n            var portrait = $(slick.$slides[index]).data('thumb');\r\n            return '<img src=\" ' + portrait + ' \"/><div class=\"slick4-dot-overlay\"></div>';\r\n        },\r\n    });\r\n}\r\n\r\nwindow.initSlick1 = initSlick1;\r\nwindow.initSlick3 = initSlick3;\r\nwindow.initSlick4 = initSlick4;\n\n//# sourceURL=webpack:///./src/js/slick-custom.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: api, readFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"api\", function() { return api; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readFile\", function() { return readFile; });\n\r\nfunction api(method = 'GET', url = '', param = {}) {\r\n    const { id, verbal = false, ...params } = param;\r\n    url = \"http://localhost:8081/api\" + url;\r\n    if (id) {\r\n        url = url + `/${id}`;\r\n    }\r\n    if (method === 'GET') {\r\n        return $.get(url, params).then((response) =>{\r\n            console.log(`${method}:${url}`, {params, response});\r\n            return Promise.resolve(response);\r\n        });\r\n    } else {\r\n        return $.post(url, params).then((response) =>{\r\n            console.log(`${method}:${url}`, {params, response});\r\n            return Promise.resolve(response);\r\n        });\r\n    }\r\n}\r\n\r\nfunction readFile(file, options = { type: 'text', onSuccess: () => {} }) {\r\n    $.ajax(file, {\r\n        dataType: options.type,\r\n        complete: function (xhr, status) {\r\n            if (status === 'success') {\r\n                let response = options.type === 'text' ? xhr.responseText : xhr.responseJSON;\r\n                options.onSuccess(response);\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\nfunction getQuery()\r\n{\r\n    var vars = [], hash;\r\n    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');\r\n    for(var i = 0; i < hashes.length; i++)\r\n    {\r\n        hash = hashes[i].split('=');\r\n        vars.push(hash[0]);\r\n        vars[hash[0]] = hash[1];\r\n    }\r\n    return vars;\r\n}\r\n\r\nfunction addToCart(id, quantity) {\r\n    const cart = JSON.parse(sessionStorage.getItem( \"delvify_cart\" )) || { items: [] };\r\n    let item = cart.items.find(function (t) {\r\n        return t.id === id;\r\n    });\r\n    if (item) {\r\n        item.quantity += parseInt(quantity);\r\n    } else {\r\n        item = { id, quantity };\r\n        cart.items.push(item);\r\n    }\r\n    $('.header-icons-noti').text(cart.items.reduce((acc, item) => item.quantity + acc, 0));\r\n    sessionStorage.setItem(\"delvify_cart\", JSON.stringify(cart));\r\n}\r\n\r\nfunction addListener(type, callback = () => {}) {\r\n    switch (type) {\r\n        case 'wishlist':\r\n            $('.block2-btn-addwishlist').each(function(){\r\n                var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();\r\n                $(this).on('click', function(){\r\n                    swal(nameProduct, \"is added to wishlist !\", \"success\");\r\n                });\r\n            });\r\n            break;\r\n        case 'addCart':\r\n            $('.block2-btn-addcart').each(function(){\r\n                var nameProduct = $(this).parent().parent().parent().parent().find('.block2-name').html();\r\n                $(this).on('click', function(){\r\n                    swal(nameProduct, \"is added to cart !\", \"success\");\r\n                });\r\n            });\r\n            break;\r\n        case 'addCartDetails':\r\n            $('.btn-addcart-product-detail').each(function(){\r\n                var nameProduct = $('#productName').html();\r\n                $(this).on('click', function(){\r\n                    swal(nameProduct, \"is added to cart !\", \"success\");\r\n                });\r\n            });\r\n            break;\r\n        case 'addCartRelatedDetails':\r\n            $('.btn-addcart-product-related-detail').each(function(){\r\n                var nameProduct = $('#relatedDetailsName').html();\r\n                $(this).on('click', function(){\r\n                    swal(nameProduct, \"is added to cart !\", \"success\");\r\n                });\r\n            });\r\n            break;\r\n        case 'more':\r\n            $('.btn-more').click(function () {\r\n                callback($(this).data('id'));\r\n            });\r\n            break;\r\n    }\r\n}\r\n\r\nwindow.api = api;\r\nwindow.readFile = readFile;\r\nwindow.getQuery = getQuery;\r\nwindow.addListener = addListener;\r\nwindow.addToCart = addToCart;\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });