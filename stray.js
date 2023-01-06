/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3



*/

const { includes } = require('lodash');

/**
 *
 * @param {Array<number>} numbers
 * @returns {Number}
 */

function stray(numbers) {
  console.log(new Set(numbers));
  const sett = new Set(numbers);
  console.log(sett.size);
  for (const num of numbers) {
    console.log(num);
    const arr = numbers.filter((element) => element !== num);
    console.log(arr.length);
    if (arr.length === 1) {
      return arr[0];
    }
  }
}
//console.log(stray([1, 1, 2]));
// console.log(stray([17, 17, 3, 17, 17, 17]));
console.log(stray([0, 1, 1]));
// console.log(stray([17, 17, -17, 17, 17, 17]));

//решить через рекурсию, по делению массива пополам const sett =new Set(numbers)

// данный метод не работает корректно, т.к не обрабатывает исключения слева
function stray2(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }
  const lengthArr = Math.floor(numbers.length / 2);

  const arrLeft = numbers.slice(0, lengthArr);
  const arrRight = numbers.slice(lengthArr);
  console.log(arrLeft);
  console.log(arrRight);
  const arrLeftSet = new Set(arrLeft);
  const arrRightSet = new Set(arrRight);
  console.log(arrLeftSet);
  console.log(arrRightSet);
  if (arrLeftSet.size > arrRightSet.size) {
    return stray2(arrLeft);
  } else {
    return stray2(arrRight);
  }
}
console.log(stray2([1, 1, 2]));
console.log(stray2([17, 17, 3, 17, 17, 17]));
console.log(stray2([0, 1, 1]));
console.log(stray2([17, 17, -17, 17, 17, 17]));

function stray3(numbers) {
  let result = [];
  numbers.forEach((element) => {
    console.log(result);
    console.log(element);
    console.log(result.length);
    if (result.includes(element)) {
      result.unshift();
    } else {
      result.push(element);
    }
  });
  console.log(result);
  return result.at(-1);
}

console.log(stray3([1, 1, 2]));
console.log(stray3([17, 17, 3, 17, 17, 17]));
console.log(stray3([0, 1, 1]));
console.log(stray3([17, -17, 17]));

function stray4(numbers) {
  let sortNumbers = numbers.sort();
  console.log(sortNumbers);
  if (sortNumbers[0] === sortNumbers[1]) {
    return sortNumbers.at(-1);
  } else {
    return sortNumbers[0];
  }
}

console.log(stray4([1, 1, 2]));
console.log(stray4([17, 17, 3, 17, 17, 17]));
console.log(stray4([0, 1, 1]));
console.log(stray4([17, -17, 17]));
