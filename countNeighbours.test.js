test('the countNeighbours function counts the correct amount of neighbours for the 0,0 position', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(0,0,array)
  const expected = 1
  expect(actual).toBe(expected)
})

test('the countNeighbours function counts the correct amount of neighbours for the 1,1 position', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(1,1,array)
  const expected = 3
  expect(actual).toBe(expected)
})

test('the countNeighbours function counts the correct amount of neighbours for the 2,2 position', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(2,2,array)
  const expected = 2
  expect(actual).toBe(expected)
})

test('the countNeighbours function counts the correct amount of neighbours for the 4,0 position', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(4,0,array)
  const expected = 0  
  expect(actual).toBe(expected)
})

test('the countNeighbours function counts the correct amount of neighbours for the 0,4 position', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(0,4,array)
  const expected = 0
  expect(actual).toBe(expected)
})

test('the countNeighbours function counts the correct amount of neighbours for the 4,4 position', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(4,4,array)
  const expected = 0  
  expect(actual).toBe(expected)
})

test('the countNeighbours function counts the correct amount of neighbours for the 1,2 position', () => {
  const array = functions.testArray(10)
  const actual = countNeighbourFunctions.countNeighbours(1,2,array)
  const expected = 3  
  expect(actual).toBe(expected)
})


const countNeighbourFunctions = require('./countNeighbours')
const functions = require('./functions')