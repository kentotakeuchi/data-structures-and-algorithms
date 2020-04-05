// Helper function
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

console.log(getDigit(7323, 2));

// Helper function
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(21183));

// Helper function
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(mostDigits([23, 567, 89, 122343243, 90]));

/**
 * Radix Sort Pseudocode
 *
 * Define a function that accepts list of numbers
 * Figure out how many digits the largest number has
 * Loop from k=0 up to this largest number of digits
 * For each iteration of the loop:
 *  Create buckets for each digit (0 to 9)
 *  Place each number in the corresponding bucket based on its kth digit
 * Replace our existing array with values in our buckets, starting with 0 and going up to 9
 * Return list at the end
 */
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(radixSort([23, 345, 5433, 45, 3534, 9767]));
