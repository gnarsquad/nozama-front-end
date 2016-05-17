'use strict';

const app = require('./apiurl.js');
// const index = require('../index.js');
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


const getCartsSuccess = (data) => {
  app.carts = data.carts;
  console.log(data);
};

const getCartSuccess = (data) => {
  app.cart = data.cart;
};

const createCartSuccess = (data) => {
  app.cart = data.cart;
};

const updateCartSuccess = (data) => {
  console.log(data);
  console.log('successfully updated cart');
};

const deleteCartSuccess = () => {
  app.cart = null;
  console.log('successfully deleted cart');
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

const updateOrderSuccess = (data) => {
  console.log(data);
  console.log('successfully updated order');
};

const deleteOrderSuccess = () => {
  app.order = null;
  console.log('successfully deleted order');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
  getCartsSuccess,
  getCartSuccess,
  createCartSuccess,
  updateCartSuccess,
  deleteCartSuccess,
  getOrdersSuccess,
  getOrderSuccess,
  createOrderSuccess,
  updateOrderSuccess,
  deleteOrderSuccess
};
