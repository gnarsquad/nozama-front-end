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


const cartAdd = (success, failure, id, name, price, qty) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/carts/',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    dataProcessing: false,
    data: {
      lineItems: {
        quantity: qty,
        productid: id,
        name: name,
        price: price
      }
    }
  }).done(success)
  .fail(failure);
};

const getCarts = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/carts',
    dataType: 'json',
    headers:{
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const getCart = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/carts/' + app.user.cart,
    dataType: 'json',
    headers:{
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const createCart = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/carts',
    dataType: 'json',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
    data,
  })
  .done(success)
  .fail(failure);
};

const updateCart = (success, failure, data) => {
  $.ajax({
    method: "PATCH",
    url: app.api + '/carts/' + app.user.cart,
    data,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const deleteCart = (success, failure) => {
  $.ajax({
    url: app.api + '/carts/' + app.user.cart,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
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

module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
  cartAdd,
  getCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
};
