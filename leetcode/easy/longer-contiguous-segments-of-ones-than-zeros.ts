// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/

// MINE
/*
function checkZeroOnes(s: string): boolean {
	let maxOfZero = 0, maxOfOne = 0
	let zeros = s.split('1'), ones = s.split('0')
	for(let z of zeros) maxOfZero = Math.max(maxOfZero, z.length)
	for(let o of ones) maxOfOne = Math.max(maxOfOne, o.length)
	return maxOfOne > maxOfZero
};
*/

// ANSWER
function checkZeroOnes(s: string): boolean {
	let longestZeros = 0, longestOnes = 0, currentZeros = 0, currentOnes = 0;
	for (let i = 0; i < s.length; i++)
		if (s[i] === '0') {
			longestZeros = Math.max(longestZeros, ++currentZeros);
			currentOnes = 0;
		} else {
			longestOnes = Math.max(longestOnes, ++currentOnes);
			currentZeros = 0;
		}
	return longestOnes > longestZeros;
}