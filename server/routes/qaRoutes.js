var controller = require('../controller/qaController')
var router = require('express').Router();

// GET /qa/questions - Retrieves a list of questions for a particular product. This list does not include any reported questions.
// GET /qa/questions/:question_id/answers - Returns answers for a given question. This list does not include any reported answers.
router.get('/questions/:product_id', controller.getQuestions);
router.get('/questions/:question_id/answers', controller.getAnswers);

// POST /qa/questions - Add a Question Adds a question for the given product
// POST /qa/questions/:question_id/answers - Add an Answer Adds an answer for the given question
router.post('/questions', controller.postQuestions);
router.post('/questions/:question_id/answers', controller.postAnswers);

// PUT /qa/questions/:question_id/helpful - Mark Question as Helpful, Updates a question to show it was found helpful.
// PUT /qa/questions/:question_id/report - Report Question, Updates a question to show it was reported.Note, this action does not delete the question, but the question will not be returned in the above GET request.
router.patch('/questions/:question_id/helpful', controller.patchHelpfulQuestions);
router.patch('/questions/:question_id/report', controller.patchReportQuestions);

// PUT /qa/answers/:answer_id/helpful - Mark Answer as Helpful, Updates an answer to show it was found helpful.
// PUT /qa/answers/:answer_id/report - Report Answer, Updates an answer to show it has been reported.Note, this action does not delete the answer, but the answer will not be returned in the above GET request
router.patch('/answers/:answer_id/helpful', controller.patchHelpfulAnswers);
router.patch('/answers/:answer_id/report', controller.patchReportAnswers);


module.exports = router;