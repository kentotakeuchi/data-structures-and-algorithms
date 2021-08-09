// https://leetcode.com/problems/jewels-and-stones/

// MINE
function numJewelsInStones(jewels: string, stones: string): number {
  let count = 0
  const set = new Set(jewels)

  for (let i = 0; i < stones.length; ++i) {
    if (set.has(stones[i])) ++count
  }

  return count
}

// ANSWER
/*
const numJewelsInStones = (J, S) => {
  const jewels = new Set(J)
  return S.split('').reduce((res, s) => res + jewels.has(s), 0)
};
*/
