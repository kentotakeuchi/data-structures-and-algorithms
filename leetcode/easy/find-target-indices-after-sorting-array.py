# https://leetcode.com/problems/find-target-indices-after-sorting-array/

class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        ''''
        count, less, ans = 0, 0, []
        for n in nums:
            if n == target:
                count += 1
            elif n < target:
                less += 1
        for i in range(count):
            ans.append(less)
            less += 1
        return ans
        '''

        # ANSWER
        lt_count, eq_count = 0, 0
        for n in nums:
            if n < target:
                lt_count += 1
            elif n == target:
                eq_count += 1

        return list(range(lt_count, lt_count+eq_count))
