import express from 'express';
import { read } from './jsonFileStorage.js'; 
import cookieParser from 'cookie-parser';
 
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cookieParser());

const PORT = 3004;

const whenIncomingRequest = (req, res) => {
  console.log('request  came in');

  read('data.json', (data, err) => {
    if (err) {
      console.log('read error', err);
    }
    const favorite = req.cookies.favorite || "";
    const { recipes } = data; 
    res.render('index', { favorite, recipes });
  });
};

const whenIncomingRequestIndex = (req, res) => {
  console.log('request came in ');

  read('data.json', (data, error) => {
    if (error) {
      console.log('read error', error);
    }

    const { index } = req.params;

    const recipe = data.recipes[index];
    console.log(recipe);

    const favorite = req.cookies?.favorite;

    res.render('recipe', { index, favorite, recipe });
  });
};

const whenIncomingFavoriteRequestIndex = (req, res) => {
  const recipeIndex = req.query.recipe || "";
  res.cookie('favorite', recipeIndex);
  res.redirect(301, `/recipes/${recipeIndex}`);
}

app.get('/', whenIncomingRequest);
app.get('/recipes/:index', whenIncomingRequestIndex);
app.get('/favorites', whenIncomingFavoriteRequestIndex);
app.listen(PORT);
