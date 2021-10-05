const models = require('../model/qaModel');

const getQuestions = function (req, res) {
  var product_id = req.query.product_id;
  var page = 1 || req.query.page;
  var count = 5 || req.query.count;

  models.getQuestions(product_id, page, count, (err, result) => {
    if (err) {
      console.log('getQuestions error' + err);
      res.sendStatus(500)
    } else {
      // console.log(result[0]);
      res.send(result[0]);
    }
  })
};

const getAnswers = function (req, res) {
  var question_id = req.params.question_id;
  var page = 1 || req.query.page;
  var count = 5 || req.query.count;

  models.getAnswers(question_id, page, count, (err, result) => {
    if (err) {
      console.log('getAnswers error' + err);
      res.sendStatus(500)
    } else {
      // data.rows[0].json_build_object
      // res.send(result["json_build_object"]);
      // res.send(result);
      // console.log(result[0].json_build_object.results);
      if (result.length === 0) {
        res.send({});
      } else {
        res.send(result[0].json_build_object);
      }
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
      res.sendStatus(201);
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
      res.sendStatus(201);
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
      res.sendStatus(204);
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
      res.sendStatus(204);
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
      res.sendStatus(204);
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
      res.sendStatus(204);
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
