// https://leetcode.com/problems/slowest-key/

// MINE
function slowestKey(R: number[], K: string): string {
  let maxKey = K[0],
    maxDuration = R[0]

  for (let i = 1; i < K.length; ++i) {
    const duration = R[i] - R[i - 1]

    if (duration > maxDuration) {
      maxKey = K[i]
      maxDuration = duration
    } else if (duration === maxDuration) {
      maxKey = K[i] > maxKey ? K[i] : maxKey
    }
  }

  return maxKey
}

// ANSWER
