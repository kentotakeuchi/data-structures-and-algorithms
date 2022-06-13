# https://leetcode.com/problems/largest-3-same-digit-number-in-string/

class Solution:
    def largestGoodInteger(self, n: str) -> str:
        # ans = ''
        # for i in range(0, len(num)-2):
        #     if num[i] == num[i+1] and num[i+1] == num[i+2]:
        #         if num[i] > ans:
        #             ans = num[i]
        # return ans*3

        return max(n[i-2:i+1] if n[i] == n[i - 1] == n[i - 2] else "" for i in range(2, len(n)))
