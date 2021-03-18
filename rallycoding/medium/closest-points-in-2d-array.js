// https://www.rallycoding.com/problems/220

const solve = points => {
  let min = Infinity
  let results = []

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const x = Math.abs(points[i][0] - points[j][0])
      const y = Math.abs(points[i][1] - points[j][1])
      if (x + y < min) {
        min = x + y
        results = [points[i], points[j]]
      }
    }
  }

  return results
}
