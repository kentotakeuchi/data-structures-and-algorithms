// https://leetcode.com/problems/day-of-the-week/

/*
const dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// MINE
function dayOfTheWeek(day: number, month: number, year: number): string {
    return dates[new Date(year, month, day).getUTCDay()]
};
*/

// const LIST = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const MONTH_DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// ANSWER: built-in
// const dayOfTheWeek = (day, month, year) => LIST[new Date(`${year}-${month}-${day}`).getDay()];

// ANSWER: not work(maybe, logic of leap year is incorrect..)
/*
function dayOfTheWeek(day: number, month: number, year: number): string {
  let sum = (year - 1) * 365 + day + Math.floor((month > 2 ? year : year - 1) / 4) - Math.floor(year / 100) + Math.floor(year / 400);
  for (let i = 0; i < month; ++i) sum += MONTH_DAYS[i];
  return LIST[sum % 7];
};
*/

// ANSWER:
const i18n = new Intl.DateTimeFormat('en-US', { weekday: 'long' })
const dayOfTheWeek = (day: number, month: number, year: number): string =>
  i18n.format(new Date(year, month - 1, day))
