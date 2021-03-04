'use strict';

const validator = (req, res, next) => {
  if (!req.query.name) {
    res.status(500).json({
      status: 500,
      error: 'req.query.name is undefined',
    });
    throw new Error('validator.js - Internal Server Error');
  }
  next();
};

module.exports = validator;
