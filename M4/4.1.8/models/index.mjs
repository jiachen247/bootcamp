import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

import initUserModel from './user.mjs';
import initMessageModel from './message.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Message = initMessageModel(sequelize, Sequelize.DataTypes);

// creates a method in the
// user object with getSentMessages, etc.
// allows the use of include with sentMessages
db.User.hasMany(db.Message, {
  as: 'sentMessages',
  foreignKey: 'sender_id',
});

db.User.hasMany(db.Message, {
  as: 'receivedMessages',
  foreignKey: 'receiver_id',
});

// creates a method in the
// message object that has a user - the sender of the message
db.Message.belongsTo(db.User, {
  as: 'sender',
  foreignKey: 'sender_id',
});

db.Message.belongsTo(db.User, {
  as: 'receiver',
  foreignKey: 'receiver_id',
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;