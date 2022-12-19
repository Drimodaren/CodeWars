/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

/**
 *
 * @param {Array} integers
 * @return {Number}
 */

function findOutlier(integers) {
  const evenNum = integers.filter(function (n) {
    const evenCount = n % 2;
    return evenCount === 0;
  });
  const oddNum = integers.filter(function (n) {
    const oddCount = n % 2;
    return oddCount != 0;
  });

  return evenNum.length > 1 ? oddNum[0] : evenNum[0];
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
