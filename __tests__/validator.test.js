'use strict';

const supertest = require('supertest');
const { server } = require('../src/server.js');
const request = supertest(server);

describe('====== VALIDATOR MIDDLEWARE TEST ======', () => {
  it('validator middleware works', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
    expect(response.error).toBeDefined();
  });
});
