// Make a request for all the items
function getItems() {
  axios
  .get('/items')
  .then((response) => {
    // handle success
    console.log(response);
    response.data.items.forEach(
      item => {
        const title = document.createElement('p')
        const node = document.createTextNode(item.name)
        title.appendChild(node)

        const element = document.getElementById('items')
        element.appendChild(title)
      }
    )
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
}
