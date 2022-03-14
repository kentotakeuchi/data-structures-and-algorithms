// https://leetcode.com/problems/sum-of-digits-in-base-k/

// MINE
/*
function sumBase(n: number, k: number): number {
    let ans = 0
    for(let strDigit of n.toString(k)) {
        ans += parseInt(strDigit)
    }
    return ans
};*/

// ANSWER: Repeated Mod and Division of number
function sumBase(n: number, k: number): number {
    let ans = 0
    while(n > 0) {
        ans += n % k
        n = Math.floor(n / k)
    }
    return ans
}
