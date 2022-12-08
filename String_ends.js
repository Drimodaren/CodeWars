// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

const getboolenStringsEnds = (strStart, strEnd) => {
  let str = strStart.substr(-strEnd.length, strEnd.length);

  if (str.includes(strEnd)) {
    return true;
  }
  return false;
};
console.log(getboolenStringsEnds('sumo', 'omo'));
console.log(getboolenStringsEnds('abcde', 'cde'));
console.log(getboolenStringsEnds('abcde', 'abc'));
console.log(getboolenStringsEnds('samurai', 'ra'));

function solution(str, ending) {
  return str.endsWith(ending);
}
