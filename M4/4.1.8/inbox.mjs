import db from './models/index.mjs';

const getModels = async () => {
  try {
    const user = await db.User.findOne({
      where: {
        name: process.argv[2],
      },
      include: {
        as: 'receivedMessages', // say which group of messages we are getting
        model: db.Message,
        include: {
          as: 'sender', // get the sender of the message
          model: db.User,
        },
      },
    });

    console.log(`${user.name}'s inbox`);
    // print out each message
    user.receivedMessages.forEach(async (msg) => {
      // without the nested include above we can get the
      // sender (name) like this:
      // const sender = await msg.getSender();
      // console.log(JSON.stringify(msg));
      console.log(`from: ${msg.sender.name}`);
      console.log(msg.message);
      console.log('-----');
    });
  } catch (error) {
    console.log(error);
  }
};

getModels();