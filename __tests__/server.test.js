'use strict';
const { describe, it, expect } = require('@jest/globals');

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
