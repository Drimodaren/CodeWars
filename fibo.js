const Fibo = (n) => {
  let firstNum = 1;
  let secondNum = 1;
  for (let i = 3; i <= n; i++) {
    let result = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = result;
  }

  return secondNum;
};

console.log(Fibo(3));
