'use strict';

const events = require('./api/events.js');
const app = require('./api/apiurl.js');
const authUi = require('./api/ui.js');
const authApi = require('./api/ajax.js');

const displayCart = function() {
  const display = require('./templates/cart.handlebars');
  let cart = app.user.cart;
  console.log(cart);
  $('.cartDisplay').empty();
  if(cart.length > 0) {
    $('.no-items').addClass('hidden');
    $('.has-items').removeClass('hidden');
    $('.cartDisplay').append(display({cart}));
  } else {
    $('.no-items').removeClass('hidden');
    $('.has-items').addClass('hidden');
  }
  $('.delete-item').on('click', function(event) {
    let id = $(this).data('id');
    console.log(id);
    event.preventDefault();
    authApi.deleteCartItem(authUi.success, authUi.failure, id);
  });
};

const checkCart = function(cart, product) {
  let inCart = 0;
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].productid === product._id) {
      inCart = parseInt(cart[i].quantity);
      break;
    }
  }
  $('#cart-add').on('click', function (event) {
    let id = product._id;
    let name = product.name;
    let price = product.price;
    let img = product.image;
    let qty = parseInt($('#quantity-select').val()) + inCart;
    event.preventDefault();
    console.log(id + ' ' + name + ' ' + price + ' ' + qty + ' ' + img);
    if(inCart === 0) {
      console.log('add to cart!');
      authApi.addToCart(authUi.success, authUi.failure, id, name, price, qty, img);
    } else {
      console.log('update cart!');
      // authApi.updateCartItem(authUi.success, authUi.failure, id, qty);
    }
  });
};

const displayProduct = function(product){
  const display = require('./templates/product.handlebars');
  $('.product-display').empty();
  $('.product-display').append(display({product}));
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
  $('#open-cart').on('click', function() {
    displayCart();
  });
});

module.exports = displayCart;
