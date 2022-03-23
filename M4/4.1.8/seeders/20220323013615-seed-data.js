module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const users = [
      {
        name: 'kai',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'jimmy',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    queryInterface.bulkInsert('users', users);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null);
  },
};