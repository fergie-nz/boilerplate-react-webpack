test('Testing countNeighbouts for 0,0 coordinate on dummy array', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(0,0,array)
  const expected = 1
  expect(actual).toBe(expected)
})

test('Testing countNeighbouts for 1,1 coordinate on dummy array', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(1,1,array)
  const expected = 3
  expect(actual).toBe(expected)
})

test('Testing 2 neighbour cell which is currently alive', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(2,2,array)
  const expected = 2
  expect(actual).toBe(expected)
})

test('Testing countNeighbouts for 4,0 coordinate on dummy array', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(4,0,array)
  const expected = 0  
  expect(actual).toBe(expected)
})

test('Testing countNeighbouts for 0,4 coordinate on dummy array', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(0,4,array)
  const expected = 0
  expect(actual).toBe(expected)
})

test('Testing countNeighbouts for 4,4 coordinate on dummy array', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(4,4,array)
  const expected = 0  
  expect(actual).toBe(expected)
})

test('Testing 3 neighbour coordinate not currently containing cell', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(1,2,array)
  const expected = 3  
  expect(actual).toBe(expected)
})


const countNeighbourFunctions = require('./countNeighbours')
const functions = require('./functions')