function toBinary(decimal) {
  let answer = []

  while (decimal > 0) {
    answer.push(decimal & 1)
    decimal >>= 1
  }

  return answer.reverse().join("");
}
