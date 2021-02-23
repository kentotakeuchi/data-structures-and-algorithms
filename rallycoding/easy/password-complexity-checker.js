// https://www.rallycoding.com/problems/296

const solve = (password) => {
  const n = password.length;
  if (n < 8) return false;
  if (password.match(/[0-9]/g).length < 2) return false;
  if (!/\W/g.test(password)) return false;
  let hasUpper = false;
  let hasLower = false;
  for (let char of password) {
    if (char !== char.toUpperCase()) {
      hasLower = true;
    } else if (char !== char.toLowerCase()) {
      hasUpper = true;
    }

    if (hasUpper && hasLower) break;
  }
  if (!hasUpper || !hasLower) return false;
  return true;
};
