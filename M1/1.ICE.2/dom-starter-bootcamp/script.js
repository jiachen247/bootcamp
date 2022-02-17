const wowParagraph = document.createElement('p');
document.body.appendChild(wowParagraph);
wowParagraph.innerText = "wow!";

console.log('1');

const doLater = () => {
  console.log('2');
  wowParagraph.innerText = `cool! ${Math.random()}`;
};

console.log('3');

const myNewMain = (event) => {
  console.log('4');

  setTimeout(doLater, 1000);
};
console.log('5');

wowParagraph.addEventListener('click', myNewMain);
console.log('6');