# https://leetcode.com/problems/smallest-index-with-equal-value/

class Solution:
    def smallestEqual(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            if nums[i] >= 10:
                continue
            if nums[i] == i % 10:
                return i
        return -1
