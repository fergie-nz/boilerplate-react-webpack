test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('testing array length', () => {
  const array = state.createArray(10)
  const actual = array.length
  const expected = 10
  expect(actual).toBe(expected)
})

test('testing array depth', () => {
  const array = state.createArray(10)
  const actual = array[0].length
  const expected = 10
  expect(actual).toBe(expected)
})

test('testing array internal count', () => {
  const array = state.testArray(10)
  const actual = state.countNeighbours(2,2,array)
  const expected = 2
  expect(actual).toBe(expected)
})

test('testing array external count', () => {
  const array = state.testArray(10)
  const actual = state.countNeighbours(0,0,array)
  const expected = 1
  expect(actual).toBe(expected)
})

test('testing countNeighbours for wrong results', () => {
  const array = state.testArray(10)
  const actual = state.countNeighbours(1,1,array)
  const expected = 3
  expect(actual).toBe(expected)
})

test('test the changing of state is correct for internal cells', () => {
  const array = state.testArray(10)
  const expected = state.testNewState(10)
  const actual = state.changeState(array)
  expect(actual).toStrictEqual(expected)
})

test('deep cloning function working', () => {
  const array = state.testArray(10)
  const expected = array
  const actual = _.cloneDeep(array)
  expect(actual).toStrictEqual(expected)    
})

test('changing deep clone states results in no longer clone', () => {
  const array = state.testArray(10)
  const actual = _.cloneDeep(array)
  actual[0][0].living = false
  const expected = array
  expect(actual).not.toStrictEqual(expected)
})

const state = require('./functions')
var _ = require("lodash")

          