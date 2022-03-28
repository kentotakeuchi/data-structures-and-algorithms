class Solution:
    # MINE
    def maxProductDifference(self, nums: List[int]) -> int:
        max1 = 0
        max2 = 0
        min1 = 10000
        min2 = 10000

        for i in range(len(nums)):
            if nums[i] > max1:
                max2 = max1
                max1 = nums[i]
            elif nums[i] > max2:
                max2 = nums[i]

            if nums[i] < min1:
                min2 = min1
                min1 = nums[i]
            elif nums[i] < min2:
                min2 = nums[i]

        return max1*max2 - min1*min2
