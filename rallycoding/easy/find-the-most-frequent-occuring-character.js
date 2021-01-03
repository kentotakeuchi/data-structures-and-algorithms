const solve = (strArg, k) => {
  const obj = {};
  for (let char of strArg) {
    obj[char] = obj[char] ? ++obj[char] : 1;
  }

  console.log({ obj });
  console.log(Object.entries(obj));
  console.log(Object.entries(obj).sort(([, a], [, z]) => z - a));

  const sorted = Object.entries(obj).sort(([, a], [, z]) => z - a);
  return sorted[k - 1][0];
};
