# https://leetcode.com/problems/maximum-number-of-pairs-in-array/

class Solution:
    def numberOfPairs(self, nums: List[int]) -> List[int]:
        counts, ans = Counter(nums), [0, 0]
        for c in counts.values():
            ans[0] += c // 2
            ans[1] += c % 2
        return ans
