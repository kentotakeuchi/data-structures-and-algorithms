// https://leetcode.com/problems/reformat-date/

// MINE
/*
function reformatDate(date: string): string {
  const map = new Map()
  map.set('Jan', '01')
  map.set('Feb', '02')
  map.set('Mar', '03')
  map.set('Apr', '04')
  map.set('May', '05')
  map.set('Jun', '06')
  map.set('Jul', '07')
  map.set('Aug', '08')
  map.set('Sep', '09')
  map.set('Oct', '10')
  map.set('Nov', '11')
  map.set('Dec', '12')

  let [day, month, year] = date.split(' ')
  day = day.replace(/\D/g, '')
  if(day.length === 1) day = `0${day}`

  return `${year}-${map.get(month)}-${day}`
}
*/

// ANSWER
function reformatDate(date: string): string {
  const dateArray = date.split(' ')
  const [day, month, year] = dateArray

  return `${year}-${formatMonth(month)}-${formatDay(day)}`
}

function formatDay(day: string): string {
  const isOneDigit = day.length === 3

  if (isOneDigit) {
    return '0' + day[0]
  }

  return day[0] + day[1]
}

function formatMonth(month: string): string {
  const months: { [key: string]: string } = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  }

  return months[month]
}
