import { CLEAR_BOARD, STEP_STATE } from "../actions/state"
import { TOGGLE_TILE } from "../actions/state"
import { RESET_GRID } from "../actions/state"

import functions from '../functions'

var _ = require("lodash")

const gridSize = 20

const intialState = functions.testArray(gridSize)

const stateReducer = (state = intialState, action) => {
  var newState= []
  switch (action.type) {
    case STEP_STATE:
      newState = functions.changeState(state)
      return newState
    case TOGGLE_TILE:
      newState = _.cloneDeep(state)
      newState[action.i][action.j].living = !newState[action.i][action.j].living
      return newState
    case RESET_GRID:
      newState = action.savedState
      return newState
    case CLEAR_BOARD:
      let dimension = state.length
      let newState = functions.createArray(dimension)
      return newState
    default:
      return state
  } 
}

export default stateReducer
