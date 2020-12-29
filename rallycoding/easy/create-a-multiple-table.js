// MINE: O(n2)
const solve = (n) => {
  const results = [];
  let count = 1;
  for (let i = 0; i < n; i++) {
    const subArr = [count];
    let subCount = count;
    for (let j = 1; j < n; j++) {
      subCount += count;
      subArr.push(subCount);
    }
    results.push(subArr);
    count++;
  }
  return results;
};

// a bit better
const solve = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    const arr = [];

    for (let j = 1; j <= n; j++) {
      arr.push(i * j);
    }

    result.push(arr);
  }

  console.log(result);
  return result;
};
