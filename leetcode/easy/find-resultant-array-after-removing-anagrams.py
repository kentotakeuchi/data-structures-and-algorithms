# https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

class Solution:
    def removeAnagrams(self, w: List[str]) -> List[str]:
        # return [w[i] for i in range(len(w)) if i == 0 or sorted(w[i-1]) != sorted(w[i])]

        return [next(g) for _, g in groupby(w, sorted)]

# The next() function returns the next item from the iterator.
#
