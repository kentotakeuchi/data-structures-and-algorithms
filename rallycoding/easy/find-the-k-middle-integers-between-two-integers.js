// https://www.rallycoding.com/problems/274

// MINE
const solve = (a, b, k) => {
  const mid = (a + b) / 2;
  let start = mid - Math.floor(k / 2);
  const results = [];
  for (let i = 0; i < k; i++) {
    results.push(start);
    ++start;
  }
  return results;
};
