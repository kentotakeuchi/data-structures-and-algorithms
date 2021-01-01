const solve = (strArg) => {
  const obj = {};
  for (let char of strArg) {
    obj[char] = obj[char] ? ++obj[char] : 1;
  }
  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      return false;
    }
  }
  return true;
};

// ANOTHER ANSWER
const solve = (strArg) => {
  const charMap = strArg.split('').reduce((map, char) => {
    map[char] ? map[char]++ : (map[char] = 1);
    return map;
  }, {});

  return Object.keys(charMap).every((char) => {
    return charMap[char] % 2 === 0;
  });
};
