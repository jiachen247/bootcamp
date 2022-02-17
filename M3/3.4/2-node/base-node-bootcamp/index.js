import pg from 'pg';

const { Client } = pg;

// set the way we will connect to the server
const pgConnectionConfigs = {
  user: 'postgres',
  host: 'localhost',
  database: 'jiachen',
  port: 5432, // Postgres server always runs on this port
};

// create the var we'll use
const client = new Client(pgConnectionConfigs);

// make the connection to the server
client.connect();

// create the query done callback
const whenQueryDone = (error, result) => {
  // this error is anything that goes wrong with the query
  if (error) {
    console.log('error', error);
  } else {
    // rows key has the data
    console.log(result.rows);
  }

  // close the connection
  client.end();
};

const args = process.argv;
const firstArg = args[2];

if (args.length < 3) {
  console.log('error: requires at least 1 argument!');
}

else if (firstArg === 'all-dogs') {
  // display all dogs
  const sqlQuery = 'SELECT * from dogs';
  client.query(sqlQuery, whenQueryDone);
} else {
  // insert new dog
  const sqlQuery = `INSERT INTO dogs (name, type, weight) VALUES ('${args[2]}', '${args[3]}', ${args[4]});`;

  console.log(sqlQuery);
  client.query(sqlQuery, whenQueryDone);
}
