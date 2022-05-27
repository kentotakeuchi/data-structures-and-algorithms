# https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

class Solution:
    def cellsInRange(self, s: str) -> List[str]:
        c1, c2, r1, r2 = ord(s[0]), ord(s[3]), int(s[1]), int(s[4])
        return [chr(c)+str(r) for c in range(c1, c2+1) for r in range(r1, r2+1)]
