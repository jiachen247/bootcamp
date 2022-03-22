console.log('add item!');

function addItem() {
  // Retrieve values from fields
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;

  const data = {
    name,
    description,
  };

  // Make a request to create an item
  axios
    .post('/items', data)
    .then((response) => {
    // handle success
      const newItem = response.data;
      console.log(newItem);

      const newItemContainer = document.getElementById('newItem');
      newItemContainer.innerText = `Created item: (#${newItem.id}) ${newItem.name} - ${newItem.description}`;
    })
    .catch((error) => {
    // handle error
      console.log(error);
    });
}
