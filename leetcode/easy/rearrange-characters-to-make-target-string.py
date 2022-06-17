# https://leetcode.com/problems/rearrange-characters-to-make-target-string/

class Solution:
    def rearrangeCharacters(self, s: str, target: str) -> int:
        cnt1, cnt2 = map(Counter, (s, target))
        return min(cnt1[c] // cnt2[c] for c in target)
