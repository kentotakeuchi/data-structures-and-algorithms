// https://www.rallycoding.com/problems/218

const solve = (strArray) => {
  const allDuplicates = strArray.filter(
    (str, i) => strArray.indexOf(str) !== i
  );
  return allDuplicates.slice(0, 2);
};
