function isValidNumber(n, base) {
  let valid = "^[0-" + Math.min(9, base - 1)

  if (base > 10) {
    valid += "A"
    
    if (base > 11) {
      valid += "-" + String.fromCodePoint(54 + base)
    }
  }

  valid += "]+$"
  const re = new RegExp(valid, "i")

  return re.test(n);
}
