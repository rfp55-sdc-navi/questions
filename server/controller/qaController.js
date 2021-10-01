const models = require('../model/qaModel');

const getQuestions = function (req, res) {

};

const getAnswers = function (req, res) {


};

const postQuestions = function (req, res) {

};

const postAnswers = function (req, res) {
  var question_id = req.params.question_id;
  models.postAnswers(question_id, (err, result) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send(result);
    }
  })
};

const patchHelpfulQuestions = function (req, res) {
  var question_id = req.params.question_id;
  models.patchHelpfulQuestions(question_id, (err, result) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send(result);
    }
  })
};

const patchReportQuestions = function (req, res) {
  var question_id = req.params.question_id;
  models.patchReportQuestions(question_id, (err, result) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send(result);
    }
  })
};

const patchHelpfulAnswers = function (req, res) {
  var answer_id = req.params.answer_id;
  models.patchHelpfulAnswers(answer_id, (err, result) => {
    if (err) {
      res.sendStatus(500)
    } else {
      console.log("success")
      res.send(result);
    }
  })
};

const patchReportAnswers = function (req, res) {
  var answer_id = req.params.answer_id;
  models.patchReportAnswers(answer_id, (err, result) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send(result);
    }
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
