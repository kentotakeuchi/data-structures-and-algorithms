# https://leetcode.com/problems/largest-odd-number-in-string/

class Solution:
    # MINE..
    '''
    def largestOddNumber(self, num: str) -> str:
        for idx, char in enumarete(num):
            print(idx, char)
            if num[idx]%2 === 1:
                return num.substring(0)
    '''

    # ANSWER
    def largestOddNumber(self, num: str) -> str:
        for i in range(len(num) - 1, -1, -1):
            if int(num[i]) % 2 == 1:
                return num[:i+1]
        return ''

# range(start, stop, step)
