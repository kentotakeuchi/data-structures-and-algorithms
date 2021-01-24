const solve = (strArg) => {
  const charArr = strArg.split(/[0-9]/g).filter((char) => char !== '');
  const numArr = strArg.split(/[a-zA-Z]/g).filter((num) => num !== '');
  console.log({ charArr, numArr });

  const results = [];
  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr[i]; j++) {
      results.push(charArr[i]);
    }
  }

  return results;
};
