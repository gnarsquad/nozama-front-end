'use strict';

const app = require('./api/apiurl.js');

// total prices for stripeCharge

const cartTotal = function () {
  let cart = app.user.cart.product;
  let total = 0;
  cart.forEach(function(product)) {
    total += Number(product.price);
  });
  app.user.cart.total = total;
}

// stripe handlers

let handler = StripeCheckout.configure({
    key: 'pk_test_La0sDwdMY4vZwGyewISFrpm4',
    image: '/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      let credentials = {
      stripeToken: token.id,
      amount: app.user.cart.total
    };
    console.log(credentials);
    stripeCharge(credentials);
  }
});
