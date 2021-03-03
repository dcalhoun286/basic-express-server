'use strict';

const validator = (req, res, next) => {
  if (!req.query.name) {
    console.log('REQ QUERY: ', req.query);
    res.status(500).json({
      status: 500,
      error: 'req.query.name is undefined',
    });
  }
  next();
};

module.exports = validator;
