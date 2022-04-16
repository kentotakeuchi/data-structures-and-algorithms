# https://leetcode.com/problems/reverse-prefix-of-word/

class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        # MINE
        '''
        output = ''

        if not ch in word:
            return word

        idx = word.index(ch)

        for i in range(idx, -1, -1):
            output += word[i]

        output += word[idx+1:]

        return output
        '''

        # ANSWER
        idx = word.find(ch)
        if idx:
            return word[:idx+1][::-1] + word[idx+1:]
        return word
