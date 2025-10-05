function hasExoplanet(readings) {
  const nums = readings.split("").map(ch => parseInt(ch, 36))
  const sum = nums.reduce((acc, cur) => acc + cur)
  const threshold = sum / nums.length * 0.8
  
  return nums.some(num => num <= threshold);
}
