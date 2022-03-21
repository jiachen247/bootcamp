// Make a request for all the items
function createItemElement(item) {
  const e = document.createElement('li');
  e.innerText = `${item.id}: ${item.name} (${item.description})`;
  return e;
}

axios
  .get('/items')
  .then((response) => {
    // handle success
    console.log(response);

    const itemsContainer = document.getElementById('items');
    response.data.items.forEach((item) => itemsContainer.appendChild(createItemElement(item)));
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
