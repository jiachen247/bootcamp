module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      game_state: {
        // JSON allows us to store non-relational data easily.
        // Non-relational data refers to data that we may not query across records.
        // For the purposes of this project, where the focus is AJAX, let's store
        // all game state (e.g. cardDeck, playerHand) in the gameState JSON column.
        type: Sequelize.JSON,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('games');
  },
};
