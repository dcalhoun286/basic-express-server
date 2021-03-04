'use strict';

module.exports = (err, req, res, next) => {

  console.error('(STATUS 500 ERROR)', err);
  const errObj = {
    status: 500,
    message: 'something broke',
  };

  res.status(500).send(errObj);
};
