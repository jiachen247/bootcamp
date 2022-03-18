import db from './models/index.mjs';

// import the controller
import initItemsController from './controllers/items.mjs';

export default function bindRoutes(app) {
  // pass in the db for all items callbacks
  const itemsController = initItemsController(db);

  app.get('/items', itemsController.index);
}