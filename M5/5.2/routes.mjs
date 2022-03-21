import db from './models/index.mjs';
import initItemsController from './controllers/items.mjs';

export default function bindRoutes(app) {
  const ItemsController = initItemsController(db);
  app.get('/items', ItemsController.index);
  app.get('/home', (request, response) => {
    response.render('home');
  });
}
