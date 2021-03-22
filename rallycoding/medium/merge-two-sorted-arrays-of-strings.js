// https://www.rallycoding.com/problems/237

const solve = (arrOne, arrTwo) => {
  // inefficient
  return [...arrOne, ...arrTwo].sort()
}
