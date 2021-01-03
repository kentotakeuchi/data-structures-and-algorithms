const solve = (strArray) => {
  const set = new Set();

  strArray.forEach((word) => {
    console.log({ word });
    const sortedWord = word.toLowerCase().split('').sort().join('');
    console.log({ sortedWord });
    set.add(sortedWord);
  });

  console.log({ set });
  console.log(set.size);

  return set.size === 1 ? true : false;
};
