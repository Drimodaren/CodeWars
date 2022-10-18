// написать функцию dscount, которая подсчитывает количество идущих подряд символов s1 и s2 в строке,
// без учёта регистра

const dscount = (arr) => {
  let sym = arr[1] + arr[2];
  let text = arr[0].split("");
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    const element = text[i] + text[i + 1];
    if (element.toUpperCase() === sym.toUpperCase()) {
      result += 1;
    } else {
      result += 0;
    }
  }
  return result;
};

console.log(dscount(["ab___ab__", "a", "b"])); // 2);
console.log(dscount(["___cd____", "c", "d"])); //, 1);
console.log(dscount(["de_______", "d", "e"])); //, 1);
console.log(dscount(["12_12__12", "1", "2"])); //, 3);
console.log(dscount(["_ba______", "a", "b"])); //, 0);
console.log(dscount(["_a__b____", "a", "b"])); //, 0);
console.log(dscount(["-ab-аb-ab", "a", "b"])); //, 2);
console.log(dscount(["aAa", "a", "a"])); //, 2);
