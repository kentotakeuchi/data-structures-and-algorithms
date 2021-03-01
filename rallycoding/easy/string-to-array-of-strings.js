// https://www.rallycoding.com/problems/310

const solve = (strArg) => {
  return strArg
    .split('.')
    .filter((x) => x)
    .map((x) => x.trim());
};
