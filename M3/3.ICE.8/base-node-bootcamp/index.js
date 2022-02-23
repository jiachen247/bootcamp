/* eslint-disable no-unused-vars */
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

function handleNewPainting() {
  const sqlQuery = 'INSERT INTO paintings (name, artist_id, collection_id) VALUES ($1, $2, $3);';
  client.query(sqlQuery, args, whenInsertQueryDone);
}

const whenGetArtistsFromCollectionQueryDone = (error, result) => {
  if (error) {
    console.log('error', error);
  } else {
    result.rows.forEach((row, index) => console.log(`${index + 1}. ${row.name}`));
  }
  client.end();
};

function handleGetArtists(collectionName) {
  const sqlQuery = `
  SELECT DISTINCT artists.name
  FROM artists 
  INNER JOIN paintings
  ON artists.id = paintings.artist_id
  INNER JOIN collections
  ON paintings.collection_id = collections.id
  WHERE collections.name = $1;
  `;
  client.query(sqlQuery, [collectionName], whenGetArtistsFromCollectionQueryDone);
}

const [
  _appName,
  _scriptName,
  command,
  ...args
] = process.argv;

const NEW_PAINTING = 'new-painting';
const GET_ARTISTS = 'get-artists';

switch (command) {
  case NEW_PAINTING:
    handleNewPainting();
    break;
  case GET_ARTISTS:
    handleGetArtists(args[0]);
    break;
  default:
    console.log(`Error: Unknown command ${command}`);
}
