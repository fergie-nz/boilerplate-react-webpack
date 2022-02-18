test('the testing suite is working', () => {
  expect(true).toBeTruthy()
})

test('createArray function renders the right length', () => {
  const array = state.createArray(10)
  const actual = array.length
  const expected = 10
  expect(actual).toBe(expected)
})

test('createArray function renders the right depth', () => {
  const array = state.createArray(10)
  const actual = array[0].length
  const expected = 10
  expect(actual).toBe(expected)
})

test('the countNeighbours function counts the right amount of neighbours in an internal cell', () => {
  const array = state.testArray(10)
  const actual = state.countNeighbours(2,2,array)
  const expected = 2
  expect(actual).toBe(expected)
})

test('the countNeighbours function counts the right amount of neighbours in an external cell', () => {
  const array = state.testArray(10)
  const actual = state.countNeighbours(0,0,array)
  const expected = 1
  expect(actual).toBe(expected)
})

test('the countNeighbours function counts the right amount of neighbours for a near edge cell', () => {
  const array = state.testArray(10)
  const actual = state.countNeighbours(1,1,array)
  const expected = 3
  expect(actual).toBe(expected)
})

test('the changeState function works correctly for the standard test array', () => {
  const array = state.testArray(10)
  const expected = state.testNewState(10)
  const actual = state.changeState(array)
  expect(actual).toStrictEqual(expected)
})

test('the deepClone function is working as expected for cloning nested arrays', () => {
  const array = state.testArray(10)
  const expected = array
  const actual = _.cloneDeep(array)
  expect(actual).toStrictEqual(expected)    
})

test('the validity of the above function by proving a false case', () => {
  const array = state.testArray(10)
  const actual = _.cloneDeep(array)
  actual[0][0].living = false
  const expected = array
  expect(actual).not.toStrictEqual(expected)
})

const state = require('./functions')
var _ = require("lodash")

          