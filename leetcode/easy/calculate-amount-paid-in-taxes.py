# https://leetcode.com/problems/calculate-amount-paid-in-taxes/

class Solution:
    def calculateTax(self, brackets: List[List[int]], income: int) -> float:
        ans = prev = 0
        for upper, percent in brackets:
            if upper <= income:
                ans += (upper - prev) * percent / 100
                prev = upper
            else:
                ans += (income - prev) * percent / 100
                return ans
        return ans
