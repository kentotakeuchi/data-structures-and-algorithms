// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

// MINE..
/*
function countStudents(st: number[], sa: number[]): number {
    let ans = 0
    
    while(true) {
        if(st[0] === sa[0]) {
            st.shift()
            sa.shift()
        } else {
            st.push(st.shift())
        }
    }
};
*/

// ANSWER
function countStudents(students: number[], sandwiches: number[]): number {
  let ones = 0,
    zeros = 0

  for (let s of students) s === 0 ? ++zeros : ++ones

  for (let s of sandwiches) {
    if (s === 0) {
      if (zeros === 0) return ones
      --zeros
    } else {
      if (ones === 0) return zeros
      --ones
    }
  }

  return 0
}
