export default function itemModel(sequelize, DataTypes) {
  return sequelize.define(
    'item',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        // The following custom validations are new.
        // validate: {
        //   // isAlpha allows only alphanumeric characters.
        //   isAlpha: true,
        //   // This only allows strings of length 3 to 23.
        //   len: [3, 23],
        // },
        allowNull: false,
        type: DataTypes.STRING,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    }
  );
}