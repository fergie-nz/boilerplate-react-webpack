module.exports = {
  createArray,
  changeState,
  countNeighbours,
  testArray
}

function testArray(dimension) {
  let arr = new Array(dimension)
  for (var i=0; i<dimension; i++ ) {
    arr[i] = new Array(dimension)
  }
  arr[0][0] = 1
  arr[0][1] = 1
  arr[2][2] = 1
  arr[2][3] = 1
  arr[3][2] = 1
  return arr
}

function createArray(dimension) {
  let arr = new Array(dimension)
  for (var i=0; i<dimension; i++ ) {
    arr[i] = new Array(dimension)
  }
  return arr
}

function changeState(arr) {
  let dimensioni = arr.length
  let dimensionj = arr[0].length
  let newState = [...arr]
  for (var i=0; i<dimensioni; i++) {
    for (var j=0; j<dimensionj; j++) {
      switch (true) {
        case (neighbours < 2):
          newState[i][j] = 0
          break
        case (neighbours == 2 && arr[i][j] == 1):
          newState[i][j] = 1
          break
        case (neighbours == 2 && arr[i][j] == 0):
          newState[i][j] = 0
          break
        case (neighbours == 3):
          newState[i][j] = 1
          break
        case (neighbours >3):
          newState[i][j] = 0
          break
      }
    }
  }
  return newState
}

function countNeighbours(i, j, arr) {
  let neighbours = 0
      for (var k = -1; k<2; k++) {
        for (var l=-1; l<2; l++) {
          neighbours += arr[i+k][j+l]
        }
      }
      neighbours = neighbours - arr[i][j]
  return neighbours
}