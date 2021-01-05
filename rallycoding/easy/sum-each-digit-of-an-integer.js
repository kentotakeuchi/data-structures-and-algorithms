const solve = (intArg) => {
  return intArg
    .toString()
    .split('')
    .reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
};
