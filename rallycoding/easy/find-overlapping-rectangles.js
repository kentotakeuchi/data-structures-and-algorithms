// https://www.rallycoding.com/problems/266

const solve = (rectOne, rectTwo) => {
  const l1x = rectOne[0][0]; // left
  const l1y = rectOne[1][1]; // top
  const r1x = rectOne[1][0]; // right
  const r1y = rectOne[0][1]; // bottom
  const l2x = rectTwo[0][0];
  const l2y = rectTwo[1][1];
  const r2x = rectTwo[1][0];
  const r2y = rectTwo[0][1];

  // If one rectangle is on left side of other
  if (l1x >= r2x || l2x >= r1x) {
    return false;
  }

  // If one rectangle is above other
  if (l1y <= r2y || l2y <= r1y) {
    return false;
  }

  return true;
};
