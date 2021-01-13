// MINE..
const solve = (strOne, strTwo) => {
  const _difference = new Set(strTwo);
  for (let char of strOne) {
    _difference.delete(char);
    console.log(_difference.values().next().value);
  }
  return _difference.values().next().value;
};

// MINE
const solve = (strOne, strTwo) => {
  const map1 = new Map();
  for (let char of strOne) {
    if (map1.has(char)) {
      map1.set(char, map1.get(char) + 1);
    } else {
      map1.set(char, 1);
    }
  }
  console.log({ map1 });

  const map2 = new Map();
  for (let char of strTwo) {
    if (map2.has(char)) {
      map2.set(char, map2.get(char) + 1);
    } else {
      map2.set(char, 1);
    }
  }

  for (let [key] of map2) {
    if (!map1.has(key) || map1.get(key) !== map2.get(key)) {
      return key;
    }
  }

  return '';
};

// SOMEONE
const solve = (strOne, strTwo) => {
  return strOne.length > strTwo.length
    ? strOne.split('').find((char, index) => strTwo.split('')[index] !== char)
    : strTwo.split('').find((char, index) => strOne.split('')[index] !== char);
};
