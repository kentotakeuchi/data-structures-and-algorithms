// MINE O(n^2)..
const solve = (k) => {
  let count = 0;
  const length = Math.sqrt(k);
  console.log({ length });

  const results = Array(length)
    .fill()
    .map(() => new Array(length));
  console.log({ results });

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      results[i][j] = ++count;
    }
  }

  return results;
};

// SOMEONE
const solve = (k) => {
  let a = [];
  let b = [];
  let c = Math.sqrt(k);
  for (let i = 1; i <= k; i++) {
    a.push(i);
  }

  for (var j = 0; j < k; j += c) {
    b.push(a.slice(j, j + c));
  }
  return b;
};
