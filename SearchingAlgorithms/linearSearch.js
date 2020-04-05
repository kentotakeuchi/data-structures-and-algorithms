function linearSearch(arr, value) {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

linearSearch([10, 15, 20, 25, 30], 15);
