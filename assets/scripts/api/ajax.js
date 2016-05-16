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

module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
};
