// https://www.rallycoding.com/problems/284

const solve = (strArray) => {
  const map = new Map();

  for (let word of strArray) {
    map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
  }
  console.log({ map });

  for (let [key, value] of map) {
    if (value === 1) return key;
  }

  return 'not found';
};
