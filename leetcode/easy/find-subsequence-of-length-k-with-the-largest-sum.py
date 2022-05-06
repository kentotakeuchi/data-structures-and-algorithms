# https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/

class Solution:
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        ans, max_k = [], sorted(nums, reverse=True)[:k]
        for n in nums:
            if n in max_k:
                ans.append(n)
                max_k.remove(n)
                if len(max_k) == 0:
                    return ans
