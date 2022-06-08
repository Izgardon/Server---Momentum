const request = require('supertest');
const server = require('../server');
const config = require('./config');

// Pass supertest agent for each test
const agent = request.agent(server);

// Setup connection to the database
const db = require('./config/db')

beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());


describe('test smthing', () => {
  test('It should do smthing',  done => {
     // some tests
  });
});

describe('GET /habits/:id', () => {
    test('It should get habits data by id',  done => {
      agent
        .get('/habits/:id')
        .send({ userHabits })
        .expect(200)
        .then(req => {
          expect({username: req.params.id}).toBeTruthy();
          done();
        });
    });
  });
  

// describe('POST /api/posts/create', () => {
//     test('It should store a new post',  done => {
//       agent
//         .post('/api/posts/create')
//         .send({ title: 'Some Title', description: 'Some Description' })
//         .expect(201)
//         .then(res => {
//           expect(res.body._id).toBeTruthy();
//           done();
//         });
//     });
//   });
