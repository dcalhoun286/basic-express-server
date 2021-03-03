'use strict';

// dependencies
const server = require('./src/server.js');
const PORT = process.env.PORT || 3333;

module.exports = {
  // starts the server
  startTheServer: server.start(PORT),
};
