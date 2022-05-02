# https://leetcode.com/problems/time-needed-to-buy-tickets/

class Solution:
    def timeRequiredToBuy(self, t: List[int], k: int) -> int:
        ans = 0
        for i in range(len(t)):
            if i <= k:
                ans += min(t[i], t[k])
            if i > k:
                ans += min(t[k]-1, t[i])
        return ans
