import { STEP_STATE } from "../actions/state"
import { TOGGLE_TILE } from "../actions/state"
import { deepCloneArray } from "../functions"

import functions from '../functions'

const intialState = functions.testArray(10)


const stateReducer = (state = intialState, action) => {
  const newState= []
  switch (action.type) {
    case STEP_STATE:
      newState = changeState(state)
      return newState
    case TOGGLE_TILE:
      newState = deepCloneArray(state)
      newState[action.i][action.j] = ! newState[action.i][action.j]
      return newState
    default:
      return state
  }
}

export default stateReducer
