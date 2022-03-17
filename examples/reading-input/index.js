const { text } = require('body-parser');
var readline = require('readline');


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

input = []
rl.on('line', function(line){
    input.push(line)
})