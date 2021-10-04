const app = require('../server/server.js').app;
const request = require('supertest');


// GET /qa/questions
describe('GET /qa/questions', function () {
  it('responds with 200 status code and with json object', function (done) {
    request(app)
      .get('/qa/questions?product_id=40346&page=1&count=5')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('responds with product_id and results key in the json object', function (done) {
    request(app)
      .get('/qa/questions?product_id=40346&page=1&count=5')
      .set('Accept', 'application/json')
      .expect(function (result) {
        expect(result[0]["product_id"]).not.toBeNull();
        expect(result[0]["results"]).not.toBeNull();
      })
      .expect(200, done);
  });
});


// GET /qa/questions/:question_id/answers
describe('GET /qa/questions/:question_id/answers', function () {
  it('responds with 200 status code and with json object', function (done) {
    request(app)
      .get('/qa/questions/1/answers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('responds with question, page, count, and results key in the json object', function (done) {
    request(app)
      .get('/qa/questions/1/answers')
      .set('Accept', 'application/json')
      .expect(function (result) {
        expect(result[0].json_build_object["question"]).not.toBeNull();
        expect(result[0].json_build_object["page"]).not.toBeNull();
        expect(result[0].json_build_object["count"]).not.toBeNull();
        expect(result[0].json_build_object["results"]).not.toBeNull();
      })
      .expect(200, done);
  });
});


// POST /qa/questions
describe('POST /qa/questions', function () {
  it('responds with 201 status code', function (done) {
    request(app)
      .post('/qa/questions')
      .expect(201, done);
  });
});


// POST /qa/questions/:question_id/answers
describe('POST /qa/questions/:question_id/answers', function () {
  it('responds with 200 status code', function (done) {
    request(app)
      .post('/qa/questions/3518965/answers')
      .expect(200, done);
  });
});


// PATCH /qa/questions/:question_id/helpful
describe('PATCH /qa/questions/:question_id/helpful', function () {
  it('responds with 200 status code', function (done) {
    request(app)
      .patch('/qa/questions/1/helpful')
      .expect(200, done);
  });
});


// PATCH /qa/questions/:question_id/report
describe('PATCH /qa/questions/:question_id/report', function () {
  it('responds with 200 status code', function (done) {
    request(app)
      .patch('/qa/questions/1/report')
      .expect(200, done);
  });
});


// PATCH /qa/answers/:answer_id/helpful
describe('PATCH /qa/answers/:answer_id/helpful', function () {
  it('responds with 200 status code', function (done) {
    request(app)
      .patch('/qa/answers/2/report')
      .expect(200, done);
  });
});


// PATCH /qa/answers/:answer_id/report
describe('PATCH /qa/answers/:answer_id/report', function () {
  it('responds with 200 status code', function (done) {
    request(app)
      .patch('/qa/answers/1/helpful')
      .expect(200, done);
  });
});