// Complete the solution so that it reverses the string passed into it.

const { reverse } = require('lodash');

const reverses = (str) => {
  let reversesStr = '';
  for (let i = 0; i < str.length; i++) {
    reversesStr = str[i] + reversesStr;
  }
  return reversesStr;
};

console.log(reverses('world'));

const reverses2 = (str) => {
  return str.split('').reverse().join('');
};

console.log(reverses2('world'));
