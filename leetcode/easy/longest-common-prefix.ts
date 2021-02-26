// https://leetcode.com/problems/longest-common-prefix/

// MINE
/*
function longestCommonPrefix(strs: string[]): string {
    // brute force
    if(!strs.length) return ''
    
    let result = ''
    
    let minWordLength = Infinity
    for(let word of strs) {
        minWordLength = Math.min(minWordLength, word.length)
    }
    
    let start = 0
    while(start < minWordLength) {
        for(let i=1; i<strs.length; i++) {
            if(strs[i][start] !== strs[i-1][start]) {
                return result
            }
        }
        result += strs[0][start]
        ++start
    }
    
    console.log({minWordLength, result})
    
    return result
};
*/

// ANSWER: from discuss
/*
var longestCommonPrefix = function(strs: string[]): string {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};
*/

// ANSWER: Horizontal scanning
/*
 const longestCommonPrefix = (strs: string[]): string => {
    if (strs.length == 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (!prefix.length) return "";
        }        
    return prefix;
}
*/

// ANSWER: Vertical scanning
/*
 const longestCommonPrefix = (strs: string[]): string => {
    if (strs == null || strs.length == 0) return "";
    for (let i = 0; i < strs[0].length ; i++){
        let c = strs[0].charAt(i);
        for (let j = 1; j < strs.length; j ++) {
            if (i == strs[j].length || strs[j].charAt(i) != c)
                return strs[0].substring(0, i);             
        }
    }
    return strs[0];
}
*/

// ANSWER: Divide and conquer
/*
function longestCommonPrefix(strs: string[]): string {
    if (strs == null || strs.length == 0) return "";    
    return _longestCommonPrefix(strs, 0 , strs.length - 1);
}

function _longestCommonPrefix(strs: string[], l: number, r: number) {
    if (l == r) {
        return strs[l];
    }
    else {
        let mid = Math.floor((l + r)/2);
        const lcpLeft =   _longestCommonPrefix(strs, l , mid);
        const lcpRight =  _longestCommonPrefix(strs, mid + 1,r);
        return commonPrefix(lcpLeft, lcpRight);
   }
}

function commonPrefix(left: string, right: string) {
    let min = Math.min(left.length, right.length);       
    for (let i = 0; i < min; i++) {
        if ( left.charAt(i) != right.charAt(i) )
            return left.substring(0, i);
    }
    return left.substring(0, min);
}
*/

// ANSWER: Binary search
function longestCommonPrefix(strs: string[]): string {
  if (strs == null || strs.length == 0) return '';
  let minLen = Infinity;
  for (let str of strs) minLen = Math.min(minLen, str.length);
  let low = 1;
  let high = minLen;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (isCommonPrefix(strs, middle)) low = middle + 1;
    else high = middle - 1;
  }
  return strs[0].substring(0, Math.floor((low + high) / 2));
}

function isCommonPrefix(strs: string[], len: number) {
  let str1 = strs[0].substring(0, len);
  for (let i = 1; i < strs.length; i++)
    if (!strs[i].startsWith(str1)) return false;
  return true;
}
