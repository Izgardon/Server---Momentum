
const request = require('supertest');
const server = require('../server');
const config = require('./config');
const HabitModel = require('../models/habits')
jest.mock('mongoDB')


let api

beforeAll(() => {
  // start the server and store it in the api variable
  api = server.listen(5022, () =>
      console.log('Test server running on port 5000')
  );
});

afterAll((done) => {
  // close the server, then run done
  console.log('Gracefully stopping test server');
  api.close(done);
});


// Pass supertest agent for each test
// const agent = request.agent(server);

// Setup connection to the database
const db = require('../config/db')






it('should register a new user', () =>{
  jest.setTimeout(() => {
    const res =  request(api).post('/register')
    expect(res.statusCode).toEqual(200)

    
  }, 10000);
})

it('should register a new user', () =>{
  jest.setTimeout(() => {
    const res =  request(api).post('/login')
    expect(res.statusCode).toEqual(200)

    
  }, 10000);
})

it('should get all users', () =>{
  jest.setTimeout(() => {
    const res =  request(api).post('/')
    expect(res.statusCode).toEqual(200)

    
  }, 10000);
})





