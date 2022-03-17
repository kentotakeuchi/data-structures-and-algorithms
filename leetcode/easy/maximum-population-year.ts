// https://leetcode.com/problems/maximum-population-year/

// MINE
/*
function maximumPopulation(logs: number[][]): number {
    let max = 0, ans = 2050
    for(let i=0; i<logs.length; ++i) {
        let count = 0
        for(let j=i+1; j<logs.length; ++j) {
            if(logs[i][0] >= logs[j][0] && logs[i][0] < logs[j][1]) ++count
        }
        if(count > max) {
            max = count
            ans = logs[i][0]
        } else if(count === max) {
            ans = Math.min(ans, logs[i][0])
        }
        
        count = 0
        for(let j=i+1; j<logs.length; ++j) {
            if(logs[i][1] >= logs[j][0] && logs[i][1] < logs[j][1]) ++count
        }
        if(count > max) {
            max = count
            ans = logs[i][1]
        } else if(count === max) {
            ans = Math.min(ans, logs[i][1])
        }
    }
    return ans
};
*/

// ANSWER
function maximumPopulation(logs: number[][]): number {
    const years = new Array(2051).fill(0)
    
    for(let [birth, death] of logs) {
        years[birth]++
        years[death]--
    }
    
    let maxNum = years[1950], maxYear = 1950
    
    for(let i=1951; i<years.length; ++i) {
        years[i] += years[i-1]
        
        if(years[i] > maxNum) {
            maxNum = years[i]
            maxYear = i
        }
    }
    
    return maxYear
}


















