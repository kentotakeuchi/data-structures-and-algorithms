// https://leetcode.com/problems/day-of-the-year/

// MINE..
/*
function dayOfYear(date: string): number {
    const ymd = data.split('-')
    let days = 0
    
    if(isLeapYear(parseInt(ymd[0]))) ++days
    
    
    
    return days
};

function isLeapYear(year: number): boolean {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
*/

// MINE: built-in
/*
function dayOfYear(date: string): number {
    const [year, month, day] = date.split('-')
    const y = parseInt(year), m = parseInt(month), d = parseInt(day)
    let days = 0
    
    for(let mth = 1; mth <= m; ++mth) {
        if(mth == m) {
            days += d
        } else {
            days += new Date(y, mth, 0).getDate()
        }
    }
    
    return days
}
*/

// ANSWER
function dayOfYear(date: string): number {
  const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const [year, month, day] = date.split('-').map(Number)

  if (isLeapYear(year)) DAYS_IN_MONTH[2] = 29

  let daysBeforeMonth = 0

  for (let m = 1; m < month; m++) daysBeforeMonth += DAYS_IN_MONTH[m]

  return daysBeforeMonth + day
}

const isLeapYear = (y: number): boolean => y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)
