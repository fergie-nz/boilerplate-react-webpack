module.exports = {
  createArray,
  changeState,
  countNeighbours,
  testArray,
  testNewState,
  deepCloneArray,
  testReturn10
}

function testArray(dimension) {
  let arr = createArray(dimension)
  arr[0][0] = true
  arr[0][1] = true
  arr[2][2] = true
  arr[2][3] = true
  arr[3][2] = true
  return arr
}

function testNewState(dimension) {
  let arr = createArray(dimension)
  arr[1][1] = true
  arr[1][2] = true
  arr[2][2] = true
  arr[2][3] = true
  arr[3][2] = true
  arr[3][3] = true
  return arr
}

function testReturn10() {
  return 10
}

function createArray(dimension) {
  let arr = new Array(dimension)
  for (var i=0; i<dimension; i++ ) {
    arr[i] = []
    let size = dimension
    while(size--) {arr[i].push(false)}
  }
  return arr
}

function deepCloneArray(arr) {
  let clone = []
  for (var i=0;i<arr.length;i++) {
    clone[i]=[]
    for (var j=0;j<arr[i].length;j++) {
      clone[i][j] = arr[i][j]
    }
  }
  return clone
}

function changeState(arr) {
  let dimensioni = arr.length
  let dimensionj = arr[0].length
  let newState = deepCloneArray(arr)
  for (var i=0; i<dimensioni; i++) {
    for (var j=0; j<dimensionj; j++) {
      let neighbours = countNeighbours(i,j,arr)
      switch (true) {
        case (neighbours < 2):
          newState[i][j] = false
          // console.log('case 1')
          break
        case ((neighbours == 2) && (arr[i][j] == true)):
          newState[i][j] = true
          // console.log('case 2')
          break
        case ((neighbours == 2) && (arr[i][j] == false)):
          newState[i][j] = false
          // console.log('case 3')
          break
        case (neighbours == 3):
          newState[i][j] = true
          // console.log('case 4')
          break
        case (neighbours >3):
          newState[i][j] = false
          // console.log('case 5')
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
          if((i+k) > -1 && (i+k) < arr.length && (j+l) > -1 && (j+l) < arr[0].length) {
            if (arr[i+k][j+l] == true) {
              neighbours+=1
            }
          }
        }
      }
      if (arr[i][j]==true){
        neighbours-=1
      }
  return neighbours
}

// const array = testArray(10)
// const newState = changeState(array)
// console.log(array)
// console.log(newState)

// const array = testArray(5)
// console.log('neighbours of 1,1', countNeighbours(1,1,array))

