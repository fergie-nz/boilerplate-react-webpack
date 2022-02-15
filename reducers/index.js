import {combineReducers} from 'redux'

import state from './state'

const reducer = combineReducers({
  state,
  // savedState
})

export default reducer