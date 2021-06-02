// https://leetcode.com/problems/hamming-distance/

// MINE..
/*
function hammingDistance(x: number, y: number): number {
    const binaryX = x.toString(2)
    const binaryY = y.toString(2)
    console.log({binaryX, binaryY})

    let count = Math.abs(binaryX.length - binaryY.length)
    console.log({count})
    
    let i = binaryX.length - 1
    let j = binaryY.length - 1
    
    while(binaryX[i] && binaryY[j]) {
        if(binaryX[i] !== binaryY[j]) {
            ++count
        }
        --i
        --j
    }

    return count
};
*/

// ANSWER: no bitwise operators
/*
function hammingDistance(x: number, y: number): number {
    let xBits = x.toString(2);
    let yBits = y.toString(2);
    let diff = 0;
    
    if(xBits.length > yBits.length) yBits = yBits.padStart(xBits.length, '0');
    else xBits = xBits.padStart(yBits.length, '0');
    
    for(let i = 0; i < xBits.length; i++) {
        if(xBits[i] !== yBits[i]) diff++;
    }
    return diff;
};
*/

// ANSWER: bitwise operators
let hammingDistance = (x: number, y: number): number => (x ^ y).toString(2).replace(/0/g, '').length
