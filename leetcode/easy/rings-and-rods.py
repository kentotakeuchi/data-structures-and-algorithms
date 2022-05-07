# https://leetcode.com/problems/rings-and-rods/

class Solution:
    def countPoints(self, rings: str) -> int:
        ans, r, g, b = 0, [False]*10, [False]*10, [False]*10
        for i in range(0, len(rings), 2):
            color, num = rings[i], int(rings[i+1])
            if color == 'R':
                r[num] = True
            elif color == 'G':
                g[num] = True
            else:
                b[num] = True
        for i in range(10):
            if r[i] and g[i] and b[i]:
                ans += 1
        return ans
