import db from './models/index.mjs';

const getModels = async () => {
  try {
    // Retrieve the 1st cart
    const carts = await db.Cart.findAll();
    console.log('1st cart');
    console.log(carts[0]);
    const cart = carts[0];
    
    // Get all items in the 1st cart
    // We don't use items below, but this is to demonstrate that accessing 
    // associated data in a m2m relationship still works.
    const items = await cart.getItems();
    console.log('items');
    console.log(items);

    // // Retrieve CartItem entries in the "through" or "join" table
    // // that are associated with the 1st cart. We need to access CartItem
    // // entries to obtain quantities for specific items in this cart.
    const cartItems = await cart.getCart_items();
    console.log('cart items');
    console.log(cartItems);

    // Retrieve the quantity of each item in the 1st cart
    for (let i = 0; i < cartItems.length; i += 1) {
      console.log('quantity: ', cartItems[i].quantity);
    }
  } catch (error) {
    console.err(error);
  }
};

getModels();