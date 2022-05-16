# https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/

class Solution:
    def countElements(self, nums: List[int]) -> int:
        ''''
        if len(nums) < 2: return 0
        mn, mx, num_min, num_max = nums[0], nums[0], 1, 1
        for i in range(1, len(nums), 1):
            if nums[i] < mn:
                mn = nums[i]
                num_min = 1
            elif nums[i] == mn: num_min += 1
            if nums[i] > mx:
                mx = nums[i]
                num_max = 1
            elif nums[i] == mx: num_max += 1
        return 0 if mn == mx else len(nums) - num_min - num_max
        '''

        mn, mx = min(nums), max(nums)
        return sum(1 for x in nums if mn < x < mx)
