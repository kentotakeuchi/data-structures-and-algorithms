# https://leetcode.com/problems/keep-multiplying-found-values-by-two/

class Solution:
    def findFinalValue(self, nums: List[int], o: int) -> int:
        A = [0]*1001
        for x in nums:
            A[x] += 1
        while o <= 1000 and A[o]:
            o *= 2
        return o
