//  a model represents a table in sequelize, The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).
// To define mappings between a model and a table, use the define method
//  After being defined, we can access our model with sequelize.models.Item, i.e,
//  Item === sequelize.models.Item
// this function is exported and used in line 37 of index.mjs, 
// db.Item = initItemModel(sequelize, Sequelize.DataTypes);
// it takes 2 parameters, the instance of Sequelize (sequelize) that we created in index.mjs and Sequelize.Datatypes(https://sequelize.org/v5/manual/data-types.html), which allow us to specify what type of data we want 
export default function initItemModel(sequelize, DataTypes) {
  return sequelize.define(
    // Take this plus 's' to get the table name
    'item',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
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