import { STEP_STATE } from "../actions/state"
import { TOGGLE_TILE } from "../actions/state"

import functions from './functions'

const intialState = functions.createArray[10]

const stateReducer = (state = intialState, action) => {
  switch (action.type) {
    case STEP_STATE:
      return state
    case TOGGLE_TILE:
      newState = 
  }
}
