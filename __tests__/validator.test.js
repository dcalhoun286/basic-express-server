'use strict';

const { it, expect } = require('@jest/globals');
const supertest = require('supertest');
const { server } = require('../src/server.js');
const request = supertest(server);

describe('====== VALIDATOR MIDDLEWARE TEST ======', () => {
  it('returns a status 500 if req.query.name is undefined', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
    expect(response.error).toBeDefined();
  });

  it('returns a status 200 and correct output object if req.query.name is defined', async () => {
    const response = await request.get('/person?name=george');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('hello george');
  });
});
