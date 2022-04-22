# https://leetcode.com/problems/two-out-of-three/

class Solution:
    def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
        ''''
        arr, ans = [[0 for i in range(101)] for j in range(3)], []
        for n in nums1:
            arr[0][n] = True
        for n in nums2:
            arr[1][n] = True
        for n in nums3:
            arr[2][n] = True
        for i in range(101):
            if arr[0][i]+ arr[1][i]+arr[2][i] > 1:
                ans.append(i)
        return ans
        '''

        # ANSWER: set
        ret = set()

        ret.update(set(nums1).intersection(set(nums2)))
        ret.update(set(nums1).intersection(set(nums3)))
        ret.update(set(nums2).intersection(set(nums3)))

        return ret
