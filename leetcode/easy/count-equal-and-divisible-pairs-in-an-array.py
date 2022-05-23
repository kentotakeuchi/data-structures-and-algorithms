# https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        freq = {}
        co = 0
        for i in range(len(nums)):
            if nums[i] not in freq:
                freq[nums[i]] = []
            freq[nums[i]].append(i)
        for vals in freq.values():
            get_gcds = {}
            for i in vals:
                gcd_i = gcd(i, k)
                for gcd_j, cnt in get_gcds.items():
                    if gcd_i * gcd_j % k == 0:
                        co += cnt
                if gcd_i in get_gcds:
                    get_gcds[gcd_i] += 1
                else:
                    get_gcds[gcd_i] = 1
        return co
