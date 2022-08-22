// https://leetcode.com/problems/best-poker-hand/

// MINE
/**
 * Flush: same suit
 * Three: 3 same rank
 * Pair: 2 same rank
 * High: anything else
 */
function bestHand(ranks: number[], suits: string[]): string {
  if (new Set(suits).size === 1) return 'Flush'
  const map = new Map()
  for (let r of ranks) map.set(r, map.get(r) + 1 || 1)
  // console.log(map, Array.from(map, ([k, v]) => v))
  const max = Math.max(...Array.from(map, ([k, v]) => v))
  if (max >= 3) return 'Three of a Kind'
  if (max === 2) return 'Pair'
  return 'High Card'
}

// ANSWER
