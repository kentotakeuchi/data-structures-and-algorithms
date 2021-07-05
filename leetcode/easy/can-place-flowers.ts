// https://leetcode.com/problems/can-place-flowers/

// MINE..
/*
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let newFlowers = 0;
    const empties = flowerbed.join('').split('1'); // ['', '000', '']
    console.log({empties})
    
    for(let i=0; i<empties.length; ++i) {
        // edge
        if((i === 0 || i === empties.length-1) && empties[i].length%2 === 0) {
            newFlowers += empties[i].length/2
        }
        // odd
        else if(empties[i].length && empties[i].length%2 === 1) {
            newFlowers += Math.floor(empties[i].length/2)
        }
        // even
        else if(empties[i].length && empties[i].length%2 === 0) {
            newFlowers += empties[i].length/2-1
        }
    }
    console.log({newFlowers})
    
    return newFlowers >= n
};
*/

// ANSWER
/*
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let i = 0
    let count = 0
    
    while(i < flowerbed.length) {
        if(flowerbed[i] === 0 && (i === 0 || flowerbed[i-1] === 0) && (i === flowerbed.length-1 || flowerbed[i+1] === 0)) {
            flowerbed[i] = 1
            ++count
        }
        ++i
    }
    
    return count >= n
}
*/

// ANSWER: optimize the above
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let i = 0
  let count = 0

  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1
      ++count
    }
    if (count >= n) return true
    ++i
  }

  return count >= n
}
