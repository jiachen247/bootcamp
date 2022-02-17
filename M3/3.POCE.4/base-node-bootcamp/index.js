import pg from 'pg';

const { Client } = pg;

const client = new Client({
  user: 'jiachen',
  host: 'localhost',
  database: 'jiachen',
  port: 5432,
});

client.connect();
console.log('successfully connected');

// Test commands
// node index.js log breakfast 'nasi lemak' 0 true
// node index.js report

const LOG = 'log';
const REPORT = 'report';

function whenLogQueryDone(error, _) {
  if (error) {
    console.log(`Error: [Log] ${error}`);
  } else {
    console.log('Successfully inserted log!');
  }
  client.end();
}

function handleNewLog() {
  const insertLogQuery = 'INSERT INTO meals (type, description, amount_of_alcohol, was_hungry_before_eating, created_at) VALUES ($1, $2, $3, $4, $5)';

  const logData = [
    process.argv[3], // type
    process.argv[4], // description
    Number(process.argv[5]), // amount_of_alcohol
    Boolean(process.argv[6]), // was_hungry_before_eating
    new Date(), // created_at
  ];

  client.query(insertLogQuery, logData, whenLogQueryDone);
}

// Format each report to a pretty string (report -> string)
function formatReport(report) {
  const hungerState = report.was_hungry_before_eating
    ? 'feeling hungry'
    : 'not hungry';

  return `${report.id}. ${report.type} - ${report.description} - ${report.amount_of_alcohol} - ${hungerState}`;
}

function whenReportQueryDone(error, result) {
  if (error) {
    console.log(`Error: [Report] ${error}`);
  } else {
    result.rows.map(formatReport).forEach((report) => console.log(report));
  }
  client.end();
}

function handleReport() {
  const reportQuery = 'SELECT * FROM meals';
  client.query(reportQuery, whenReportQueryDone);
}

const command = process.argv[2];

switch (command) {
  case LOG:
    handleNewLog();
    break;
  case REPORT:
    handleReport();
    break;
  default:
    console.log(`Error: Error command ${command}`);
}
