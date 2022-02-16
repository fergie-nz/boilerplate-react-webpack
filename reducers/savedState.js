import { INITIAL_GRID } from '../actions/state'
import functions from '../functions'


var _ = require("lodash")

const gridSize = 20

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