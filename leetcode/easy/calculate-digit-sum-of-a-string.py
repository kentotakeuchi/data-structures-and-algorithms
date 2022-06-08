# https://leetcode.com/problems/calculate-digit-sum-of-a-string/

class Solution:
    def digitSum(self, s: str, k: int) -> str:
        while len(s) > k:
            A = [s[i:i+k] for i in range(0, len(s), k)]
            s = ''
            for ds in A:
                s += str(sum([int(d) for d in ds]))
        return s
