// The caret (^) character is the negation of the set [...], gi say global and case-insensitive (the latter is a bit redundant but I wanted to mention it) and the safelist in this example is digits, word characters, underscores (\w) and whitespace (\s).

const solve = (strArg) => {
  const re = /[^a-zA-Z\s]/g;
  const results = strArg
    .replace(re, '')
    .split(' ')
    .filter((word) => word !== '');
  return results;
};
