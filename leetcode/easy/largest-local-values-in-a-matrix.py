# https://leetcode.com/problems/largest-local-values-in-a-matrix/

class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        n = len(grid)
        # ans = [[0]*(n-2)]*(n-2) # shallow copy..
        # This method creates n-2 separate list objects
        ans = [[0 for i in range(n-2)] for j in range(n-2)]
        for i in range(n-2):
            for j in range(n-2):
                for ii in range(i, i+3):
                    for jj in range(j, j+3):
                        ans[i][j] = max(ans[i][j], grid[ii][jj])
        return ans
