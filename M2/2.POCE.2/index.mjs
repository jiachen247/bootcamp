import { readFile } from 'fs';

var hexRe = /[0-9A-Fa-f]{6}/;
const results = {};

function addToResults(hexCode) {
  results[hexCode] = (results[hexCode] ?? 0) + 1;
}

function printResults() {
  console.log(results);
}

function handleFileRead(error, content) {
  if (error) {
    console.log(error);
    return;
  }

  const lines = content.split('\n');

  for (const line of lines) {
    const hashPos = line.indexOf("#"); 
    
    // indexOf will return -1 if it cannot find a #
    if (hashPos > 0) {
      const code = line.slice(hashPos+1, hashPos+7);
      if (hexRe.test(code)) {
        addToResults(code);
      }
    }
  }

  printResults();
}

readFile('input.css', 'utf8', handleFileRead);