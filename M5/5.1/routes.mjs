import db from './models/index.mjs';

// import your controllers here
import initItemsController from './controllers/items.mjs';

export default function bindRoutes(app) {
  const itemsController = initItemsController(db);
  app.get('/items', itemsController.index);
}
