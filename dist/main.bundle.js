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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _slick_custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slick-custom */ \"./src/js/slick-custom.js\");\n/* harmony import */ var _slick_custom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slick_custom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main__WEBPACK_IMPORTED_MODULE_2__);\n\n\n// import './map-custom';\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n    \"use strict\";\n\n    /*[ Load page ]\n    ===========================================================*/\n    $(\".animsition\").animsition({\n        inClass: 'fade-in',\n        outClass: 'fade-out',\n        inDuration: 1500,\n        outDuration: 800,\n        linkElement: '.animsition-link',\n        loading: true,\n        loadingParentElement: 'html',\n        loadingClass: 'animsition-loading-1',\n        loadingInner: '<div data-loader=\"ball-scale\"></div>',\n        timeout: false,\n        timeoutCountdown: 5000,\n        onLoadEvent: true,\n        browser: [ 'animation-duration', '-webkit-animation-duration'],\n        overlay : false,\n        overlayClass : 'animsition-overlay-slide',\n        overlayParentElement : 'html',\n        transition: function(url){ window.location.href = url; }\n    });\n\n    /*[ Back to top ]\n    ===========================================================*/\n    var windowH = $(window).height()/2;\n\n    $(window).on('scroll',function(){\n        if ($(this).scrollTop() > windowH) {\n            $(\"#myBtn\").css('display','flex');\n        } else {\n            $(\"#myBtn\").css('display','none');\n        }\n    });\n\n    $('#myBtn').on(\"click\", function(){\n        $('html, body').animate({scrollTop: 0}, 300);\n    });\n\n\n    /*[ Show header dropdown ]\n    ===========================================================*/\n    $('.js-show-header-dropdown').on('click', function(){\n        $(this).parent().find('.header-dropdown')\n    });\n\n    var menu = $('.js-show-header-dropdown');\n    var sub_menu_is_showed = -1;\n\n    for(var i=0; i<menu.length; i++){\n        $(menu[i]).on('click', function(){\n\n                if(jQuery.inArray( this, menu ) == sub_menu_is_showed){\n                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');\n                    sub_menu_is_showed = -1;\n                }\n                else {\n                    for (var i = 0; i < menu.length; i++) {\n                        $(menu[i]).parent().find('.header-dropdown').removeClass(\"show-header-dropdown\");\n                    }\n\n                    $(this).parent().find('.header-dropdown').toggleClass('show-header-dropdown');\n                    sub_menu_is_showed = jQuery.inArray( this, menu );\n                }\n        });\n    }\n\n    $(\".js-show-header-dropdown, .header-dropdown\").click(function(event){\n        event.stopPropagation();\n    });\n\n    $(window).on(\"click\", function(){\n        for (var i = 0; i < menu.length; i++) {\n            $(menu[i]).parent().find('.header-dropdown').removeClass(\"show-header-dropdown\");\n        }\n        sub_menu_is_showed = -1;\n    });\n\n     /*[ Fixed Header ]\n    ===========================================================*/\n    var posWrapHeader = $('.topbar').height();\n    var header = $('.container-menu-header');\n\n    $(window).on('scroll',function(){\n\n        if($(this).scrollTop() >= 200 && $(window).width() > 992) {\n            $('.fixed-header2').addClass('show-fixed-header2');\n            $('.header2').css('visibility','hidden');\n            $('.header2').find('.header-dropdown').removeClass(\"show-header-dropdown\");\n\n        }\n        else {\n            $('.fixed-header2').removeClass('show-fixed-header2');\n            $('.header2').css('visibility','visible');\n            $('.fixed-header2').find('.header-dropdown').removeClass(\"show-header-dropdown\");\n        }\n\n    });\n\n    /*[ Show menu mobile ]\n    ===========================================================*/\n    $('.btn-show-menu-mobile').on('click', function(){\n        $(this).toggleClass('is-active');\n        $('.wrap-side-menu').slideToggle();\n    });\n\n    var arrowMainMenu = $('.arrow-main-menu');\n\n    for(var i=0; i<arrowMainMenu.length; i++){\n        $(arrowMainMenu[i]).on('click', function(){\n            $(this).parent().find('.sub-menu').slideToggle();\n            $(this).toggleClass('turn-arrow');\n        })\n    }\n\n    $(window).resize(function(){\n        if($(window).width() >= 992){\n            if($('.wrap-side-menu').css('display') == 'block'){\n                $('.wrap-side-menu').css('display','none');\n                $('.btn-show-menu-mobile').toggleClass('is-active');\n            }\n            if($('.sub-menu').css('display') == 'block'){\n                $('.sub-menu').css('display','none');\n                $('.arrow-main-menu').removeClass('turn-arrow');\n            }\n        }\n    });\n\n\n    /*[ remove top noti ]\n    ===========================================================*/\n    $('.btn-romove-top-noti').on('click', function(){\n        $(this).parent().remove();\n    })\n\n\n    /*[ Block2 button wishlist ]\n    ===========================================================*/\n    $('.block2-btn-addwishlist').on('click', function(e){\n        e.preventDefault();\n        $(this).addClass('block2-btn-towishlist');\n        $(this).removeClass('block2-btn-addwishlist');\n        $(this).off('click');\n    });\n\n    /*[ +/- num product ]\n    ===========================================================*/\n    $('.btn-num-product-down').on('click', function(e){\n        e.preventDefault();\n        var numProduct = Number($(this).next().val());\n        if(numProduct > 1) $(this).next().val(numProduct - 1);\n    });\n\n    $('.btn-num-product-up').on('click', function(e){\n        e.preventDefault();\n        var numProduct = Number($(this).prev().val());\n        $(this).prev().val(numProduct + 1);\n    });\n\n\n    /*[ Show content Product detail ]\n    ===========================================================*/\n    $('.active-dropdown-content .js-toggle-dropdown-content').toggleClass('show-dropdown-content');\n    $('.active-dropdown-content .dropdown-content').slideToggle('fast');\n\n    $('.js-toggle-dropdown-content').on('click', function(){\n        $(this).toggleClass('show-dropdown-content');\n        $(this).parent().find('.dropdown-content').slideToggle('fast');\n    });\n\n\n    /*[ Play video 01]\n    ===========================================================*/\n    var srcOld = $('.video-mo-01').children('iframe').attr('src');\n\n    $('[data-target=\"#modal-video-01\"]').on('click',function(){\n        $('.video-mo-01').children('iframe')[0].src += \"&autoplay=1\";\n\n        setTimeout(function(){\n            $('.video-mo-01').css('opacity','1');\n        },300);\n    });\n\n    $('[data-dismiss=\"modal\"]').on('click',function(){\n        $('.video-mo-01').children('iframe')[0].src = srcOld;\n        $('.video-mo-01').css('opacity','0');\n    });\n\n    $(\".selection-1\").select2({\n        minimumResultsForSearch: 20,\n        dropdownParent: $('#dropDownSelect1')\n    });\n\n    $(\".selection-2\").select2({\n        minimumResultsForSearch: 20,\n        dropdownParent: $('#dropDownSelect2')\n    });\n\n    $( document ).ready(function() {\n        api('GET', '/category', {}).done(function(categories, status) {\n            const category = getQuery()['category'];\n            const keyword = getQuery()['keyword'];\n            $(\"#menuCategories\").append(\"<ul class='sub_menu categoriesSubMenu'></ul>\");\n            $(\"#sideCatMenu\").append(\"<li  class=\\\"p-t-4\\\"><a href='product.html' class=\\\"s-text13\" + (!category && !keyword ? \" active1\" : \"\") + \"\\\">\" + \"All\" + \"</a></li>\");\n\n            for (i=0;i<categories.length;i++)\n            {\n                $(\".categoriesSubMenu\").append(\"<li><a href='product.html?category=\" + categories[i].id + \"'>\" + categories[i].name + \"</a></li>\");\n                $(\"#categoriesFooter\").append(\"<li class='p-b-9'><a class='text-7' href='product.html?category=\" + categories[i].id + \"'>\" + categories[i].name + \"</a></li>\");\n                $(\"#sideCatMenu\").append(\"<li  class=\\\"p-t-4\\\"><a href='product.html?category=\" + categories[i].id + \"' class=\\\"s-text13\" + (category == categories[i].id ? \" active1\" : \"\") + \"\\\">\" + categories[i].name + \"</a></li>\");\n            }\n        });\n        const cart = JSON.parse(sessionStorage.getItem('delvify_cart')) || { items: [] };\n        $('.header-icons-noti').text(cart.items.reduce((acc, item) => item.quantity + acc, 0));\n    })\n})(jQuery);\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/slick-custom.js":
/*!********************************!*\
  !*** ./src/js/slick-custom.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n(function ($) {\n    // USE STRICT\n    \"use strict\";\n\n        /*[ Slick1 ]\n        ===========================================================*/\n        var itemSlick1 = $('.slick1').find('.item-slick1');\n        var action1 = [];\n        var action2 = [];\n        var action3 = [];\n        var cap1Slide1 = [];\n        var cap2Slide1 = [];\n        var btnSlide1 = [];\n\n        for(var i=0; i<itemSlick1.length; i++) {\n          cap1Slide1[i] = $(itemSlick1[i]).find('.caption1-slide1');\n          cap2Slide1[i] = $(itemSlick1[i]).find('.caption2-slide1');\n          btnSlide1[i] = $(itemSlick1[i]).find('.wrap-btn-slide1');\n        }\n\n\n        $('.slick1').on('init', function(){\n\n            action1[0] = setTimeout(function(){\n                $(cap1Slide1[0]).addClass($(cap1Slide1[0]).data('appear') + ' visible-true');\n            },200);\n\n            action2[0] = setTimeout(function(){\n                $(cap2Slide1[0]).addClass($(cap2Slide1[0]).data('appear') + ' visible-true');\n            },1000);\n\n            action3[0] = setTimeout(function(){\n                $(btnSlide1[0]).addClass($(btnSlide1)[0].data('appear') + ' visible-true');\n            },1800);              \n        });\n\n        initSlick1();\n\n        $('.slick1').on('afterChange', function(event, slick, currentSlide){ \n            for(var i=0; i<itemSlick1.length; i++) {\n\n              clearTimeout(action1[i]);\n              clearTimeout(action2[i]);\n              clearTimeout(action3[i]);\n\n\n              $(cap1Slide1[i]).removeClass($(cap1Slide1[i]).data('appear') + ' visible-true');\n              $(cap2Slide1[i]).removeClass($(cap2Slide1[i]).data('appear') + ' visible-true');\n              $(btnSlide1[i]).removeClass($(btnSlide1[i]).data('appear') + ' visible-true');\n\n            }\n\n            action1[currentSlide] = setTimeout(function(){\n                $(cap1Slide1[currentSlide]).addClass($(cap1Slide1[currentSlide]).data('appear') + ' visible-true');\n            },200);\n\n            action2[currentSlide] = setTimeout(function(){\n                $(cap2Slide1[currentSlide]).addClass($(cap2Slide1[currentSlide]).data('appear') + ' visible-true');\n            },1000);\n\n            action3[currentSlide] = setTimeout(function(){\n                $(btnSlide1[currentSlide]).addClass($(btnSlide1)[currentSlide].data('appear') + ' visible-true');\n            },1800);            \n        });\n\n\n        // initSlick2();\n        initSlick3();\n        initSlick4();\n\n\n\n})(jQuery);\nfunction initSlick1() {\n    $('.slick1').slick({\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        fade: true,\n        dots: false,\n        appendDots: $('.wrap-slick1-dots'),\n        dotsClass:'slick1-dots',\n        infinite: true,\n        autoplay: true,\n        autoplaySpeed: 6000,\n        arrows: true,\n        appendArrows: $('.wrap-slick1'),\n        prevArrow:'<button class=\"arrow-slick1 prev-slick1\"><i class=\"fa  fa-angle-left\" aria-hidden=\"true\"></i></button>',\n        nextArrow:'<button class=\"arrow-slick1 next-slick1\"><i class=\"fa  fa-angle-right\" aria-hidden=\"true\"></i></button>',\n    });\n}\n\nfunction initSlick3() {\n\n    /*[ Slick3 ]\n    ===========================================================*/\n    $('.slick3').slick({\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        fade: true,\n        dots: true,\n        appendDots: $('.wrap-slick3-dots'),\n        dotsClass:'slick3-dots',\n        infinite: true,\n        autoplay: false,\n        autoplaySpeed: 6000,\n        arrows: false,\n        customPaging: function(slick, index) {\n            var portrait = $(slick.$slides[index]).data('thumb');\n            return '<img src=\" ' + portrait + ' \"/><div class=\"slick3-dot-overlay\"></div>';\n        },\n    });\n}\n\nfunction initSlick4() {\n\n    /*[ Slick4 ]\n    ===========================================================*/\n    $('.slick4').slick({\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        fade: true,\n        dots: true,\n        appendDots: $('.wrap-slick4-dots'),\n        dotsClass:'slick4-dots',\n        infinite: true,\n        autoplay: false,\n        autoplaySpeed: 6000,\n        arrows: false,\n        customPaging: function(slick, index) {\n            var portrait = $(slick.$slides[index]).data('thumb');\n            return '<img src=\" ' + portrait + ' \"/><div class=\"slick4-dot-overlay\"></div>';\n        },\n    });\n}\n\nwindow.initSlick1 = initSlick1;\nwindow.initSlick3 = initSlick3;\nwindow.initSlick4 = initSlick4;\n\n//# sourceURL=webpack:///./src/js/slick-custom.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: api, readFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"api\", function() { return api; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readFile\", function() { return readFile; });\n\nfunction api(method = 'GET', url = '', param = {}) {\n    const { id, verbal = false, ...params } = param;\n    url = \"http://localhost:8081/api\" + url;\n    if (id) {\n        url = url + `/${id}`;\n    }\n    if (method === 'GET') {\n        return $.get(url, params).then((response) =>{\n            console.log(`${method}:${url}`, {params, response});\n            return Promise.resolve(response);\n        });\n    } else {\n        return $.post(url, params).then((response) =>{\n            console.log(`${method}:${url}`, {params, response});\n            return Promise.resolve(response);\n        });\n    }\n}\n\nfunction readFile(file, options = { type: 'text', onSuccess: () => {} }) {\n    $.ajax(file, {\n        dataType: options.type,\n        complete: function (xhr, status) {\n            if (status === 'success') {\n                let response = options.type === 'text' ? xhr.responseText : xhr.responseJSON;\n                options.onSuccess(response);\n            }\n        }\n    });\n}\n\nfunction getQuery()\n{\n    var vars = [], hash;\n    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');\n    for(var i = 0; i < hashes.length; i++)\n    {\n        hash = hashes[i].split('=');\n        vars.push(hash[0]);\n        vars[hash[0]] = hash[1];\n    }\n    return vars;\n}\n\nfunction addToCart(sku, quantity) {\n    const cart = JSON.parse(sessionStorage.getItem( \"delvify_cart\" )) || { items: [] };\n    let item = cart.items.find(function (t) {\n        return t.sku == sku;\n    });\n    if (item) {\n        item.quantity += parseInt(quantity);\n    } else {\n        item = { sku, quantity };\n        cart.items.push(item);\n    }\n    $('.header-icons-noti').text(cart.items.reduce((acc, item) => item.quantity + acc, 0));\n    sessionStorage.setItem(\"delvify_cart\", JSON.stringify(cart));\n}\n\nfunction addListener(type, callback = () => {}) {\n    switch (type) {\n        case 'wishlist':\n            $('.block2-btn-addwishlist').each(function(){\n                var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();\n                $(this).on('click', function(){\n                    swal(nameProduct, \"is added to wishlist !\", \"success\");\n                });\n            });\n            break;\n        case 'addCart':\n            $('.block2-btn-addcart').each(function(){\n                var nameProduct = $(this).parent().parent().parent().parent().find('.block2-name').html();\n                $(this).on('click', function(){\n                    swal(nameProduct, \"is added to cart !\", \"success\");\n                });\n            });\n            break;\n        case 'addCartDetails':\n            $('.btn-addcart-product-detail').each(function(){\n                var nameProduct = $('#productName').html();\n                $(this).on('click', function(){\n                    swal(nameProduct, \"is added to cart !\", \"success\");\n                });\n            });\n            break;\n        case 'addCartRelatedDetails':\n            $('.btn-addcart-product-related-detail').each(function(){\n                var nameProduct = $('#relatedDetailsName').html();\n                $(this).on('click', function(){\n                    swal(nameProduct, \"is added to cart !\", \"success\");\n                });\n            });\n            break;\n        case 'more':\n            $('.btn-more').click(function () {\n                callback($(this).data('pid'));\n            });\n            break;\n    }\n}\n\nwindow.api = api;\nwindow.readFile = readFile;\nwindow.getQuery = getQuery;\nwindow.addListener = addListener;\nwindow.addToCart = addToCart;\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });