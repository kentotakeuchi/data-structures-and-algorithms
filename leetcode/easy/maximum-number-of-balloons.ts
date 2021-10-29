// https://leetcode.com/problems/maximum-number-of-balloons/

// MINE: map
/*
function maxNumberOfBalloons(text: string): number {
    let ans = 0
    const map = new Map()
    
    for(const char of text) map.set(char, map.get(char)+1 || 1)
    
    while(true) {
        for(const char of 'balloon') {
            if(map.get(char) > 0) {
                map.set(char, map.get(char)-1)
            } else {
                return ans
            }
        }
        ++ans
    }
        
    return ans
};
*/

// ANSWER
function maxNumberOfBalloons(text: string): number {
  const map: { [key: string]: number } = { b: 0, a: 0, l: 0, o: 0, n: 0 }

  for (const l of text) {
    map[l]++
  }

  return Math.floor(Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n))
}
