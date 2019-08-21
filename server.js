const express = require('express');
const winston = require('winston');
const config = require("config");
const cors = require('cors');
const path = require('path');

const app = express();
//app.use('/public', express.static(__dirname + '/public/upload'));
//app.use(cors());
app.use(cors({
  exposedHeaders: ['x-auth-token']
}));
//app.use(bodyParser.json());

require('./startup/logging')();
require('./startup/db')();
require('./startup/routes')(app);
require('./startup/config')();
//require('./startup/validation')();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Listening on port
const port = process.env.PORT || config.get("port");
const server = app.listen(port, () => 
  winston.info(`Server running on port ${port}...`)
);

module.exports  = server;