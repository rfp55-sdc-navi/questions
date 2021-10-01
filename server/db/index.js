const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  database: 'qa',
  user: 'root',
  port: 5432,
  password: '123',
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}

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