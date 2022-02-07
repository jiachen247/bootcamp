// Lets extract all email address in the text
const emailRegex = /[a-zA-Z0-9_.]+@[a-zA-Z0-9]+.[a-zA-Z]+/g;
const text = "Hello my name is jiachen and my email address is jiachen@gmail.com, you can also reach me at jiachen@nus.edu"

const matches = text.matchAll(emailRegex);

for (const match of matches) {
  console.log(match[0]);
}