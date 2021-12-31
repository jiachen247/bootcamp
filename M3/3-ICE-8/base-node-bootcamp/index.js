import pg from 'pg';

const { Client } = pg;

// set the way we will connect to the server
const pgConnectionConfigs = {
  user: 'jiachen',
  host: 'localhost',
  database: 'jiachen',
  port: 5432, // Postgres server always runs on this port
};

// create the var we'll use
const client = new Client(pgConnectionConfigs);

// make the connection to the server
client.connect();

const whenInsertQueryDone = (error, _) => {
  // this error is anything that goes wrong with the query
  if (error) {
    console.log('error', error);
  } else {
    // rows key has the data
    console.log('success!');
  }

  // close the connection
  client.end();
};

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

const whenGetArtistsFromCollectionQueryDone = (error, result) => {
  if (error) {
    console.log('error', error);
  } else {
    result.rows.forEach((row, index) => console.log(`${index + 1}. ${row.name}`));
  }
  client.end();
};

const [
  // eslint-disable-next-line no-unused-vars
  _appName,
  // eslint-disable-next-line no-unused-vars
  _scriptName,
  command,
  ...args
] = process.argv;

if (command === 'new-painting') {
  const sqlQuery = 'INSERT INTO paintings (name, artist_id, collection_id) VALUES ($1, $2, $3);';
  client.query(sqlQuery, args, whenInsertQueryDone);
} else if (command === 'get-artists') {
  const collectionName = args[0];
  const sqlQuery = `
  SELECT artists.name 
  FROM artists 
  INNER JOIN paintings
  ON artists.id = paintings.artist_id
  INNER JOIN collections
  ON paintings.collection_id = collections.id
  WHERE collections.name = $1;
  `;
  client.query(sqlQuery, [collectionName], whenGetArtistsFromCollectionQueryDone);
}

else {
  console.log(`Unknown command: ${command}`);
}
