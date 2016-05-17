'use strict';

const events = require('./api/events.js');
const app = require('./api/apiurl.js');
// const authUi = require('./api/ui.js');

  const checkCart = function(cart, productid) {
    for (var i = 0; i < cart.length; i++) {
      if(cart[i].productid === productid) {
        console.log('got a match!');
        break;
      }
    }
  };

const displayProduct = function(product){
  const display = require('./templates/product.handlebars');
  $('.product-display').empty();
  $('.product-display').append(display({product}));
  $('#cart-add').attr("prod-id", product._id);
  $('#cart-add').attr("prod-name", product.name);
  $('#cart-add').attr("prod-price", product.price);
  console.log(app.user.cart);
  checkCart(app.user.cart, product._id);
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
});
