// Доминантные элементы массива.
// Доминантным является элемент массива, который больше, чем все элементы,
// следующих за ним.
// Напишите функцию, которая принимает массив чисел и возвращает массив из
// доминантных чисел.
/**
 *
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */

const solve = (arr) => {
  // let result = [];

  // for (let i = 0; i < arr.length; i++) {
  //   let newArr = arr.slice(i + 1);
  //   if (arr[i] > Math.max(...newArr)) {
  //     result.push(arr[i]);
  //   }
  // }
  // return result;
  return arr.filter((num, i) => arr.slice(i+1).every(el => el < num))
};

console.log(solve([16, 17, 14, 3, 14, 5, 2])); // [17, 14, 5, 2]
console.log(solve([92, 52, 93, 31, 89, 87, 77, 105])); // [105]
console.log(solve([75, 47, 42, 56, 13, 55])); // [75, 56, 55]
console.log(solve([67, 54, 27, 85, 66, 88, 31, 24, 49])); // [88, 49]

