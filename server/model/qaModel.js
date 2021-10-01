const db = require('../db');

const getQuestions = function (product_id, page, count, cb) {

};

const getAnswers;

const postQuestions = function (dataBody, cb) {
  var productID = dataBody.product_id;
  var bodyQuestion = dataBody.body;
  var dateQuestion = Date.now();
  var nameQuestion = dataBody.name;
  var emailQuestion = dataBody.email;
  var reportedQuestion = 0;
  var helpfulQuestion = 0;

  db.query(
    `INSERT INTO questions(product_id, body, date_written, asker_name, asker_email, reported, helpful)
    VALUES(${question_id}, ${bodyAnswer}, ${dateAnswer}, ${nameAnswer}, ${emailAnswer}, ${reportedAnswer}, ${helpfulAnswer})`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};


const postAnswers = function (question_id, dataBody, cb) {
  var bodyAnswer = dataBody.body;
  var dateAnswer = Date.now();
  var nameAnswer = dataBody.name;
  var emailAnswer = dataBody.email;
  var reportedAnswer = 0;
  var helpfulAnswer = 0;

  db.query(
    `INSERT INTO answers(question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
    VALUES(${question_id}, ${bodyAnswer}, ${dateAnswer}, ${nameAnswer}, ${emailAnswer}, ${reportedAnswer}, ${helpfulAnswer})`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const putHelpfulQuestions = function (question_id, cb) {
  db.query(
    `UPDATE questions SET helpful = helpful + 1 WHERE questions.id = ${question_id}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const putReportQuestions = function (question_id, cb) {
  db.query(
    `UPDATE questions SET reported = 1 WHERE questions.id = ${question_id}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const putHelpfulAnswers = function (answer_id, cb) {
  db.query(
    `UPDATE answers SET helpful = helpful + 1 WHERE answers.id = ${answer_id}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const putReportAnswers = function (answer_id, cb) {
  db.query(
    `UPDATE answers SET reported = 1 WHERE answers.id = ${answer_id}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};



module.exports = {
  getAnswers,
  postQuestions,
  postAnswers,
  putHelpfulQuestions,
  putReportQuestions,
  putHelpfulAnswers,
  putReportAnswers
}
