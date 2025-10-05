function fibonacciSequence(startSequence, length) {
  if(length == 0) {
    return []
  } else if (length < 3) {
    return startSequence[length - 1]
  }
  let n = 2
  let first = startSequence[0]
  let second = startSequence[1]

  while (n < length) {
    second += first
    first = second - first
  }

  return second;
}
