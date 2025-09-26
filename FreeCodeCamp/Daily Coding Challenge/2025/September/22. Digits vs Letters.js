function digitsOrLetters(str) {
  let digits = 0
  let letters = 0

  for (const ch of str) {
    if (ch >= "0" && ch <= "9") {
      digits++
    } else if (ch >= "A" && ch <= "Z" || ch >= "a" && ch <= "z") {
      letters++
    }
  }

  return digits == letters ? "tie" : digits > letters ? "digits" : "letters"
}
