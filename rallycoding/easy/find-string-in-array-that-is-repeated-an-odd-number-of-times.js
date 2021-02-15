// https://www.rallycoding.com/problems/280

const solve = (strArg) => {
  const map = new Map();
  for (let word of strArg) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  for (let [key, value] of map) {
    if (value % 2 === 1) {
      return key;
    }
  }

  return;
};
