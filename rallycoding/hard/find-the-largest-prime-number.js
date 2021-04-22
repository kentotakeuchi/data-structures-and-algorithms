// https://www.rallycoding.com/problems/191

// MINE
/*
 const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; ++i) {
    if (num % i === 0) return false
  }
  return 1 < num
}

const solve = intArray => {
  const arr = [...intArray]
  console.log({arr})
  
  // store all sum combination into array
  for (let i = 0; i < intArray.length - 1; ++i) {
    let sum = intArray[i]
    for (let j = i + 1; j < intArray.length; ++j) {
      sum += intArray[j]
      console.log({sum}, intArray[i], intArray[j], arr)
      arr.push(sum)
    }
  }

  // sort sum array in descending order
  arr.sort((a, z) => z - a)
  console.log({arr})

  // check if each sum is prime number or not and find max one
  for (let sum of arr) {
    if (isPrime(sum)) return sum
  }

  // if no prime number
  return -1
}
*/

// SOMEONE
const sums = xs => {
  const found = []
  function loop(acc, i) {
    if (i >= xs.length) {
      found.push(acc)
    } else {
      loop(acc, i + 1)
      loop(acc + xs[i], i + 1)
    }
  }
  loop(0, 0)
  return found.filter(x => x > 1).sort((a, b) => b - a)
}

const solve = xs => {
  const found = sums(xs)
  const sieve = new Array(found[0] + 1).fill(0)
  const markOff = v => {
    if (sieve[v] === 0) {
      for (let i = v + v; i < sieve.length; i += v) {
        sieve[i] = 1
      }
    }
  }
  for (let i = 2; i < sieve.length; i++) {
    markOff(i)
  }
  return found.find(x => sieve[x] === 0)
}
