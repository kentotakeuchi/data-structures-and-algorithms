function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return null;
  if (arr.length === 1) return [arr[0].toUpperCase()];
  let res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
}
