function getLongestWord(sentence) {
  return sentence
    .match(/\b[A-Za-z]+\b/g)
    .reduce((word1, word2) => word1.length < word2.length ? word2 : word1)
}
