import { STEP_STATE } from "../actions/state"
import { TOGGLE_TILE } from "../actions/state"

import functions from '../functions'

const intialState = functions.testArray(10)

const stateReducer = (state = intialState, action) => {
  var newState= []
  switch (action.type) {
    case STEP_STATE:
      newState = functions.changeState(state)
      return newState
    case TOGGLE_TILE:
      newState = functions.deepCloneArray(state)
      newState.living[action.i][action.j] = ! newState[action.i][action.j].living
      return newState
    default:
      return state
  } 
}

export default stateReducer
