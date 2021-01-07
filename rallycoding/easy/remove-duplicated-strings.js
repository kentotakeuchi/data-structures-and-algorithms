// how to covert set into array
// 1)
// let array = Array.from(mySet);
// 2)
// Simply spreading the Set out in an array
// let array = [...mySet];
// 3)
// The old fashion way, iterating and pushing to a new array (Sets do have forEach)
// let array = [];
// mySet.forEach(v => array.push(v));
// $4)
// Previously, using the non-standard, and now deprecated array comprehension syntax:
// let array = [v for (v of mySet)];

// MINE
const solve = (strArray) => {
  const set = new Set(strArray);
  return [...set];
};

// SOMEONE
const solve = (strArray) => {
  return [...new Set(strArray)];
};
