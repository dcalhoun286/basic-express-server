'use strict';

// dependencies
const express = require('express');
const app = express();

// middleware
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

// error handler modules
const notFound = require('./error-handlers/404.js');
const serverErrors = require('./error-handlers/500.js');

// global: app-level middleware
app.use(express.json());

// routes

app.get('/', logger, (req, res) => {
  res.send('home page');
});

app.get('/person', logger, validator, (req, res) => {
  if (req.query.name) {
    console.log('REQ QUERY: ', req.query);
    res.send(`hello ${req.query.name}`);
  }
});

// error handler methods
app.use('*', notFound);
app.use(serverErrors);

function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`));
}

module.exports = {
  server: app,
  start: start,
};
