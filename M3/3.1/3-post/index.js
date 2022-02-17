import express from 'express';
import { add } from './jsonFileStorage.js';

const app = express();
app.set('view engine', 'ejs');

// Configure Express to parse request body data into request.body
app.use(express.urlencoded({ extended: false }));

// Save new recipe data sent via POST request from our form
app.post('/recipe', (request, response) => {
  // Add new recipe data in request.body to recipes array in data.json.
  add('data.json', 'recipes', request.body, (err) => {
    if (err) {
      response.status(500).send('DB write error.');
      return;
    }
    // Acknowledge recipe saved.
    response.send('Saved recipe!');
  });
});

// Render the form to input new recipes
app.get('/recipe', (request, response) => {
  response.render('recipe');
});

app.listen(3004);
