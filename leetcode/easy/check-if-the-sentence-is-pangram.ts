// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

// MINE
/*
function checkIfPangram(sentence: string): boolean {
    return new Set(sentence.split('')).size === 26
};
*/

// ANSWER: without Set
function checkIfPangram(sentence: string): boolean {
    let seen = 0
    for(let c of sentence) {
        let ci = c.charCodeAt(0) - 'a'.charCodeAt(0)
        seen = seen | (1 << ci)
    }
    return seen === ((1 << 26) - 1)
}
 