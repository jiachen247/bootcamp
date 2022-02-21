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
    console.log('Success!');
    console.log(result.rows);
  }

  // close the connection
  client.end();
};

function handleCreateOwner() {
  const ownerName = process.argv[3];
  console.log(`Adding ${ownerName} to cat_owners`);
  const createOwnerQuery = 'INSERT INTO cat_owners (name) VALUES ($1);';
  const ownerData = [ownerName];
  client.query(createOwnerQuery, ownerData, whenQueryDone);
}

function handleCreateCat() {
  const ownerId = process.argv[3];
  const catName = process.argv[4];
  console.log(`Adding cat (${catName}) with owner (${ownerId})`);
  const createCatQuery = 'INSERT INTO cats (name, owner_id) VALUES ($1, $2);';
  const catData = [
    catName,
    ownerId,
  ];

  client.query(createCatQuery, catData, whenQueryDone);
}

function whenCatQueryDone(error, results) {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }
  console.log('Cats: ');
  results.rows.forEach((result, index) => {
    const { cat_name, owner_name } = result;
    console.log(`  ${index + 1}. ${cat_name}: ${owner_name}`);
    client.end();
  });
}

function whenOwnerQueryDone(error, results) {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }

  const ownersMap = {};

  results.rows.forEach((result) => {
    const { cat_name, owner_name } = result;
    if (!(owner_name in ownersMap)) {
      ownersMap[owner_name] = [];
    }
    ownersMap[owner_name].push(cat_name);
  });
  console.log('Owners: ');
  Object.entries(ownersMap).forEach(([ownerName, catNames]) => {
    console.log(`  - ${ownerName}`);
    catNames
      .filter((x) => x != null)
      .forEach((catName, index) => console.log(`    ${index + 1}. ${catName}`));
  });
  client.end();
}

function handleCats() {
  console.log('Displaying cats and their owners');
  const sqlQuery = `
  SELECT cats.name AS cat_name, cat_owners.name AS owner_name
  FROM cats
  JOIN cat_owners
  ON cats.owner_id = cat_owners.id;
  `;
  client.query(sqlQuery, whenCatQueryDone);
}

function handleOwners() {
  console.log('Displaying owners and their cats');
  const sqlQuery = `
  SELECT cats.name AS cat_name, cat_owners.name AS owner_name
  FROM cat_owners
  LEFT JOIN cats
  ON cats.owner_id = cat_owners.id;
  `;
  client.query(sqlQuery, whenOwnerQueryDone);
}

const CREATE_OWNER = 'create-owner';
const CREATE_CAT = 'create-cat';
const LIST_CATS = 'cats';
const LIST_OWNERS = 'owners';

const command = process.argv[2] ?? '';

switch (command) {
  case CREATE_OWNER:
    handleCreateOwner();
    break;
  case CREATE_CAT:
    handleCreateCat();
    break;
  case LIST_CATS:
    handleCats();
    break;
  case LIST_OWNERS:
    handleOwners();
    break;
  default:
    console.log(`Error: Unkown command - '${command}'`);
}
