// $ node index.js celcius fahrenheit 1 2 3
const CELCIUS = "celcius";
const FAHRENHEIT = "fahrenheit";

const source = process.argv[2];
const dest = process.argv[3];

process.argv // ['node', 'index.js', 'celcius', 'fahrenheit', '1', '2', '3']
  .slice(4) // ['1', '2', '3']
  .map(s => parseInt(s, 10)) // [1, 2, 3]
  .map(convert) // [33.8, 35.6, 37.4]
  .forEach(x => console.log(x));

function celToFa(cel) {
  return cel * (9 / 5) + 32;
}

function faToCel(fa) {
  return ((fa - 32) * 5) / 9;
}

function convert(value) {
  if (source === CELCIUS && dest === FAHRENHEIT) {
    return celToFa(value);
  } else if (source === FAHRENHEIT && dest === CELCIUS) {
    return faToCel(value);
  } else {
    console.log("Unknown conversion")
  }
}
