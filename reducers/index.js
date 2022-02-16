import {combineReducers} from 'redux'

import state from './state'
import savedState from './savedState'

const reducer = combineReducers({
  state,
  savedState
})

export default reducer