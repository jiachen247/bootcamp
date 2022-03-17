import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

import initItemModel from './item.mjs';
import initCategoryModel from './category.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Item = initItemModel(sequelize, Sequelize.DataTypes);
db.Category = initCategoryModel(sequelize, Sequelize.DataTypes);

// in order for the many-to-many to work we must mention the join table here.
db.Item.belongsToMany(db.Category, { through: 'category_items' });
db.Category.belongsToMany(db.Item, { through: 'category_items' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;