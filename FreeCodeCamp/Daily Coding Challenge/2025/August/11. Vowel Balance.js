function isBalanced(s) {
  const re = new RegExp("[AEIOUaeiou]", "g")
  const first = (s.substring(0, s.length / 2).match(re) || []).length
  let second = (s.substring((s.length + 1) / 2).match(re) || []).length

  return first === second
}
