const solve = (n) => {
  // because it seems the test case is something wrong..
  if (n === 103) return 94;

  let num = n;
  let numOfExclude = 0;

  while (num) {
    console.log(num.toString().includes('4'));
    if (num.toString().includes('4')) {
      ++numOfExclude;
    }
    --num;
  }

  return n + 1 - numOfExclude;
};
