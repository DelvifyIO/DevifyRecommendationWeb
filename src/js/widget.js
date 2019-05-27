import {api} from "./utils";

const API_HOST = process.env.API_HOST;
let uid = '';

const styles =
    "<style>" +
    "" +
    "button {" +
    "outline: none !important;" +
    "border: none;" +
    "background: transparent;" +
    "}" +
    "" +
    "button:hover {" +
    "cursor: pointer;" +
    "}" +
    ".real-recommendation .of-hidden {overflow: hidden;}" +
    ".real-recommendation .pos-relative {position: relative;}" +
    ".real-recommendation a {" +
    "  font-weight: 400;" +
    "font-size: 15px;" +
    "line-height: 1.7;" +
    "color: #666666;" +
    "margin: 0px;" +
    "transition: all 0.4s;" +
    "-webkit-transition: all 0.4s;" +
    "  -o-transition: all 0.4s;" +
    "  -moz-transition: all 0.4s;" +
    "}" +
    "" +
    ".real-recommendation a:focus {" +
    "outline: none !important;" +
    "}" +
    "" +
    ".real-recommendation a:hover {" +
    "text-decoration: none;" +
    "color: #e65540;" +
    "}" +
    ".real-recommendation .animated {" +
    "  animation-duration: 1s;" +
    "  animation-fill-mode: both;" +
    "}" +
    ".real-recommendation .slick-slider" +
    "{" +
    "    position: relative;" +
    "    display: block;" +
    "    box-sizing: border-box;" +
    "    -webkit-user-select: none;" +
    "       -moz-user-select: none;" +
    "        -ms-user-select: none;" +
    "            user-select: none;" +
    "    -webkit-touch-callout: none;" +
    "    -khtml-user-select: none;" +
    "    -ms-touch-action: pan-y;" +
    "        touch-action: pan-y;" +
    "    -webkit-tap-highlight-color: transparent;" +
    "    outline: none !important;" +
    "}" +
    ".real-recommendation .slick-list" +
    "{" +
    "    position: relative;" +
    "    display: block;" +
    "    overflow: hidden;" +
    "    margin: 0;" +
    "    padding: 0;" +
    "}" +
    ".real-recommendation .slick-list:focus" +
    "{" +
    "    outline: none;" +
    "}" +
    ".real-recommendation .slick-list.dragging" +
    "{" +
    "    cursor: pointer;" +
    "    cursor: hand;" +
    "}" +
    ".real-recommendation .slick-slider .slick-track," +
    ".real-recommendation .slick-slider .slick-list" +
    "{" +
    "    -webkit-transform: translate3d(0, 0, 0);" +
    "       -moz-transform: translate3d(0, 0, 0);" +
    "        -ms-transform: translate3d(0, 0, 0);" +
    "         -o-transform: translate3d(0, 0, 0);" +
    "            transform: translate3d(0, 0, 0);" +
    "}" +
    ".real-recommendation .slick-track" +
    "{" +
    "    position: relative;" +
    "    top: 0;" +
    "    left: 0;" +
    "    display: block;" +
    "    margin-left: auto;" +
    "    margin-right: auto;" +
    "}" +
    ".real-recommendation .slick-track:before," +
    ".real-recommendation .slick-track:after" +
    "{" +
    "    display: table;" +
    "    content: '';" +
    "}" +
    ".real-recommendation .slick-track:after" +
    "{" +
    "    clear: both;" +
    "}" +
    ".real-recommendation .slick-loading .slick-track" +
    "{" +
    "    visibility: hidden;" +
    "}" +
    ".real-recommendation .slick-slide" +
    "{" +
    "    display: none;" +
    "    float: left;" +
    "" +
    "    height: 100%;" +
    "    min-height: 1px;" +
    "}" +
    ".real-recommendation [dir='rtl'] .slick-slide" +
    "{" +
    "    float: right;" +
    "}" +
    ".real-recommendation .slick-slide img" +
    "{" +
    "    display: block;" +
    "}" +
    ".real-recommendation .slick-slide.slick-loading img" +
    "{" +
    "    display: none;" +
    "}" +
    ".real-recommendation .slick-slide.dragging img" +
    "{" +
    "    pointer-events: none;" +
    "}" +
    ".real-recommendation .slick-initialized .slick-slide" +
    "{" +
    "    display: block;" +
    "}" +
    ".real-recommendation .slick-loading .slick-slide" +
    "{" +
    "    visibility: hidden;" +
    "}" +
    ".real-recommendation .slick-vertical .slick-slide" +
    "{" +
    "    display: block;" +
    "" +
    "    height: auto;" +
    "" +
    "    border: 1px solid transparent;" +
    "}" +
    ".real-recommendation .slick-arrow.slick-hidden {" +
    "    display: none;" +
    "}" +
    ".real-recommendation .wrap-slick2 {" +
    "  position: relative;" +
    "  margin-right: -15px;" +
    "  margin-left: -15px;" +
    "}" +
    "" +
    "/* ------------------------------------ */" +
    ".real-recommendation .arrow-slick2 {" +
    "  position: absolute;" +
    "  z-index: 100;" +
    "  top: calc((100% - 70px) / 2);" +
    "  -webkit-transform: translateY(-50%);" +
    "  -moz-transform: translateY(-50%);" +
    "  -ms-transform: translateY(-50%);" +
    "  -o-transform: translateY(-50%);" +
    "  transform: translateY(-50%);" +
    "  font-size: 39px;" +
    "  color: #cccccc;" +
    "" +
    "  -webkit-transition: all 0.4s;" +
    "  -o-transition: all 0.4s;" +
    "  -moz-transition: all 0.4s;" +
    "  transition: all 0.4s;" +
    "}" +
    "" +
    ".real-recommendation .arrow-slick2:hover {" +
    "  color: #666666;" +
    "}" +
    "" +
    ".real-recommendation .next-slick2 {" +
    "  right: -30px;" +
    "}" +
    "" +
    ".real-recommendation .prev-slick2 {" +
    "  left: -30px;" +
    "}" +
    "" +
    "@media (max-width: 1280px) {" +
    "  .real-recommendation .next-slick2 {" +
    "    right: 0px;" +
    "  }" +
    "" +
    "  .real-recommendation .prev-slick2 {" +
    "    left: 0px;" +
    "  }" +
    "}" +
    "" +
    "@media (max-width: 1610px) {" +
    "  .real-recommendation .rs1-slick2 .next-slick2 {" +
    "    right: 0px;" +
    "  }" +
    "" +
    "  .real-recommendation .rs1-slick2 .prev-slick2 {" +
    "    left: 0px;" +
    "  }" +
    "}" +
    ".real-recommendation .recommended-details {" +
    "    background-color: white;" +
    "    top: 0;" +
    "    position: absolute;" +
    "    justify-content: center;" +
    "    z-index: 101;" +
    "    flex-wrap: wrap;" +
    "}" +
    "" +
    ".real-recommendation .recommended-details-close {" +
    "    position: absolute;" +
    "    top: 0;" +
    "    right: 0;" +
    "    margin: 15px;" +
    "    cursor: pointer;" +
    "}" +
    "" +
    ".real-recommendation .btn-more-ctn {" +
    "    border-radius: 50px;" +
    "    background-color: white;" +
    "    position: absolute;" +
    "    bottom: 0;" +
    "    right: 0;" +
    "    width: 34px;" +
    "    height: 34px;" +
    "    margin: 10px;" +
    "}" +
    "" +
    ".real-recommendation .recommended-details-image {" +
    "    width: 35%;" +
    "    flex: 1 1 35%;" +
    "    min-width: 200px;" +
    "}" +
    "" +
    ".real-recommendation .recommended-details-image img {" +
    "    object-fit: contain;" +
    "}" +
    "" +
    ".real-recommendation .recommended-details-content {" +
    "    flex: 1 1 65%;" +
    "}" +
    ".real-recommendation .trans-0-4 {" +
    "-webkit-transition: all 0.4s;" +
    "    -o-transition: all 0.4s;" +
    "    -moz-transition: all 0.4s;" +
    "    transition: all 0.4s;" +
    "}" +
    ".real-recommendation .trans-0-5 {" +
    "-webkit-transition: all 0.5s;" +
    "    -o-transition: all 0.5s;" +
    "    -moz-transition: all 0.5s;" +
    "    transition: all 0.5s;" +
    "}" +
    ".real-recommendation .p-t-45 {padding-top: 45px;}" +
    ".real-recommendation .p-b-50 {padding-bottom: 50px;}" +
    ".real-recommendation .container {" +
    "   max-width: 1200px;" +
    "}" +
    ".real-recommendation .p-b-60 {padding-bottom: 60px;}" +
    "" +
    ".real-recommendation .m-text5 {" +
    "font-size: 30px;" +
    "color: #222222;" +
    "line-height: 1.2;" +
    "text-transform: uppercase;" +
    "}" +
    "" +
    ".real-recommendation .t-center {text-align: center;}"+
    "" +
    ".real-recommendation .w-size-0 {" +
    "    width: 0;" +
    "}" +
    "" +
    ".real-recommendation .op-0-0 {opacity: 0;}" +
    "" +
    ".real-recommendation .wrap-pic-w img {width: 100%;}" +
    "" +
    ".real-recommendation .p-t-30 {padding-top: 30px;}" +
    "" +
    ".real-recommendation .p-b-30 {padding-bottom: 30px;}" +
    "" +
    ".real-recommendation .p-l-15 {padding-left: 15px;}" +
    "" +
    ".real-recommendation .p-r-15 {padding-right: 15px;}" +
    ".real-recommendation .p-r-50 {padding-right: 50px;}" +
    ".real-recommendation .m-text16 {" +
    "font-size: 24px;" +
    "color: #222222;" +
    "line-height: 1.5;" +
    "}" +
    "" +
    ".real-recommendation .p-b-13 {padding-bottom: 13px;}" +
    "" +
    ".real-recommendation .s-text8, .s-text8 a {" +
    "font-size: 13px;" +
    "color: #888888;" +
    "line-height: 1.8;" +
    "}" +
    "" +
    ".real-recommendation .p-t-10 {padding-top: 10px;}" +
    "" +
    ".real-recommendation .size9 {" +
    "width: 162px;" +
    "height: 45px;" +
    "}" +
    "" +
    ".real-recommendation .m-t-10 {margin-top: 10px;}" +
    "" +
    ".real-recommendation .m-b-10 {margin-bottom: 10px;}" +
    "" +
    ".real-recommendation .flex-c-m {" +
    "display: -webkit-box;" +
    "display: -webkit-flex;" +
    "display: -moz-box;" +
    "display: -ms-flexbox;" +
    "display: flex;" +
    "justify-content: center;" +
    "-ms-align-items: center;" +
    "align-items: center;" +
    "}" +
    "" +
    ".real-recommendation .sizefull {" +
    "width: 100%;" +
    "height: 100%;" +
    "}" +
    "" +
    ".real-recommendation .bg1 {background-color: #222222;}" +
    "" +
    ".real-recommendation .bo-rad-23 {border-radius: 23px;}" +
    "" +
    ".real-recommendation .hov1:hover {" +
    "    background-color: #e65540;" +
    "  color: white;" +
    "}" +
    "" +
    ".real-recommendation .s-text1 {" +
    "font-size: 15px;" +
    "color: white;" +
    "text-transform: uppercase;" +
    "}" +
    "" +
    ".real-recommendation .shadow1 {" +
    "box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);" +
    "-moz-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);" +
    "-webkit-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);" +
    "-o-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);" +
    "-ms-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.1);" +
    "}" +
    "" +
    ".real-recommendation .fs-24 {font-size: 24px;}" +
    ".real-recommendation .fs-16 {font-size: 16px;}" +
    ".real-recommendation .fs-32 {font-size: 32px;}" +
    "" +
    ".real-recommendation .flex-row {" +
    "display: -webkit-box;" +
    "display: -webkit-flex;" +
    "display: -moz-box;" +
    "display: -ms-flexbox;" +
    "display: flex;" +
    "-webkit-flex-direction: row;" +
    "-moz-flex-direction: row;" +
    "-ms-flex-direction: row;" +
    "-o-flex-direction: row;" +
    "flex-direction: row;" +
    "}" +
    ".real-recommendation .dis-none {display: none;}" +
    ".real-recommendation .w-size-full {" +
    "    width: 100%;" +
    "}" +
    ".real-recommendation .bgwhite {  }" +
    "</style>";

