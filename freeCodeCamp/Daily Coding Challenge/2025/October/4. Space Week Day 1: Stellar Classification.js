function classification(temp) {
  if(temp < 3700) {
    return "M"
  } else if(temp < 5200) {
    return "K"
  } else if(temp < 6000) {
    return "G"
  } else if(temp < 7500) {
  return "F"
  } else if(temp < 10000) {
    return "A"
  } else if (temp < 30000) {
    return "B"
  } else {
    return "O"
  }
}
