// https://www.rallycoding.com/problems/191

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; ++i) {
    if (num % i === 0) return false
  }
  return 1 < num
}

const solve = intArray => {
  const arr = [...intArray]
  console.log({ arr })

  // store all sum combination into array
  for (let i = 0; i < intArray.length - 1; ++i) {
    let sum = intArray[i]
    for (let j = i + 1; j < intArray.length; ++j) {
      sum += intArray[j]
      console.log({ sum }, intArray[i], intArray[j], arr)
      arr.push(sum)
    }
  }

  // sort sum array in descending order
  arr.sort((a, z) => z - a)
  console.log({ arr })

  // check if each sum is prime number or not and find max one
  for (let sum of arr) {
    if (isPrime(sum)) return sum
  }

  // if no prime number
  return -1
}
