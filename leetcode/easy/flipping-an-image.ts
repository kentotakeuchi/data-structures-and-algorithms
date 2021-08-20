// https://leetcode.com/problems/flipping-an-image/

// MINE
/*
function flipAndInvertImage(image: number[][]): number[][] {
    for(let arr of image) {
        arr.reverse()
        
        for(let i=0; i<arr.length; ++i) {
            if(arr[i] === 1) arr[i] = 0
            else arr[i] = 1
        }
    }
    
    return image
};
*/

// ANSWER
function flipAndInvertImage(image: number[][]): number[][] {
  const n = image.length
  for (let row of image)
    for (let i = 0; i * 2 < n; i++) if (row[i] == row[n - i - 1]) row[i] = row[n - i - 1] ^= 1
  return image
}
