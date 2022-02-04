import { write, read, add } from './jsonFileStorage.mjs'
import { writeFile, readFile } from 'fs';

var deck = [
  {
    name: 'ace',
    suit: 'hearts',
    rank: 1,
  },
  {
    name: '2',
    suit: 'hearts',
    rank: 2,
  },
  {
    name: '3',
    suit: 'hearts',
    rank: 3,
  },
  {
    name: '4',
    suit: 'hearts',
    rank: 4,
  },
  {
    name: '5',
    suit: 'hearts',
    rank: 5,
  },
  {
    name: '6',
    suit: 'hearts',
    rank: 6,
  },
  {
    name: '7',
    suit: 'hearts',
    rank: 7,
  },
  {
    name: '8',
    suit: 'hearts',
    rank: 8,
  },
  {
    name: '9',
    suit: 'hearts',
    rank: 9,
  },
  {
    name: '10',
    suit: 'hearts',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'hearts',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'hearts',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'hearts',
    rank: 13,
  },
  {
    name: 'ace',
    suit: 'diamonds',
    rank: 1,
  },
  {
    name: '2',
    suit: 'diamonds',
    rank: 2,
  },
  {
    name: '3',
    suit: 'diamonds',
    rank: 3,
  },
  {
    name: '4',
    suit: 'diamonds',
    rank: 4,
  },
  {
    name: '5',
    suit: 'diamonds',
    rank: 5,
  },
  {
    name: '6',
    suit: 'diamonds',
    rank: 6,
  },
  {
    name: '7',
    suit: 'diamonds',
    rank: 7,
  },
  {
    name: '8',
    suit: 'diamonds',
    rank: 8,
  },
  {
    name: '9',
    suit: 'diamonds',
    rank: 9,
  },
  {
    name: '10',
    suit: 'diamonds',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'diamonds',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'diamonds',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'diamonds',
    rank: 13,
  },
  {
    name: 'ace',
    suit: 'clubs',
    rank: 1,
  },
  {
    name: '2',
    suit: 'clubs',
    rank: 2,
  },
  {
    name: '3',
    suit: 'clubs',
    rank: 3,
  },
  {
    name: '4',
    suit: 'clubs',
    rank: 4,
  },
  {
    name: '5',
    suit: 'clubs',
    rank: 5,
  },
  {
    name: '6',
    suit: 'clubs',
    rank: 6,
  },
  {
    name: '7',
    suit: 'clubs',
    rank: 7,
  },
  {
    name: '8',
    suit: 'clubs',
    rank: 8,
  },
  {
    name: '9',
    suit: 'clubs',
    rank: 9,
  },
  {
    name: '10',
    suit: 'clubs',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'clubs',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'clubs',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'clubs',
    rank: 13,
  },
  {
    name: 'ace',
    suit: 'spades',
    rank: 1,
  },
  {
    name: '2',
    suit: 'spades',
    rank: 2,
  },
  {
    name: '3',
    suit: 'spades',
    rank: 3,
  },
  {
    name: '4',
    suit: 'spades',
    rank: 4,
  },
  {
    name: '5',
    suit: 'spades',
    rank: 5,
  },
  {
    name: '6',
    suit: 'spades',
    rank: 6,
  },
  {
    name: '7',
    suit: 'spades',
    rank: 7,
  },
  {
    name: '8',
    suit: 'spades',
    rank: 8,
  },
  {
    name: '9',
    suit: 'spades',
    rank: 9,
  },
  {
    name: '10',
    suit: 'spades',
    rank: 10,
  },
  {
    name: 'jack',
    suit: 'spades',
    rank: 11,
  },
  {
    name: 'queen',
    suit: 'spades',
    rank: 12,
  },
  {
    name: 'king',
    suit: 'spades',
    rank: 13,
  },
];

var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

const shuffle = () => {
  const handleFileRead = (readErr, jsonContentStr) => {
    if (readErr) {
      console.log('Reading error', readErr);
    }

    // Convert data from string to Object
    const { cardDeck } = JSON.parse(jsonContentStr);

    // TODO: Modify the data however we would like
    const shuffled = shuffleCards(cardDeck);

    // Convert data from Object to string
    const shuffledJson = JSON.stringify({ cardDeck: shuffled });

    // Write updated data to file
    writeFile(filename, shuffledJson, (writeErr) => {
      if (writeErr) {
        console.log('writing error', writeErr);
      } else {
        console.log("Success!")
      }
    });
  };

  // Read original data from file
  readFile(filename, 'utf-8', handleFileRead);
};

function deal() {
  const handleFileRead = (readErr, jsonContentStr) => {
    if (readErr) {
      console.log('Reading error', readErr);
    }

    // Convert data from string to Object
    const {cardDeck, currentHand} = JSON.parse(jsonContentStr);

    // identical
    const data = JSON.parse(jsonContentStr);
    const cardDeck = data.cardDeck;
    const currentHand = data.currentHand;

    // TODO: Modify the data however we would like
    const drawn = cardDeck.slice(0, 2);
    const rest = cardDeck.slice(2);

    console.log(`Drawn cards:`);
    console.log(drawn);

    let newHand = (currentHand ?? []).concat(drawn);

    // Convert data from Object to string
    const data = JSON.stringify(
      { 
        cardDeck: rest,  
        currentHand: newHand
      }
    );

    // Write updated data to file
    writeFile(filename, data, (writeErr) => {
      if (writeErr) {
        console.log('writing error', writeErr);
      } else {
        console.log("Success!")
      }
    });
  };

  // Read original data from file
  readFile(filename, 'utf-8', handleFileRead);
}

const CREATE = 'create';
const READ = 'read';
const SHUFFLE = 'shuffle';
const DEAL = 'deal';

const filename = 'data.json';
const command = process.argv[2];

switch (command) {
  case CREATE:
    add(filename, 'cardDeck', deck);
    break;
  case READ:
    read(filename);
    break;
  case SHUFFLE:
    shuffle();
    break;
  case DEAL:
    deal();
    break;
  default:
    console.log(`Error: unknown command  ${command}`)
}

