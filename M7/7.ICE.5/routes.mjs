import { resolve } from 'path'
import db from './models/index.mjs'

import initItemsController from './controllers/items.mjs'

export default function routes (app) {
  const ItemsController = initItemsController(db)
  app.get('/items', ItemsController.index)
  app.post('/items', ItemsController.create)

  // special JS page. Include the webpack index.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'))
  })
}
