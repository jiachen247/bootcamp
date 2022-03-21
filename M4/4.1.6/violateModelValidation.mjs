import sequelizePackage from 'sequelize';
import db from './models/index.mjs';

const { ValidationError, DatabaseError } = sequelizePackage;

db.Category.findOne({
  where: {
    name: [process.argv[2]],
  },
})
  .then((category) => {
    return db.Item.create({
      name: process.argv[3],
      categoryId: category.id,
    });
  })
  .then((item) => {
    console.log(item);
  })
  .catch((error) => {
    if (error instanceof ValidationError) {
      console.error('This is a validation error!');
      console.error(error);
      console.error('The following is the first error message:');
      console.error(error.errors[0].message);
    } else if (error instanceof DatabaseError) {
      console.error('This is a database error!');
      console.error(error);
    } else {
      console.error(error);
    }
  });