import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '1s'
};

// GET /qa/questions
// export default function () {
//   http.get('http://localhost:3000/qa/questions?page=1&count=5&product_id=40344');
//   sleep(1);
// }

// GET /qa/questions/:question_id/answers
export default function () {
  http.get('http://localhost:3000/qa/questions/1/answers');
  sleep(1);
}

// POST /qa/questions

export default function () {
  let data = {
    body: "123",
    name: "test",
    email: "test@gmail.com",
    product_id: 40344
  }

  let url = 'http://localhost:3000/qa/questions';

  let headers = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  http.post(url, data);
}


// POST /qa/questions/:question_id/answers

// PUT /qa/questions/:question_id/helpful

// PUT /qa/questions/:question_id/report

// PUT /qa/answers/:answer_id/helpful

// PUT /qa/answers/:answer_id/report

