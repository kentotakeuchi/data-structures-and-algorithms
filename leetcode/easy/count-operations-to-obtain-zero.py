# https://leetcode.com/problems/count-operations-to-obtain-zero/

class Solution:
    def countOperations(self, n1: int, n2: int) -> int:
        ans = 0
        while min(n1, n2) > 0:
            if n1 < n2:
                n1, n2 = n2, n1
            ops, n1 = divmod(n1, n2)
            ans += ops
        return ans