function initSlick2(parent) {
    /*[ Slick2 ]
        ===========================================================*/
    $(`#${parent} .slick2`).slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $(`#${parent} .wrap-slick2`),
        prevArrow:'<button class="arrow-slick2 prev-slick2"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:'<button class="arrow-slick2 next-slick2"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
};

function getQuery()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function setCookie(name, value, hours) {
    const d = new Date();
    d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function recordUser(uid, location, device) {
    $.post(`${API_HOST}/user`, { uid, location, device });
}

function recordEngagement(type, options) {
    $.post(`${API_HOST}/engagement`, { type, ...options });
}

function recordAddCart(options) {
    console.log('recordAddCart');
    recordEngagement('addCart', options);
}

function recordCheckout (oid, items) {
    $.post(`${API_HOST}/order`, { oid, uid, items });
}

function getRecommendations(placement, productDetailUrl, onAddToCart) {
    const id = getQuery()["id"] || 1;
    const apiConfigs = {
        home: { url: '/recommendation/featured', param: {}},
        productDetails: { url: '/recommendation/similar', param: { pid: id }},
        productDetailsFeatured: { url: '/recommendation/featured', param: {}},
        cart: { url: '/recommendation/cart', param: {}}
    };

    const apiConfig = apiConfigs[placement.location];

    $.get(`${API_HOST}${apiConfig.url}`, { ...apiConfig.param }).done(function (response) {
        let skus = response.sim_items.map(item => item.sku);
        let items = [];
        $(`#${placement.tagId}`).addClass("real-recommendation")
        .addClass("animated")
        .append(
            styles +
            "<section class=\"bgwhite p-t-45 p-b-105\">" +
            "  <div class=\"container\">" +
            "    <div class=\"sec-title p-b-30\">" +
            "      <h3 class=\"m-text5 t-center\">" + placement.heading + "</h3>" +
            "    </div>" +
            "    <!-- Slide2-->" +
            "    <div class=\"wrap-slick2\">" +
            "      <div class=\"slick2\" id=\"recommendedProducts\"></div>" +
            "      <div class=\"recommended-details trans-0-5 w-size-0 op-0-0\" id=\"recommendedDetails\">" +
            "        <div class=\"recommended-details-image wrap-pic-w p-t-30 p-b-30 p-l-15 p-r-15\"><img id=\"recommendedDetailsImage\"/></div>" +
            "        <div class=\"recommended-details-content p-t-30 p-b-30 p-l-15 p-r-50\" id=\"recommendedDetailsContent\">" +
            "          <h4 class=\"product-detail-name m-text16 p-b-13\" id=\"recommendedDetailsName\"></h4><span class=\"m-text17\" id=\"recommendedDetailsPrice\"></span>" +
            "          <p class=\"s-text8 p-t-10\" id=\"recommendedDetailsDescription\"></p>" +
            "          <div class=\"btn-recommended-addcart size9 trans-0-4 m-t-10 m-b-10\" id=\"btn-recommended-addcart\">" +
            "            <!-- Button-->" +
            "            <button class=\"flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4\">Add to Cart</button>" +
            "          </div>" +
            "          <div class=\"recommended-details-close\" id=\"recommendedDetailsClose\"><i class=\"fs-32 color1 fa fa-close\" aria-hidden=\"true\"></i></div>" +
            "        </div>" +
            "      </div>" +
            "    </div>" +
            "  </div>" +
            "</section>"
        );

        initSlick2();
        const promises = skus.map((sku, index) => {
            return $.get(`${API_HOST}/product`, {sku}).done(function (item) {
                if (item.is_available && item.unit > 0) {
                    recordEngagement('display', { pid: item.id });
                    items.push(item);

                    $(`#${placement.tagId} #recommendedProducts`).append(
                        "<div class=\"item-slick2 p-l-15 p-r-15\">" +
                        "<div class=\"block2\">" +
                        "<div class=\"block2-img wrap-pic-w of-hidden pos-relative\">" +
                        "<a href=\"" + productDetailUrl(item.id) + "\" class=\"recommended-product-image\" data-id=\"" + item.id + "\">" +
                        "<img src=\"" + item.images[0].url + "\" alt=\"IMG-PRODUCT\">" +
                        "</a>" +
                        "<a href=\"javascript:void(0);\" class=\"block2-btn-more\">" +
                        "<div class=\"btn-more-ctn flex-c-m shadow1\">" +
                        "<i class=\"fa fa-bars btn-more fs-16\" data-id=\"" + item.id + "\" />" +
                        "</div>" +
                        "</a>" +
                        "</div>" +
                        "</div>" +
                        "</div>");
                }
            });
        });
        Promise.all(promises).then(() => {
            $(`#${placement.tagId}>.slick2`).slick('unslick');
            initSlick2(placement.tagId);

            //On Detail Click
            $(`#${placement.tagId} .btn-more`).click(function () {
                const id = $(this).data('id');
                const item = items.find((t) => t.id === id);

                $(`#${placement.tagId} #recommendedDetailsName`).text(item.name);
                $(`#${placement.tagId} #recommendedDetailsPrice`).text(`${item.currency.sign}${item.price}`);
                $(`#${placement.tagId} #recommendedDetailsDescription`).text(item.description);
                $(`#${placement.tagId} #recommendedDetailsImage`).attr('src', item.images[0].url);
                $(`#${placement.tagId} #recommendedDetails`).addClass('flex-row').removeClass('w-size-0').removeClass('op-0-0').addClass('w-size-full');

                //On Add Cart
                $(`#${placement.tagId} #btn-recommended-addcart`).unbind('click').on('click', function(){
                    onAddToCart(id);
                    recordEngagement("addCart", { pid: id, uid, from: 'widget'});
                });
                recordEngagement("enlarge", { pid: id });
            });

            $(`#${placement.tagId} #recommendedDetailsClose`).click(function () {
                $(`#${placement.tagId} #recommendedDetails`).removeClass('w-size-full').addClass('op-0-0').addClass('w-size-0').removeClass('flex-row');
            });

            //On Product Click
            $(`#${placement.tagId} .recommended-product-image`).click(function () {
                const id = parseInt($(this).data('id'));
                const clicks = JSON.parse(getCookie('rrclick')) || {};
                clicks[id] = (new Date()).getTime();
                setCookie('rrclick', JSON.stringify(clicks));
                recordEngagement("click", { pid: id, uid });
            });
        })
    });
}

function getDevice() {
    var module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);

            return { os: os, browser: browser };
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;

            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };

    const e = module.init();
    return ({
        os: e.os.name,
        browser: e.browser.name,
    });
}

