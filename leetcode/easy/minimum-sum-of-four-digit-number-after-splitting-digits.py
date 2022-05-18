# https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

class Solution:
    def minimumSum(self, num: int) -> int:
        '''
        A = [0]*4
        for i in range(len(A)):
            A[i] = num % 10
            num = math.trunc(num / 10)
        A = sorted(A)
        return (A[0]*10+A[2]) + (A[1]*10+A[3])
        '''

        num = sorted(str(num), reverse=True)
        return int(num[0]) + int(num[1]) + int(num[2])*10 + int(num[3])*10
