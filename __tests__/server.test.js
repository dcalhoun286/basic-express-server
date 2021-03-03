'use strict';
const { describe, it, expect } = require('@jest/globals');
/*
Resources:

https://stackoverflow.com/questions/60722281/testing-an-express-middleware-with-jest

https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/

https://jestjs.io/docs/en/setup-teardown
*/

const supertest = require('supertest');
const { server } = require('../src/server.js');
const request = supertest(server);

describe('Express Server', () => {
  it('responds to /', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('home page');
  });

  it('gives a status 404 for invalid requests', async () => {
    const response = await request.get('/this-route-doesnt-exist');
    expect(response.status).toEqual(404);
  });
});
