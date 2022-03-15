// https://leetcode.com/problems/replace-all-digits-with-characters/

// MINE
/*
function replaceDigits(s: string): string {
    let ans = ''
    for(let i=1; i<s.length; i+=2) {
        ans += s[i-1] + shift(s[i-1], parseInt(s[i]))
    }
    if(s.length%2 !== 0) ans += s[s.length-1]
    return ans
};

function shift(char: string, digit: number): string {
    return String.fromCharCode(char.charCodeAt(0) + digit)
}
*/

// ANSWER
function replaceDigits(s: string): string {
	for (let i=1; i<s.length; i+=2) {
        let str = String.fromCharCode(s[i - 1].charCodeAt(0) + Number(s[i]));
        s = s.replace(s[i], str);
	}
    return s;
};