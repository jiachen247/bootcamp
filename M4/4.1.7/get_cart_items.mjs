import db from './models/index.mjs';

const getEagerLoadedModels = async () => {
  try {
    const carts = await db.Cart.findAll({
      include: {
        model: db.Item,
        include: [db.Category, db.CartItem],
      },
    });

    var jsonPretty = JSON.stringify(carts, null, 2);  
    console.log(jsonPretty);

    // get the quantity of items in the cart
    console.log(carts[0].items[0].cart_items[0].quantity);
  } catch (error) {
    console.log(error);
  }
};

getEagerLoadedModels();
