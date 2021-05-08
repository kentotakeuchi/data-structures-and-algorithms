// https://leetcode.com/problems/reverse-vowels-of-a-string/

// MINE
/*
function reverseVowels(s: string): string {
    const ss = s.split('')
    const vowels = 'aeiouAEIOU'
    let start = 0
    let end = s.length-1
    
    while(start < end) {
        if(vowels.includes(ss[start]) && vowels.includes(ss[end])) {
            [ss[start], ss[end]] = [ss[end], ss[start]]
            ++start
            --end
        } else if(vowels.includes(ss[start])) {
            --end
        } else if(vowels.includes(ss[end])) {
            ++start
        } else {
            ++start
            --end
        }
    }
    
    return ss.join('')
};
*/

// ANSWER: regex
/*
var reverseVowels = function(s: string): string {
    const vowels = s.split('').filter(a => /[aeiou]/i.test(a));
    return s.split(/[aeiou]/i).reduce((res, a) => res + a + (vowels.pop() || ''), '');
};
*/

// ANSWER: stack
var reverseVowels = function (s: string): string {
  let b = [],
    v = ['a', 'e', 'i', 'o', 'u'],
    arr: any = s.split('')

  for (let i = 0; i < s.length; i++) {
    if (v.includes(s[i].toLowerCase())) {
      // pushing all the vowels
      b.push(s[i])
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (v.includes(s[i].toLowerCase())) {
      // by pop() we are placing the last vowel of the array at the place of first vowel of given string(which means we are reversing the position)
      arr[i] = b.pop()
    }
  }

  return arr.join('')
}
