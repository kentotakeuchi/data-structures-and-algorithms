// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/

// MINE
function numOfStrings(patterns: string[], word: string): number {
  // return patterns.filter(sub => word.includes(sub)).length

  let ans = 0
  for (const sub of patterns) {
    if (word.includes(sub)) ++ans
  }
  return ans
}

// ANSWER
