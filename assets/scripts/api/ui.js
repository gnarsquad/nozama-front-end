'use strict';

const app = require('./apiurl.js');
// const cartActions = require('../cart.js');
const index = require('../index.js');
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


// CARTS UI STARTS


const cartSuccess = (data) => {
  console.log(data);
  console.log('successfully updated cart');
  let id = $('#cart-add').data('id');
  console.log(id);
  index.getProduct(id);
};


// CARTS UI ENDS


// ORDERS UI STARTS


const getOrdersSuccess = (data) => {
  app.orders = data.orders;
  console.log(data);
};

const getOrderSuccess = (data) => {
  app.order = data.order;
};

const createOrderSuccess = (data) => {
  app.order = data.order;
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
  cartSuccess,
  getOrdersSuccess,
  getOrderSuccess,
  createOrderSuccess,
};
