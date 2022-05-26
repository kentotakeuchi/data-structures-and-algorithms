# https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/

class Solution:
    def mostFrequent(self, nums: List[int], key: int) -> int:
        # A, ans = [0]*1001, 0
        # for i in range(1, len(nums)):
        #     if nums[i-1] == key:
        #         A[nums[i]] += 1
        #         if A[nums[i]] > A[ans]:
        #             ans = nums[i]
        # return ans

        arr = [nums[i] for i in range(1, len(nums)) if nums[i-1] == key]
        c = Counter(arr)
        return max(c, key=c.get)
