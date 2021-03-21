// https://www.rallycoding.com/problems/232

// MINE
const solve = strArg => {
  const map = new Map()
  const split = strArg.split('')

  for (let p of split) {
    if (map.has(p)) {
      map.set(p, map.get(p) + 1)
    } else {
      map.set(p, 1)
    }
  }

  return map.get('(') === map.get(')')
}

// SOMEONE1
const solve = strArg => {
  let arr = strArg.split('()')
  return arr[0].length === arr[1].length
}

// SOMEONE2
const solve = strArg => {
  return strArg.match(/\(/g).length === strArg.match(/\)/g).length
}

// SOMEONE3
const solve = strArg => {
  return !strArg.split('').reduce((acc, item) => {
    if (item === '(') {
      return acc + 1
    } else return acc - 1
  }, 0)
}
