// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
// Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
//  For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. 
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

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
