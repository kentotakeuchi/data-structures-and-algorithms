# https://leetcode.com/problems/counting-words-with-a-given-prefix/

class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        return sum(w.find(pref) == 0 for w in words)

# True is equal to 1
