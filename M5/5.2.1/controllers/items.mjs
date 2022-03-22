export default function initItemsController(db) {
  const index = async (request, response) => {
    try {
      const items = await db.Item.findAll();
      response.send({ items });
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (request, response) => {
    try {
      const item = request.body;
      console.log(`add item: ${item}`);
      const newItem = await db.Item.create(item);
      response.send(newItem);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index, create,
  };
}
