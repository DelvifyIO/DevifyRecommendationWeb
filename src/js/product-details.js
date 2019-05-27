
$( document ).ready(function() {
    const id = getQuery()["id"] || 1;

    api('GET', `/product/${id}`, {}).done((item) => {
        $('#productName').text(item.name);
        $('#productPrice').text(`${item.currency.sign}${item.price}`);
        $('#productDescription').text(item.description);
        $('#productSKU').text(`SKU: ${item.sku}`);
        $('#productCategories').text(`Categories: ${item.category.name}`);
        item.images.forEach((image) => {
            $('#productSlide').append(
                "<div class=\"item-slick3\" data-thumb=\"" + image.url + "\">" +
                "<div class=\"wrap-pic-w\">" +
                "<img src=\"" + image.url + "\" alt=\"IMG-PRODUCT\">" +
                "</div>" +
                "</div>");
        });
        $('.slick3').slick('unslick');
        initSlick3();
        $('#addToCartBtn').on('click', function(){
            swal(item.name, "is added to cart !", "success");
            addToCart(item.id, parseInt($('#quantity').val()));
            recommendation_recordAddCart({ pid: item.id });
        });

    });
});