import React from "react"
import store from "../store"
import { stepState } from '../../actions/state'
import { clearBoard } from '../../actions/state'
import functions from '../../functions'
import { resetState } from '../../actions/state'

function Controls () {

  const submitHandler = () => {
    // console.log('clicked')
    let state = store.getState()
    let initialGrid = state.state
    // console.log('function called')

    store.dispatch(stepState())
  }

  const resetToSaved = () => {
      let state = store.getState()
      let savedGrid = state.savedState
      store.dispatch(resetState(savedGrid))
  }

  const cleanBoard = () => {
    store.dispatch(clearBoard())
  }



  return (
    <>
      <div className='controller-bar'>
        <button onClick={() => submitHandler()}>Step Change</button>
        <button onClick={() => resetToSaved()}>Reset to last edit</button>
        <button onClick={() => cleanBoard()}>Clear board</button>
      </div>
    </>
  )
}

export default Controls