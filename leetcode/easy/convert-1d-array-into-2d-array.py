# https://leetcode.com/problems/convert-1d-array-into-2d-array/

class Solution:
    def construct2DArray(self, ori: List[int], m: int, n: int) -> List[List[int]]:
        # MINE
        '''
        if len(ori) != m*n:
            return []

        # Python uses shallow lists
        # ans = [[0]*n]*m
        # the better way to declare a 2d array is: 
        ans = [[0 for i in range(n)] for j in range(m)]

        for i in range(len(ori)):
            ans[floor(i/n)][i%n] = ori[i]
            # print(floor(i/n), i%n, ori[i], ans)
        return ans
        '''

        # ANSWER
        ans = []
        if len(ori) == m*n:
            for i in range(0, len(ori), n):
                ans.append(ori[i:i+n])
        return ans
