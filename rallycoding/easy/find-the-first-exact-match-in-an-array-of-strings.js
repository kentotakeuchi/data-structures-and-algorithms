// https://www.rallycoding.com/problems/275/comments

// MINE..
const solve = (charArray, strArray) => {
  for (let i = 0; i < strArray.length; i++) {
    if (charArray.length > strArray[i].length) {
      strArray.splice(i, 1);
    }
  }
  console.log({ strArray });

  const charStrSorted = charArray.sort().join('');
  console.log({ charStrSorted });

  const copy = Array.from(strArray);
  console.log({ copy });

  for (let i = 0; i < copy.length; i++) {
    copy[i] = copy[i].split('').sort().join('');
    console.log(copy[i]);
    if (copy[i].includes(charStrSorted)) {
      return strArray[i];
    }
  }
  return null;
};

// SOMEONE
const solve = (charArray, strArray) => {
  return strArray.find((word) =>
    charArray.every((char) => word.includes(char))
  );
};
