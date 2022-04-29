// https://leetcode.com/problems/count-vowel-substrings-of-a-string/

// MINE..
/*
function countVowelSubstrings(word: string): number {
    const vowels = 'aeiou'
    let ans = 0
    for(let i=0; i<=word.length-5; ++i) {
        if(vowels.includes(word[i])) {
            let j = i+1
            let count = 1
            while(vowels.includes(word[j])) {
                ++count
                ++j
            }
            if(count >= 5) {
                ans += count - 4
            }
            i = j
        }
    }
    return ans
};
*/

// ANSWER: brute force
function countVowelSubstrings(word: string): number {
  let ans = 0
  const N = word.length,
    map = new Map()
  for (let i = 0; i < N; ++i) {
    map.clear()
    for (let j = i; j < N && isVowel(word[j]); ++j) {
      map.set(word[j], map.get(word[j]) + 1 || 1)
      if (map.size === 5) ++ans
    }
  }
  return ans
}

const isVowel = (c: string): boolean =>
  c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'

// ANSWER: sliding window(C++) try in the future..
// int countVowelSubstrings(string w) {
//     int j = 0, k = 0, vow = 0, cnt = 0;
//     unordered_map<char, int> m {{'a', 0}, {'e', 0}, {'i', 0}, {'o', 0}, {'u', 0}};
//     for (int i = 0; i < w.size(); ++i) {
//         if (m.count(w[i])) {
//             vow += ++m[w[i]] == 1;
//             for (; vow == 5; ++k)
//                 vow -= --m[w[k]] == 0;
//             cnt += k - j;
//         }
//         else {
//             m['a'] = m['e'] = m['i'] = m['o'] = m['u'] = vow = 0;
//             j = k = i + 1;
//         }
//     }
//     return cnt;
// }}
