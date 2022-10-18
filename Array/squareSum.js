// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

const squareSum = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const square = arr[i] ** 2;
    console.log(square);
    result += square;
  }
  return result;
};

console.log(squareSum([0, 3, 4, 5]));
console.log(3 ^ 2);
