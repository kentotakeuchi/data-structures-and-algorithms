# https://leetcode.com/problems/maximum-difference-between-increasing-elements/

class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        mn, ans = nums[0], -1
        for i in range(1, len(nums)):
            ans = max(ans, nums[i]-mn)
            mn = min(mn, nums[i])
        if ans == 0:
            return -1
        else:
            return ans
