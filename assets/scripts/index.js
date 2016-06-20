'use strict';

const events = require('./api/events.js');
const app = require('./api/apiurl.js');
// const authUi = require('./api/ui.js');
const authApi = require('./api/ajax.js');
const cartActions = require('./cart.js');
const stripeEvents = require('./stripe.js');

const displayProduct = function(product){
  const display = require('./templates/product.handlebars');
  $('.product-display').empty();
  $('.product-display').append(display({product}));
  if (!app.user) {
    $('.no-user-click').on('click', function() {
      $('.messages').prepend('<div class="alert alert-warning" role="alert">Please log in to add items to your cart.</div>');
      $('.alert').delay(1000).fadeOut('normal', function() {
        $(this).remove();
      });
    });
  }
  cartActions.getCartCheck(product);
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

const searchProduct = function(event) {
  event.preventDefault();
  let search = $('#search-input').val();
  $.ajax({
    url: app.api + '/search',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    contentType: false,
    processData: false,
    data: search
  }).done(function(data) {
    let product = [data.product];
    let response = {products: product};
    console.log(response);
    getProduct(response);
    $('#search-input').val("");
  }).fail(function(fail) {
    console.error(fail);
  });
};

$(() => {
  getProducts();
  events.addHandlers();
  stripeEvents.addStripeHandlers();
  $('#cart-order').on('click', function() {
    authApi.getCartOrder();
  });
  $('#product-search').on('submit', searchProduct);
});

module.exports = {
  getProduct,
};
