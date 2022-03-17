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

    // Bulk insert categories, returning=true, 
    // and destructure the returned results array, for use in categoryItemData
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

    // Bulk insert categories, returning=true, 
    // and destructure the returned results array, for use in categoryItemData
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
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('category_items', null, {});
    await queryInterface.bulkDelete('items', null, {});
    await queryInterface.bulkDelete('categories', null, {});
  },
};