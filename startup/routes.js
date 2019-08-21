const express = require('express');
const home = require('../routes/home');
const users = require('../routes/users');

const error = require('../middleware/error');


module.exports = function(app) {
  app.use(express.json());

  app.use('/api/home', home);
  app.use('/api/users', users);

  app.use(error);
}