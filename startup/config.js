const config = require('config');

module.exports = function(){
  //const jwtPrivateKey = require('../config/keys').jwtPrivateKey;
  const jwtPrivateKey = config.get('jwtPrivateKey');
  if(!jwtPrivateKey){
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
  }
}