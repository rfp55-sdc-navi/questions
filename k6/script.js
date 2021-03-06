import http from 'k6/http';
import { sleep } from 'k6';

// export let options = {
//   vus: 1000,
//   duration: '30s'
// };

export let options = {
  vus: 1,
  duration: '5s'
};

// GET /qa/questions
// export default function () {
//   let randomProductId = Math.floor(Math.random() * (1000011 - 1 + 1)) + 1;
//   http.get(`http://localhost:3001/qa/questions?page=1&count=5&product_id=${randomProductId}`);
//   sleep(1);
// }

// GET /qa/questions/:question_id/answers
// export default function () {
//   let randomQuestionId = Math.floor(Math.random() * (3518992 - 1 + 1)) + 1;
//   http.get(`http://localhost:3001/qa/questions/${randomQuestionId}/answers`);
//   sleep(1);
// }

// POST /qa/questions
// export default function () {
//   let randomProductId = Math.floor(Math.random() * (1000011 - 1 + 1)) + 1;

//   let data = JSON.stringify({
//     body: "123",
//     name: "test",
//     email: "test@gmail.com",
//     product_id: 40344
//   });

//   let url = 'http://localhost:3001/qa/questions';

//   let headers = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   http.post(url, data, headers);
//   sleep(1);
// }


// POST /qa/questions/:question_id/answers
export default function () {
  let data = JSON.stringify({
    body: "123",
    name: "test",
    email: "test@gmail.com",
    photos: []
  });

  let randomQuestionId = Math.floor(Math.random() * (3518992 - 1 + 1)) + 1;
  let url = `http://localhost:3001/qa/questions/${randomQuestionId}/answers`;

  let headers = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  http.post(url, data);
  sleep(1);
}


// PATCH /qa/questions/:question_id/helpful
// export default function () {
//   let randomQuestionId = Math.floor(Math.random() * (3518992 - 1 + 1)) + 1;
//   let url = `http://localhost:3001/qa/questions/${randomQuestionId}/helpful`;
//   http.patch(url);
//   sleep(1);
// }


// PATCH /qa/questions/:question_id/report
// export default function () {
//   let randomQuestionId = Math.floor(Math.random() * (3518992 - 1 + 1)) + 1;
//   let url = `http://localhost:3001/qa/questions/${randomQuestionId}/report`;
//   http.patch(url);
//   sleep(1);
// }


// PATCH /qa/answers/:answer_id/helpful
// export default function () {
//   let randomAnswerId = Math.floor(Math.random() * (6879353 - 1 + 1)) + 1;
//   let url = `http://localhost:3001/qa/answers/${randomAnswerId}/helpful`;
//   http.patch(url);
//   sleep(1);
// }


// PATCH /qa/answers/:answer_id/report
// export default function () {
//   let randomAnswerId = Math.floor(Math.random() * (6879353 - 1 + 1)) + 1;
//   let url = `http://localhost:3001/qa/answers/${randomAnswerId}/report`;
//   http.patch(url);
//   sleep(1);
// }

