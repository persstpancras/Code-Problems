function goldilocksZone(mass) {
  const sqrtLuminosity = Math.sqrt(Math.pow(mass, 3.5))
  const start = Math.round(95 * sqrtLuminosity) / 100
  const end = Math.round(137 * sqrtLuminosity) / 100

  return [start, end]
}
