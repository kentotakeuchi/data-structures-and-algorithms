// MINE..
const solve = (time) => {
  let arr = time.replace(':', '').split('');
  console.log({ arr });

  let def = parseInt(time.replace(':', ''));
  let min = def;
  console.log({ def, min });
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      console.log({ min })[(arr[j], arr[i])] = [arr[i], arr[j]];
      if (validate(arr)) {
        let num = parseInt(arr.join(''));
        console.log({ num });
        if (def < num && num < min) {
          min = num;
        }
      }
    }
  }

  return min;
};

function validate(arr) {
  if (
    0 <= parseInt(arr[0] + arr[1]) &&
    parseInt(arr[0] + arr[1]) < 24 &&
    0 <= parseInt(arr[2] + arr[3]) &&
    parseInt(arr[2] + arr[3]) < 60
  ) {
    return true;
  }
  return false;
}

// SOMEONE
