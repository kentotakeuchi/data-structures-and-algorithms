// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

// MINE
function minMovesToSeat(seats: number[], students: number[]): number {
  let ans = 0
  seats.sort((a, z) => a - z)
  students.sort((a, z) => a - z)
  for (let i = 0; i < students.length; ++i) ans += Math.abs(students[i] - seats[i])
  return ans
}

// ANSWER
