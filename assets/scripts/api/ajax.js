'use strict';

const app = require('./apiurl.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  // if (!api.user) bad;
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user._id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const changePass = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user._id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};


// CART AJAX STARTS


const addToCart = (success, failure, id, name, price, qty, img) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/cart/',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    dataProcessing: false,
    data: {
      quantity: qty,
      productid: id,
      name: name,
      price: price,
      image: img
    }
  }).done(success)
  .fail(failure);
};

const updateCartItem = (success, failure, id, qty) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/cart/',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    dataProcessing: false,
    data: {
      productid: id,
      quantity: qty
    }
  }).done(success)
  .fail(failure);
};

const deleteCartItem = (success, failure, id) => {
  $.ajax({
    url: app.api + '/cart/',
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    dataProcessing: false,
    data: {
      productid: id
    }
  })
  .done(success)
  .fail(failure);
};


// CART AJAX ENDS


// ORDERS AJAX STARTS


const getOrders = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/orders',
    dataType: 'json',
    headers:{
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const getOrder = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/orders/' + app.order._id,
    dataType: 'json',
    headers:{
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const createOrder = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/orders',
    dataType: 'json',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
    data,
  })
  .done(success)
  .fail(failure);
};

const updateOrder = (success, failure, data) => {
  $.ajax({
    method: "PATCH",
    url: app.api + '/orders/' + app.order._id,
    data,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const deleteOrder = (success, failure) => {
  $.ajax({
    url: app.api + '/orders/' + app.order._id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

// ORDERS AJAX ENDS


// STRIPE AJAX STARTS

const stripeCharge = function(credentials) {
  $.ajax({
    url: app.api + '/charge',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    dataType: 'json',
    data: credentials
  })
  .done(function(data) {
    console.log(data);
  })
  .fail(function(failure) {
    console.error(failure);
  });
};


module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
  addToCart,
  updateCartItem,
  deleteCartItem,
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  stripeCharge
};
