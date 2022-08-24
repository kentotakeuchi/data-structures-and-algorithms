# https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/

class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        return len(set(nums) - {0})

# remove() & discard() do not return any value
