const { Pool } = require('pg')
const pool = new Pool({
  host: 'db',
  database: 'qa',
  user: 'root',
  port: 5432,
  password: '123',
});

