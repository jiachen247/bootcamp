'use strict';
module.exports = {
  up: async (queryInterface) => {
    const itemsList = [
      {
        name: 'doritos',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'mangoes',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'pork shoulder',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('items', itemsList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('items', null, {});
  },
};