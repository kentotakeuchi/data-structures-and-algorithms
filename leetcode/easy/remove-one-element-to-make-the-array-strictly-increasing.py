# https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/

class Solution:
    # MINE
    def canBeIncreasing(self, nums: List[int]) -> bool:
        count = 0
        for i in range(1, len(nums)):
            if nums[i-1] >= nums[i]:
                count += 1
                if i > 1 and nums[i-2] >= nums[i]:
                    nums[i] = nums[i-1]
        return count <= 1

# range(stop) -> stop-1
# NO ++ operator in python
