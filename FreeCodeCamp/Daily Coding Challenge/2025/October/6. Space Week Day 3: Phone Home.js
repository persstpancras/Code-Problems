function sendMessage(route) {
  const speed = 300_000
  const satelliteDelay = 0.5
  let totalTime = -0.5

  for (const distance of route) {
    totalTime += ( distance / speed ) + satelliteDelay
  }

  return Number(totalTime.toFixed(4));
}
