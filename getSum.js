/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
function getSum(a, b) {
  let min = a < b ? a : b;
  let max = a > b ? a : b;
  let result = min;
  for (let i = min; i < max; i++) {
    result += i + 1;
  }
  return result;
}

console.log(getSum(0, 1));
console.log(getSum(-286, -84));
