import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

// in order for the many-to-many to work we must mention the join table here.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
