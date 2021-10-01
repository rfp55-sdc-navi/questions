const db = require('../db');

const getQuestions = function (product_id, page, count, cb) {

};

const getAnswers = function (question_id, page, count, cb) {
  db.query(`
      SELECT json_build_object (
        'question', ${question_id},
        'page', ${page},
        'count', ${count},
        'results', json_agg (
          json_build_object (
          'answer_id', answers.id,
          'body', answers.body,
          'date', TO_TIMESTAMP(answers.date_written),
          'answerer_name', answers.answerer_name,
          'helpfulness', answers.helpful,
          'photos', (
            SELECT json_agg (answer_photos.photo_url)
              FROM answers_photos WHERE (answers_photos.answer_id = answers.id)
          )
        )
      )
    )
    FROM answers WHERE answers.question_id = ${questions.id} AND answers.reported = 0 GROUP BY answers.question_id`
  )
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const postQuestions = function (dataBody, cb) {
  var productID = dataBody.product_id;
  var bodyQuestion = dataBody.body;
  var dateQuestion = Date.now();
  var nameQuestion = dataBody.name;
  var emailQuestion = dataBody.email;
  var reportedQuestion = 0;
  var helpfulQuestion = 0;

  db.query(`INSERT INTO questions(product_id, body, date_written, asker_name, asker_email, reported, helpful)
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

  db.query(`INSERT INTO answers(question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
    VALUES(${question_id}, ${bodyAnswer}, ${dateAnswer}, ${nameAnswer}, ${emailAnswer}, ${reportedAnswer}, ${helpfulAnswer})`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const patchHelpfulQuestions = function (question_id, cb) {
  db.query(`UPDATE questions SET helpful = helpful + 1 WHERE questions.id = ${question_id}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const patchReportQuestions = function (question_id, cb) {
  db.query(`UPDATE questions SET reported = 1 WHERE questions.id = ${question_id}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const patchHelpfulAnswers = function (answer_id, cb) {
  db.query(`UPDATE answers SET helpful = helpful + 1 WHERE answers.id = ${answer_id}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const patchReportAnswers = function (answer_id, cb) {
  db.query(`UPDATE answers SET reported = 1 WHERE answers.id = ${answer_id}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

module.exports = {
  getQuestions,
  getAnswers,
  postQuestions,
  postAnswers,
  patchHelpfulQuestions,
  patchReportQuestions,
  patchHelpfulAnswers,
  patchReportAnswers
}
