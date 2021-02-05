// https://www.rallycoding.com/problems/262

// MINE..
const solve = (strArg) => {
  const re = /[^a-z^\s]/gi;
  const formatStr = strArg.replace(re, '').trim();
  console.log({ formatStr });

  let result = '';
  for (let i = 0; i < formatStr.length; i++) {
    if (formatStr[i + 1] === ' ') {
      result += formatStr[i];
      ++i;
    } else if (formatStr[i] === ' ' && formatStr[i + 1] !== ' ') {
      result += formatStr[i + 1].toUpperCase();
      ++i;
    } else {
      result += formatStr[i];
    }
  }
  return result;
};

// SOMEONE
const solve = (strArg) => {
  const found = strArg.match(/[a-zA-Z]+/g);

  return found
    .map((item, index) =>
      index === 0 ? item.toLowerCase() : item[0].toUpperCase() + item.slice(1)
    )
    .join('');
};
