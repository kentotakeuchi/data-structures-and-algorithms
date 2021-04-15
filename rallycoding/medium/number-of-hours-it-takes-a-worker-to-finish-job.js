// https://www.rallycoding.com/problems/314

// MINE
const solve = (workers, tasks) => {
  const sum = tasks.reduce((acc, cur) => acc + cur, 0)
  const timePerWorker = Math.ceil(sum / workers)
  return timePerWorker
}
