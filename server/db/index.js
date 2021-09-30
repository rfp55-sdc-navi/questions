const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  database: 'qa',
  user: 'root',
  port: 5432,
  password: null,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}


// https://node-postgres.com/guides/project-structure