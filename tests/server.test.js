const app = require('../server/server.js').app;
const request = require('supertest');


// GET /qa/questions - Retrieves a list of questions for a particular product - does not include any reported questions.
// GET /qa/questions/:question_id/answers - Returns answers for a given question - does not include any reported answers.
describe('GET /qa/questions', function () {
  it('responds with 201 status code', function (done) {
    request(app)
      .post('/qa/questions')
      .expect(201, done);
  });
});



// POST /qa/questions - Adds a question for the given product
describe('POST /qa/questions', function () {
  it('responds with 201 status code', function (done) {
    request(app)
      .post('/qa/questions')
      .expect(201, done);
  });
});

// POST /qa/questions/:question_id/answers - Adds an answer for the given question
describe('POST /qa/questions/:question_id/answers', function () {
  it('responds with 200 status code', function (done) {
    request(app)
      .post('/qa/questions/3518965/answers')
      .expect(200, done);
  });
});

// PATCH /qa/questions/:question_id/helpful - Updates a question to show it was found helpful.
describe('PATCH /qa/questions/:question_id/helpful', function () {
  it('responds with 200 status code', function (done) {
    request(app)
      .patch('/qa/questions/1/helpful')
      .expect(200, done);
  });
});

// PATCH /qa/questions/:question_id/report - Updates a question to show it was reported - the question will not be returned in GET request.
describe('PATCH /qa/questions/:question_id/report', function () {
  it('responds with 200 status code', function (done) {
    request(app)
      .patch('/qa/questions/1/report')
      .expect(200, done);
  });
});


// PATCH /qa/answers/:answer_id/helpful - Updates an answer to show it was found helpful.
describe('PATCH /qa/answers/:answer_id/helpful', function () {
  it('responds with 200 status code', function (done) {
    request(app)
      .patch('/qa/answers/2/report')
      .expect(200, done);
  });
});

// PATCH /qa/answers/:answer_id/report - Updates an answer to show it has been reported - the answer will not be returned in GET request
describe('PATCH /qa/answers/:answer_id/report', function () {
  it('responds with 200 status code', function (done) {
    request(app)
      .patch('/qa/answers/1/helpful')
      .expect(200, done);
  });
});