// https://www.rallycoding.com/problems/255

const solve = (strOne, strTwo) => {
  const fStr1 = formatString(strOne);
  const fStr2 = formatString(strTwo);

  if (fStr1.length !== fStr2.length) return false;

  const map = new Map();
  const map2 = new Map();

  for (let char of fStr1) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let char of fStr2) {
    if (map2.has(char)) {
      map2.set(char, map2.get(char) + 1);
    } else {
      map2.set(char, 1);
    }
  }

  console.log({ map, map2 });

  for (let [key, value] of map) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
};

function formatString(str) {
  return str.replace(/\s/g, '').toLowerCase();
}
