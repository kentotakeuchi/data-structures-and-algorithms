/**
 *
 * @param  {...any} args
 * @returns {boolean}
 */

// MINE: set
/*
function areThereDuplicates(...args) {
  return args.length !== new Set(args).size
}
*/

// MINE: map
function areThereDuplicates(...args) {
  if (args.length < 2) return false

  const map = new Map()

  for (let el of args) {
    if (map.has(el)) {
      return true
    } else {
      map.set(el, true)
    }
  }

  return false
}

// ANSWER
/*
// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false
}

// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b)
  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length
}
*/
