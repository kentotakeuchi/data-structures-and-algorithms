# https://leetcode.com/problems/three-divisors/

class Solution:
    def isThree(self, n: int) -> bool:
        # return sum(n%i == 0 for i in range(1, n+1)) == 3

        if n == 1:
            return False  # edge case

        x = int(sqrt(n))
        if x*x != n:
            return False

        for i in range(2, int(sqrt(x))+1):
            if x % i == 0:
                return False
        return True
