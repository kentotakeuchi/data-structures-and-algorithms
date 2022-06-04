# https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/

class Solution:
    def convertTime(self, current: str, correct: str) -> int:
        n1 = int(current[:2])*60 + int(current[-2:])
        n2 = int(correct[:2])*60 + int(correct[-2:])
        diff = n2 - n1
        res = 0
        if diff >= 60:
            res += diff//60
            diff = diff % 60
        if diff >= 15:
            res += diff//15
            diff = diff % 15
        if diff >= 5:
            res += diff//5
            diff = diff % 5
        return res + diff
