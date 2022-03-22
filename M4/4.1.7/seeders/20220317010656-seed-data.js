module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const categoryData = [
      {
        name: 'fish',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'fruit',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'healthy',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'canned',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Bulk insert categories
    const [fishCategory, fruitCategory, healthyCategory, cannedCategory] =
      await queryInterface.bulkInsert('categories', categoryData, {
        returning: true,
      });

    // Define item data
    const itemData = [
      {
        name: 'banana',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'tuna',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'peach',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Bulk insert items
    const [banana, tuna, peach] = await queryInterface.bulkInsert(
      'items',
      itemData,
      { returning: true }
    );

    // Define category item data based on generated categories and items
    const categoryItemData = [
      // banana is a fruit
      {
        item_id: banana.id,
        category_id: fruitCategory.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // banana is healthy
      {
        item_id: banana.id,
        category_id: healthyCategory.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // tuna is fish
      {
        item_id: tuna.id,
        category_id: fishCategory.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // tuna is canned
      {
        item_id: tuna.id,
        category_id: cannedCategory.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // peach is fruit
      {
        item_id: peach.id,
        category_id: fruitCategory.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // peach is canned
      {
        item_id: peach.id,
        category_id: cannedCategory.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Bulk insert category items
    await queryInterface.bulkInsert('category_items', categoryItemData);

    // Define cart data, 2 carts
    const cartData = [
      {
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Bulk insert carts
    const [cart1, cart2] = await queryInterface.bulkInsert('carts', cartData, {
      returning: true,
    });

    // Define cart item data, i.e. put items in cart
    const cartItemData = [
      {
        quantity: 1,
        item_id: peach.id,
        cart_id: cart1.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        quantity: 2,
        item_id: banana.id,
        cart_id: cart1.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        quantity: 4,
        item_id: peach.id,
        cart_id: cart2.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Bulk insert cart items
    await queryInterface.bulkInsert('cart_items', cartItemData);
  },

  down: async (queryInterface) => {
    // Delete rows from tables with foreign key references first
    await Promise.all([
      queryInterface.bulkDelete('category_items', null, {}),
      queryInterface.bulkDelete('cart_items', null, {}),
    ]);
    await Promise.all([
      queryInterface.bulkDelete('items', null, {}),
      queryInterface.bulkDelete('categories', null, {}),
      queryInterface.bulkDelete('carts', null, {}),
    ]);
  },
};