// https://www.rallycoding.com/problems/267

// cheat solution: inefficient --> still incorrect..
/*
const solve = (interval, newInterval) => {
  const results = []
  
  for(let arr of interval) {
    results.push(...arr)
  }
  results.push(...newInterval)
  results.sort((a, z) => a - z)
  
  for(let i=0; i<results.length-1; ++i) {
    results[i] = [results[i], results[i+1]]
    results.splice(i+1, 1)
  }
  
  console.log({results})
  
  return results
}
*/

/*
const solve = (interval, newInterval) => {
  for(let arr of interval) {
    if(arr[1] < newInterval[0]) continue
    if(newInterval[1] < arr[0]) continue
    
    arr[0] = Math.min(arr[0], newInterval[0])
    arr[1] = Math.max(arr[1], newInterval[1])
  }
  
  return interval;
};
*/
