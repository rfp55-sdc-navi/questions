const models = require('../model/qaModel');

const getQuestions = function (req, res) {
  var product_id = req.params.product_id;
  var page = 1 || req.body.page;
  var count = 5 || req.body.count;

  models.getQuestions(product_id, page, count, (err, result) => {
    if (err) {
      console.log('getQuestions error' + err);
      res.sendStatus(500)
    } else {
      res.send(result);
    }
  })
};

const getAnswers = function (req, res) {
  var question_id = req.params.question_id;
  var page = req.body.page || 1;
  var count = req.body.count || 5;

  models.getAnswers(question_id, page, count, (err, result) => {
    if (err) {
      console.log('getAnswers error' + err);
      res.sendStatus(500)
    } else {
      res.send(result);
    }
  })
};

const postQuestions = function (req, res) {
  var dataBody = req.body;

  models.postQuestions(dataBody, (err, result) => {
    if (err) {
      console.log('postQuestions error ' + err);
      res.sendStatus(500)
    } else {
      res.send(result);
    }
  })
};

const postAnswers = function (req, res) {
  var question_id = req.params.question_id;
  var dataBody = req.body;

  models.postAnswers(question_id, dataBody, (err, result) => {
    if (err) {
      console.log('postAnswers error ' + err);
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
      console.log('patchHelpfulQuestions error' + err);
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
      console.log('patchReportQuestions error' + err);
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
      console.log('patchHelpfulAnswers error' + err);
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
      console.log('patchReportAnswers error' + err);
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
