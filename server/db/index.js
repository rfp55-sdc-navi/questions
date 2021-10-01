const pgp = require('pg-promise')(/* options */);

// node postgres
const connection = {
  host: 'localhost',
  database: 'qa',
  user: 'root',
  port: 5432,
  password: '123'
};

// var db = pgp(connection);
// db.connect()
//   .then(obj => {
//     // Can check the server version here (pg-promise v10.1.0+):
//     const serverVersion = obj.client.serverVersion;

//     obj.done(); // success, release the connection;
//   })
//   .catch(error => {
//     console.log('ERROR:', error.message || error);
//   });

// module.exports = db;

module.exports.db = pgp(connection);

// /qa/answers/:answer_id/helpful
// const { Pool } = require('pg')

// // node postgres
// const pool = new Pool({
//   host: 'localhost',
//   database: 'qa',
//   user: 'root',
//   port: 5432,
//   password: '123',
// });

// module.exports = {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback)
//   },
// }

// const connection = pool.connect((err) => {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log("DB Connected");
//   }
// })

// module.exports.connection = connection;

// inbound rule - specific port available to everyone

// https://node-postgres.com/guides/project-structure