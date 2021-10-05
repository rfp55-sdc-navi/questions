const db = require('../db').db;

const getQuestions = function (product_id, page, count, callback) {
  db.query(`
      SELECT CAST ( product_id AS TEXT ), json_agg(
        json_build_object(
          'question_id', questions.id,
          'question_body', questions.body,
          'question_date', TO_CHAR(TO_TIMESTAMP(questions.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
          'asker_name', questions.asker_name,
          'question_helpfulness', questions.helpful,
          'reported', CASE WHEN questions.reported = 0 THEN false END,
          'answers', (SELECT
            coalesce(answers, '{}'::json)
            FROM (
            SELECT json_object_agg(
              answers.id, json_build_object(
                'id', answers.id,
                'body', answers.body,
                'date', TO_CHAR(TO_TIMESTAMP(answers.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
                'answerer_name', answers.answerer_name,
                'helpfulness', answers.helpful,
                'photos', (
                  select coalesce(json_agg(
                      t.photo_url
                    ), '[]'::json) from
                    (SELECT
                        answers_photos.photo_url
                  FROM answers_photos WHERE answers_photos.answer_id = answers.id) AS t
                )
              )
            ) AS answers
            FROM answers WHERE answers.question_id = questions.id
          ) AS answers)
      )
    ) as results
    FROM questions WHERE questions.product_id = ${product_id} AND questions.reported = 0 GROUP BY questions.product_id;
  `)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

//'date', TO_TIMESTAMP(answers.date_written),
// TO_CHAR(TO_TIMESTAMP(answers.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS"Z"')
//  'date', TO_TIMESTAMP(answers.date_written/1000, 'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
const getAnswers = function (question_id, page, count, callback) {
  db.query(`
    SELECT json_build_object(
        'question', CAST ( ${question_id} AS TEXT ),
        'page', ${page},
        'count', ${count},
        'results', json_agg(
          json_build_object(
            'answer_id', answers.id,
            'body', answers.body,
            'date', TO_CHAR(TO_TIMESTAMP(answers.date_written / 1000), 'YYYY-MM-DD"T"HH24:MI:SS"Z"'),
            'answerer_name', answers.answerer_name,
            'helpfulness', answers.helpful,
            'photos', (
              select coalesce(json_agg(
                  json_build_object(
                    'id', t.id,
                    'url', t.photo_url
                  )
                ), '[]'::json) from
                (SELECT
                    answers_photos.id,
                    answers_photos.photo_url
              FROM answers_photos WHERE answers_photos.answer_id = answers.id) AS t
            )
          )
        )
      )
    FROM answers WHERE answers.question_id = ${question_id} AND answers.reported = 0 GROUP BY answers.question_id;`
  )
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

// db.query(`
//     SELECT json_build_object(
//         'question', ${question_id},
//         'page', ${page},
//         'count', ${count},
//         'results', json_agg(
//           json_build_object(
//             'answer_id', answers.id,
//             'body', answers.body,
//             'date', TO_TIMESTAMP(answers.date_written / 1000),
//             'answerer_name', answers.answerer_name,
//             'helpfulness', answers.helpful,
//             'photos', (
//               SELECT
//                 json_agg(
//                   json_build_object(
//                     'id', answers_photos.id,
//                     'url', answers_photos.photo_url
//                   )
//                 )
//               FROM answers_photos WHERE answers_photos.answer_id = answers.id
//             )
//           )
//         )
//       )
//     FROM answers WHERE answers.question_id = ${question_id} AND answers.reported = 0 GROUP BY answers.question_id;`
// )


const postQuestions = function (dataBody, callback) {
  var productID = dataBody.product_id;
  var bodyQuestion = dataBody.body;
  var dateQuestion = Date.now();
  var nameQuestion = dataBody.name;
  var emailQuestion = dataBody.email;
  var reportedQuestion = 0;
  var helpfulQuestion = 0;


  db.query(`INSERT INTO questions (product_id, body, date_written, asker_name, asker_email, reported, helpful)
    VALUES (${productID}, '${bodyQuestion}', '${dateQuestion}', '${nameQuestion}', '${emailQuestion}',
    ${reportedQuestion}, ${helpfulQuestion});`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const postAnswers = function (question_id, dataBody, callback) {
  var bodyAnswer = dataBody.body;
  var dateAnswer = Date.now();
  var nameAnswer = dataBody.name;
  var emailAnswer = dataBody.email;
  var reportedAnswer = 0;
  var helpfulAnswer = 0;

  var photos = dataBody.photos;

  db.query(`INSERT INTO answers (question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
    VALUES(${question_id}, '${bodyAnswer}', '${dateAnswer}', '${nameAnswer}', '${emailAnswer}', ${reportedAnswer}, ${helpfulAnswer}) RETURNING id;`)
    .then((data) => {
      db.query(`INSERT INTO answers_photos (answer_id, photo_url) VALUES (${data[0].id}, '${photos}');`)
        .then((data) => {
          callback(null, data);
        })
        .catch((err) => {
          callback(err, null);
        });
    })
    .catch((err) => {
      callback(err, null);
    })
};

const patchHelpfulQuestions = function (question_id, callback) {
  db.query(`UPDATE questions SET helpful = helpful + 1 WHERE questions.id = ${question_id};`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const patchReportQuestions = function (question_id, callback) {
  db.query(`UPDATE questions SET reported = 1 WHERE questions.id = ${question_id};`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const patchHelpfulAnswers = function (answer_id, callback) {
  db.query(`UPDATE answers SET helpful = helpful + 1 WHERE answers.id = ${answer_id};`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

const patchReportAnswers = function (answer_id, callback) {
  db.query(`UPDATE answers SET reported = 1 WHERE answers.id = ${answer_id};`)
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