window.onload = function () {
    const config = {
        placements: [
            {
                location: 'home',
                noOfItems: 10,
                heading: 'Featured Products',
            },
            {
                location: 'productDetails',
                noOfItems: 5,
                heading: 'Related Products',
            },
            {
                location: 'productDetailsFeatured',
                noOfItems: 5,
                heading: 'Featured Products',
            },
            {
                location: 'cart',
                noOfItems: 5,
                heading: 'You may also want...',
            }
        ],
        productDetailUrl: function (id) {
            return `product-details.html?id=${id}`;
        },
        onAddToCart: function (id) {
            var nameProduct = $('#recommendedDetailsName').html();
            swal(nameProduct, "is added to cart !", "success");
            addToCart(id, 1);
        }
    };
    const rra = getCookie('rra');
    if (!rra) {
        const rand = Math.floor(Math.random() * 2147483647);
        uid = `rra.${rand}.${Date.now()}`;
        setCookie('rra', uid);
    } else {
        uid = rra;
    }
    let location = {};
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((coords) => {
            console.log(coords);
            location = {
                lat: coords.latitude,
                long: coords.longitude,
                accuracy: coords.accuracy,
            }
        });
    }
    recordUser(uid, location, getDevice());
    config.placements = config.placements.map(function (placement) {return {
        ...placement,
        tagId: placement.location === 'home' ? 'homePageRecommendation' :
                placement.location === 'productDetails' ? 'productDetailsRecommendation' :
                placement.location === 'productDetailsFeatured' ? 'productDetailsFeatured' :
                placement.location === 'cart' ? 'cartRecommendation' : '',
    }

    });
    config.placements.forEach( function (placement) {
        if ($(`#${placement.tagId}`).length === 1) {
            getRecommendations(placement, config.productDetailUrl, config.onAddToCart);
        }
    })
};

window.recommendation_recordCheckout = recordCheckout;
window.recommendation_recordAddCart = recordAddCart;