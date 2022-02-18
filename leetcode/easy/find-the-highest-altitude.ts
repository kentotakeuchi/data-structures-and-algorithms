// https://leetcode.com/problems/find-the-highest-altitude/

// MINE
/*
function largestAltitude(gain: number[]): number {
    let max = 0, cur = 0
    
    for(let i of gain) {
        cur += i
        max = Math.max(max, cur)
    }
    
    return max
};
*/

// ANSWER
function largestAltitude(gain: number[]): number {
  let [max, currentAltitude] = [0, 0]

  for (let i = 0; i < gain.length; i++) {
    currentAltitude = gain[i] + currentAltitude
    if (currentAltitude > max) max = currentAltitude
  }

  return max
}
