const pgp = require('pg-promise')(/* options */);

const connection = {
  host: 'localhost',
  database: 'qa',
  user: 'root',
  port: 5432,
  password: '123'
};

module.exports.db = pgp(connection);


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


// const { Pool } = require('pg')
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
