import { read, edit } from './jsonFileStorage.mjs';

const ROLL = "roll";
const AVERAGE = "average";
const filename = "data.json";
const command = process.argv[2];

switch(command) {
  case ROLL:
    handleRoll();
    break;
  case AVERAGE:
    handleAverage();
    break;
  default:
    console.log(`Unknown command: ${command}`);
}

function rollDice() {
  // Generate a number from 1-6 inclusive
  return Math.round(Math.random() * 5) + 1;
}

// Return the dice number rolled the most times
function getMostFrequentValue(frequencies) {
  let maxValue, maxFrequency = 0;
  
  for (let i = 1; i <= 6; i += 1) {
    if (frequencies[i] > maxFrequency) {
      maxFrequency = frequencies[i];
      maxValue = i;
    }
  }

  return maxValue;
}

function calculateAverage(rolls) {
  let sum = 0;

  for (const roll of rolls) {
    sum += roll;
  }

  return sum / rolls.length;
}

function handleRoll() {
  const readCallback = (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const value = rollDice();

    // Update data
    data['rolls'].push(value);
    data['frequency'][value] = (data['frequency'][value] ?? 0) + 1;

    // Print values
    const mostFrquentValue = getMostFrequentValue(data['frequency']);
    console.log(`You rolled ${value}.`);
    console.log(`The computer has rolled ${mostFrquentValue} the most times.`);
  }
  const writeCallback = err => console.log(err ?? "Edit success!");
  edit(filename, readCallback, writeCallback);
}

function handleAverage() {
  const onResult = (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Average is ${calculateAverage(result['rolls'])}.`);
  };
  read('data.json', onResult)
}
