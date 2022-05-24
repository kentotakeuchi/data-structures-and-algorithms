class Solution:
    def countEven(self, n: int) -> int:
        '''
        N, sum = n, 0
        while n > 0:
            sum += n % 10
            n = trunc(n / 10)
        if sum % 2 == 0: return trunc(N / 2)
        else: return trunc((N - 1) / 2)
        '''

        return n // 2 if sum([int(d) for d in str(n)]) % 2 == 0 else (n - 1) // 2
