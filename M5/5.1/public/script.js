console.log('hello world! :-)');

function turn(elem) {
  console.log('turning background grey');
  console.log(elem);

  // do the swap
  if (elem.classList.contains('grey')) {
    elem.classList.remove('grey');
    elem.classList.add('white');
  } else {
    elem.classList.remove('white');
    elem.classList.add('grey');
  }
}
