import { readFile, writeFile } from 'fs';

const filename = 'input.js';

function transformLine(line) {
  if (line.startsWith("// ")) {
    const commentContent = line.slice(3);
    return `/* ${commentContent} */`;
  } 
  else {
    return line;
  }
}

function handleFileRead(readErr, content) {
  if (readErr) {
    console.log('reading error', readErr);
  }

  const newContent = content
    .split('\n')
    .map(transformLine)
    .join("\n");

  writeFile(filename, newContent, (writeErr) => {
    if (writeErr) {
      console.log('error writing', newContent, writeErr);
      return;
    }
    console.log('success!');
  })
}

readFile(filename, 'utf8', handleFileRead);
