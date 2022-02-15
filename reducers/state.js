import { STEP_STATE } from "../actions/state"
import { TOGGLE_TILE } from "../actions/state"

import functions from '../functions'

var _ = require("lodash")

const gridSize = 5

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
    default:
      return state
  } 
}

export default stateReducer
