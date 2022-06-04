// https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/

// MINE
/*
function convertTime(current: string, correct: string): number {
    let ans = 0
    let [hh1, mm1] = current.split(':').map(el => parseInt(el))
    let [hh2, mm2] = correct.split(':').map(el => parseInt(el))
    let m1 = hh1*60 + mm1, m2 = hh2*60 + mm2
    let diff = m2 - m1
    while(diff !== 0) {
        if(diff >= 60) diff -= 60
        else if(diff >= 15) diff -= 15
        else if(diff >= 5) diff -= 5
        else --diff
        ++ans
    }
    return ans
};
*/

// ANSWER
function convertTime(current: string, correct: string): number {
  let ans = 0
  let [hh1, mm1] = current.split(':').map(Number)
  let [hh2, mm2] = correct.split(':').map(Number)
  let m1 = hh1 * 60 + mm1,
    m2 = hh2 * 60 + mm2
  let diff = m2 - m1

  if (diff >= 60) {
    ans += Math.floor(diff / 60)
    diff = diff % 60
  }
  if (diff >= 15) {
    ans += Math.floor(diff / 15)
    diff = diff % 15
  }
  if (diff >= 5) {
    ans += Math.floor(diff / 5)
    diff = diff % 5
  }
  if (diff >= 1) {
    ans += Math.floor(diff / 1)
    diff = diff % 1
  }

  return ans
}
