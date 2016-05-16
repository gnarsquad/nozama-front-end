'use strict';

const app = require('./apiurl.js');

const getOrdersSuccess = (data) => {
  app.orders = data.orders;
  console.log(data);
};

const getOrderSuccess = (data) => {
  app.order = data.orders;
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
  getOrdersSuccess,
  getOrderSuccess,
  createOrderSuccess,
  updateOrderSuccess,
  deleteOrderSuccess
};
