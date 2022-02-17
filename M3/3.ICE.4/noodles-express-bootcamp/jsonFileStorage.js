// get the Node libraries
import { readFile, writeFile } from 'fs';

// add an object to an array of objects in a JSON file
// `callback` takes 2 parameters: 1) JSON content, 2) read or write error if any.
export function add(filename, key, input, callback) {
  // set the file read callback
  const whenFileIsRead = (readingError, jsonContent) => {
    // check for reading errors
    if (readingError) {
      console.log('reading error', readingError);
      callback(null, readingError);
      return;
    }

    // parse the string into a JavaScript object
    const content = JSON.parse(jsonContent);

    // check for the key, if it doesn't exist, exit out
    if (!(key in content)) {
      // create your own error message
      const errorMessage = "key doesn't exist";

      // call the callback
      callback(null, errorMessage);
      return;
    }

    content[key].push(input);

    // turn it into a string
    const outputContent = JSON.stringify(content);

    writeFile(filename, outputContent, (writingError) => {
      if (writingError) {
        console.log('error writing', outputContent, writingError);
        callback(null, writingError);
        return;
      }
      // file written successfully
      console.log('success!');
      callback(content, null);
    });
  };

  // read the file
  readFile(filename, 'utf-8', whenFileIsRead);
}

// read a file.
// `callback` takes 2 parameters: 1) JSON content, 2) read error if any.
export function read(filename, callback) {
  const whenFileIsRead = (readingError, jsonContent) => {
    // check for reading errors
    if (readingError) {
      console.log('reading error', readingError);
      callback(null, readingError);
      return;
    }

    // start dealing with the JSON

    // parse the string into a *real* JavaScript object
    const content = JSON.parse(jsonContent);

    // call the function that got passed in
    callback(content, null);
  };

  // read the file
  readFile(filename, 'utf-8', whenFileIsRead);
}

// write a file with the object passed in
// `callback` takes 2 parameters: 1) JSON content, 2) write error if any.
export function write(filename, content, callback) {
  const outputContent = JSON.stringify(content);

  writeFile(filename, outputContent, (writingError) => {
    if (writingError) {
      console.log('error writing', outputContent, writingError);
      callback(null, writingError);
      return;
    }
    // file written successfully
    console.log('success!');
    callback(outputContent, null);
  });
}