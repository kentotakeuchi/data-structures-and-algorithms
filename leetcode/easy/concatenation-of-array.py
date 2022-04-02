# https://leetcode.com/problems/concatenation-of-array/

class Solution:
    # MINE
    def getConcatenation(self, nums: List[int]) -> List[int]:
        # solution1
        # return [*nums, *nums]

        # solution2
        # ans = [None]*len(nums)*2
        # for i in range(len(nums)):
        #     ans[i] = ans[len(nums)+i] = nums[i]
        # return ans

        # solution3
        n = len(nums)
        for i in range(n):
            nums.append(nums[i])
        return nums
