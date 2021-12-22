import express from 'express';

const app = express();

// Generate a random number from 1-6
// Math.random() returns a float from 0-1
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function roll() {
  return Math.floor(Math.random() * 6) + 1;
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
