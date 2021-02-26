'use strict';

// dependencies
const server = require('./src/server.js');
const PORT = process.env.PORT || 3333;

// starts the server
server.start(PORT);
