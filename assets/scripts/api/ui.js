'use strict';

const app = require('./apiurl.js');
// const cartActions = require('../cart.js');
const index = require('../index.js');
const authApi = require('./ajax.js');
// const comments = require('../comments.js');


const signInSuccess = (data) => {
  app.user = data.user;
  // localStorage.setItem('currentUser',$(this).data("id"));
  console.log(app);
  $( document ).ready(function() {
    $('.loggedin-hide').fadeOut(500);
    $('.loggedout-hide').delay(500).fadeIn(500);
  });
};

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  $( document ).ready(function() {
    $('.alert').hide();
    $('#sign-up-success').fadeIn(300);
  });
};

const signUpFailure = (error) => {
  console.error(error);
  $( document ).ready(function() {
    $('.alert').hide();
    $('#sign-up-failure').fadeIn(300);
  });
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  $( document ).ready(function() {
    $('.loggedout-hide').fadeOut(500);
    $('.loggedin-hide').delay(500).fadeIn(500);
  });
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
  console.log(app.user._id);
};



const cartSuccess = (data) => {
  console.log('successfully updated cart');
  let id = $('#cart-add').data('id');
  // index.getProduct(id);
};

const orderSuccess = (data) => {
  let orders = data.order;
  console.log(orders);
  const display = require('../templates/orders.handlebars');
  $('.orders-display').append(display({orders:orders}));
};

const stripeSuccess = (data) => {
  console.log(data);
  authApi.getCartOrder(success(), failure());
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
  cartSuccess,
  stripeSuccess,
  orderSuccess
};
