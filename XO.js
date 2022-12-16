// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

const { result } = require('lodash');

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
/**
 *
 * @param {String} str
 * @return {boolean}
 */
// function XO(str) {
//   let uppStr = str.toUpperCase()
//   let uppStrArr = uppStr.split('')
//   return uppStrArr.map((letter)=>{
//     let x = 0
//     let o = 0
//     if (letter.includes('X')===true)
//     {x +=1}
//     if (letter.includes('O')===true)
//     {o +=1}
//     if (x===o) {
//       return true
//     }
//     return false
//   }).join(' ')

// }

function XO(str) {
  let resultX = 0;
  let resultO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase().includes('X') === true) {
      resultX += 1;
    } else if (str[i].toUpperCase().includes('O') === true) {
      resultO += 1;
    }
  }

  return resultX === resultO ? true : false;
}

console.log(XO('ooxx'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));
console.log(XO('ooxXm'));


// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }