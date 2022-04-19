export default function initItemsController (db) {
  const index = async (request, response) => {
    try {
      const items = await db.Item.findAll()
      response.send({ items })
    } catch (error) {
      console.log(error)
    }
  }

  const create = async (request, response) => {
    try {
      const item = await db.Item.create({
        name: request.body.name,
        description: request.body.description,
        price: request.body.price
      })
      response.send({ item })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    index,
    create
  }
}
