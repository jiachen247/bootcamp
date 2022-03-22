import db from './models/index.mjs';
import initBugsController from './controllers/bugs.mjs';

// import your controllers here
export default function bindRoutes(app) {
  const BugsController = initBugsController(db);
  app.get('/', BugsController.index);
  app.post('/create', BugsController.create);
}
