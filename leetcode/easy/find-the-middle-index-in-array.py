# https://leetcode.com/problems/find-the-middle-index-in-array/

class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        total_sum, left_sum = 0, 0
        for n in nums:
            total_sum += n
        for i in range(len(nums)):
            if left_sum*2 == total_sum - nums[i]:
                return i
            left_sum += nums[i]
        return -1
