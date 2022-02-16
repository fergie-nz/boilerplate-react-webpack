const { countNeighbours } = require("./countNeighbours")
var _ = require("lodash")

module.exports = {
  createArray,
  changeState,
  testArray,
  testNewState,
  testReturn10,
  countNeighbours,
  testArray2
}

function testArray2(dimension) {
  let arr = createArray(dimension)
  arr[0][1].living = true
  arr[1][2].living = true
  arr[2][0].living = true
  arr[2][1].living = true
  arr[2][2].living = true
  return arr
}

function testArray(dimension) {
  let arr = createArray(dimension)
  arr[0][0].living = true
  arr[0][1].living = true
  arr[2][2].living = true
  arr[2][3].living = true
  arr[3][2].living = true
  return arr
}

function testNewState(dimension) {
  let arr = createArray(dimension)
  arr[1][1].living = true
  arr[1][2].living = true
  arr[2][2].living = true
  arr[2][3].living = true
  arr[3][2].living = true
  arr[3][3].living = true
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
    while(size--) {
      var obj = {}
      obj.living = false
      obj.coord = {}
      let jcoord = dimension-size-1
      obj.coord.row = i
      obj.coord.col = jcoord
      arr[i].push(obj)
    }
  }
  return arr
}

// function deepCloneArray(arr) {
//   let clone = []
//   for (var i=0;i<arr.length;i++) {
//     clone[i]=[]
//     for (var j=0;j<arr[i].length;j++) {
//       clone[i][j].living = arr[i][j].living
//       clone[i][j].coord = arr[i][j].coord
//     }
//   }
//   return clone
// }

function changeState(arr) {
  let dimensioni = arr.length
  let dimensionj = arr[0].length
  let newState = _.cloneDeep(arr)
  for (var i=0; i<dimensioni; i++) {
    for (var j=0; j<dimensionj; j++) {
      let neighbours = countNeighbours(i,j,arr)
      switch (true) {
        case (neighbours < 2):
          newState[i][j].living = false
          // console.log('case 1')
          break
        case ((neighbours == 2) && (arr[i][j].living == true)):
          newState[i][j].living = true
          // console.log('case 2')
          break
        case ((neighbours == 2) && (arr[i][j].living == false)):
          newState[i][j].living = false
          // console.log('case 3')
          break
        case (neighbours == 3):
          newState[i][j].living = true
          // console.log(`Neighbour count is 3 for cell ${i + ' ' + j}`)
          break
        case (neighbours >3):
          newState[i][j].living = false
          // console.log('case 5')
          break
      }
    }
  }
  return newState
}

// const array = testArray(10)
// const newState = changeState(array)
// console.log(array)
// console.log(newState)

// const array = testArray(5)
// console.log('neighbours of 1,1', countNeighbours(1,1,array))

