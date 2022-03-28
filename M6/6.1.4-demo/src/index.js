// the spread operator is a newer feature that is not compatible with older versions of certain browsers

import './main.css';

const obj = {
  a: 'apple',
  b: 'buffalo',
};

const newObj = { ...obj, c: 'cheetah' };
console.log('new obj', newObj);