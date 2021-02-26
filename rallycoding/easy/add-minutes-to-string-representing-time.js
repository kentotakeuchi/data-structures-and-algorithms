// https://www.rallycoding.com/problems/303

/**
 *
 * @params {string} time
 * @params {number} m
 * @return {string}
 */

// MINE..
/*
const solve = (time, m) => {
  // time -> min format
  // the min + m
  // the sum of min -> 24-clock format
  
  // time -> min -> min + m
  let [hour, minute] = time.split(':')
  console.log({hour, minute})
  const sumOfMin = parseInt(hour) * 60 + parseInt(minute) + m
  console.log({sumOfMin})
  
  // convert the sum of min into 24-clock format
  let temp = (sumOfMin / 60).toFixed(2) // ex. '27.51'
  console.log({temp})
  temp = temp >= 24 ? temp - 24 : temp // 
  
  return;
};
*/

// SOMEONE
const solve = (time, m) => {
  const arr = time.split(':');
  const currentMinutes = parseInt(arr[0]) * 60 + parseInt(arr[1]) + m;
  const newHour = Math.floor(
    currentMinutes / 60 > 24 ? currentMinutes / 60 - 24 : currentMinutes / 60
  );
  const newMins = currentMinutes % 60;
  return `${newHour.toString().padStart(2, '0')}:${newMins
    .toString()
    .padStart(2, '0')}`;
};
