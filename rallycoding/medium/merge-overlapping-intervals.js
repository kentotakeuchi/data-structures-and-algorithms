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

// messed up..
/*
const solve = (interval, newInterval) => {
  // base case
  if(!interval.length) return []
  
  const results = []
  let min = Infinity
  let max = -Infinity
  
  for(let i=0; i<interval.length; ++i) {
    // skip non overlap
    if(interval[i][1] < newInterval[0] || newInterval[1] < interval[i][0]) {
      results.push(interval[i])
      continue
    }
    
    // 2,4, 5,7, 8,9
    // 5, 12
    min = Math.min(newInterval[0], interval[i][0]) // 5
    max = Math.max(max, interval[i][1]) // 7
    console.log({min, max})
    
    while(i < interval.length && max < newInterval[1]) {
      ++i
      
      // skip non overlap
      if(interval[i][1] < newInterval[0] || newInterval[1] < interval[i][0]) {
        results.push(interval[i])
        break
      }
      
      max = Math.max(max, interval[i][1])
    }
    
    // skip non overlap
    if(interval[i][1] < newInterval[0] || newInterval[1] < interval[i][0]) {
      continue
    }
    
    results.push([min, max])
    console.log({results})
  }
  
  return results
};
*/

// SOMEONE: worked but not good approach..
const solve = (interval, newInterval) => {
  const overlappingArray = [newInterval]
  const result = []

  interval.forEach((arr, i) => {
    if (
      (arr[0] >= newInterval[0] && arr[0] <= newInterval[1]) ||
      (arr[1] >= newInterval[0] && arr[1] <= newInterval[1])
    ) {
      overlappingArray.push(interval[i])
    } else {
      result.push(interval[i])
    }
  })

  const combinedArray = overlappingArray.flat().sort((a, b) => a - b)
  const mergedArray = [combinedArray[0], combinedArray[combinedArray.length - 1]]

  return [...result, mergedArray].sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
}
