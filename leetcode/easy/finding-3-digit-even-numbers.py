# https://leetcode.com/problems/finding-3-digit-even-numbers/

class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        ans = []
        freq = Counter(digits)
        for num in range(100, 1000, 2):
            if not Counter(int(s) for s in str(num)) - freq:
                ans.append(num)
        return ans
