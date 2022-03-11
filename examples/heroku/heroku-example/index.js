import express from 'express';
import pg from 'pg';

const { Pool } = pg;
const PORT = process.env.PORT || 3004;

// Initialise Express
const app = express();

app.set('view engine', 'ejs');

let pgConnectionConfigs;

// test to see if the env var is set. Then we know we are in Heroku
if (process.env.DATABASE_URL) {
  // pg will take in the entire value and use it to connect
  pgConnectionConfigs = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  };
} else {
  // this is the same value as before
  pgConnectionConfigs = {
    user: 'jiachen',
    host: 'localhost',
    database: 'jiachen',
    port: 5432,
  };
}
const pool = new Pool(pgConnectionConfigs);

app.get('/bananas', (request, response) => {
  const responseText = `This is a random number: ${Math.random()}`;
  console.log('request came in', responseText);
  const data = { responseText };
  response.render('bananas', data);
});

app.get("/cats", (request, response) => {
  pool.query("SELECT * FROM cats;")
  .then((results) => response.send(results.rows))
});

app.listen(PORT);