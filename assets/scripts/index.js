'use strict';

const events = require('./api/events.js');
const app = require('./api/apiurl.js');
// const authUi = require('./api/ui.js');
// const authApi = require('./api/ajax.js');
const cartActions = require('./cart.js');

const displayProduct = function(product){
  const display = require('./templates/product.handlebars');
  $('.product-display').empty();
  $('.product-display').append(display({product}));
  cartActions.checkCart(app.user.cart, product);
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
  $('#open-cart').on('click', function() {
    cartActions.getCart();
  });
});

module.exports = {

};
