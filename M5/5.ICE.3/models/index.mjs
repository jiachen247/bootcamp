import pkg from 'sequelize';
const { Sequelize } = pkg;
import allConfig from '../config/config.js';

import bugModel from './bug.mjs'

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// add your model definitions to db here
db.Bug = bugModel(sequelize, Sequelize.DataTypes)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
