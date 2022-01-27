// $ node index.js hexrgb '#fffffe'
// $ node index.js rgbhex 'rgb(255,255,254)'
// See for conversion: https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript

const HEX2RGB = 'hexrgb';
const RGB2HEX = 'rgbhex';

const command = process.argv[2];
const input = process.argv[3];

switch(command) {
  case HEX2RGB:
    convertHexToRGB(input);
    break;
  case RGB2HEX:
    convertRGBToHex(input);
    break;
  default:
    console.log(`Unknown command: ${command}`)
}

function convertHexToRGB(hexValue) {
  // can test in the node repl with $ "#FFFFFF".slice(1,3)
  const rValue = parseInt(hexValue.slice(1,3), 16);
  const gValue = parseInt(hexValue.slice(3,5), 16);
  const bValue = parseInt(hexValue.slice(5,7), 16);
  console.log(`rgb(${rValue}, ${gValue}, ${bValue})`);
}

function convertRGBToHex(rgbValue) {
  const values = rgbValue // "rgb(255,255,255)"
    .slice(4, -1) // "255,255,255"
    .split(",") // ["255", "255", "255"]
    .map(val => parseInt(val, 10)) // [255, 255, 255]
    .map(val => val.toString(16)) // ["ff", "ff", "ff"]
    .join(""); // "ffffff"
    console.log(`#${values}`)
}
