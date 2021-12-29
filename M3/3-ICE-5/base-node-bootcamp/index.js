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

const whenCatQueryDone = (error, result) => {
  // this error is anything that goes wrong with the query
  if (error) {
    console.log('error', error);
  } else {
    console.log('Cats:');
    console.log(result.rows.map((row, index) => `${index + 1}. ${row.cat_name}: Owner: ${row.owner_name}`).join('\n'));
  }

  // close the connection
  client.end();
};

const whenOwnerQueryDone = (error, result) => {
  // this error is anything that goes wrong with the query
  if (error) {
    console.log('error', error);
  } else {
    console.log('Owners:');
    const owners = new Set(result.rows.map((row) => row.owner_name));
    let index = 1;
    // eslint-disable-next-line no-restricted-syntax
    for (const ownerName of owners.values()) {
      console.log(`${index}. ${ownerName}`);
      console.log('    - Cats');
      // eslint-disable-next-line no-restricted-syntax
      result.rows.filter((row) => row.owner_name === ownerName).forEach(
        (row) => {
          console.log(`        - ${row.cat_name}`);
        },
      );
      index += 1;
    }
  }

  // close the connection
  client.end();
};

const command = process.argv[2] || '';

function handleCreateOwner() {
  const ownerName = process.argv[3];
  console.log(`Adding ${ownerName} to cat_owners`);
  const sqlQuery = `INSERT INTO cat_owners (name) VALUES ('${ownerName}');`;
  client.query(sqlQuery, whenQueryDone);
}

function handleCreateCat() {
  const ownerId = process.argv[3];
  const catName = process.argv[4];
  console.log(`Adding cat (${catName}) with owner (${ownerId})`);
  const sqlQuery = `INSERT INTO cats (name, owner_id) VALUES ('${catName}', ${ownerId});`;
  client.query(sqlQuery, whenQueryDone);
}

function handleCats() {
  console.log('Displaying cats and their owners');
  const sqlQuery = `
  SELECT cats.name AS cat_name, cat_owners.name AS owner_name
  FROM cats
  INNER JOIN cat_owners
  ON cats.owner_id = cat_owners.id;
  `;
  client.query(sqlQuery, whenCatQueryDone);
}

function handleOwners() {
  console.log('Displaying owners and their cats');
  const sqlQuery = `
  SELECT cats.name AS cat_name, cat_owners.name AS owner_name
  FROM cats
  INNER JOIN cat_owners
  ON cats.owner_id = cat_owners.id;
  `;
  client.query(sqlQuery, whenOwnerQueryDone);
}

if (command === 'create-owner') {
  handleCreateOwner();
} else if (command === 'create-cat') {
  handleCreateCat();
} else if (command === 'cats') {
  handleCats();
}
else if (command === 'owners') {
  handleOwners();
} else {
  console.log(`Unknown command:${command}`);
  client.end();
}
