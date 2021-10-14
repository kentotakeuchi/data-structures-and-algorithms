// https://leetcode.com/problems/greatest-common-divisor-of-strings/

// MINE..
/*
function gcdOfStrings(str1: string, str2: string): string {

};
*/

// ANSWER
/*
function gcdOfStrings(str1: string, str2: string): string {
    if (str1.length < str2.length) { // make sure str1 is not shorter than str2.
        return gcdOfStrings(str2, str1); 
    }else if (!str1.startsWith(str2)) { // shorter string is not common prefix.
        return ""; 
    }else if (str2.length === 0) { // gcd string found.
        return str1;
    }else { // cut off the common prefix part of str1.
        return gcdOfStrings(str1.substring(str2.length), str2); 
    }
}
*/

// ANSWER
function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return ''

  const gcdVal = gcd(str1.length, str2.length)
  return str2.substring(0, gcdVal)
}

function gcd(p: number, q: number): number {
  if (q === 0) return p
  else return gcd(q, p % q)
}
