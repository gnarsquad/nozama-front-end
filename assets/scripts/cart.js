'use strict';

// const events = require('./api/events.js');
const app = require('./api/apiurl.js');
const authUi = require('./api/ui.js');
const authApi = require('./api/ajax.js');
// const index = require('./index.js');
// const ex = require('./example.js');


const cartTotal = function() {
  $('#cart-total').text(function(){
    let sum = 0;
    $('.item-total').each(function(){
      sum += parseFloat($(this).text());
    });
    return sum;
  });
};

const displayCart = function(cart) {
  const display = require('./templates/cart.handlebars');
  // let cart = app.user.cart;
  console.log(cart);
  $('.cartDisplay').empty();
  if(cart.length > 0) {
    $('.no-items').addClass('hidden');
    $('.has-items').removeClass('hidden');
    $('.cartDisplay').append(display({cart}));
    $('.item-total').text(function() {
      let price = $(this).data('price');
      let qty = $(this).data('qty');
      return qty * price;
    });
    cartTotal();
  } else {
    $('.no-items').removeClass('hidden');
    $('.has-items').addClass('hidden');
  }
  $('.delete-item').on('click', function(event) {
    let id = $(this).data('id');
    event.preventDefault();
    authApi.deleteCartItem(authUi.success, authUi.failure, id);
    $(this).parent().parent().parent().parent().fadeOut(500, function(){
      $(this).remove();
      cartTotal();
    });
  });
};

const getCart = function(){
  $.ajax({
    url: app.api + "/cart",
    method: 'GET',
    dataType: 'json',
    headers:{
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(function(data){
    displayCart(data.cart);
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
  // cartActions.setCartAddBtn(cart, product, inCart);
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
      inCart += qty;
    } else {
      console.log('update cart!');
      // authApi.updateCartItem(authUi.success, authUi.failure, id, qty);
      inCart += qty;
    }
  });
};

module.exports = {
  checkCart,
  getCart
};
