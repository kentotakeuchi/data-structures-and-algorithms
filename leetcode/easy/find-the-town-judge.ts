// https://leetcode.com/problems/find-the-town-judge/

/**
judge = bi && != ai
if multipe the above candidates --> -1
*/

// MINE..
/*
function findJudge(n: number, trust: number[][]): number {
    const map = new Map()
    const candidates = []
    
    for(let i=1; i<=n; ++i) {
        map.set(i, true) // {1 => true}
    }
    
    for(let arr of trust) {
        map.set(arr[0], false)
    }
    
    for(let [key, val] of map) {
        if(val === true) candidates.push(key)
    }
    console.log({map, candidates})
    
    return candidates.length === 1 ? candidates[0] : -1 
};
*/

// ANSWER: graph
/*
function findJudge(n: number, trust: number[][]): number {
    const count = new Array(n+1).fill(0)
    
    for(let t of trust) {
        count[t[0]]--
        count[t[1]]++
    }
    
    for(let i=1; i<=n; ++i) {
        if(count[i] === n-1) return i
    }
    console.log({count})
    
    return -1
}
*/

// ANSWER: graph + explanation
function findJudge(N: number, trust: number[][]): number {
  // Initialize array with 1..N
  // N + 1, so count is easier
  const counts = new Array(N + 1).fill(0)

  // Iterate through N people
  for (let [i, j] of trust) {
    // If the person trusts somebody, then it does not meet requirement 1
    counts[i] -= 1

    // Count the people they trust
    counts[j] += 1
  }

  // If N-1 exists, then its the judge since the judge trusts no one except themselves
  // and everyone else trusts the judge, then its N-1
  for (let i = 1; i < counts.length; i++) {
    if (N - 1 === counts[i]) {
      return i
    }
  }

  return -1
}
