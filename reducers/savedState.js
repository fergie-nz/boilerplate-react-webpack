import { INITIAL_GRID } from '../actions/state'
import functions from '../functions'
import { gridSize } from './state'


var _ = require("lodash")

const initialState = functions.testArray(gridSize)

const stateReducer = (state = initialState, action) => {
  var newState = []
  switch (action.type) {
    case INITIAL_GRID:
      newState = action.grid
      return newState
    default:
      return state
  }
}

export default stateReducer