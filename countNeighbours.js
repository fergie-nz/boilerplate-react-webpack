function countNeighbours (i, j, arr) {
  let neighbours = 0
  for (var k = -1; k < 2; k++) {
    for (var l = -1; l < 2; l++) {
      if ((i + k) > -1 && (i + k) < arr.length && (j + l) > -1 && (j + l) < arr[0].length) {
        if (arr[i + k][j + l].living == true) {
          neighbours += 1
        }
      }
    }
  }
  if (arr[i][j].living == true) {
    neighbours -= 1
  }
  // console.log(`cell ${i + ' ' + j} has ${neighbours} neighbours`)
  return neighbours
}

module.exports = {
  countNeighbours
}
