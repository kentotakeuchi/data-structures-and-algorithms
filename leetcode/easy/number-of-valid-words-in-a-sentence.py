# https://leetcode.com/problems/number-of-valid-words-in-a-sentence/

class Solution:
    def countValidWords(self, sentence: str) -> int:
        count = 0
        for word in sentence.split():
            isValid, numHyphen = True, 0
            for i, c in enumerate(word):
                if c.isdigit() or (c in '!.,' and i != len(word)-1) or (c == '-' and (i == 0 or i == len(word)-1 or not word[i+1].isalpha())):
                    isValid = False
                    break
                elif c == '-' and word[i+1].isalpha():
                    numHyphen += 1
            if isValid and numHyphen <= 1:
                count += 1
        return count
