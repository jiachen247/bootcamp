import { cat } from './cat.js';
import { mouse } from './mouse.js';
import catNames from 'cat-names';
import './main.scss';

const obj = {
  a: 'apple',
  b: 'buffalo',
};

const newObj = { ...obj, c: 'cheetah' };
console.log('new obj', newObj);

console.log(catNames.random());
console.log('cat', cat);
console.log('mouse', mouse);