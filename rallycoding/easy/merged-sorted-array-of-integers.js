const solve = (arrOne, arrTwo) => {
  const mergedSortedArr = [...arrOne, ...arrTwo].sort((a, z) => a - z);
  return mergedSortedArr;
};
