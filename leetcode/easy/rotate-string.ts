// https://leetcode.com/problems/rotate-string/

// MINE
function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false
  const concat = s + s
  return concat.includes(goal)
}

// ANSWER
