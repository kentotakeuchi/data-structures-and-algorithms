// https://www.rallycoding.com/problems/277

const solve = (strOne, strTwo) => {
  return formatString(strOne) === formatString(strTwo);
};

function formatString(str) {
  return str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
}
