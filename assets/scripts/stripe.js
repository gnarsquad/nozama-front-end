'use strict';

const app = require('./api/apiurl.js');
const authApi = require('./api/ajax.js');
const authUi = require('./api/ui.js');
// const cartJS = require('./cart.js');

// stripe handler variable


let handler = StripeCheckout.configure({
    key: 'pk_test_La0sDwdMY4vZwGyewISFrpm4',
    image: 'https://i.imgur.com/I4MGuVG.png',
    locale: 'auto',
    token: function(token) {
      let credentials = {
      stripeToken: token.id,
      amount: app.sum
    };
    authApi.stripeCharge(authUi.stripeSuccess, authUi.failure, credentials);
  }
});

// stripe handlers

const addStripeHandlers = () => {

  $('#checkoutBtn').on('click', function(e) {
      // Open Checkout with further options:
    handler.open({
      name: 'Nozama',
      description: 'disregard finances, acquire trinkets',
      amount: app.sum
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
