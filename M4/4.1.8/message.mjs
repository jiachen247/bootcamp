import sequelizePackage from 'sequelize';
import db from './models/index.mjs';

const { Op } = sequelizePackage;

const getModels = async () => {
  try {
    const receiverName = process.argv[3];
    const senderName = process.argv[2];

    // get all the users in a single query
    const users = await db.User.findAll({
      where: {
        [Op.or]: [{ name: receiverName }, { name: senderName }],
      },
    });

    // separate out the instances into sender and receiver
    const senderUser = users.find((user) => user.name === senderName);
    const receiverUser = users.find((user) => user.name === receiverName);

    console.log('sender');
    console.log(senderUser);
    console.log('recpient');
    console.log(receiverUser);

    const message = await db.Message.create({
      receiverId: receiverUser.id,
      senderId: senderUser.id,
      message: process.argv[4],
    });

    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

getModels();