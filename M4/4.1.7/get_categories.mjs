import db from './models/index.mjs';

const getEagerLoadedModels = async () => {
  try {
    const carts = await db.Cart.findAll({ include: db.Item });
    console.log(carts[0].items[0].name);
  } catch (error) {
    console.log(error);
  }
};

getEagerLoadedModels();