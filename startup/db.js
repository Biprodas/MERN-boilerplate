const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function(){
  //const db = require('../config/keys').db;
  const db = config.get('db');
  
  mongoose.connect(db,  { 
    useNewUrlParser: true
  })
  .then(() => winston.info(`Connected to ${db}...`))
  .catch(err => console.error('Connection failed...'));
}
