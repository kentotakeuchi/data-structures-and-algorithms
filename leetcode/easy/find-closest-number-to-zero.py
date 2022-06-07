# https://leetcode.com/problems/find-closest-number-to-zero/

class Solution:
    def findClosestNumber(self, nums: List[int]) -> int:
        ans = nums[0]
        for i in range(1, len(nums)):
            if abs(nums[i]-0.1) < abs(ans-0.1):
                ans = nums[i]
        return ans
