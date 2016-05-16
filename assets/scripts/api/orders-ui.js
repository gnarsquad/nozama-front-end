'use strict';

const app = require('./apiurl.js');

const getOrdersSuccess = (data) => {
  app.orders = data.orders;
  console.log(data);
};

const getOrderSuccess = (data) => {
  app.orders = data.orders;
};



module.exports = {
  getOrdersSuccess,
  getOrderSuccess
};
