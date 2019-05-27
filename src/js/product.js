$(".selection-1").select2({
    minimumResultsForSearch: 20,
    dropdownParent: $('#dropDownSelect1')
});

$(".selection-2").select2({
    minimumResultsForSearch: 20,
    dropdownParent: $('#dropDownSelect2')
});

var skipValues = [
    document.getElementById('value-lower'),
    document.getElementById('value-upper')
];

$( document ).ready(function() {
    const limit = 15;
    const page = getQuery()['p'] || 1;
    const categoryId = getQuery()['category'] || null;
    const param = { limit, offset: (page - 1)* limit };
    if (categoryId) {
        param[categoryId] = categoryId;
    }
    api('GET', "/product", param).done((response) => {
        const pages = Math.ceil(response.count / limit);
        const products = response.rows;
        for(let i = 0; i < products.length; i++) {
            const item = products[i];
            $('#productList').append("<div class=\"col-sm-12 col-md-6 col-lg-4 p-b-50\">" +
                "<div class=\"block2\">" +
                "<div class=\"block2-img wrap-pic-w of-hidden pos-relative\">" +
                "<img src=\""+ item.images[0].url +"\" alt=\"IMG-PRODUCT\">" +
                "<div class=\"block2-overlay trans-0-4\">" +
                "<a href=\"#\" class=\"block2-btn-addwishlist hov-pointer trans-0-4\">" +
                "<i class=\"icon-wishlist icon_heart_alt\" aria-hidden=\"true\"></i>" +
                "<i class=\"icon-wishlist icon_heart dis-none\" aria-hidden=\"true\"></i>" +
                "</a>" +
                "<div class=\"block2-btn-addcart-ctn trans-0-4\">" +
                "<div class=\"block2-btn-addcart w-size1 trans-0-4\" data-id=\"" + item.id + "\">" +
                "<button class=\"flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4\">" +
                "Add to Cart" +
                "</button>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "<div class=\"block2-txt p-t-20\">" +
                "<a href=\"product-details.html?id=" + item.id + "\" class=\"block2-name dis-block s-text3 p-b-5\">" +
                item.name +
                "</a>" +
                "<span class=\"block2-price m-text6 p-r-5\">" +
                `${item.currency.sign}${item.price}` +
                "</span>" +
                "</div>" +
                "</div>" +
                "</div>");
        }
        for(let i = 1; i <= pages; i++) {
            const category = categoryId ? `category=${categoryId}&` : "";
            const href = (page == i) ? "javascript:void(0);" : ("product.html?" + category + "p=" + i);
            $('#pagination').append(
                "<a href=\"" + href + "\" class=\"item-pagination flex-c-m trans-0-4" + ((page == i) ? " active-pagination\"" : "\"") + ">" + i +"</a>"
            )
        }
        addListener('wishlist');

        $('.block2-btn-addcart').on('click', function(){
            const id = $(this).data('id');
            const item = products.find((t) => t.id === id);
            swal(item.name, "is added to cart !", "success");
            addToCart(item.id, 1);
            recommendation_recordAddCart({ pid: item.id });
        });
    });
});

