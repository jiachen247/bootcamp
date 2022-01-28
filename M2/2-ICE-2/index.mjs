import { readFile } from 'fs';

function handleFileRead(error, content) {

  // Split the content of our file by lines
  const lines = content.split('\n');

  // For each line, log the line number and the content of that line
  lines
    .map(line => line.trim())
    .filter(line => line.startsWith("//"))
    .map(line => line.slice(3))
    .forEach((comment, i) => {
      console.log(`Line ${i + 1}: ${comment}`);
    });
}

readFile('mystuff.txt', 'utf8', handleFileRead);
