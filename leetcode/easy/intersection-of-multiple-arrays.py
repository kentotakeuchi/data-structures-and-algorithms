# https://leetcode.com/problems/intersection-of-multiple-arrays/

class Solution:
    def intersection(self, A: List[List[int]]) -> List[int]:
        # cnt, ans = [0]*1001, []
        # for A in nums:
        #     for n in A: cnt[n] += 1
        # for i, v in enumerate(cnt):
        #     if v == len(nums): ans.append(i)
        # return ans

        return sorted([k for k, v in Counter([x for l in A for x in l]).items() if v == len(A)])
