import pg from 'pg';

// Initialise DB connection
const { Pool } = pg;
const pgConnectionConfigs = {
  user: 'jiachen',
  host: 'localhost',
  database: 'jiachen',
  port: 5432, // Postgres server always runs on this port by default
};
const pool = new Pool(pgConnectionConfigs);

const results = Promise.all([
  pool.query('SELECT * FROM recipes'),
  pool.query('SELECT * FROM categories'),
  // allResults is an array of results whose elements correspond
  // to the elements in the Promise.all parameter array
]).then((allResults) => {
  console.log(allResults.map(x => x.rows));
});