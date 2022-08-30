# https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/

class Solution:
    def minNumberOfHours(self, initialEnergy: int, initialExperience: int, energy: List[int], experience: List[int]) -> int:
        ans = 0
        for i in range(len(energy)):
            if energy[i] >= initialEnergy:
                ans += energy[i] - initialEnergy + 1
                initialEnergy += energy[i] - initialEnergy + 1
            if experience[i] >= initialExperience:
                ans += experience[i] - initialExperience + 1
                initialExperience += experience[i] - initialExperience + 1
            initialEnergy -= energy[i]
            initialExperience += experience[i]
        return ans
