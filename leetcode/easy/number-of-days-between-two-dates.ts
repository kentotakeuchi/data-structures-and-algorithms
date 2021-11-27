// https://leetcode.com/problems/number-of-days-between-two-dates/

// MINE: with api
/*
function daysBetweenDates(date1: string, date2: string): number {
    return Math.abs(new Date(date1).getTime() - new Date(date2).getTime()) /1000/60/60/24
};
*/

// ANSWER: without api
function daysBetweenDates(date1: string, date2: string): number {
  const days1 = calculateDays(date1)
  const days2 = calculateDays(date2)

  return Math.abs(days1 - days2)
}

function calculateDays(date: string): number {
  const [y, m, d] = date.split('-')

  const yearDays = calculateDaysUpToYears(parseInt(y))
  const monthDays = calculateDaysUpToMonths(parseInt(m), parseInt(y))
  const dayDays = parseInt(d)

  const days = yearDays + monthDays + dayDays

  return days
}

function calculateDaysUpToYears(year: number): number {
  let days = 0

  for (let i = 1971; i < year; i++) {
    days += isLeapYear2(i) ? 366 : 365
  }

  return days
}

function isLeapYear2(year: number): boolean {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}

function calculateDaysUpToMonths(month: number, year: number): number {
  const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 0 is to take care of the month offset
  let days = 0

  for (let i = 1; i < month; i++) {
    days += months[i]
  }

  if (month > 2 && isLeapYear(year)) {
    days += 1
  }

  return days
}
