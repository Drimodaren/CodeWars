const abc=(a, b, c) =>{
  return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

console.log(abc('A')('B')('C')); // 'ABC'
abc.curry('A', 'B')('C'); // 'ABC'
abc.curry('A', 'B', 'C'); // 'ABC'

abcdef.curry('A')('B')('C')('D')('E')('F'); // 'ABCDEF'
abcdef.curry('A', 'B', 'C')('D', 'E', 'F'); // 'ABCDEF'