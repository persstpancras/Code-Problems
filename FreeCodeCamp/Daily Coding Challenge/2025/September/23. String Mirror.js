function isMirror(str1, str2) {
  const re = new RegExp("[A-Za-z]", "g")
  const s1 = str1.match(re).join("")
  const s2 = str2.match(re).reverse().join("")

  return s1 === s2
}
