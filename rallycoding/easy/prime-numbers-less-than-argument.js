// https://www.rallycoding.com/problems/294

const solve = (intArg) => {
  if (intArg < 2) return [];
  const results = [2];
  for (let i = 3; i < intArg; i++) {
    if (isPrime(i)) {
      results.push(i);
    }
  }
  return results;
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};
