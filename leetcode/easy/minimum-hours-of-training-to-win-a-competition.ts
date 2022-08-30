// https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/

// MINE..
/*
function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
    const EN = energy.reduce((acc, cur) => acc + cur, 0)
    const EX = experience.reduce((acc, cur) => acc + cur, 0)
    if(EN < initialEnergy && EX < initialExperience) return 0
    let training = EN+1-initialEnergy
    for(let i=0; i<energy.length; ++i) {
        if(initialExperience <= experience[i]) training += experience[i]-initialExperience
        initialExperience += experience[i]
        console.log({training, initialExperience})
    }
    return training
};
*/

// ANSWER
function minNumberOfHours(ie: number, ig: number, energy: number[], experience: number[]): number {
  let hours = 0
  for (let i = 0; i < energy.length; i++) {
    if (energy[i] >= ie) {
      hours += energy[i] - ie + 1
      ie += energy[i] - ie + 1
    }
    if (experience[i] >= ig) {
      hours += experience[i] - ig + 1
      ig += experience[i] - ig + 1
    }
    ie -= energy[i]
    ig += experience[i]
  }
  return hours
}
