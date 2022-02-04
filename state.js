module.exports = {
  createArray,
  changeState
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
      
      neighbours = neighbours - arr[i][j]

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

function countNeighbours(i, j, dimension) {
  let neighbours = 0
      for (var i = -1; i<2; i++) {
        for (var j=-1; j<2; l++) {
          neighbours += arr[i+k][j+l]
        }
      }
}