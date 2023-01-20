class Solution:
    def mySqrt(self, x: int) -> int:
        start, end, ans = 0, x, 0
        while start < end:
            ans = ceil((start+end)/2)
            if ans*ans <= x and (ans+1)*(ans+1) > x:
                return ans
            elif ans*ans < x:
                start = ans
            else:
                end = ans
        return ans
