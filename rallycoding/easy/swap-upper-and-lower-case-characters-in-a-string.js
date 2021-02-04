// https://www.rallycoding.com/problems/260

const solve = (strArg) => {
  let result = '';
  for (let char of strArg) {
    if (65 <= char.charCodeAt() && char.charCodeAt() <= 90) {
      result += char.toLowerCase();
    } else if (97 <= char.charCodeAt() && char.charCodeAt() <= 122) {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
};

// SOMEONE
const solve = (strArg) => {
  return strArg
    .split('')
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join('');
};
