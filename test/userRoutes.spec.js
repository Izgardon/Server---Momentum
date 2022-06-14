const request = require('supertest');
const server = require('../server');





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



it('should return all users', () =>{
  jest.setTimeout(() => {
    const res =  request(api).get('/auth')
    expect(res.statusCode).toEqual(200)
  }, 10000);
})


it('should return user by id', () =>{
  jest.setTimeout(() => {
    const res =  request(api).get('/habits/booooo')
    expect(res.statusCode).toEqual(404)
  }, 10000);
})

it('should update user by id', () =>{
  jest.setTimeout(() => {
    const res =  request(api).patch('/habits/booooo')
    expect(res.statusCode).toEqual(404)
  }, 10000);
})

it('should delete user by id', () =>{
  jest.setTimeout(() => {
    const res =  request(api).delete('/habits/booooo')
    expect(res.statusCode).toEqual(404)
  }, 10000);
})


