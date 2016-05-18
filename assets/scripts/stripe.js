'use strict';

const app = require('./api/apiurl.js');
const authApi = require('./api/ajax.js');

// TOTAL CART


const cartTotal = function () {
  let total = 0;
  $('.item-total').forEach(function(product) {
    total += parseInt($(this));
  });
    console.log(total);
  app.user.cart.total = total;
};

// stripe handler variable

let handler = StripeCheckout.configure({
    key: 'pk_test_La0sDwdMY4vZwGyewISFrpm4',
    image: 'https://i.imgur.com/I4MGuVG.png',
    locale: 'auto',
    token: function(token) {
      let credentials = {
      stripeToken: token.id,
      amount: app.user.cart.total
    };
    console.log(credentials);
    authApi.stripeCharge(credentials);
  }
});

// stripe handlers

const addStripeHandlers = () => {

  $('#checkoutBtn').on('click', function(e) {
      // Open Checkout with further options:
    handler.open({
      name: 'Nozama',
      description: 'disregard finances, acquire trinkets',
      amount: app.user.cart.total
    });
    e.preventDefault();
  });

    // Close Checkout on page navigation:
  $(window).on('popstate', function() {
    handler.close();
  });
};

module.exports = {
  addStripeHandlers
};
