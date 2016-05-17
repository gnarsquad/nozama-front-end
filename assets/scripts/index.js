'use strict';

const events = require('./api/events.js');
const app = require('./api/apiurl.js');
const authUi = require('./api/ui.js');
const authApi = require('./api/ajax.js');

  const checkCart = function(cart, product) {
    let inCart = 0;
    for (var i = 0; i < cart.length; i++) {
      if(cart[i].productid === product._id) {
        console.log('got a match!');
        inCart = parseInt(cart[i].quantity);
        console.log(inCart);
        break;
      }
    }
    $('#cart-add').on('click', function (event) {
      let id = product._id;
      let name = product.name;
      let price = product.price;
      let qty = parseInt($('#quantity-select').val()) + inCart;
      event.preventDefault();
      console.log(id + ' ' + name + ' ' + price + '  qty: ' + qty);
      if(inCart === 0) {
        console.log('add to cart!');
        // authApi.addToCart(authUi.success, authUi.failure, id, name, price, qty);
      } else {
        console.log('update cart!');
        // authApi.cartUpdate(authUi.success, authUi.failure, id, name, price, qty);
      }
    });
  };

const displayProduct = function(product){
  const display = require('./templates/product.handlebars');
  $('.product-display').empty();
  $('.product-display').append(display({product}));
  // $('#cart-add').attr("prod-id", product._id);
  // $('#cart-add').attr("prod-name", product.name);
  // $('#cart-add').attr("prod-price", product.price);
  console.log(app.user.cart);
  checkCart(app.user.cart, product);
};

const getProduct = function(id){
  $.ajax({
    url: app.api + "/products/" + id,
  }).done(function(data){
    displayProduct(data.product);
  });
};

const displayProducts = function(products){
  const display = require('./templates/product-listing.handlebars');
  $('.content').append(display({products}));
  // $(".gallery-product").lazyload({
  //   effect : "fadeIn"
  // });
  $('.product-tile').on("click", function(){
    $('#productModal').modal();
    getProduct($(this).data("id"));
  });
};

const getProducts = function(){
  $.ajax({
    url: app.api + "/products",
  }).done(function(data){
    displayProducts(data.products);
  });
};

$(() => {
  getProducts();
  events.addHandlers();
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});
