const solve = (strArray) => {
  return strArray.sort((str1, str2) => {
    console.log({ str1, str2 });
    if (str1[1].toLowerCase() < str2[1].toLowerCase()) {
      return -1;
    }
    if (str1[1].toLowerCase() > str2[1].toLowerCase()) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
};

// SOMEONE
const solve = (strArray) => {
  return strArray.sort((a, b) => (a[1] > b[1] ? 1 : -1));
};
