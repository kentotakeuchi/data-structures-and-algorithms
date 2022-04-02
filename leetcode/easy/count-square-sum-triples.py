class Solution:
    # MINE
    def countTriples(self, n: int) -> int:
        ans = 0

        for i in range(n, 2, -1):
            left = 1
            right = i-1

            while(left < right):
                if left*left + right*right < i*i:
                    left += 1
                    continue
                if left*left + right*right > i*i:
                    right -= 1
                    continue
                if left*left + right*right == i*i:
                    ans += 1
                    left += 1
                    right -= 1

        return ans*2

# >>> list(range(0, -10, -1))
# [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
