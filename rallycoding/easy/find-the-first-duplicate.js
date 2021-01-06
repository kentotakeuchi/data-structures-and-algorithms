// MINE
const solve = (intArray) => {
  const map = new Map();
  for (let num of intArray) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
      return num;
    } else {
      map.set(num, 1);
    }
  }
  return -1;
};

// SOMEONE
const solve = (intArray) => {
  const arr = [];
  for (let int of intArray) {
    if (arr.includes(int)) {
      return int;
    }
    arr.push(int);
  }
};
