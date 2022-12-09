// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (str) => {
  let strArr = str.toLowerCase().split('');
  let result = [];
  for (let i = 0; i <= strArr.length - 1; i++) {
    result.push(strArr[i].toUpperCase() + strArr[i].repeat(i));
  }

  return result.join('-');
};
console.log(accum('aBcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));

const accumMap = (str) => {
  return str
    .toLowerCase()
    .split('')
    .map((value, index) => value.toUpperCase() + value.repeat(index))
    .join('-');
};

console.log(accumMap('aBcd'));
console.log(accumMap('RqaEzty'));
console.log(accumMap('cwAt'));
