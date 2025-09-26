function speeding(speeds, limit) {
  const answer = [0, 0]

  for (const speed of speeds) {
    if (speed > limit) {
      answer[0]++
      answer[1] += speed - limit
    }
  }

  answer[1] /= Math.max(1, answer[0])

  return answer;
}
