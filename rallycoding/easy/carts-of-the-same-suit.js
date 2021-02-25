// https://www.rallycoding.com/problems/299

const solve = (strArray) => {
  const set = new Set();
  for (let str of strArray) {
    set.add(str.split(' ')[str.split(' ').length - 1]);
  }
  console.log({ set });
  return set.size === 1 ? true : false;
};
