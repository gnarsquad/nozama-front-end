'use strict';

const events = require('./api/events.js');
const app = require('./api/apiurl.js');

$('.product-tile').on("click", function(){
    $('#productModal').modal();
});

const displayProducts = function(products){
  console.log('here!');
  const productsTemplate = require('./templates/product-listing.handlebars');
  $('.content').append(productsTemplate({products}));
  // $(".gallery-product").lazyload({
  //   effect : "fadeIn"
  // });
  // $('.product-tile').on("click", function(){
  //   $('#productModal').modal();
  //   getFlag($(this).data("id"));
  // });
};

const getProducts = function(){
  $.ajax({
    url: app.api + "/products",
    method: 'GET',
    dataType: 'json'
  }).done(function(data){
    displayProducts(data.products);
  });
};

$(() => {
  events.addHandlers();
  getProducts();
});
