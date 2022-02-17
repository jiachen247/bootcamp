import express from 'express';
import { read } from './jsonFileStorage.js';

const app = express();
app.set('view engine', 'ejs');

function compareState(s1, s2) {
  if (s1.STATE < s2.STATE) {
    return -1;
  }
  if (s1.STATE < s2.STATE) {
    return 1;
  }
  return 0;
}

app.get('/sightings/:index', (request, response) => {
  read('data.json', (err, data) => {
    const { index } = request.params;
    const content = {
      index,
      sighting: data.sightings[index],
    };

    response.render('sighting', content);
  });
});

// Comfortable & More Comfortable
app.get('/year-sightings/:year', (request, response) => {
  read('data.json', (err, data) => {
    const { year } = request.params;
    const { sort } = request.query;

    const sightings = data.sightings.filter((sighting) => sighting.YEAR === year);

    if (sort === 'asc') {
      sightings.sort(compareState);
    } else if (sort === 'dsc') {
      sightings.sort((s1, s2) => -1 * compareState(s1, s2));
    }

    response.render('sightings', { sightings });
  });
});

// *** Added this route ***
app.get('/', (_, response) => {
  read('data.json', (err, data) => {
    response.render('index', { sightings: data.sightings });
  });
});

// *** Added this route ***
// Comfortable
app.get('/years', (_, response) => {
  read('data.json', (err, data) => {
    const uniqueYears = new Set();

    data.sightings.forEach((sighting) => {
      if (sighting.YEAR !== undefined) {
        uniqueYears.add(sighting.YEAR);
      }
    });

    response.render('years', { years: [...uniqueYears] });
  });
});

app.listen(3005);
