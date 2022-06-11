# https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/

class Solution:
    def removeDigit(self, num: str, digit: str) -> str:
        for i in range(len(num)-1):
            if num[i] == digit and num[i] < num[i+1]:
                return num[:i] + num[i+1:]
        last = num.rfind(digit)
        return num[:last] + num[last+1:]
