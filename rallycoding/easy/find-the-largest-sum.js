// MINE..
// I missread the question..
/*const solve = (intArray, number) => {
  console.log({intArray, number})
  const results = []
  for(let i=0; i<number; i++) {
    //console.log(Math.max(...intArray)))
    //results.push(Math.max(...intArray))
    const max = intArray.reduce((a, b) => Math.max(a, b))
    console.log({max})
    
    const maxIdx = intArray.findIndex(num => num === max)
    console.log({maxIdx})
    
    results.push(max)
    
    intArray.splice(maxIdx, 1)
    console.log({intArray})
  }
  return results;
};*/

// SOMEONE
const solve = (intArray, number) => {
  const sortedArray = intArray
    .slice()
    .sort((a, b) => b - a)
    .slice(0, number);
  return intArray.filter((int) => {
    return sortedArray.includes(int);
  });
};
