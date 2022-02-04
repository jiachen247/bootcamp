# Bootcamp Solutions

const suit = document.createElement('div');
suit.setAttribute('id', 'suit');
suit.innerText = cardInfo.suit;

function createDiv(id, text) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  div.innerText = text;
  return div;
}


  if (result === 'straight-flush') return Math.round(gameScoreStep / 0.0012);
  if (result === 'four-of-a-kind') return Math.round(gameScoreStep / 0.0239);
  if (result === 'full-house') return Math.round(gameScoreStep / 0.144);
  if (result === 'flush') return Math.round(gameScoreStep / 0.19);
  if (result === 'straight') return Math.round(gameScoreStep / 0.35);
  if (result === 'three-of-a-kind') return Math.round(gameScoreStep / 0.5211);
  if (result === 'two-pair') return Math.round(gameScoreStep / 0.747);
  if (result === 'one-pair') return Math.round(gameScoreStep / 0.942);
  if (result === 'You din get anything') return '0';

  const scorePayout = {
    'straight-flush': Math.round(gameScoreStep / 0.0012),

  }

  return scorePayout[result];

