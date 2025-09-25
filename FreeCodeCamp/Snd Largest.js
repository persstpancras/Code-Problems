function secondLargest(arr) {
  let max = Number.NEGATIVE_INFINITY;
  let max2 = Number.NEGATIVE_INFINITY;

  for (const num of arr) {
    if (num > max) {
      max2 = max;
      max = num;
    } else if (num < max && num > max2) {
      max2 = num;
    }
  }

  return max2;
}
