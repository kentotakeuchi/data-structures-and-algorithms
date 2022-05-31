# https://leetcode.com/problems/divide-array-into-equal-pairs/

class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        # seen = set()
        # for n in nums:
        #     if n in seen:
        #         seen.discard(n)
        #     else:
        #         seen.add(n)
        # return not seen

        return all(v % 2 == 0 for v in Counter(nums).values())
