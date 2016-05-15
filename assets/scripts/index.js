'use strict';

const events = require('./api/events.js');

$('.product-tile').on("click", function(){
    $('#productModal').modal();
});

$(() => {
  events.addHandlers();
});
