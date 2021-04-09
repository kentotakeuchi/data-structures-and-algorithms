// https://www.rallycoding.com/problems/292

// MINE
/*
const solve = (path, change) => {
  const up = change.match(/\.\./g).length
  const arr = path.split('/')
  const baseUrl = '/' + arr.slice(1, arr.length-up).join('/')
  
  let newDir
  if(baseUrl === '/') {
      newDir = change.replace(/\..\//g, '')
  } else {
      newDir = '/' + change.replace(/\..\//g, '')
  }
  console.log({up, arr, baseUrl})
  
  return baseUrl + newDir;
};
*/

// SOMEONE
const solve = (path, change) => {
  const result = path.split('/')
  change.split('/').forEach(e => {
    if (e === '..') {
      result.pop()
    } else {
      result.push(e)
    }
  })
  return result.join('/')
}
