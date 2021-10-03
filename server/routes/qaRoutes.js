var controller = require('../controller/qaController')
var router = require('express').Router();

// GET /qa/questions - Retrieves a list of questions for a particular product - does not include any reported questions.
// GET /qa/questions/:question_id/answers - Returns answers for a given question - does not include any reported answers.
router.get('/questions', controller.getQuestions);
router.get('/questions/:question_id/answers', controller.getAnswers);

// POST /qa/questions - Adds a question for the given product
// POST /qa/questions/:question_id/answers - Adds an answer for the given question
router.post('/questions', controller.postQuestions);
router.post('/questions/:question_id/answers', controller.postAnswers);

// PATCH /qa/questions/:question_id/helpful - Updates a question to show it was found helpful.
// PATCH /qa/questions/:question_id/report - Updates a question to show it was reported - the question will not be returned in GET request.
router.patch('/questions/:question_id/helpful', controller.patchHelpfulQuestions);
router.patch('/questions/:question_id/report', controller.patchReportQuestions);

// PATCH /qa/answers/:answer_id/helpful - Updates an answer to show it was found helpful.
// PATCH /qa/answers/:answer_id/report - Updates an answer to show it has been reported - the answer will not be returned in GET request
router.patch('/answers/:answer_id/helpful', controller.patchHelpfulAnswers);
router.patch('/answers/:answer_id/report', controller.patchReportAnswers);

module.exports = router;