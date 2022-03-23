import db from './models/index.mjs';

const getModels = async () => {
  try {
    const user = await db.User.findOne({
      where: {
        name: process.argv[2],
      },
      include: {
        as: 'sentMessages', // say which group of messages we are getting
        model: db.Message,
        include: {
          as: 'receiver', // get the receiver of the message
          model: db.User,
        },
      },
    });

    console.log(`${user.name}'s outbox`);
    // print out each message
    user.sentMessages.forEach(async (msg) => {
      // without the nested include above, we can
      // get the recipient (name) like this:
      // const sender = await msg.getSender();
      // console.log(JSON.stringify(msg));
      console.log(`to: ${msg.receiver.name}`);
      console.log(msg.message);
      console.log('-----');
    });
  } catch (error) {
    console.log(error);
  }
};

getModels();