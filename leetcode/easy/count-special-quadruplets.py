# https://leetcode.com/problems/count-special-quadruplets/

class Solution:
    def countQuadruplets(self, nums: List[int]) -> int:
        seen = defaultdict(int)
        n = len(nums)
        count = 0
        for i in range(n-1, -1, -1):
            for j in range(i-1, -1, -1):
                for k in range(j-1, -1, -1):
                    possibleSum = nums[i] + nums[j] + nums[k]
                    if possibleSum in seen:
                        count += seen[possibleSum]
            seen[nums[i]] += 1
        return count
