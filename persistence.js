/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
 which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

/**
 *
 * @param {Number} num
 * @return {Number}
 */
/*function persistence(num) {
  if (num <= 9) {
    return 0;
  }
  let arrNum = String(num).split('');
  let result = 1;
  let lastResult = 0;
  for (let count = 0; arrNum.length > 1; count++) {
    result = Number(arrNum[i]) * Number(arrNum[i + 1]);
    lastResult += 1;
  }
  if (result >= 10) {
    persistence(result);
    
  }
  
  return result;
}
*/
// Необходимо использовать цикл while вместо for. т.к неопределено количество итераций из-за смены длинны массива.
function persistence(num) {
  let arrNum = String(num).split('');
  if (arrNum.length < 2) {
    return 0;
  }
  let count = 0;
  while (arrNum.length > 1) {
    count++;
    arrNum = arrNum
      .reduce((pre, caren) => +pre * +caren, 1)
      .toString()
      .split('');
    console.log(arrNum);
  }
  return count;
}
console.log(persistence(39));
console.log(persistence(25));
console.log(persistence(4));
console.log(persistence(999));

function recPersistence(num) {
  let arrNum = String(num).split('');
  if (arrNum.length < 2) {
    return 0;
  } else {
    return 1 + recPersistence(arrNum.reduce((pre, caren) => +pre * +caren, 1)); // при вызове рекурсивной функции осноновной код замирает и ждет результатов вывода рекурсивной функции. Рекурсивная функция проваливается до тех пор, пока соблюдаются условия. Затем, она собирается в обраном порядке, т.е. возвращает свои значения в функцию выша и так, пока не дойдет до основной. (как в фильме начало)
  }
}
console.log(recPersistence(39));
console.log(recPersistence(25));
console.log(recPersistence(999));


