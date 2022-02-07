import { read, edit } from './jsonFileStorage.mjs';

// Previously
// readFile('data.json');

// Now, using callbacks
const onResult = (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  result?.people.forEach(person => console.log(`Name: ${person.name}`))
};
read('data.json', onResult)

edit('data.json', (err, jsonContentObj) => {
  // If no error, edit the content
  if (!err) {
    jsonContentObj['people'][0].name = 'Terminator';
  }
}, err => console.log(err ?? "Edit success!")
);