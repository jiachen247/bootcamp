import React, { useState } from "react";

export default function App() {
  // Set the default value of the deck
  const [cardDeck, setCardDeck] = useState(shuffleCards(makeDeck()));

  // Set the default player hand as empty
  const [playerHand, setPlayerHand] = useState([]);

  // Set the default high card as none
  const [highCard, setHighCard] = useState(null);

  // Deal 2 cards into the player's hand and update the deck
  const dealCards = () => {
    const hand = [cardDeck.pop(), cardDeck.pop()];
    setPlayerHand(hand);
    setCardDeck([...cardDeck]);
    setHighCard(getHighCard(hand));
  };

  // Render cards in the player hand
  // Note that when this renders the first time and the hand is
  // empty, it does not require a special condition.
  const handElems = playerHand.map(({ name, suit }) => (
    <li key={name + suit}>
      <div>
        {name} 
        {' '}
        {suit}
      </div>
    </li>
  ));

  return (
    <div>
      <div>
        <h3>Cards:</h3>
        {handElems}
      </div>
      <p>
        <button onClick={dealCards}>Deal</button>
      </p>
      {highCard && <p>Current high card is: {highCard.name}  {highCard.suit}</p>}
    </div>
  );
}

const getHighCard = (cards) => {
  const [card1, card2] = cards;
  return card1.rank > card2.rank ? card1 : card2;
};

// Shuffle an array of cards
const shuffleCards = (cards) => {
  // Loop over the card deck array once
  for (let currentIndex = 0; currentIndex < cards.length; currentIndex += 1) {
    // Select a random index in the deck
    const randomIndex = getRandomIndex(cards.length);
    // Select the card that corresponds to randomIndex
    const randomCard = cards[randomIndex];
    // Select the card that corresponds to currentIndex
    const currentCard = cards[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cards[currentIndex] = randomCard;
    cards[randomIndex] = currentCard;
  }
  // Return the shuffled deck
  return cards;
};

// Get a random index ranging from 0 (inclusive) to max (exclusive).
const getRandomIndex = (max) => Math.floor(Math.random() * max);

const makeDeck = () => {
  // Initialise an empty deck array
  const newDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  const suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    // Store the current suit in a variable
    const currentSuit = suits[suitIndex];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (let rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      let cardName = `${rankCounter}`;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName === "1") {
        cardName = "ace";
      } else if (cardName === "11") {
        cardName = "jack";
      } else if (cardName === "12") {
        cardName = "queen";
      } else if (cardName === "13") {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      const card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
      };

      // Add the new card to the deck
      newDeck.push(card);
    }
  }

  // Return the completed card deck
  return newDeck;
};
