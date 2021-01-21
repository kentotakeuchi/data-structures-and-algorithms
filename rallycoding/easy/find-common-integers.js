// https://www.rallycoding.com/problems/219

const solve = (arrOne, arrTwo) => {
  arrOne = [...new Set(arrOne)];
  arrTwo = [...new Set(arrTwo)];
  console.log({ arrOne, arrTwo });
  //const mergedArr = [...arrOne, ...arrTwo]
  //console.log({mergedArr})
  //const allDuplicates = mergedArr.filter((num, i) => mergedArr.indexOf(num) === i)
  const allDuplicates = arrOne.filter((num, i) => arrTwo.indexOf(num) !== -1);
  return allDuplicates;
};

// SOMEONE
const solve = (arrOne, arrTwo) => {
  let arr = arrOne.filter((n) => arrTwo.includes(n));
  return [...new Set(arr)];
};
