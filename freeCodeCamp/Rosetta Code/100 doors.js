function getFinalOpenedDoors(numDoors) {
  const openedDoors = []

  for (let i = 1, j = 1; j <= numDoors; i++, j = i * i) {
    openedDoors.push(j)
  }

  return openedDoors
}
