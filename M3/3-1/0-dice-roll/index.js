import express from 'express';

const app = express();

// Generate a random number from 1-6 inclusive
// Math.random() returns a float from 0-1
function roll() {
  return Math.floor(Math.random() * 2) + 1;
}

const handleIncomingRollRequest = (_, response) => {
  console.log('a dice roll came in');
  response.send(`you rolled a ${roll()}`);
};

const handleIncomingDoubleRollRequest = (_, response) => {
  console.log('a two dice roll came in');
  response.send(`you rolled a ${roll()} and a ${roll()}`);
};

app.get('/dice-roll', handleIncomingRollRequest);
app.get('/two-dice-roll', handleIncomingDoubleRollRequest);

app.listen(3004);
