const { Pool } = require('pg')
const pool = new Pool({
  host: 'db',
  database: 'qadb',
  user: 'postgres',
  port: 5432,
  password: '123',
});