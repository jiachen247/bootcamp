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

function listCatsWithOwners(cats, owners) {
  console.log('Cats: ');
  cats.forEach((cat, index) => {
    owners
      .filter((owner) => owner.id === cat.owner_id)
      .forEach((owner) => console.log(`  ${index + 1}. ${cat.name}: Owner: ${owner.name}`));
    client.end();
  });
}

function listOwnersWithCats(cats, owners) {
  console.log('Owners: ');
  owners.forEach((owner, index) => {
    console.log(`  ${index + 1}. ${owner.name}:`);
    cats
      .filter((cat) => owner.id === cat.owner_id)
      .forEach((cat) => console.log(`    - ${cat.name}`));
    client.end();
  });
}

function handleCats() {
  console.log('Displaying cats and their owners');
  const catsQuery = 'SELECT * FROM cats;';
  client.query(catsQuery, (error, catResults) => {
    const ownerQuery = 'SELECT * FROM cat_owners;';
    client.query(ownerQuery, (error, ownerResults) => {
      listCatsWithOwners(catResults.rows, ownerResults.rows);
    });
  });
}

function handleOwners() {
  console.log('Displaying owners and their cats');
  const catsQuery = 'SELECT * FROM cats;';
  client.query(catsQuery, (error, catResults) => {
    const ownerQuery = 'SELECT * FROM cat_owners;';
    client.query(ownerQuery, (error, ownerResults) => {
      listOwnersWithCats(catResults.rows, ownerResults.rows);
    });
  });
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
