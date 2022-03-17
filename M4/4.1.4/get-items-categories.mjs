import db from './models/index.mjs';

const getItemsCategories = async () => {

  // Option 1: Lazy Load
  try {
    const item = await db.Item.findOne({
      where: {
        name: [process.argv[2]],
      },
    });
    const itemCategories = await item.getCategories();
    console.log(itemCategories.map((itemCategory) => itemCategory.name));
  } catch (error) {
    console.log(error);
  }

  // Option 2: Eager Load
    try {
    const item = await db.Item.findOne({
      where: {
        name: [process.argv[2]],
      },
      include: db.Category
    });
    console.log(item.categories.map(category => category.name))
  } catch (error) {
    console.log(error);
  }
};

getItemsCategories();