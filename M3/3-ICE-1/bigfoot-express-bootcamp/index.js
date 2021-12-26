import express from 'express';
import { read } from './jsonFileStorage.js';

const app = express();

function genSightingHTML(sighting) {
  const {
    YEAR,
    SEASON,
    STATE, COUNTY,
    LOCATION_DETAILS,
    OBSERVED,
    OTHER_WITNESSES,
    TIME_AND_CONDITIONS,
    REPORT_NUMBER,
    REPORT_CLASS,
  } = sighting;

  return `
      <div>
        <div>Year: ${YEAR}</div>
        <div>Season: ${SEASON}</div>
        <div>State: ${STATE}</div>
        <div>Country: ${COUNTY}</div>
        <div>Location: ${LOCATION_DETAILS}</div>
        <div>Observed: ${OBSERVED}</div>
        <div>Other Witnesses: ${OTHER_WITNESSES}</div>
        <div>Time and Conditions: ${TIME_AND_CONDITIONS}</div>
        <div>Report Number: ${REPORT_NUMBER}</div>
        <div>Report Class: ${REPORT_CLASS}</div>
      </div>
      <hr class="solid">
  `;
}

app.get('/sightings/:index', (request, response) => {
  read('data.json', (err, data) => {
    const { index } = request.params;

    if (data.sightings == null || index >= data.sightings.length) {
      response.send('invalid index');
      return;
    }
    const content = genSightingHTML(data.sightings[index]);
    response.send(`
      <html>
        <body>
          <h3>Sighting #${index}</h1>
          ${content}
        </body>
      </html>
    `);
  });
});

function compareState(s1, s2) {
  if (s1.STATE < s2.STATE) {
    return -1;
  }
  if (s1.STATE < s2.STATE) {
    return 1;
  }
  return 0;
}

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

    response.send(`
      <html>
        <body>
          ${sightings.map(genSightingHTML)}
        </body>
      </html>
    `);
  });
});

app.listen(3004);
