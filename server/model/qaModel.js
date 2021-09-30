const db = require('../db');

const getQuestions = function (product_id, page, count, cb) {

};

const getAnswers;
const postQuestions;
const postAnswers;
const putHelpfulQuestions;
const putReportQuestions;
const putHelpfulAnswers;
const putReportAnswers = function(answer_id, cb) {
  db.query(
    `UPDATE answers SET reported = 1 WHERE answer`
  )
};
