// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

// MINE
/*
function countGoodSubstrings(s: string): number {
    let ans = 0
    for(let i=0, j=i+3; j<=s.length; ++i, ++j) {
        if(new Set(s.substring(i, j).split('')).size === 3) ++ans
    }
    return ans
};
*/

// ANSWER: without set
function countGoodSubstrings(s: string): number {
    if (s.length < 3) return 0
    let a = s[0], b = s[1], c = s[2]
    let ans = 0
    for (let i = 3; i < s.length; ++i) {
        if (a !== b && b !== c && c !== a) ++ans
        a = b
        b = c
        c = s[i]
    }
    if (a !== b && b !== c && c !== a) ++ans
    return ans
}
