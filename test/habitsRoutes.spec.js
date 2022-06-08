const request = require('supertest');
const server = require('../server');
const config = require('./config');

// Pass supertest agent for each test
const agent = request.agent(server);

// Setup connection to the database
beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());


describe('test smthing', () => {
  test('It should do smthing',  done => {
     // some tests
  });
});
