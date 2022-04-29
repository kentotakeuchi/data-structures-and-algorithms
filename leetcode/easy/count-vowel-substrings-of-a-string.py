# https://leetcode.com/problems/count-vowel-substrings-of-a-string/

class Solution:
    def isVowel(self, c: str) -> bool:
        return c == 'a' or c == 'e' or c == 'i' or c == 'o' or c == 'u'

    def countVowelSubstrings(self, word: str) -> int:
        ans, N, count = 0, len(word), {}
        for i in range(N):
            count = {}
            for j in range(i, N):
                if not self.isVowel(word[j]):
                    break
                if self.isVowel(word[j]):
                    count[word[j]] = count.get(word[j], 0) + 1
                    if len(count) == 5:
                        ans += 1
        return ans
