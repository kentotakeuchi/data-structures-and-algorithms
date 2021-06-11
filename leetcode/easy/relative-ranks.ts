// https://leetcode.com/problems/relative-ranks/

// MINE: recursive
/*
function findRelativeRanks(score: number[]): string[] {
    const results = []
    helper(score)
    return results
    
    function helper(arr: number[], rank: number = 1, n: number = score.length): void {
        if(n < rank) return
        
        const max = Math.max(...arr)
        const i = arr.indexOf(max)
        
        if(rank === 1) results[i] = 'Gold Medal'
        else if(rank === 2) results[i] = 'Silver Medal'
        else if(rank === 3) results[i] = 'Bronze Medal'
        else results[i] = `${rank}`
        
        // to keep original index
        score.splice(i, 1, -1)
        
        helper(score, ++rank)
    }
};
*/

// ANSWER
/*
function findRelativeRanks(score: number[]): string[] {
    // create ranks array in descending order
    let ranks = score.slice(0).sort((a, b) => b - a);
    
    // map places in ranks if no medal
    return score.map((num, i) => {
       if (num === ranks[0]) return 'Gold Medal';
       else if (num === ranks[1]) return 'Silver Medal';
       else if (num === ranks[2]) return 'Bronze Medal';
       else return (ranks.indexOf(num) + 1).toString();
    });
};
*/

// ANSWER
function findRelativeRanks(score: number[]): string[] {
  let ans = new Array(score.length)
  let map = new Map()

  for (let i = 0; i < score.length; i++) {
    map.set(score[i], i)
  }

  score.sort((a, b) => b - a)

  for (let i = 0; i < score.length; i++) {
    switch (i) {
      case 0:
        ans[map.get(score[i])] = 'Gold Medal'
        break
      case 1:
        ans[map.get(score[i])] = 'Silver Medal'
        break
      case 2:
        ans[map.get(score[i])] = 'Bronze Medal'
        break
      default:
        ans[map.get(score[i])] = (i + 1).toString()
    }
  }

  return ans
}
