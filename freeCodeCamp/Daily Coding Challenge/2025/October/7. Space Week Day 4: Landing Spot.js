function findLandingSpot(matrix) {
  let minDanger = Number.MAX_VALUE;
  const safestSpot = [0, 0]
  
  matrix.forEach((arr, i) => {
    arr.forEach((spot, j) => {
      if (spot === 0) {
        let danger = 0;

        if (i > 0) {
          danger += matrix[i - 1][j]
        }

        if (i + 1 < matrix.length) {
          danger += matrix[i + 1][j]
        }

        if (j > 0) {
          danger += arr[j - 1]
        }

        if (j + 1 < arr.length) {
          danger += arr[j + 1]
        }
        
        if (danger < minDanger) {
          minDanger = danger
          safestSpot[0] = i
          safestSpot[1] = j
        }
      }
    })
  })

  return safestSpot;
}
