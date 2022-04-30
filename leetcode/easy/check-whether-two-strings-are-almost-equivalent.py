# https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/

class Solution:
    def checkAlmostEquivalent(self, w1: str, w2: str) -> bool:
        c1, c2 = Counter(w1), Counter(w2)
        c1.subtract(c2)
        print(c1)
        return all([abs(int(x)) <= 3 for x in c1.values()])
