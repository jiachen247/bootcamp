import db from './models/index.mjs';
import initItemsController from './controllers/items.mjs';

export default function bindRoutes(app) {
  const ItemsController = initItemsController(db);
  app.get('/items', ItemsController.index);
  app.post('/items', ItemsController.create);
  app.get('/add', (request, response) => {
    response.render('add');
  });
}
