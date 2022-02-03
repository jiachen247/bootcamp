import { readFile, writeFile } from 'fs';

const filename = 'input.css';

// From 2.POCE.1
function convertHexToRGB(hexValue) {
  const rValue = parseInt(hexValue.slice(1,3), 16);
  const gValue = parseInt(hexValue.slice(3,5), 16);
  const bValue = parseInt(hexValue.slice(5,7), 16);
  return `rgb(${rValue}, ${gValue}, ${bValue})`;
}

function isKeyValueLine(line) {
  return line.includes(":") && line.includes("#");
}

function transformLine(line) {
    if (isKeyValueLine(line)) {
      // key => 'background-image'
      // value => "#ffffff;"
      const [key, value] = line.split(":");
      const hexValue = value.trim();
      const rgbValue = convertHexToRGB(hexValue);
      return `    ${key}: ${rgbValue};`
    } else {
      return line;
    }
}

function handleFileRead(error, content) {
  if (error) {
    console.log(error);
    return;
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
    });
}

readFile(filename, 'utf8', handleFileRead);
