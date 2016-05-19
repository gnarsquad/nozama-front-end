'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./ajax.js');
const authUi = require('./ui.js');
const cartActions = require('../cart.js');
// const app = require('./apiurl.js');

const addHandlers = () => {
  $( document ).ready(function() {
    $('.loggedout-hide').hide();
  });
  // Login handers
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.signUpSuccess, authUi.signUpFailure, data);
  });
  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });
  $('#sign-out').on('click', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#change-pass').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.changePass(authUi.success, authUi.failure, data);
  });
  $('#open-cart').on('click', function() {
    cartActions.getCartDisplay();
  });
  $('#empty-cart').on('click', function () {
    authApi.emptyCart(authUi.success, authUi.failure);
    $('.cartDisplay').fadeOut(500, function(){
      $('.total-row').addClass('hidden');
    });
  });
  $('#show-orders').on('click', function () {
    authApi.getOrders(authUi.orderSuccess, authUi.failure);
  });
};

module.exports = {
  addHandlers
};
