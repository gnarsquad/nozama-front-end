'use strict';

const app = require('./apiurl.js');

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

const updateOrder = () => {

};

const deleteOrder = () => {

};

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
};
