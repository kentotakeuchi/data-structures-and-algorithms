# https://leetcode.com/problems/min-max-game/

class Solution:
    def minMaxGame(self, a: List[int]) -> int:
        # n = len(nums)
        # for i in range(n, 1, -(n-n//2)):
        #     for j in range(n//2):
        #         if j%2 == 1:
        #             nums[j] = max(nums[2*j], nums[2*j+1])
        #         else:
        #             nums[j] = min(nums[2*j], nums[2*j+1])
        # return nums[0]

        def solve(n):
            if n == 1:
                return
            for i in range(n//2):
                if i % 2:
                    a[i] = max(a[2*i], a[2*i+1])
                else:
                    a[i] = min(a[2*i], a[2*i+1])
            solve(n//2)
            return
        solve(len(a))
        return a[0]
