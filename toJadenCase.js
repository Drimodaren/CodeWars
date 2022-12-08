const toJadenCase = (str) => {
  let result = '';
  for (let i = -1; i < str.length - 1; i++) {
    if (str[i] === ' ') {
      result = `${result}${str[i + 1].toUpperCase()}`;
      i += 1;
    }
    result += str[i + 1];
  }
  if (result[0] === result[0].toLowerCase()) {
    result = result[0].toUpperCase() + result.slice(1);
  }
  return result;
};
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
console.log(toJadenCase('When I die. Then You Will Realize'));
console.log(toJadenCase('most Trees Are Blue'));
